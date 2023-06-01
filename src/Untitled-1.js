import { serve } from "https://deno.land/std@0.184.0/http/server.ts";


serve((req) => {

  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 });
  }

  ws.addEventListener("open", () => {
    console.log("a client connected!");
  });

  ws.addEventListener("message", (event) => {

    if (event.data === "ping") {
      ws.send("pong");
    }
  });

  return response;
});
