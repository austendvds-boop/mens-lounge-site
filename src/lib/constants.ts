export const PRIMARY_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUIRE_NORTERRA_URL ??
  "https://getsquire.com/booking/book/mens-lounge-barbershop-norterra-phoenix";

export const PEORIA_BOOKING_URL =
  process.env.NEXT_PUBLIC_SQUIRE_PEORIA_URL ?? PRIMARY_BOOKING_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mensloungebarbershop.com";

export const INSTAGRAM_URL =
  "https://www.instagram.com/mens_lounge_barbershop_az/";

export const MAPS_URLS = {
  norterra:
    "https://maps.google.com/?q=2501+W+Happy+Valley+Rd+Phoenix+AZ+85085",
  peoria: "https://maps.google.com/?q=6791+W+Happy+Valley+Rd+Peoria+AZ+85383",
};

