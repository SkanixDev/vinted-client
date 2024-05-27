import {
  BalanceInterface,
  NotificationsInterface,
  OrdersInterface,
  UserInformationsInterface,
} from "vinted-client";
import { fetchCookie, newToken } from "./auth.js";

const default_headers = (access_token, xcsrf_token) => {
  return {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
    "x-csrf-token": xcsrf_token,
  };
};

// Get the user id
async function getIdUser(
  cookiesHeader: string,
  access_token: string,
  xcsrf_token: string
) {
  try {
    const user = await fetch(
      "https://www.vinted.fr/api/v2/user_addresses/default_shipping_address",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
          "Content-Type": "application/json",
          Cookie: cookiesHeader,
          Authorization: `Bearer ${access_token}`,
          "x-csrf-token": xcsrf_token,
        },
      }
    );
    const userJson = await user.json();
    return userJson.user_address.user_id;
  } catch (error) {
    return "error getting user id";
  }
}

export class User {
  user: undefined | UserInformationsInterface;
  balance: undefined | BalanceInterface;
  initialized: boolean;
  created_at: number;
  expires_in: number;

  constructor(
    public access_token: string,
    public refresh_token: string,
    public xcsrf_token: string
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.xcsrf_token = xcsrf_token;
    this.created_at;
    this.expires_in;

    this.initialized = false;
    this.user = undefined;
  }

  async init() {
    const cookie = await fetchCookie();
    const userid = await getIdUser(cookie, this.access_token, this.xcsrf_token);

    this.user = await this.#fetchUserInformations(userid);
    this.balance = await this.#fetchUserBalance(userid);
    this.initialized = true;
    return "User initialized";
  }

  async #fetchUserInformations(userid: number) {
    try {
      const user = await fetch(`https://www.vinted.fr/api/v2/users/${userid}`, {
        headers: default_headers(this.access_token, this.xcsrf_token),
      });
      const userJson: UserInformationsInterface = await user.json();
      return userJson;
    } catch (error) {
      console.error("Error fetching user");
      return;
    }
  }

  async #fetchUserBalance(userid: string) {
    try {
      const balance = await fetch(
        `https://www.vinted.fr/api/v2/users/${userid}/balance`,
        {
          headers: default_headers(this.access_token, this.xcsrf_token),
        }
      );
      const balanceJson: BalanceInterface = await balance.json();
      return balanceJson;
    } catch (error) {
      console.error("Error fetching user balance");
      return;
    }
  }

  async #refreshToken() {
    if (
      !this.initialized &&
      (this.expires_in + this.created_at) * 1000 > Date.now()
    )
      return;
    const [newAccess, newRefresh, newExpires_in, newCreated_at] =
      await newToken(this.refresh_token, this.access_token, this.xcsrf_token);
    this.access_token = newAccess;
    this.refresh_token = newRefresh;
    this.expires_in = newExpires_in;
    this.created_at = newCreated_at;
    console.log("------- Tokens refreshed -------");
    console.info(
      this.access_token,
      this.refresh_token,
      this.expires_in,
      this.created_at
    );
  }

  async getNotifications(page?: number, per_page?: number) {
    if (!this.initialized) return "User is not initialized";
    try {
      this.#refreshToken();
      const notifications = await fetch(
        `https://www.vinted.fr/api/v2/notifications?page=${
          page ? page : 1
        }&per_page=${per_page ? per_page : 5}`,
        {
          headers: default_headers(this.access_token, this.xcsrf_token),
        }
      );
      const notificationsJson: NotificationsInterface =
        await notifications.json();
      return notificationsJson;
    } catch (error) {
      console.error("Error fetching notifications");
      return;
    }
  }

  async getOrders(
    type: "sold" | "purchased" | "all" = "all",
    status: "all" | "in_progress" | "completed" | "canceled" = "all",
    page?: number,
    per_page?: number
  ) {
    if (!this.initialized) return "User is not initialized";
    try {
      this.#refreshToken();
      const orders = await fetch(
        `https://www.vinted.fr/api/v2/my_orders?type=${type}&status=${status}&page=${
          page ? page : 1
        }&per_page=${per_page ? per_page : 5}`,
        {
          headers: default_headers(this.access_token, this.xcsrf_token),
          method: "GET",
        }
      );
      const ordersJson: OrdersInterface = await orders.json();
      return ordersJson;
    } catch (error) {
      console.error(error);
      console.error("Error fetching orders");
      return;
    }
  }
}
