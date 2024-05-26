//utils
import {
  fetchCookie,
  authorizedRequest,
  newToken,
  refreshToken,
} from "./utils/auth.js";
import config from "./config.json" assert { type: "json" };
import { getIdUser } from "./utils/endpoints.js";

const url = "https://www.vinted.fr/api/v2/notifications?page=1&per_page=5";

(async () => {
  const cookie = await fetchCookie();
  const userid = await getIdUser(
    cookie,
    config.access_token,
    config["x-crf-token"]
  );

  const userId = 198212220;

  const notif = await authorizedRequest(
    "GET",
    url,
    undefined,
    config.access_token,
    config["x-crf-token"]
  );
  console.log(notif);

  console.log("Token expiry date: ", new Date(config.expiry).toLocaleString());
})();
