/** @emits order.status **/

const order = {
  "id": "aa62318a-5a97-4f3b-bdc7-640bbe33b291",
  "method": "order.status",
  "params": {
    "symbol": "BTCUSDT",
    "orderId": 12569099453,
    "apiKey": "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A",
    "signature": "2c3aab5a078ee4ea465ecd95523b77289f61476c2f238ec10c55ea6cb11a6f35",
    "timestamp": 1660801720951
  }
}

/* Example order.status Response 
{
  "id": "aa62318a-5a97-4f3b-bdc7-640bbe33b291",
  "status": 200,
  "result": {
    "symbol": "BTCUSDT",
    "orderId": 12569099453,
    "orderListId": -1,                  // set only for legs of an OCO
    "clientOrderId": "4d96324ff9d44481926157",
    "price": "23416.10000000",
    "origQty": "0.00847000",
    "executedQty": "0.00847000",
    "cummulativeQuoteQty": "198.33521500",
    "status": "FILLED",
    "timeInForce": "GTC",
    "type": "LIMIT",
    "side": "SELL",
    "stopPrice": "0.00000000",          // always present, zero if order type does not use stopPrice
    "icebergQty": "0.00000000",         // always present, zero for non-iceberg orders
    "time": 1660801715639,              // time when the order was placed
    "updateTime": 1660801717945,        // time of the last update to the order
    "isWorking": true,
    "workingTime": 1660801715639,
    "origQuoteOrderQty": "0.00000000",  // always present, zero if order type does not use quoteOrderQty
    "selfTradePreventionMode": "NONE"
  },
  "rateLimits": [
    {
      "rateLimitType": "REQUEST_WEIGHT",
      "interval": "MINUTE",
      "intervalNum": 1,
      "limit": 1200,
      "count": 2
    }
  ]
} */