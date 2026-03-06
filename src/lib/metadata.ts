import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const SOCIAL_IMAGE = "/images/og-image.jpg";

export function buildPageMetadata(title: string, description: string, path = "/"): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;

  return {
    title,
    description,
    alternates: { canonical: normalizedPath },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: "Men's Lounge Barbershop",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
