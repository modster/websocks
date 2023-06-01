

## Trade

```js
export const orderPlace = {
  id: id,
  method: order.place,
  params: {
    symbol: symbol,
    side: side,
    type: LIMIT,
    timeInForce: GTC,
    price: 23416.10000000,
    quantity: 0.00847000,
    apiKey: APIKEY,
    signature: 15af09e41c36f3cc61378c2fbe2c33719a03dd5eba8d0f9206fbda44de717c88,
    timestamp: 1660801715431
  }
}

export const orderTest = {
  id: id,
  method: order.test,
  params: {
    symbol: symbol,
    side: side,
    type: LIMIT,
    timeInForce: GTC,
    price: 23416.10000000,
    quantity: 0.00847000,
    apiKey: APIKEY,
    signature: 15af09e41c36f3cc61378c2fbe2c33719a03dd5eba8d0f9206fbda44de717c88,
    timestamp: 1660801715431
  }
}

export const openOrdersCancelAll = {
  id: id,
  method: openOrders.cancelAll,
  params: {
    symbol: symbol,
    apiKey: APIKEY,
    signature: 773f01b6e3c2c9e0c1d217bc043ce383c1ddd6f0e25f8d6070f2b66a6ceaf3a5,
    timestamp: 1660805557200
  }
}

export const orderCancel = {
  id: id,
  method: order.cancel,
  params: {
    symbol: symbol,
    origClientOrderId: 4d96324ff9d44481926157,
    apiKey: APIKEY,
    signature: 33d5b721f278ae17a52f004a82a6f68a70c68e7dd6776ed0be77a455ab855282,
    timestamp: 1660801715830
  }
}
export const openOrdersStatus = {
  id: id,
  method: openOrders.status,
  params: {
    symbol: symbol,
    apiKey: APIKEY,
    signature: d632b3fdb8a81dd44f82c7c901833309dd714fe508772a89b0a35b0ee0c48b89,
    timestamp: 1660813156812
  }
}
```