import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Home";
import About from "./About";
import Faqs from "./Faqs";
import Gallery from "./Gallery";
import Menu from "./Menu";
import Contact from "./Contact";
import Admin from "./Admin";
import { connectSocket, registerPushNotifications } from "./lib/notifications";

const PaymentSuccess = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', background: '#fdf6ec' }}>
    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>✅</div>
    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#2D6A4F', marginBottom: '0.5rem' }}>Payment Successful!</h2>
    <p style={{ color: '#666', marginBottom: '2rem' }}>Your order has been confirmed and is being prepared.</p>
    <a href="/Menu" style={{ background: '#D47C2F', color: 'white', padding: '12px 28px', borderRadius: 50, textDecoration: 'none', fontWeight: 700 }}>Back to Menu</a>
  </div>
);

const PaymentFailed = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', background: '#fdf6ec' }}>
    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>❌</div>
    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#C0392B', marginBottom: '0.5rem' }}>Payment Failed</h2>
    <p style={{ color: '#666', marginBottom: '2rem' }}>Something went wrong with your payment. Please try again.</p>
    <a href="/Menu" style={{ background: '#D47C2F', color: 'white', padding: '12px 28px', borderRadius: 50, textDecoration: 'none', fontWeight: 700 }}>Try Again</a>
  </div>
);

function App() {
  useEffect(() => {
    connectSocket();
    const token = localStorage.getItem("fb_token");
    if (token) {
      registerPushNotifications(token);
    }
  }, []);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { background: "#3B1F0A", color: "#fff", fontWeight: 600, fontSize: "0.9rem", borderRadius: "8px" },
          success: { style: { background: "#2D6A4F" } },
          error: { style: { background: "#C0392B" } },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;