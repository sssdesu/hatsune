// vite.config.ts or vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  // If this is a *project* page: set to "/your-repo-name/"
  // If this is "username.github.io": set to "/"
  base: "/your-repo-name/",
  plugins: [react(), tailwindcss({ config: path.resolve(__dirname, "tailwind.config.cjs") })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  // Building into docs/ so Pages can serve from main branch
  build: { outDir: "docs" },
});
