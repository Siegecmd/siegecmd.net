import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import TurnstileGate from "../components/TurnstileGate";
import Navbar from "../components/Navbar";

const SIZE_OPTIONS = [10, 30, 50, 100];

export default function TypingTest() {
  const [verified, setVerified] = useState(false);
  const backgroundUrl = "/bg.svg";

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

  const focusInput = () => {
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const restartRunKeepWords = useCallback(() => {
    setTyped("");
    setCurrentIndex(0);
    setResults([]);
    setStartedAt(null);
    setEndedAt(null);
    focusInput();
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
        restartRunKeepWords();
      } catch (e) {
        setWordsError(e.message || "Failed to load words");
      }
    },
    [restartRunKeepWords]
  );

  const restartRunNewWords = useCallback(() => {
    if (verified) loadWords(testSize);
  }, [verified, loadWords, testSize]);

  useEffect(() => {
    if (verified) loadWords(testSize);
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

    if (nextIndex >= words.length) {
      setEndedAt(Date.now());
    }
  }

  function onKeyDown(e) {
    if (!verified) return;

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
    <div
      className="h-screen overflow-x-hidden bg-black bg-cover bg-center font-sans text-white flex flex-col"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <style>{`
        @keyframes caretblink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .animate-caretblink { animation: caretblink 1s step-end infinite; }
      `}</style>

      <Navbar />

      <div className="flex-grow flex items-center justify-center p-4">
        {!verified ? (
          <TurnstileGate onVerifySuccess={() => setVerified(true)} />
        ) : (
          <div className="bg-glass-black border border-glass backdrop-blur-sm rounded-2xl p-6 max-w-3xl w-full">
            <div className="flex justify-between mb-4">
              <h2 className="text-3xl font-bold">Typing Test</h2>
              <div className="text-right">
                <div className="text-sm text-gray-300">RAW WPM</div>
                <div className="text-3xl font-extrabold">{rawWpm}</div>
              </div>
            </div>

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
                            ? "bg-white/15 border-white/30"
                            : "bg-black/20 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {n}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={restartRunNewWords}
                  className="px-4 py-2 border rounded-xl bg-black/20 hover:bg-white/10 transition"
                >
                  Restart
                </button>
              </div>
            </div>

            <div className="border rounded-xl p-4 min-h-[120px]">
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
              className="w-full mt-4 px-4 py-3 rounded-xl bg-black/40 border"
            />
          </div>
        )}
      </div>
    </div>
  );
}
