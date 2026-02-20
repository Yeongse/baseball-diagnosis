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
        paper: {
          DEFAULT: "#FAF6F0",
          light: "#FDFBF7",
          warm: "#F3EDE3",
        },
        ink: {
          DEFAULT: "#1B2838",
          soft: "#2E3E50",
          muted: "#7A8694",
        },
        navy: {
          DEFAULT: "#1B3A5C",
          dark: "#0F2640",
          light: "#2A5A8C",
        },
        gold: {
          DEFAULT: "#C5973E",
          dark: "#A67C2E",
          light: "#DCBA6A",
        },
        // Keep vermillion as secondary accent for CTAs
        vermillion: {
          DEFAULT: "#C93A2D",
          dark: "#A82E23",
          light: "#E8564A",
        },
        field: "#2A5A3B",
        clay: "#B8860B",
        border: "#D6CCBC",
      },
      fontFamily: {
        display: ["'Shippori Mincho B1'", "serif"],
        body: ["'Noto Sans JP'", "sans-serif"],
        accent: ["'DM Serif Display'", "serif"],
      },
      animation: {
        appear: "appear 0.5s ease forwards",
        "appear-up": "appearUp 0.6s ease forwards",
        "slide-in": "slideIn 0.35s ease forwards",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        appearUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-8px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
