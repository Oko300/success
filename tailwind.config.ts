import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        surface: "#111113",
        "surface-elevated": "#18181b",
        border: "#27272a",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        "muted-foreground": "#71717a",
        accent: "#3b82f6",
        "accent-hover": "#2563eb",
      },
    },
  },
  plugins: [],
};
export default config;
