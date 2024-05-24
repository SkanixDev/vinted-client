import fetch from "node-fetch";
import UserAgent from "user-agents";
import cookie from "cookie";

//utils
import { fetchCookie, authorizedRequest, newToken } from "./utils/auth.js";
import config from './config.json' assert { type: 'json' };

const url = "https://www.vinted.fr/api/v2/notifications?page=1&per_page=5";
    
(async () => {
    console.log("Fetching notifications...");
    console.log(await fetchCookie());
    console.log(await authorizedRequest("GET", url, undefined, config.token, config["x-crf-token"]))
    console.log(await newToken(config.refreshToken, config.token, config["x-crf-token"]))
})();
