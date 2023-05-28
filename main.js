import "https://deno.land/std@0.177.1/dotenv/load.ts";

const log = console.log,
  SECRET = Deno.env.get("TESTNET_SECRET"),
  APIKEY = Deno.env.get("TESTNET_APIKEY"),
  enc = new TextEncoder(),
  wsTestnet = new URL("wss://testnet.binance.vision/ws-api/v3"),
  restBaseUrl = "https://api.binance.com/api",
  restTestBaseUrl = "https://testnet.binance.vision/api",
  userDataStreamUrl = "/v3/userDataStream";

export async function restListenKey() {
  try {
    const response = await fetch(`${restTestBaseUrl}${userDataStreamUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MBX-APIKEY": APIKEY,
      },
      // body: params?.toString(),
    });

    if (!response.ok) throw new Error("response.ok is !ok");
    console.log(response.status); // e.g. 200
    console.log(response.statusText); // e.g. "OK"
    const dataobj = await response.json();

    return dataobj;
  } catch (err) {
    console.warn(err.message);
  }
}

// const response = await fetch("http://my.json.host/data.json");

// const jsonData = await response.json();

log(await restListenKey()); // e.g. { listenKey: "iP1RXxn1ld2E6ILn9PSQS5lTPLTQNXHqiKM1RkIulTE2eOL9NrqMO2chMlRW" }

// experiment 1
// const requestListenKey = {
//   id: 1,
//   method: "userDataStream.start",
//   params: {
//     apiKey: `${APIKEY}`,
//   },
// };

// experiment 2
// const requestListenKey = JSON.stringify({
//   id: 1,
//   method: "userDataStream.start",
//   params: {
//     apiKey: `${APIKEY}`,
//   },
// });
// log(requestListenKey);

// const ws = new WebSocket(wsTestnet);

// ws.addEventListener("message", (event) => {
//   log("Message from server ", event.data);
// });

// ws.addEventListener("open", (_event) => {
//   // ws.send(JSON.stringify(requestListenKey)); //experiment 1
//   ws.send((requestListenKey)); //experiment 2
// });

// setTimeout(function () {
//   log(ws.close()); //<------------------------------- works?
// }, 10000);
