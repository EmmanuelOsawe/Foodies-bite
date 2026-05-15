import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Faqs from "./Faqs"
import Gallery from "./Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;