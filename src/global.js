import "https://deno.land/std@0.177.1/dotenv/load.ts";
const log = console.log;
const id = Date.now;
const _SECRET = Deno.env.get("TESTNET_SECRET");
const APIKEY = Deno.env.get("TESTNET_APIKEY");
const wsTestnet = "wss://testnet.binance.vision/ws-api/v3";
const _restBaseUrl = "https://api.binance.com/api";
const restTestBaseUrl = "https://testnet.binance.vision/api/v3/";
const userDataStreamPattern = "userDataStream";
// log( APIKEY, wsTestnet, userDataStreamPattern, restTestBaseUrl);
export { log, id, APIKEY, wsTestnet, userDataStreamPattern, restTestBaseUrl }
