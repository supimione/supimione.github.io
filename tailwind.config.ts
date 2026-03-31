import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: "#4ade80",
        darkBg: "#0a0a0a",
        darkSurface: "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        mono: ["'Fira Code'", "'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(74,222,128,0.5)",
        "neon-sm": "0 0 10px rgba(74,222,128,0.3)",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
