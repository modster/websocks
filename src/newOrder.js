/* newOrder */
// import { hmac } from "https://deno.land/x/hmac@v2.0.1/mod.ts";
import { ccxt } from "https://esm.sh/ccxt@3.1.10"; //"https://cdn.ccxt.com/latest/bybit.min.js";
// https://esm.sh/ccxt@3.1.10

const log = console.log,
  SECRET = Deno.env.get("TESTNET_SECRET"),
  APIKEY = Deno.env.get("TESTNET_APIKEY"),
  enc = new TextEncoder(),
  wsTestnet = new URL ("wss://testnet.binance.vision/ws-api/v3"),
  symbol = 'BTC/USDT:USDT',
  side = "bid",
  bybit = new ccxt.pro.bybit ();


export async function getBidAsk (symbol, side) {
    // window.bybit = bybit
    try {
    const ticker = await bybit.fetchTicker (symbol);
    const result = (side==="bid" ) ? ticker.bid.toFixed (2) : ticker.ask.toFixed (2);
    return result;
    } catch(error) {
        log(error);
    }
}

const binanceApi = {
    newOrderRespType: "ACK",
    price: getBidAsk("BTCUSDT"),
    quantity: 0.01000000,
    recvWindow: 5000,
    side: "SELL",
    symbol: "BTCUSDT",
    timeInForce: "GTC",
    timestamp: Date.now(),
    type: "LIMIT",
    id: 1, // crypto.getRandomValue(),
};

log(binanceApi.sort());

// params = new URLSearchParams({id,symbol,side,type,timeInForce, quantity, price, recvWindow, timestamp, newOrderRespType, apiKey, });
// log(params);

// signature = hmac("sha256", `${SECRET}`, `${params}`, "utf8", "hex"), // OR const signature = crypto.createHmac('sha256', SECRET);
// log(signature);

// params.set("signature", signature()); // OR const reqParams = `${params.toString}${signature}`;
// log(params);