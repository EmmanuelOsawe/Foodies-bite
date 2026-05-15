import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Faqs from "./Faqs"
import Gallery from "./Gallery"
import Menu from "./Menu"
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;