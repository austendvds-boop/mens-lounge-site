import { CTABanner } from "@/components/sections/CTABanner";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { Hero } from "@/components/sections/Hero";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { LocationCards } from "@/components/sections/LocationCards";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <LeadCapture />
      <ServiceCards />
      <Testimonials />
      <LocationCards />
      <DiscountBanner />
      <CTABanner />
    </>
  );
}
