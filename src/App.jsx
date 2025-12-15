import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TypingTest from "./pages/typing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typing" element={<TypingTest />} />
      </Routes>
    </Router>
  );
}

export default App;
