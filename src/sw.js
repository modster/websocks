import { APIKEY, log, wsTestnet } from "./global.js";
import { getListenKey } from "./get-listen-key.js";

const id = 1;
const listenKey = await getListenKey();
log("listenKey OK")

// const listenKey = await getListenKey();
log(wsTestnet);
log("wss://testnet.binance.vision/ws-api/v3")
const ws = new WebSocket(wsTestnet);

// ws.addEventListener("message", (event) => {
//   log("message ", event.data);
// });

ws.addEventListener("open", () => {
  if (ws.readyState === 1) {
    log("socket.readyState: " + ws.readyState);
    // log("ping: ", JSON.stringify(pingUserDataStream));
    ws.send(JSON.stringify(pingUserDataStream));
  }
});

// ws.addEventListener("close", () => {
//   log("close");
// });
// while(true){
// setTimeout(function () {
//   log("closing websocket ");
//   ws.close();
// }, 10000);
// }

