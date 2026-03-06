export const PRIMARY_BOOKING_URL =
  "https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix";

const getEnvOrFallback = (value: string | undefined, fallback: string) => {
  if (!value) return fallback;

  const trimmedValue = value.trim();
  return trimmedValue.length > 0 ? trimmedValue : fallback;
};

export const NORTERRA_BOOKING_URL = getEnvOrFallback(
  process.env.NEXT_PUBLIC_SQUIRE_NORTERRA_URL,
  PRIMARY_BOOKING_URL,
);

export const PEORIA_BOOKING_URL = getEnvOrFallback(
  process.env.NEXT_PUBLIC_SQUIRE_PEORIA_URL,
  PRIMARY_BOOKING_URL,
);

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

export const MAP_EMBED_URLS = {
  norterra: getEnvOrFallback(
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_NORTERRA,
    "https://maps.google.com/maps?q=2501%20W%20Happy%20Valley%20Rd%20Phoenix%20AZ%2085085&t=&z=14&ie=UTF8&iwloc=&output=embed",
  ),
  peoria: getEnvOrFallback(
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_PEORIA,
    "https://maps.google.com/maps?q=6791%20W%20Happy%20Valley%20Rd%20Peoria%20AZ%2085383&t=&z=14&ie=UTF8&iwloc=&output=embed",
  ),
} as const;

export const CONTACT_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "https://formspree.io/f/replace-this-id";
