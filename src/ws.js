import { APIKEY, log, wsTestnet, id } from "./global.js";
// import { getListenKey } from "./ws-listen-key.js";

const listenKey = "";

export const startUserDataStream = {
  id:`${id}`,
  method: "userDataStream.start",
  params: {
    apiKey:`${APIKEY}`,
  },
};

export const pingUserDataStream  = {
  id: id,
  method: "userDataStream.ping",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  }
};

export const stopUserDataStream = {
  id: id,
  method: "userDataStream.stop",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY
  }
};
// const listenKey = await getListenKey();

// const ws = new WebSocket("wss://testnet.binance.vision/ws-api/v3");

const ws = new WebSocket(wsTestnet);

ws.addEventListener("message", (event) => {
  log("message ", event.data);
});

ws.addEventListener("open", () => {
  if (ws.readyState === 1) {
    log("socket.readyState: " + ws.readyState);
    log(JSON.stringify(startUserDataStream));
    ws.send(JSON.stringify(startUserDataStream));
  }
});

ws.addEventListener("close", () => {
  log("close");
});

ws.addEventListener("ping", ((e) => {
wsTestnet.send("pong")});
// 8(function () {
//   log("closing websocket ");
//   ws.close();
// }, 60 * 3 * 1000);
