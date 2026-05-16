import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Home";
import About from "./About";
import Faqs from "./Faqs";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Contact from "./Contact";
import { connectSocket, registerPushNotifications } from "./lib/notifications";

function App() {
  useEffect(() => {
    // Connect Socket.IO — listens for real-time new food notifications
    connectSocket();

    // Register browser push notifications if user is logged in
    const token = localStorage.getItem("fb_token");
    if (token) {
      registerPushNotifications(token);
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Toast notifications — shows in top-right corner */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#3B1F0A",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.9rem",
            borderRadius: "8px",
          },
          success: {
            style: { background: "#2D6A4F" },
            iconTheme: { primary: "#fff", secondary: "#2D6A4F" },
          },
          error: {
            style: { background: "#C0392B" },
            iconTheme: { primary: "#fff", secondary: "#C0392B" },
          },
        }}
      />
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