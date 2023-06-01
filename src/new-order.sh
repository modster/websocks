#!/usr/bin/env bash

# Set up authentication:
API_KEY="CwFYlZxWm1v8PwfcxStd3UVDeNY9zcwWEx1yMzNvqILdBS3qhUF4umV3rs6VjWvR"
PRIVATE_KEY_PATH="iCpRfVppnYf83lrzxPiH3emqY5hWjYoGcQfazCmShgs2RGyc8jTmVau0B0GVq3y2"

# Set up the request:
API_METHOD="POST"
API_CALL="api/v3/order"
API_PARAMS="symbol=BTCUSDT&side=SELL&type=LIMIT&timeInForce=GTC&quantity=1&price=0.2"

# Sign the request:
timestamp=$(date +%s000)
api_params_with_timestamp="$API_PARAMS&timestamp=$timestamp"
signature=$(echo -n "$api_params_with_timestamp" \
            | openssl dgst -sha256 -sign "$PRIVATE_KEY_PATH" \
            | openssl enc -base64 -A)

# Send the request:
curl -H "X-MBX-APIKEY: $API_KEY" -X "$API_METHOD" \
    "https://testnet.binance.vision/$API_CALL?$api_params_with_timestamp" \
    --data-urlencode "signature=$signature"
    