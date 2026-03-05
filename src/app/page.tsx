import { CTABanner } from "@/components/sections/CTABanner";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { Hero } from "@/components/sections/Hero";
import { LocationCards } from "@/components/sections/LocationCards";
import { ServiceTeaser } from "@/components/sections/ServiceTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <LocationCards />
      <ServiceTeaser />
      <Testimonials />
      <DiscountBanner />

      <section id="faq" className="bg-white py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Quick Answers Before You Book"
            centered
          />
          <div className="mx-auto mt-8 grid max-w-4xl gap-4">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="rounded-xl border border-brand-navy/15 bg-brand-cream/60 p-4">
                <summary className="cursor-pointer list-none font-semibold text-brand-navy">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-brand-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

