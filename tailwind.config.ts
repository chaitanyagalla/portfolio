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
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        well: "rgb(var(--color-well) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        fog: "rgb(var(--color-fog) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        dim: "rgb(var(--color-dim) / <alpha-value>)",
        amber: "rgb(var(--color-amber) / <alpha-value>)",
        ok: "rgb(var(--color-ok) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        display: "0em",
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
