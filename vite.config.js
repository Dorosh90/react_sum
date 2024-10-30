
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

  export default defineConfig(() => {
    return {
      base: "/",
      plugins: [react()],
      preview: {
        port: 3000,
        strictPort: true,
      },
      server: {
        port: 3000,
        strictPort: true,
        host: true,
        // open: true,
      },
    };
  });
