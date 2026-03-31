import React from "react";
import { useAnimation } from "../context/AnimationContext";

export default function AnimationToggle() {
  const { animationEnabled, toggleAnimation } = useAnimation();

  return (
    <button
      onClick={toggleAnimation}
      className="fixed bottom-4 right-4 z-50 px-4 py-2 text-sm border transition-all duration-200 backdrop-blur-sm bg-black/40 border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-black/60"
      title="Toggle background animation"
    >
      {animationEnabled ? "Disable Animation" : "Enable Animation"}
    </button>
  );
}
