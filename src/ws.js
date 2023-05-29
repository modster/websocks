import "../global.js";
import { getListenKey } from "./get-listen-key.js";

const listenKey = getListenKey();

// experiment 1
const startUserDataStream = {
  id: 1,
  method: "userDataStream.start",
  params: {
    apiKey: `${APIKEY}`,
  },
};

// experiment 2
// const startUserDataStream = JSON.stringify({
//   id: 1,
//   method: "userDataStream.start",
//   params: {
//     apiKey: `${APIKEY}`,
//   },
// });

const ws = new WebSocket(restTestBaseUrl);

ws.addEventListener("message", (event) => {
  log("Message from server ", event.data);
});

ws.addEventListener("open", () => {
  if (socket.readyState && requestListenKey) {
    log("socket.readyState");
    ws.send(JSON.stringify(requestListenKey));
  }
});

setTimeout(function () {
  log(ws.close()); //<------------------------------- works?
}, 10000);
