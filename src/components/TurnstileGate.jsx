import React, { useEffect, useRef } from "react";

export default function TurnstileGate({
  onVerifySuccess,
  siteKey = "0x4AAAAAABhwHiKqDAntk13M", // public
  className = "",
}) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const checkReady = setInterval(() => {
      if (
        window.turnstile &&
        widgetRef.current &&
        !widgetRef.current.dataset.rendered
      ) {
        window.turnstile.render(widgetRef.current, {
          sitekey: siteKey,
          theme: "dark",
          size: "normal",
          callback: async (token) => {
            const formData = new FormData();
            formData.append("cf-turnstile-response", token);

            const res = await fetch("/verify", {
              method: "POST",
              body: formData,
            });

            if (res.ok && onVerifySuccess) {
              onVerifySuccess();
            }
          },
        });
        widgetRef.current.dataset.rendered = true;
      }
    }, 200);

    return () => clearInterval(checkReady);
  }, [onVerifySuccess, siteKey]);
  return <div ref={widgetRef} className={`cf-turnstile ${className}`}></div>;
}
