export const PRIMARY_BOOKING_URL =
  "https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix";

export const NORTERRA_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUIRE_NORTERRA_URL ?? PRIMARY_BOOKING_URL;

export const PEORIA_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUIRE_PEORIA_URL ?? PRIMARY_BOOKING_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mensloungebarbershop.com";

export const SITE_NAME = "Men's Lounge Barbershop";

export const INSTAGRAM_URL =
  "https://www.instagram.com/mens_lounge_barbershop_az/";

export const BRAND_COLORS = {
  navy: "#1B2A4A",
  gold: "#C8A96E",
  cream: "#FAF7F2",
  charcoal: "#2D2D2D",
  slate: "#64748B",
  ctaGreen: "#1A7A4C",
} as const;

export const MAPS_URLS = {
  norterra:
    "https://maps.google.com/?q=2501+W+Happy+Valley+Rd+Phoenix+AZ+85085",
  peoria: "https://maps.google.com/?q=6791+W+Happy+Valley+Rd+Peoria+AZ+85383",
} as const;
