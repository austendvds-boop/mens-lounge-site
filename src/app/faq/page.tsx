import type { Metadata } from "next";
import Link from "next/link";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "FAQ · Men's Lounge Barbershop",
  "Common questions about Men's Lounge Barbershop — walk-ins, pricing, payments, hours, and more.",
  "/faq",
);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Quick answers about appointments, pricing, payments, and more."
              centered
            />
          </MotionReveal>

          <MotionReveal delayMs={70} className="mx-auto mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </MotionReveal>

          <MotionReveal delayMs={140} className="mx-auto mt-10 max-w-3xl">
            <div className="motion-surface rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 text-center">
              <h2 className="text-2xl font-bold text-brand-cream">Still have questions?</h2>
              <p className="mt-3 text-brand-slate">Give us a call and we&apos;ll help you out.</p>
              <p className="mt-3 text-sm text-brand-cream">
                Norterra:{" "}
                <a href="tel:+16235563193" className="motion-link inline-block font-semibold text-brand-gold">
                  (623) 556-3193
                </a>{" "}
                · Peoria:{" "}
                <a href="tel:+16234409412" className="motion-link inline-block font-semibold text-brand-gold">
                  (623) 440-9412
                </a>
              </p>
              <Link href="/contact" className="motion-link mt-4 inline-block text-sm font-semibold text-brand-gold underline-offset-4">
                Go to contact page →
              </Link>
            </div>
          </MotionReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
