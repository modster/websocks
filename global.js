import { load } from "./deps.js"; // https://deno.land/std@0.177.1/dotenv/load.ts

export const log = console.log;

// loads the environment variables
load().then(() => log("environment loaded")).catch((e) => log.error(e));


export const SECRET = Deno.env.get("TESTNET_SECRET"),
  APIKEY = Deno.env.get("TESTNET_APIKEY"),
  enc = new TextEncoder(),
  wsTestnet = new URL("wss://testnet.binance.vision/ws-api/v3"), ///<----------- /v3?
  restBaseUrl = "https://api.binance.com/api",
  restTestBaseUrl = new URL(`https://testnet.binance.vision/api`),
  userDataStreamPattern = "/v3/userDataStream";
