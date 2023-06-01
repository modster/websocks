// import { serve } from "https://deno.land/std@0.184.0/http/server.ts";
const { createHmac } = await import("node:crypto");

import {
  APIKEY,
  // binanceApi,
  // binanceStream,
  // binanceWs,
  _binanceWsApiV3,  //<-------------- USER_STREAM
  log,
  SECRET,
  // testnetApi, fpr REST API
  // testnetStream,
  // testnetWs,
  testnetWsApiV3, //<-------------- USER_STREAM
  // enc,
  symbol,
  side,
  type,
  timeInForce,
  price,
  quantity,
  // timestamp,
  // id,
} from "./global.js";
/** 
 * wWw.moOoVe_oVaR_MWMM
 * WMWMWMWmwmwmwmwmwmwmwmwm_-VVReMoWoOoMWMwMwWBoO-doO-doO/qPPqpqPpqQ_pbmwWwmMm_0.omwen
 * 
 */
const id = self.crypto.randomUUID(); log(id);
let listenKey = "";

const newOrder = {
  id: id,
  method: "order.place",
  params: {
    symbol: symbol,
    side: side,
    type: type,
    timeInForce: timeInForce,
    price: price,
    quantity: quantity,
    apiKey: APIKEY,
    // timestamp: timestamp,
    // signature: sig,
  },
};

const preSig = new URLSearchParams(newOrder.params);
preSig.append("timestamp", Date.now());
preSig.sort();
// const newOrderParams = {
//   symbol: symbol,
//   side: side,
//   type: type,
//   timeInForce: timeInForce,
//   price: price,
//   quantity: quantity,
//   apiKey: APIKEY,
//   // timestamp: timestamp,
// };
function signature(query_string) {
  return createHmac("sha256", SECRET)
    .update(enc.encode(query_string))
    .digest("hex");
}
const sig = signature(preSig);
newOrder.params.signature = sig;

const ws = new WebSocket(testnetWsApiV3);

// const streamTrade = new WebSocket(testnetStream)


const start = {
  id: id,
  method: "userDataStream.start",
  params: {
    apiKey: APIKEY,
  },
};

export const ping = {
  id: id,
  method: "userDataStream.ping",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  },
};

export const pong = {
  id: id,
  method: "userDataStream.pong",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  },
};

/** @event open */
ws.addEventListener("open", (event) => {
  if (event.returnValue) {
    log(`

---------------------------- Event: '${event.type}' --------------------------------
event.timeStamp: ${event.timeStamp}
---------------------------------------------------------------------------
`);
  } else {
    log(event);
    // ws.send(JSON.stringify(start));
  }
  ws.send(JSON.stringify(start));
});

/** @event message */
ws.addEventListener("message", (event) => {
  
  // const msg = event.data;

  // if (msg.result) {
    log(`
------------------------------- ${event.type} ----------------------------------`);
    log(event);
    log(`
---------------------------------------------------------------------------
`);
  //   listenKey = msg.result.listenKey;
  //   // log(listenKey);
  // } else {
  //   log(event);
  // }

  // if (msg.status === 200) {
  //   log("sending newOrder");
  //   // preSig.append("signature", sig)
  //   // log(preSig.toString());
  //   // newOrder.params = preSig.
  //   // log(sig);
  //   // log(JSON.stringify(newOrder));
  //   // log(newOrder);
  //   // ws.send(JSON.stringify(newOrder));
  // }
  // if (event.ping) {
  //   log(`
  // -------------------------------------- ping! ----------------------------------
  // `);
  // }

  // if (event.data === "ping") {
  // log("pong");
  // ws.send(JSON.stringify(pong));
  // }
});

/** @event close */
ws.addEventListener("close", (event) => {
  log(`
  ------------------------------- ${event.reason} -----------------------------
    
    timeStamp: ${event.timeStamp}
    wasClean : ${event.wasClean}
    code     : ${event.code}
    reason   : ${event.reason}   
    ws.url   : ${ws.url}
    
  -----------------------------------------------------------------------------
    
    `);
    
  //   if (event.returnValue) {
  //     log(`
  // ------------------------------------ Event: '${event.type}' ----------------------------------
  //   timeStamp:  ${event.timeStamp}
  //   wasClean:  ${event.wasClean}
  //   code:  ${event.code}
  //   reason:  ${event.reason}
  //   ws.url:  ${ws.url}
  //   ws.readyState:  ${ws.readyState},
  //     `);
  //   }
});

/** @event error */
ws.addEventListener("error", (event) => {
  log(event);
});
