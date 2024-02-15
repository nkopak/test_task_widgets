import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const host = "localhost";
const port = 5173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host,
    port,
  },
  build: {
    outDir: "../back-end/wwwroot",
    assetsDir: ".",
  },
  preview: {
    port,
  },
});
