import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Palette sampled directly from the Xtreme Motors logo: deep navy
        // body (#081C33), a steel-blue "X" (#4B8ED6) and chrome-white car
        // linework.
        ink: {
          DEFAULT: "#081C33",
          soft: "#11294A",
          line: "#2B3C59",
        },
        paper: {
          DEFAULT: "#F5F6FA",
          dim: "#E7EAF2",
          white: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#4B8ED6",
          light: "#80B0EA",
          dark: "#34659E",
        },
        ash: {
          DEFAULT: "#5B6472",
          light: "#8991A3",
        },
        // Reserved for star ratings only — keeps the universal gold star
        // convention rather than forcing review stars into brand blue.
        gold: {
          DEFAULT: "#F2B84B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        "hero-mobile": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        hero: ["5.5rem", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "hero-xl": ["6.5rem", { lineHeight: "0.96", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(8,28,51,0.04), 0 8px 24px -8px rgba(8,28,51,0.12)",
        lift: "0 20px 60px -20px rgba(8,28,51,0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 1s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
