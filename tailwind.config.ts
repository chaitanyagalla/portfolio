import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#131211", // page — warm graphite, not pure black
        well: "#0C0B0A", // terminal inset, darker than the page
        line: "#292621", // hairline rules
        fog: "#E9E6E0", // primary text, warm
        mist: "#A49F96", // secondary text
        dim: "#6F6A61", // tertiary text
        amber: "#E8A33D", // single accent — phosphor amber
        ok: "#8CC97F", // ANSI green, terminal output only
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "-0.035em",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
