export async function onRequestGet(context) {
  return new Response("Auth endpoint is alive", {
    headers: {
      "content-type": "text/plain"
    }
  });
}