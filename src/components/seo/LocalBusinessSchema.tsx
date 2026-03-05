import { locations } from "@/data/locations";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/constants";

type LocalBusinessSchemaProps = {
  locationSlug?: "norterra" | "peoria";
};

export function LocalBusinessSchema({ locationSlug }: LocalBusinessSchemaProps) {
  const selectedLocations = locationSlug
    ? locations.filter((location) => location.slug === locationSlug)
    : locations;

  const graph = selectedLocations.map((location) => ({
    "@type": "BarberShop",
    name: location.schemaName,
    image: `${SITE_URL}${location.image}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.addressLine1,
      addressLocality: location.city,
      addressRegion: "AZ",
      postalCode: location.postalCode,
      addressCountry: "US",
    },
    telephone: `+1${location.phoneHref.replace("tel:+1", "")}`,
    email: location.email,
    url: `${SITE_URL}/locations/${location.slug}`,
    openingHoursSpecification: location.openingHoursSpecification.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
    priceRange: "$$",
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    sameAs: [INSTAGRAM_URL],
  }));

  const schema = {
    "@context": "https://schema.org",
    ...(graph.length === 1 ? graph[0] : { "@graph": graph }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
