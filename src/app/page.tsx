import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { LocationCards } from "@/components/sections/LocationCards";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <TrustBar />
      <ServiceCards />
      <Testimonials />
      <LocationCards />
      <LeadCapture />
      <CTABanner />
    </>
  );
}
