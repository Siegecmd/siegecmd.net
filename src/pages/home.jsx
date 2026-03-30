import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ASCIIText from "../components/ASCIIText";
import Dither from "../components/Dither";
import GithubIcon from "../img/github.svg?react";
import HtbIcon from "../img/hackthebox.svg?react";
import XIcon from "../img/x.svg?react";
import { useAnimation } from "../context/AnimationContext";

export default function Home() {
  const { animationEnabled } = useAnimation();

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

  return (
    <div className="h-screen bg-black font-sans text-white flex flex-col relative overflow-hidden">
      {/* Dither Background */}
      <Dither
        waveColor={[0.2196078431372549, 0.2196078431372549, 0.2196078431372549]}
        disableAnimation={!animationEnabled}
        enableMouseInteraction={animationEnabled}
        mouseRadius={0.3}
        colorNum={3}
        pixelSize={2}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      {/* Vignette Overlay */}
      <div className="vignette" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />

        <div className="flex-grow flex flex-col items-center justify-center">
          {/* ASCII Text Container */}
          <div className="relative w-full h-72 md:h-96">
            <ASCIIText
              text="siegecmd"
              asciiFontSize={12}
              textFontSize={300}
              textColor="#fdf9f3"
              planeBaseHeight={12}
              enableWaves={false}
            />
          </div>

          {/* Icons */}
          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://github.com/siegecmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <GithubIcon className="h-10 w-10 fill-white drop-shadow-glow" />
            </a>
            <a
              href="https://app.hackthebox.com/profile/769674"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <HtbIcon className="h-10 w-10 text-white fill-white drop-shadow-glow" />
            </a>
            <a
              href="https://x.com/siegecmd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <XIcon className="h-10 w-10 text-white fill-white drop-shadow-glow" />
            </a>
          </div>

          {/* Title underneath icons */}
          <p className="mt-6 text-lg text-white/80 tracking-wide">
            Security Engineer @ Cloudflare
          </p>

          <div
            className="cf-turnstile"
            data-sitekey="0x4AAAAAABhwHiKqDAntk13M"
            data-callback="onTurnstileSuccess"
            data-theme="dark"
            data-size="invisible"
          ></div>
        </div>
      </div>

      <style>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
        }
        
        .vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 20;
        }
      `}</style>
    </div>
  );
}
