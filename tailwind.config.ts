import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0F0F0F",
        "brand-gold": "#C9A962",
        "brand-cream": "#F5F5F0",
        "brand-charcoal": "#1A1A1A",
        "brand-slate": "#A0A0A0",
        "brand-dark": "#0F0F0F",
        "brand-dark-alt": "#1A1A1A",
        "brand-gold-hover": "#D4B872",
        "brand-gold-muted": "rgba(201, 169, 98, 0.15)",
      },
      fontFamily: {
        body: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 22px 40px -28px rgba(0, 0, 0, 0.9)",
        "gold-glow": "0 0 20px rgba(201, 169, 98, 0.3)",
      },
      borderRadius: {
        xl2: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

