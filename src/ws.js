// import { serve } from "https://deno.land/std@0.184.0/http/server.ts";
import {
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
} from "./global.js";

import * as uds from "./user-data.js";
const timestamp = () => new Date.now();

const listenKeyReq = JSON.stringify({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-MBX-APIKEY": APIKEY,
  },
});

const start = JSON.stringify({
  id: timestamp,
  method: "userDataStream.start",
  params: {
    apiKey: APIKEY,
  },
});

const listenKey = fetch(wsTestnet, listenKeyReq);
const ws = new WebSocket(wsTestnet);

ws.addEventListener("message", (event) => {
  log("message ", event.data);
  if (event.data === "ping") {
    log("pong");
    ws.send(uds.ping);
  }
  /** @todo  case   **/
});
ws.addEventListener("open", () => {
  log("Event: 'open'");
  ws.send(start);
});

ws.addEventListener("close", () => {
  log("close");
});

// ws.addEventListener("ping", (e) => {
//   log(e);
//   ws.send(ping);
//   pinged = Date.now();
// });

/** @todo event emmiter */
// function pinger() {

// }
// setInterval(() => pinger(), 30 * 60 * 1000);
