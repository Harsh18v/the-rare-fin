import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E14",        // near-black, primary text/dark sections
        "ink-2": "#141A24",    // raised dark surface
        paper: "#FFFFFF",      // primary background
        mist: "#F2F6FB",       // light blue-tinted surface
        line: "#E1E8F0",       // hairline borders on white
        blue: "#0B5FCE",       // primary brand blue
        "blue-deep": "#083E8C",// darker blue for hovers/depth
        sky: "#4FB6E8",        // secondary bright accent (rarity/highlight)
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
