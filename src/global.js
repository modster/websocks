import "https://deno.land/std@0.177.1/dotenv/load.ts";
const log = console.log;
const SECRET = Deno.env.get("TESTNET_SECRET");
const APIKEY = Deno.env.get("TESTNET_APIKEY");
/*
Spot API URL	                        Spot Test Network URL
https://api.binance.com/api	          https://testnet.binance.vision/api
wss://ws-api.binance.com/ws-api/v3	  wss://testnet.binance.vision/ws-api/v3
wss://stream.binance.com:9443/ws	    wss://testnet.binance.vision/ws
wss://stream.binance.com:9443/stream	wss://testnet.binance.vision/stream
*/
const binanceApi = "https://api.binance.com/api";// v3?
const testnetApi = "https://testnet.binance.vision/api"; // v3?
const binanceWsApiV3 = "wss://ws-api.binance.com/ws-api/v3";
const testnetWsApiV3 = "wss://testnet.binance.vision/ws-api/v3"; // USER_DATA
const binanceWs = "wss://stream.binance.com:9443/ws";
const testnetWs = "wss://testnet.binance.vision/ws";
const binanceStream = "wss://stream.binance.com:9443/stream";
const testnetStream = "wss://testnet.binance.vision/stream";

const userDataStreamPattern = "userDataStream";

const enc = new TextEncoder();
const symbol = "BTCUSDT";
const side = "BUY";
const type = "LIMIT";
const timeInForce = "GTC";
const price = 20000.00;
const quantity = 0.01;
// const timestamp = Date.now();
// const id = uuid();

export {
  APIKEY,
  binanceApi,
  binanceStream,
  binanceWs,
  binanceWsApiV3,
  log,
  SECRET,
  testnetApi,
  testnetStream,
  testnetWs,
  testnetWsApiV3,
  enc,
  symbol,
  side,
  type,
  timeInForce,
  price,
  quantity,
  // timestamp,
  // id,
};
