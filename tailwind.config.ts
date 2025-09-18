import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E3000F",
          blue: "#2563EB",
          yellow: "#FFCE14",
          sky: "#0A9CF9",
          gray: "#E5EBF0",
          surface: "#FFFCFB",
          text: "#3A3A3A"
        }
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;
