var __defProp = Object.defineProperty;
var __name = (target, value) =>
  __defProp(target, "name", { value, configurable: true });

// src/worker.js
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return handleApi(request, env);
    }
    if (request.method === "POST" && url.pathname === "/verify") {
      return handleTurnstileVerification(request, env);
    }
    const assetRes = await env.ASSETS.fetch(request);
    if (assetRes.status !== 404) return assetRes;
    const indexReq = new Request(new URL("/", request.url), request);
    return env.ASSETS.fetch(indexReq);
  },
};
async function handleApi(request, env) {
  const url = new URL(request.url);
  if (request.method === "GET" && url.pathname === "/api/typing-words") {
    const count = Math.min(
      parseInt(url.searchParams.get("count") || "50", 10),
      100
    );
    const raw = await env.TYPING_WORDS.get("common_words_v1");
    if (!raw)
      return new Response("Missing common_words_v1 in KV", { status: 500 });
    let list;
    try {
      list = JSON.parse(raw.replace(/^\uFEFF/, ""));
    } catch (e) {
      return new Response(`Invalid KV JSON: ${e.message}`, { status: 500 });
    }
    if (!Array.isArray(list) || list.length === 0) {
      return new Response("Invalid KV data", { status: 500 });
    }
    const out = [];
    const picked = /* @__PURE__ */ new Set();
    while (out.length < count && picked.size < list.length) {
      const w = list[Math.floor(Math.random() * list.length)];
      if (picked.has(w)) continue;
      picked.add(w);
      out.push(w);
    }
    return new Response(JSON.stringify({ words: out }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store",
      },
    });
  }
  return new Response("Not Found", { status: 404 });
}
__name(handleApi, "handleApi");
async function handleTurnstileVerification(request, env) {
  const formData = await request.formData();
  const token = formData.get("cf-turnstile-response");
  if (!token) return new Response("Missing token", { status: 400 });
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: request.headers.get("CF-Connecting-IP") || "",
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  const json = await res.json();
  if (!json.success)
    return new Response("Turnstile verification failed", { status: 403 });
  return new Response("Human verified", { status: 200 });
}
__name(handleTurnstileVerification, "handleTurnstileVerification");
export { worker_default as default };
//# sourceMappingURL=worker.js.map
