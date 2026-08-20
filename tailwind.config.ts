import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "Consolas", "'Courier New'", "monospace"],
      },
      colors: {
        term: {
          bg: "#05070a",
          panel: "#0a0e0a",
          border: "#1f3d28",
          green: "#3ef07c",
          dim: "#7fb894",
          cyan: "#00ffc8",
          magenta: "#ff00d4",
        },
      },
      keyframes: {
        "term-blink": { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        "term-scan": { "0%": { top: "-10%" }, "100%": { top: "110%" } },
        "term-glitch": {
          "0%": { transform: "translate(0)" },
          "25%": { transform: "translate(-1px, 1px)" },
          "50%": { transform: "translate(1px, -1px)" },
          "75%": { transform: "translate(-1px, -1px)" },
          "100%": { transform: "translate(0)" },
        },
        "term-reveal": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "term-blink": "term-blink 1s step-end infinite",
        "term-scan": "term-scan 2.4s linear infinite",
        "term-glitch": "term-glitch 0.25s steps(2) infinite",
        "term-reveal": "term-reveal 0.6s ease forwards",
      },
    },
  },
  plugins: [],
}

export default config
