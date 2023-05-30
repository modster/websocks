
export const start = {
  id:`${id}`,
  method: "userDataStream.start",
  params: {
    apiKey:`${APIKEY}`,
  },
};

export const ping  = {
  id: id,
  method: "userDataStream.ping",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY,
  }
};

export const stop = {
  id: id,
  method: "userDataStream.stop",
  params: {
    listenKey: listenKey,
    apiKey: APIKEY
  }
};