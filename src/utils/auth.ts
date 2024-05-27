import fetch from "node-fetch";
import UserAgent from "user-agents";

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
): Promise<[string, string, number, number]> {
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
    if (
      !newTokens.access_token ||
      !newTokens.refresh_token ||
      !newTokens.expires_in
    ) {
      console.log("error refreshing tokens");
      console.log(newTokens);
      return [null, null, null, null];
    }
    return [
      newTokens.access_token,
      newTokens.refresh_token,
      newTokens.expires_in,
      newTokens.created_at,
    ];
  } catch (error) {
    console.log("error refreshing tokens");
    console.error(error);
    return [null, null, null, null];
  }
}
