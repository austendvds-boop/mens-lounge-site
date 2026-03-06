import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata(
    "Men's Lounge Barbershop · Phoenix & Peoria",
    "Phoenix's premier men's barbershop. Classic cuts, hot towel shaves, walk-ins welcome. Two locations on Happy Valley Rd. Book online now.",
    "/",
  ),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-brand-dark">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero/barbershop-interior-01.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-brand-dark font-body text-brand-cream`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-dark-alt focus:px-4 focus:py-2 focus:text-brand-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

