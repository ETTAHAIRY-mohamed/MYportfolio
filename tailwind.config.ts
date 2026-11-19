import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noir profond (fonds)
        ink: {
          950: "#060608",
          900: "#0a0a0e",
          800: "#101015",
          700: "#17171e",
          600: "#1f1f28",
        },
        // Or champagne (accents)
        gold: {
          200: "#f1e3bb",
          300: "#e6cf96",
          400: "#d6b66f",
          500: "#c4a05a",
          600: "#a07f3f",
          700: "#7a5f2d",
        },
        // Ivoire (textes)
        ivory: {
          50: "#faf6ee",
          100: "#f1ebdf",
          200: "#d9d2c3",
          300: "#b3ac9d",
          400: "#8c8678",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
        float: "float 7s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
