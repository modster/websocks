/**
 * @function getListenKey
 * @return listenKey
 */

import "../global.js";

export async function getListenKey() {
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
  } catch (error) {
    console.warn(error.message);
  }
}
