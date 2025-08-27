// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/ReactPortfolio/',
  build: { outDir: 'dist', emptyOutDir: true },
  base: '/ReactPortfolio/',
  plugins: [react()],
  resolve: { alias: { "@": resolve(__dirname, "src") } },
  server: { port: 5173, open: true },
});
