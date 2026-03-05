import { locations } from "@/data/locations";
import { SITE_URL } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = locations.map((location) => ({
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: `Men's Lounge Barbershop — ${location.title}`,
    image: `${SITE_URL}${location.image}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLine1,
      addressLocality: location.city,
      addressRegion: "AZ",
      postalCode: location.slug === "norterra" ? "85085" : "85383",
      addressCountry: "US",
    },
    telephone: location.phoneHref.replace("tel:", ""),
    email: location.email,
    url: `${SITE_URL}/#${location.slug}`,
    priceRange: "$$",
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

