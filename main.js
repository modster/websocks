import "./global.js";
import { getListenKey } from "./src/get-listen-key.js";
export async function restListenKey() {
  try {
    const response = await fetch(`${restTestBaseUrl}${userDataStreamUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MBX-APIKEY": APIKEY,
      },
    });
    if (!response.ok) throw new Error("response.ok is !ok");
    log(response.status, response.statusText); // e.g. 200 OK
    const dataobj = await response.json();
    return dataobj;
  } catch (err) {
    console.warn(err.message);
  }
}
// e.g. { listenKey: "iP1RXxn1ld2E6ILn9PSQS5lTPLTQNXHqiKM1RkIulTE2eOL9NrqMO2chMlRW" }
log(await restListenKey()); 
try {


  
/* Ping/Keep-alive a ListenKey (USER_STREAM)
PUT /api/v3/userDataStream
Keepalive a user data stream to prevent a time out. User data streams will close after 60 minutes. 
It's recommended to send a ping about every 30 minutes.*/



