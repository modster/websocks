const ws = new WebSocket(wsTestnet);

// {
//   id: Date.now(),
//   method: "userDataStream.start",
//   params: {
//     apiKey: APIKEY,
//   },
// };


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