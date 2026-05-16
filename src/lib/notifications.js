// src/lib/notifications.js
import { io } from "socket.io-client";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000";

// ─── Socket.IO ────────────────────────────────────────────────────────────────
let socket = null;

export const connectSocket = () => {
  if (socket?.connected) return;

  socket = io(API_URL);

  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("new_food_notification", (data) => {
    // No JSX — use plain toast with string content
    toast(
      `🍽️ ${data.title} — ${data.message} (Tap to view menu)`,
      {
        duration: 8000,
        style: {
          background: "#3B1F0A",
          color: "#fff",
          fontWeight: 600,
          fontSize: "0.9rem",
          borderRadius: "8px",
          cursor: "pointer",
        },
        onClick: () => { window.location.href = "/Menu"; },
      }
    );
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
};

export const disconnectSocket = () => {
  if (socket) { socket.disconnect(); socket = null; }
};

// ─── Web Push ─────────────────────────────────────────────────────────────────
const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
};

export const registerPushNotifications = async (token) => {
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
    console.warn("Push notifications not supported.");
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register("/sw.js");
    console.log("Service worker registered");

    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      console.warn("Push permission denied.");
      return;
    }

    const keyRes = await fetch(`${API_URL}/api/notifications/vapid-public-key`);
    const { publicKey } = await keyRes.json();

    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });

    await fetch(`${API_URL}/api/notifications/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ subscription }),
    });

    console.log("Push notifications enabled");
  } catch (error) {
    console.error("Push registration error:", error);
  }
};