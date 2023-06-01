/**
 * @module USER_STREAM
 * @exports { start, ping, stop }
 */
import { APIKEY, log } from "./global.js";

export const start = {
  id: Date.now(),
  method: "userDataStream.start",
  params: {
    apiKey: APIKEY,
  },
};

// function startStream( s ){

// }

export const ping = {
  id: id,
  method: "userDataStream.ping",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  },
};

export const stop = {
  id: id,
  method: "userDataStream.stop",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  },
};
