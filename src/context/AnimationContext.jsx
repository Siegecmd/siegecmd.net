import React, { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const [animationEnabled, setAnimationEnabled] = useState(() => {
    // Check localStorage for saved preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("animationEnabled");
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem("animationEnabled", JSON.stringify(animationEnabled));
  }, [animationEnabled]);

  const toggleAnimation = () => setAnimationEnabled((prev) => !prev);

  return (
    <AnimationContext.Provider
      value={{ animationEnabled, setAnimationEnabled, toggleAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
