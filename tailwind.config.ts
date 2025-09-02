import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        duolingo: {
          green: "#58cc02",
          blue: "#1cb0f6",
          white: "#ffffff",
          gray: "#4b4b4b",
          red: "#ff4b4b",
          yellow: "#ffc800",
          orange: "#ff9600",
          purple: "#ce82ff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
