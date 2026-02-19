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
          DEFAULT: "#F5EFE6",
          light: "#FAF7F2",
          warm: "#EDE7DD",
        },
        ink: {
          DEFAULT: "#1A1714",
          soft: "#3D3832",
          muted: "#8C8377",
        },
        vermillion: {
          DEFAULT: "#C93A2D",
          dark: "#A82E23",
          light: "#E8564A",
        },
        field: "#2A5A3B",
        clay: "#B8860B",
        border: "#D1C7B8",
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
