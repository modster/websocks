/**
 * @function getListenKey
 */
// import "./global.js";
import { log, APIKEY, restTestBaseUrl, userDataStreamPattern } from "./global.js";

export async function getListenKey() {
  try {
    const response = await fetch(`${restTestBaseUrl}${userDataStreamPattern}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MBX-APIKEY": APIKEY,
      },
    })
    if (!response.ok) throw new Error("response.ok is !ok");
    log(response.status, response.statusText); // e.g. 200 OK
    const dataobj = await response.json();
    log(dataObj);
    log("listenKey: ", dataobj.listenKey);
    return new Response(dataobj.listenKey);
  } catch (error) {
    console.warn(error.message);
  }
}

export const listenKey = await getListenKey();
