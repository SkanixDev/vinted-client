//utils
import {
  fetchCookie,
  authorizedRequest,
  newToken,
  refreshToken,
} from "./utils/auth.js";
import config from "./config.json" assert { type: "json" };

const url = "https://www.vinted.fr/api/v2/notifications?page=1&per_page=5";

(async () => {
  console.log("Fetching notifications...");
  console.log(
    await authorizedRequest(
      "GET",
      url,
      undefined,
      config.token,
      config["x-crf-token"]
    )
  );
})();
