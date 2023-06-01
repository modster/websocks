

POST /api/v3/order (HMAC SHA256)
symbol	STRING	YES	
side	ENUM	YES	
type	ENUM	YES	
timeInForce	ENUM	NO	
quantity	DECIMAL	NO	
quoteOrderQty	DECIMAL	NO	
price	DECIMAL	NO	
newClientOrderId	STRING	NO	A unique id among open orders. Automatically generated if not sent.
strategyId	INT	NO	
strategyType	INT	NO	The value cannot be less than 1000000.
stopPrice	DECIMAL	NO	Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders.
trailingDelta	LONG	NO	Used with STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. For more details on SPOT implementation on trailing stops, please refer to Trailing Stop FAQ
icebergQty	DECIMAL	NO	Used with LIMIT, STOP_LOSS_LIMIT, and TAKE_PROFIT_LIMIT to create an iceberg order.
newOrderRespType	ENUM	NO	Set the response JSON. ACK, RESULT, or FULL; MARKET and LIMIT order types default to FULL, all other orders default to ACK.
selfTradePreventionMode	ENUM	NO	The allowed enums is dependent on what is configured on the symbol. The possible supported values are EXPIRE_TAKER, EXPIRE_MAKER, EXPIRE_BOTH, NONE.
recvWindow	LONG	NO	The value cannot be greater than 60000
timestamp	LONG	YES	