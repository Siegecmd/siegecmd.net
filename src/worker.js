export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/verify") {
      return handleTurnstileVerification(request, env);
    }

    return fetch(request);
  },
};

async function handleTurnstileVerification(request, env) {
  const formData = await request.formData();
  const token = formData.get("cf-turnstile-response");
  if (!token) return new Response("Missing token", { status: 400 });

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") || "",
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  const json = await res.json();
  if (!json.success) return new Response("Turnstile verification failed", { status: 403 });
  return new Response("Human verified", { status: 200 });
}
