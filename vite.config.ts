import path from "path";
import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // The portfolio is small enough to ship as one JS bundle. Keeping route
    // modules together avoids stale tabs requesting a removed route chunk
    // immediately after a deployment.
    TanStackRouterVite({ target: "react", autoCodeSplitting: false }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
