import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#1B2A4A",
        "brand-gold": "#C8A96E",
        "brand-cream": "#FAF7F2",
        "brand-charcoal": "#2D2D2D",
        "brand-slate": "#64748B",
        "cta-green": "#1A7A4C",
      },
      boxShadow: {
        card: "0 10px 30px rgba(27, 42, 74, 0.08)",
      },
      borderRadius: {
        xl2: "12px",
      },
    },
  },
  plugins: [],
};

export default config;

