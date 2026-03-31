import { useState, useEffect } from "react";
import { AnimationProvider } from "./context/AnimationContext";
import AnimationToggle from "./components/AnimationToggle";
import Home from "./pages/home";

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await document.fonts.load('500 16px "IBM Plex Mono"');
        await document.fonts.load('600 200px "IBM Plex Mono"');
      } catch (e) {}
      await document.fonts.ready;
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <div style={{ height: "100vh", background: "#000" }} />;
  }

  return (
    <AnimationProvider>
      <Home />
      <AnimationToggle />
    </AnimationProvider>
  );
}

export default App;
