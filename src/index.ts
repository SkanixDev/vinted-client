import config from "./config.json" assert { type: "json" };
import { newToken, refreshToken } from "./utils/auth.js";
import { User } from "./utils/endpoints.js";

const url = "https://www.vinted.fr/api/v2/notifications?page=1&per_page=5";

(async () => {
  console.log(
    await refreshToken(
      config.refresh_token,
      config.access_token,
      config.x_crf_token
    )
  );
})();
