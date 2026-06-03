import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        id: "/",
        name: "Foodies-Bite",
        short_name: "Foodies",
        description: "Food ordering platform",
        theme_color: "#ff6b00",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "logo-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "logo-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});