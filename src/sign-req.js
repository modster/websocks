/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding(message) {
    // const messageBox = document.querySelector("#hmac-message");
    // let message = messageBox.value;
    let enc = new TextEncoder();
    return enc.encode(message);
}

/*
Get the encoded message-to-sign, sign it and display a representation
of the first part of it in the "signature" element.
*/
async function signMessage(key, params) {
    let encoded = getMessageEncoding(params);
    signature = await crypto.subtle.sign(
        "HMAC",
        key,
        encoded
    );
    return signature;
}