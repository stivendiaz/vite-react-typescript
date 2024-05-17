import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
      manifest: {
        name: "To-Do",
        short_name: "To-Do",
        description: "I'm a simple To-Do app",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        scope: "/",
        start_url: "/vite-react-typescript/",
        orientation: "portrait",
      },
    }),
  ],
  base: "/vite-react-typescript/",
});
