# newOrder

### Request:

Request method names may be prefixed with explicit version: e.g., "v3/order.place".

The order of params is not significant.

```js
{
  id: 1685503619417,
  method: "order.place",
  params: {
    symbol: "BTCUSDT",
    side: "SELL",
    type: "LIMIT",
    timeInForce: "GTC",
    price: 20000,
    quantity: 0.001,
    apiKey: "CwFYlZxWm1v8PwfcxStd3UVDeNY9zcwWEx1yMzNvqILdBS3qhUF4umV3rs6VjWvR",
    timestamp: 1685503619417,
    signature: "a733563baa2eed2b9329be90b533d1d05cdc3e680b39c918d039a6501646c453"
  }
}
```

### Response

Responses are returned as JSON in text frames, one response per frame.

#### Example of successful response:
```js

{
  "id": "e2a85d9f-07a5-4f94-8d5f-789dc3deb097",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "orderId": 12510053279,
    "orderListId": -1,
    "clientOrderId": "a097fe6304b20a7e4fc436",
    "transactTime": 1655716096505,
    "price": "0.10000000",
    "origQty": "10.00000000",
    "executedQty": "0.00000000",
    "cummulativeQuoteQty": "0.00000000",
    "status": "NEW",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "BUY",
    "workingTime": 1655716096505,
    "selfTradePreventionMode": "NONE"
  },
  "rateLimits": [
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "intervalNum": 10,
      "limit": 50,
      "count": 12
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "intervalNum": 1,
      "limit": 160000,
      "count": 4043
    },
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 321
    }
  ]
}
```
#### Example of failed response:

```js
{
  "id": "e2a85d9f-07a5-4f94-8d5f-789dc3deb097",
  "status": 400,
  "error": {
    "code": -2010,
    "msg": "Account has insufficient balance for requested action."
  },
  "rateLimits": [
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "intervalNum": 10,
      "limit": 50,
      "count": 13
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "intervalNum": 1,
      "limit": 160000,
      "count": 4044
    },
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 322
    }
  ]
}

```
#### Response fields:

Name	Type	Mandatory	Description
id	INT / STRING / null	YES	Same as in the original request
status	INT	YES	Response status. See Status codes
result	OBJECT / ARRAY	YES	Response content. Present if request succeeded
error	OBJECT	Error description. Present if request failed
rateLimits	ARRAY	NO	Rate limiting status. See Rate limits

#### ACK response type:

```js
{
  "id": "56374a46-3061-486b-a311-99ee972eb648",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "orderId": 12569099453,
    "orderListId": -1, // always -1 for singular orders
    "clientOrderId": "4d96324ff9d44481926157ec08158a40",
    "transactTime": 1660801715639
  },
  "rateLimits": [
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "intervalNum": 10,
      "limit": 50,
      "count": 1
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "intervalNum": 1,
      "limit": 160000,
      "count": 1
    },
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 1
    }
  ]
}
```

#### RESULT response type:

```js
{
  "id": "56374a46-3061-486b-a311-99ee972eb648",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "orderId": 12569099453,
    "orderListId": -1, // always -1 for singular orders
    "clientOrderId": "4d96324ff9d44481926157ec08158a40",
    "transactTime": 1660801715639,
    "price": "23416.10000000",
    "origQty": "0.00847000",
    "executedQty": "0.00000000",
    "cummulativeQuoteQty": "0.00000000",
    "status": "NEW",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "SELL",
    "workingTime": 1660801715639,
    "selfTradePreventionMode": "NONE"
  },
  "rateLimits": [
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "intervalNum": 10,
      "limit": 50,
      "count": 1
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "intervalNum": 1,
      "limit": 160000,
      "count": 1
    },
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 1
    }
  ]
}
```

#### FULL response type:

```js
{
  "id": "56374a46-3061-486b-a311-99ee972eb648",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "orderId": 12569099453,
    "orderListId": -1,
    "clientOrderId": "4d96324ff9d44481926157ec08158a40",
    "transactTime": 1660801715793,
    "price": "23416.10000000",
    "origQty": "0.00847000",
    "executedQty": "0.00847000",
    "cummulativeQuoteQty": "198.33521500",
    "status": "FILLED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "SELL",
    "workingTime": 1660801715793,
    // FULL response is identical to RESULT response, with the same optional fields
    // based on the order type and parameters. FULL response additionally includes
    // the list of trades which immediately filled the order.
    "fills": [
      {
        "price": "23416.10000000",
        "qty": "0.00635000",
        "commission": "0.000000",
        "commissionAsset": "BNB",
        "tradeId": 1650422481
      },
      {
        "price": "23416.50000000",
        "qty": "0.00212000",
        "commission": "0.000000",
        "commissionAsset": "BNB",
        "tradeId": 1650422482
      }
    ],
    "selfTradePreventionMode": "NONE"
  },
  "rateLimits": [
    {
      "rateLimitType": "ORDERS",
      "interval": "SECOND",
      "intervalNum": 10,
      "limit": 50,
      "count": 1
    },
    {
      "rateLimitType": "ORDERS",
      "interval": "DAY",
      "intervalNum": 1,
      "limit": 160000,
      "count": 1
    },
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 1
    }
  ]
}
```

### Event: 'open'

```js
Event {
  bubbles: false,
  cancelable: false,
  composed: false,
  currentTarget: WebSocket {
  url: "wss://testnet.binance.vision/ws-api/v3",
  readyState: 1,
  extensions: "",
  protocol: "",
  binaryType: "blob",
  bufferedAmount: 0
},
  defaultPrevented: false,
  eventPhase: 2,
  srcElement: null,
  target: WebSocket {
  url: "wss://testnet.binance.vision/ws-api/v3",
  readyState: 1,
  extensions: "",
  protocol: "",
  binaryType: "blob",
  bufferedAmount: 0
},
  returnValue: true,
  timeStamp: 1685503620078,
  type: "open"
}
```

## Event: 'message'

### status: 400

```json
{
  "id": null,
  "status": 400,
  "error": { "code": -1135, "msg": "Invalid JSON request." },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 1
    }
  ]
}
```

### status: 200

```js
{
  bubbles: false,
  cancelable: false,
  composed: false,
  currentTarget: WebSocket {
  url: "wss://testnet.binance.vision/ws-api/v3",
  readyState: 1,
  extensions: "",
  protocol: "",
  binaryType: "blob",
  bufferedAmount: 0
},
  defaultPrevented: false,
  eventPhase: 2,
  srcElement: null,
  target: WebSocket {
  url: "wss://testnet.binance.vision/ws-api/v3",
  readyState: 1,
  extensions: "",
  protocol: "",
  binaryType: "blob",
  bufferedAmount: 0
},
  returnValue: true,
  timeStamp: 1685508005627,
  type: "open"
}
```

## Event: 'close'

```js
CloseEvent {
bubbles: false,
cancelable: false,
composed: false,
currentTarget: WebSocket {
url: "wss://testnet.binance.vision/ws-api/v3",
readyState: 3,
extensions: "",
protocol: "",
binaryType: "blob",
bufferedAmount: 0
  },
defaultPrevented: false,
eventPhase: 2,
srcElement: null,
target: WebSocket {
url: "wss://testnet.binance.vision/ws-api/v3",
readyState: 3,
extensions: "",
protocol: "",
binaryType: "blob",
bufferedAmount: 0
  },
returnValue: true,
timeStamp: 1685516067203,
type: "close",
wasClean: true,
code: 1008,
reason: "disconnected"
}
```
