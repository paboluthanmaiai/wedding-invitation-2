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
        cream: {
          50: "#FCFAF6",
          100: "#FBF7F0",
          200: "#F5EFE4",
          300: "#EFE6D6",
          400: "#E5D7BF",
          DEFAULT: "#FDFBF7",
          ivory: "#FAF6EE",
        },
        maroon: {
          50: "#F9ECEE",
          100: "#F2CFD4",
          200: "#E39FA9",
          300: "#D36E7E",
          400: "#B83B52",
          500: "#991B33",
          600: "#800020",
          700: "#6B051B",
          800: "#540415",
          900: "#3E020F",
          DEFAULT: "#800020",
          deep: "#5B0616",
        },
        gold: {
          50: "#FCF9EE",
          100: "#F8F1D4",
          200: "#EFE0A3",
          300: "#E5CF72",
          400: "#DCBE46",
          500: "#D4AF37",
          600: "#B99424",
          700: "#917316",
          800: "#6E5610",
          900: "#4F3D0B",
          DEFAULT: "#D4AF37",
          antique: "#C5A059",
          dark: "#A37C2C",
        },
        foliage: {
          50: "#F2F7F3",
          100: "#E1EDE4",
          200: "#C1DBC6",
          300: "#9DC5A5",
          400: "#6EA77A",
          500: "#4A8B58",
          600: "#3D6F47",
          700: "#33593A",
          800: "#2B4730",
          DEFAULT: "#3D5A45",
          dark: "#233A27",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cinzel", "Cormorant Garamond", "serif"],
        display: ["var(--font-display)", "Playfair Display", "Cinzel", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "sans-serif"],
        telugu: ["var(--font-telugu)", "Noto Serif Telugu", "serif"],
      },
      boxShadow: {
        traditional: "0 4px 20px -2px rgba(128, 0, 32, 0.08), 0 2px 6px -1px rgba(212, 175, 55, 0.12)",
        card: "0 10px 30px -5px rgba(91, 6, 22, 0.07), 0 0 0 1px rgba(197, 160, 89, 0.25)",
        gold: "0 0 25px rgba(212, 175, 55, 0.3)",
      },
      keyframes: {
        unfoldLeft: {
          "0%": { transform: "rotateY(0deg)", opacity: "1" },
          "100%": { transform: "rotateY(-110deg)", opacity: "0" },
        },
        unfoldRight: {
          "0%": { transform: "rotateY(0deg)", opacity: "1" },
          "100%": { transform: "rotateY(110deg)", opacity: "0" },
        },
        gentleFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(0.97)" },
        },
      },
      animation: {
        "unfold-left": "unfoldLeft 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "unfold-right": "unfoldRight 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "gentle-float": "gentleFloat 4s ease-in-out infinite",
        flicker: "flicker 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
