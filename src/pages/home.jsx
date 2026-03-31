import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import ASCIIText from "../components/ASCIIText";
import Dither from "../components/Dither";
import GithubIcon from "../img/github.svg?react";
import HtbIcon from "../img/hackthebox.svg?react";
import XIcon from "../img/x.svg?react";
import { useAnimation } from "../context/AnimationContext";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { useGlitch } from "react-powerglitch";

const SIZE_OPTIONS = [10, 30, 50, 100];
const isDev = import.meta.env.DEV;

export default function Home() {
  const { animationEnabled } = useAnimation();

  const [verified, setVerified] = useState(isDev);
  const turnstileRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const glitchOptions = {
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: { duration: 300 },
    glitchTimeSpan: { start: 0, end: 1 },
    shake: { velocity: 15, amplitudeX: 0.3, amplitudeY: 0.3 },
    slice: {
      count: 8,
      velocity: 12,
      minHeight: 0.02,
      maxHeight: 0.2,
      hueRotate: true,
    },
  };

  const githubGlitch = useGlitch(glitchOptions);
  const htbGlitch = useGlitch(glitchOptions);
  const xGlitch = useGlitch(glitchOptions);

  const [testSize, setTestSize] = useState(50);
  const [tick, setTick] = useState(0);
  const [words, setWords] = useState([]);
  const [wordsError, setWordsError] = useState(null);
  const [typed, setTyped] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [startedAt, setStartedAt] = useState(null);
  const [endedAt, setEndedAt] = useState(null);
  const inputRef = useRef(null);
  const wordsLoadedRef = useRef(false);

  useEffect(() => {
    if (isDev) return;

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
        turnstileRef.current &&
        !turnstileRef.current.dataset.rendered
      ) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAABhwHiKqDAntk13M",
          theme: "dark",
          size: "invisible",
          callback: async (token) => {
            const formData = new FormData();
            formData.append("cf-turnstile-response", token);
            const res = await fetch("/verify", {
              method: "POST",
              body: formData,
            });
            if (res.ok) setVerified(true);
          },
        });
        turnstileRef.current.dataset.rendered = "true";
      }
    }, 200);

    return () => clearInterval(checkReady);
  }, []);

  const finished =
    endedAt !== null || (words.length > 0 && currentIndex >= words.length);

  const elapsedMs = useMemo(() => {
    void tick;
    if (!startedAt) return 0;
    return Math.max(0, (endedAt ?? Date.now()) - startedAt);
  }, [startedAt, endedAt, tick]);

  const elapsedSeconds = Math.floor(elapsedMs / 1000);
  const correctWords = results.filter((r) => r.correctWord).length;
  const wrongWords = results.filter((r) => !r.correctWord).length;

  const accuracy = results.length
    ? Math.round((correctWords / results.length) * 100)
    : 100;

  const submittedChars = useMemo(
    () => results.reduce((sum, r) => sum + r.totalChars, 0),
    [results]
  );

  const liveTypedChars = submittedChars + typed.length;

  const rawWpm = useMemo(() => {
    if (!startedAt) return 0;
    const ms = Math.max(1, (endedAt ?? Date.now()) - startedAt);
    const minutes = ms / 60000;
    return Math.round(liveTypedChars / 5 / Math.max(minutes, 1 / 60));
  }, [startedAt, endedAt, liveTypedChars]);

  const focusInput = useCallback(() => {
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 0);
  }, []);

  const restartRunKeepWords = useCallback(() => {
    setTyped("");
    setCurrentIndex(0);
    setResults([]);
    setStartedAt(null);
    setEndedAt(null);
  }, []);

  const loadWords = useCallback(
    async (count) => {
      setWordsError(null);
      try {
        const res = await fetch(`/api/typing-words?count=${count}`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error(`words api failed (${res.status})`);
        const data = await res.json();
        if (!Array.isArray(data.words) || data.words.length === 0) {
          throw new Error("No words returned");
        }
        setWords(data.words);
        wordsLoadedRef.current = true;
        restartRunKeepWords();
      } catch (e) {
        setWordsError(e.message || "Failed to load words");
        wordsLoadedRef.current = false;
      }
    },
    [restartRunKeepWords]
  );

  const restartRunNewWords = useCallback(() => {
    loadWords(testSize);
  }, [loadWords, testSize]);

  useEffect(() => {
    loadWords(testSize);
  }, []);

  useEffect(() => {
    if (verified && !wordsLoadedRef.current) {
      loadWords(testSize);
    }
  }, [verified, loadWords, testSize]);

  function ensureStarted() {
    if (!startedAt) setStartedAt(Date.now());
  }

  useEffect(() => {
    if (!startedAt || endedAt) return;
    const id = setInterval(() => setTick((t) => t + 1), 250);
    return () => clearInterval(id);
  }, [startedAt, endedAt]);

  function submitWord(raw) {
    if (finished || words.length === 0) return;
    ensureStarted();
    const expected = words[currentIndex];
    const actual = raw;
    const correctWord = actual === expected;
    const totalChars = actual.length + 1;
    setResults((prev) => [
      ...prev,
      { expected, actual, correctWord, totalChars },
    ]);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    setTyped("");
    if (nextIndex >= words.length) setEndedAt(Date.now());
  }

  function onKeyDown(e) {
    if (e.key === "Tab" || e.key === "Escape") {
      e.preventDefault();
      restartRunKeepWords();
      return;
    }
    if (finished || words.length === 0) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      submitWord(typed.trim());
    }
  }

  function renderWordWithCaret(expected, actual) {
    const caretIndex = actual.length;
    const maxLen = Math.max(expected.length, actual.length);
    const nodes = [];
    for (let i = 0; i <= maxLen; i++) {
      if (i === caretIndex) {
        nodes.push(
          <span
            key={`caret-${i}`}
            className="inline-block w-[2px] h-[1em] align-baseline bg-white/80 -ml-[1px] animate-caretblink"
          />
        );
      }
      if (i === maxLen) break;
      const exp = expected[i];
      const act = actual[i];
      let cls = "text-gray-200";
      if (act !== undefined)
        cls = act === exp ? "text-green-300" : "text-red-300";
      nodes.push(
        <span key={`c-${i}`} className={cls}>
          {exp ?? act}
        </span>
      );
    }
    return nodes;
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white flex flex-col relative overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Dither
          waveColor={[
            0.2196078431372549, 0.2196078431372549, 0.2196078431372549,
          ]}
          disableAnimation={!animationEnabled}
          enableMouseInteraction={animationEnabled}
          mouseRadius={0.3}
          colorNum={3}
          pixelSize={2}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      <div className="vignette" />
      <div ref={turnstileRef} className="cf-turnstile hidden" />

      <section className="relative z-10 h-screen flex flex-col items-center justify-center">
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

        <div className="relative flex flex-col items-center icons-vignette-container">
          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://github.com/siegecmd"
              target="_blank"
              rel="noopener noreferrer"
              ref={githubGlitch.ref}
              className="icon-glitch"
            >
              <GithubIcon className="h-10 w-10 fill-white" />
            </a>
            <a
              href="https://app.hackthebox.com/profile/769674"
              target="_blank"
              rel="noopener noreferrer"
              ref={htbGlitch.ref}
              className="icon-glitch"
            >
              <HtbIcon className="h-10 w-10 fill-white" />
            </a>
            <a
              href="https://x.com/siegecmd"
              target="_blank"
              rel="noopener noreferrer"
              ref={xGlitch.ref}
              className="icon-glitch"
            >
              <XIcon className="h-10 w-10 fill-white" />
            </a>
          </div>

          <p className="mt-6 text-lg text-white/80 tracking-wide">
            Security Engineer @ Cloudflare
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section
        className="relative z-10 min-h-screen flex items-center justify-center p-4"
        onClick={() => focusInput()}
      >
        <div className="w-full max-w-3xl">
          <Card variant="glass" className="w-full p-6 rounded-2xl">
            <CardHeader className="flex flex-row justify-between p-0 mb-4">
              <h2 className="text-3xl font-bold">Typing Test</h2>
              <div className="text-right">
                <div className="text-sm text-gray-300">RAW WPM</div>
                <div className="text-3xl font-extrabold">{rawWpm}</div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                <div>Time: {elapsedSeconds}s</div>
                <div>Accuracy: {accuracy}%</div>
                <div>Errors: {wrongWords}</div>
                <div>
                  {currentIndex}/{words.length || "—"}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <div className="text-gray-300">Words</div>
                  <div className="flex gap-2">
                    {SIZE_OPTIONS.map((n) => {
                      const active = n === testSize;
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setTestSize(n)}
                          className={`px-3 py-2 rounded-xl border transition ${
                            active
                              ? "bg-black/30 border-black/50"
                              : "bg-black/20 border-black/30 hover:bg-black/30"
                          }`}
                        >
                          {n}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={restartRunNewWords}
                    className="px-4 py-2 border border-black/40 rounded-xl bg-black/20 hover:bg-black/30 transition"
                  >
                    Restart
                  </button>
                </div>
              </div>

              <div className="border border-black/40 rounded-xl p-4 min-h-[120px] bg-black/20">
                {wordsError ? (
                  <div className="text-red-400">{wordsError}</div>
                ) : (
                  <div className="flex flex-wrap gap-3 text-xl leading-relaxed">
                    {words.map((w, i) =>
                      i === currentIndex ? (
                        <span key={i} className="leading-relaxed">
                          {renderWordWithCaret(w, typed)}
                        </span>
                      ) : (
                        <span
                          key={i}
                          className={
                            results[i]
                              ? results[i].correctWord
                                ? "text-green-300"
                                : "text-red-300"
                              : "text-gray-200"
                          }
                        >
                          {w}
                        </span>
                      )
                    )}
                  </div>
                )}
              </div>

              <input
                ref={inputRef}
                value={typed}
                onChange={(e) => {
                  if (!startedAt && !finished) ensureStarted();
                  const v = e.target.value.replace(/\s+/g, "");
                  setTyped(v);
                }}
                onKeyDown={onKeyDown}
                disabled={finished}
                spellCheck={false}
                autoCapitalize="none"
                autoCorrect="off"
                className="w-full mt-4 px-4 py-3 rounded-xl bg-black/40 border border-black/50 focus:outline-none focus:border-black/70"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <style>{`
        @keyframes caretblink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-caretblink { animation: caretblink 1s step-end infinite; }
        .icon-glitch { display: inline-block; }
        .icon-glitch svg {
          filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.2));
          transition: filter 0.15s ease;
        }
        .icon-glitch:hover svg {
          filter:
            drop-shadow(2px 0 0 rgba(255, 0, 0, 0.8))
            drop-shadow(-2px 0 0 rgba(0, 100, 255, 0.8))
            drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
        }
        .vignette {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
          z-index: 5;
        }
        .icons-vignette-container {
          padding: 2rem 3rem;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 80%);
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
