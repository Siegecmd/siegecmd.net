import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimationProvider } from "./context/AnimationContext";
import AnimationToggle from "./components/AnimationToggle";
import Home from "./pages/home";
import TypingTest from "./pages/typing";

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Explicitly load IBM Plex Mono and wait for it
    const loadFonts = async () => {
      try {
        await document.fonts.load('500 16px "IBM Plex Mono"');
        await document.fonts.load('600 200px "IBM Plex Mono"');
      } catch (e) {
        // Font loading might fail, continue anyway
      }
      // Extra check - wait for fonts.ready as well
      await document.fonts.ready;
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <div className="h-screen bg-black" />;
  }

  return (
    <AnimationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typing" element={<TypingTest />} />
        </Routes>
        <AnimationToggle />
      </Router>
    </AnimationProvider>
  );
}

export default App;
