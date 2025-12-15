import React, { useEffect, useRef } from "react";

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  className,
  particleColor = "#FFFFFF",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let raf = 0;
    let particles = [];

    const toRgba = (color, a) => {
      const c = String(color).trim();
      if (c.startsWith("rgba("))
        return c.replace(/rgba\(([^)]+),\s*[^)]+\)/, `rgba($1, ${a})`);
      if (c.startsWith("rgb("))
        return c.replace("rgb(", "rgba(").replace(")", `, ${a})`);
      if (c.startsWith("#")) {
        let hex = c.slice(1);
        if (hex.length === 3)
          hex = hex
            .split("")
            .map((ch) => ch + ch)
            .join("");
        const n = parseInt(hex, 16);
        const r = (n >> 16) & 255;
        const g = (n >> 8) & 255;
        const b = n & 255;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      }
      return `rgba(255, 255, 255, ${a})`;
    };

    const createParticles = () => {
      const w = canvas.width;
      const h = canvas.height;

      const count = Math.floor((w * h) / particleDensity);
      const cols = Math.max(1, Math.floor(Math.sqrt((count * w) / h)));
      const rows = Math.max(1, Math.ceil(count / cols));

      const cellW = w / cols;
      const cellH = h / rows;

      const next = [];
      let idx = 0;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (idx >= count) break;

          const jitterX = (Math.random() - 0.5) * cellW * 0.6;
          const jitterY = (Math.random() - 0.5) * cellH * 0.6;

          next.push({
            x: c * cellW + cellW / 2 + jitterX,
            y: r * cellH + cellH / 2 + jitterY,
            r: Math.random() * (maxSize - minSize) + minSize,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            alpha: Math.random(),
          });

          idx++;
        }
      }

      particles = next;
    };

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      canvas.width = Math.max(1, Math.floor(w));
      canvas.height = Math.max(1, Math.floor(h));

      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += (Math.random() - 0.5) * 0.02;

        if (p.alpha < 0) p.alpha = 0;
        if (p.alpha > 1) p.alpha = 1;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = toRgba(particleColor, p.alpha);
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ background }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
