import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // to access the webpage from mobile device
  // i am using the following address of my laptop
  // server: {
  //   host: "192.168.0.195",
  // },
});
