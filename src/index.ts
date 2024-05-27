import config from "./config.json" assert { type: "json" };
import { User } from "./utils/endpoints.js";

(async () => {
  const user = new User(
    config.access_token,
    config.refresh_token,
    config.x_crf_token
  );
  await user.init();

  console.log(await user.getOrders("purchased", "completed", 1, 2));
})();
