import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0F0F0F",
        "brand-dark-alt": "#1A1A1A",
        "brand-gold": "#C9A84C",
        "brand-gold-light": "#E8C97A",
        "brand-cream": "#F5F0E8",
        "brand-charcoal": "#2A2A2A",
        "brand-slate": "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
