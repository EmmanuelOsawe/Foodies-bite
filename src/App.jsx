import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;