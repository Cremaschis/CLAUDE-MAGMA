import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050505",
        base: "#0A0A0A",
        elevated: "#111111",
        surface: "#1A1A1A",
        "border-base": "#262626",
        "border-strong": "#404040",
        primary: "#FAFAFA",
        secondary: "#C9C9C9",
        tertiary: "#A8A8A8",
        disabled: "#525252",
        brand: {
          DEFAULT: "#FF4500",
          glow: "#FF6B35",
          deep: "#B22222",
          haze: "#FF6B35",
        },
        success: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.75rem, 8vw, 6.5rem)", {
          lineHeight: "0.95",
          letterSpacing: "-0.04em",
          fontWeight: "700",
        }],
        display: ["clamp(2.25rem, 5vw, 4rem)", {
          lineHeight: "1.0",
          letterSpacing: "-0.03em",
          fontWeight: "700",
        }],
        h2: ["clamp(1.875rem, 3.5vw, 3rem)", {
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          fontWeight: "700",
        }],
        h3: ["clamp(1.5rem, 2.5vw, 2rem)", {
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          fontWeight: "600",
        }],
      },
      borderRadius: {
        btn: "10px",
      },
      backgroundImage: {
        "lava-radial": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,69,0,0.12) 0%, transparent 60%)",
        "lava-linear": "linear-gradient(135deg, #FF4500 0%, #B22222 100%)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        "brand-glow": "0 10px 40px -10px rgba(255, 69, 0, 0.4)",
        "premium-card": "inset 0 1px 0 0 rgba(255, 255, 255, 0.04), 0 20px 60px -20px rgba(0, 0, 0, 0.6)",
      },
      backdropBlur: {
        premium: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
