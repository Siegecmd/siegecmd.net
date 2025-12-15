import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import GithubIcon from "../img/github.svg?react";
import HtbIcon from "../img/hackthebox.svg?react";
import XIcon from "../img/x.svg?react";
import TypingText from "../components/TypingAnim";

export default function Home() {
  const containerRef = useRef(null);
  const backgroundUrl = "/bg.webp";

  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="challenges.cloudflare.com"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      if (containerRef.current) {
        containerRef.current.style.backgroundPosition = `calc(50% + ${x}%) calc(50% + ${y}%)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-black bg-cover bg-center font-sans text-white transition-all duration-100 ease-out flex flex-col"
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "50% 50%",
      }}
    >
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full flex flex-col items-center">
          <div className="bg-glass-black border border-glass backdrop-blur-sm rounded-2xl p-8 w-full text-white shadow-glass text-center">
            <h1 className="text-4xl font-bold mb-4">siegecmd.net</h1>

            <div className="text-lg mb-6 relative">
              <div className="opacity-0 pointer-events-none select-none leading-relaxed">
                Sometimes I make things, most times I break things.
                <br />
                Security Engineer @ Cloudflare
              </div>

              <div className="absolute inset-0">
                <TypingText
                  text={[
                    "Sometimes I make things, most times I break things.",
                    "Security Engineer @ Cloudflare",
                  ]}
                  typingSpeed={60}
                  showCursor={true}
                  cursorCharacter="|"
                  className="leading-relaxed"
                />
              </div>
            </div>

            <div className="flex justify-center gap-8 mb-6">
              <a
                href="https://github.com/siegecmd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-8 w-8 fill-white hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://app.hackthebox.com/profile/769674"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HtbIcon className="h-8 w-8 fill-white hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://x.com/siegecmd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XIcon className="h-8 w-8 fill-white hover:scale-110 transition-transform" />
              </a>
            </div>

            <div
              className="cf-turnstile"
              data-sitekey="0x4AAAAAABhwHiKqDAntk13M"
              data-callback="onTurnstileSuccess"
              data-theme="dark"
              data-size="invisible"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
