import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SparklesCore } from "./Sparkles";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `text-sm transition-opacity duration-200 ${
      pathname === path
        ? "font-bold text-white opacity-100"
        : "text-gray-200 opacity-70 hover:opacity-90"
    }`;

  return (
    <div className="sticky top-4 z-50 mx-auto w-fit">
      <div className="relative w-fit flex flex-col items-center">
        <nav className="relative bg-glass-black border border-glass backdrop-blur-sm shadow-glass rounded-xl px-6 py-2 flex gap-6 justify-center w-fit text-white z-10">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/typing" className={linkStyle("/typing")}>
            Typing
          </Link>
        </nav>

        <div className="relative w-full h-6 mt-1 pointer-events-none overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[80%] blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[80%]" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[4px] w-[40%] blur-sm" />
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[40%]" />

          <SparklesCore
            minSize={0.4}
            maxSize={1}
            particleDensity={1100}
            className="absolute inset-0 w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 [mask-image:radial-gradient(120px_20px_at_top,transparent_10%,black)]" />
        </div>
      </div>
    </div>
  );
}
