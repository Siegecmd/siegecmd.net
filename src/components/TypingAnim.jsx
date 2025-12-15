import React, { useEffect, useMemo, useRef, useState } from "react";

export default function TypingText({
  text = [],
  typingSpeed = 75,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
  textColors,
  variableSpeed,
}) {
  const lines = useMemo(
    () => (Array.isArray(text) ? text : [String(text)]),
    [text]
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef(null);

  const currentLine = lines[lineIndex] ?? "";
  const currentColor =
    Array.isArray(textColors) && textColors.length
      ? textColors[lineIndex % textColors.length]
      : undefined;

  const getDelay = (base) => {
    if (!variableSpeed) return base;
    const min = Number(variableSpeed.min ?? base);
    const max = Number(variableSpeed.max ?? base);
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  useEffect(() => {
    if (!lines.length) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const done = lineIndex >= lines.length;
    if (done) return;

    if (charIndex < currentLine.length) {
      timeoutRef.current = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, getDelay(typingSpeed));
      return;
    }

    if (lineIndex < lines.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 250);
    } else {
      setLineIndex(lines.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lines, lineIndex, charIndex, currentLine, typingSpeed, variableSpeed]);

  const renderedLines = [];
  for (let i = 0; i < Math.min(lineIndex, lines.length); i++) {
    const color =
      Array.isArray(textColors) && textColors.length
        ? textColors[i % textColors.length]
        : undefined;
    renderedLines.push(
      <span key={`line-${i}`} style={color ? { color } : undefined}>
        {lines[i]}
      </span>
    );
  }

  if (lineIndex < lines.length) {
    renderedLines.push(
      <span
        key={`typing-${lineIndex}`}
        style={currentColor ? { color: currentColor } : undefined}
      >
        {currentLine.slice(0, charIndex)}
      </span>
    );
  }

  const isFinished = lineIndex >= lines.length;

  return (
    <span className={className}>
      {renderedLines.map((node, idx) => (
        <React.Fragment key={idx}>
          {node}
          {idx < renderedLines.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
      {showCursor && !isFinished ? (
        <span className="inline-block align-baseline animate-caretblink">
          {cursorCharacter}
        </span>
      ) : null}
      <style>{`
        @keyframes caretblink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-caretblink { animation: caretblink 1s step-end infinite; }
      `}</style>
    </span>
  );
}
