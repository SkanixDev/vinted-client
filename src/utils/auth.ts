import fetch from "node-fetch";
import UserAgent from "user-agents";
import fs from "fs";
import path from "path";

//import config.json
import config from "../config.json" assert { type: "json" };

export const fetchCookie = async (domain = "fr") => {
  const response = await fetch(`https://vinted.${domain}/catalog`, {
    headers: { "user-agent": new UserAgent().toString() },
  });

  if (!response.ok)
    throw new Error(`Failed to fetch cookies. Status: ${response.status}`);

  const sessionCookies = response.headers.raw()["set-cookie"];
  if (!sessionCookies)
    throw new Error("set-cookie headers not found in the response");

  const parsedCookies = Object.fromEntries(
    sessionCookies.flatMap((cookieHeader) =>
      cookieHeader.split(";").map((cookie) =>
        cookie
          .trim()
          .split("=")
          .map((part) => part.trim())
      )
    )
  );
  const requiredCookies = ["anon_id", "_vinted_fr_session"];
  const cookieHeader = requiredCookies.reduce((acc, cookie) => {
    return parsedCookies[cookie]
      ? `${acc}${cookie}=${parsedCookies[cookie]}; `
      : acc;
  }, "");

  return cookieHeader;
};

export async function authorizedRequest(
  method: string,
  url: string,
  data,
  access_token: string,
  xcsrf_token: string
): Promise<any> {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
      "X-CSRF-Token": xcsrf_token,
    },
    body: JSON.stringify(data),
    method: method,
  });
  console.log("making an authed request to " + url);

  if (response.headers.get("Content-Type").includes("text/html")) {
    console.log(response);
  }
  const responseData = await response.json();

  return responseData;
}

export async function newToken(
  refresh_token: string,
  access_token: string,
  xcsrf_token: string
): Promise<[string, string, number]> {
  console.log("fetching new tokens");
  const body = {
    client_id: "web",
    scope: "user",
    grant_type: "refresh_token",
    refresh_token: refresh_token,
  };

  try {
    const newTokens: any = await authorizedRequest(
      "POST",
      "https://www.vinted.fr/oauth/token",
      body,
      access_token,
      xcsrf_token
    );

    const expiry = (newTokens.created_at + newTokens.expires_in) * 1000;
    console.log(newTokens);

    return [newTokens.access_token, newTokens.refresh_token, expiry];
  } catch (error) {
    console.log("error refreshing tokens");
    console.error(error);
    return [null, null, null];
  }
}

export function checkExpiry(expiry: number): boolean {
  const now = new Date().getTime();
  return expiry < now;
}

export async function refreshToken(
  access_token: string,
  refresh_token: string,
  xcsrf_token: string
) {
  if (checkExpiry(config.expiry)) {
    try {
      const [newAccess, newRefresh, newExpiry] = await newToken(
        refresh_token,
        access_token,
        xcsrf_token
      );

      config.access_token = newAccess;
      config.refresh_token = newRefresh;
      config.expiry = newExpiry;
      console.log(config);
      console.log(path.resolve(import.meta.dirname, "../config.json"));

      if (newAccess && newRefresh && newExpiry) {
        console.log(
          "\x1b[31m%s\x1b[0m",
          "tokens refreshed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        );
        fs.writeFileSync(
          path.resolve(import.meta.dirname, "../config.json"),
          JSON.stringify(config)
        );
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
