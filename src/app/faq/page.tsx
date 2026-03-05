import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ · Men's Lounge Barbershop",
  description:
    "Common questions about Men's Lounge Barbershop — walk-ins, pricing, payments, hours, and more.",
};

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

      <section className="bg-brand-cream py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers about appointments, pricing, payments, and more."
            centered
          />

          <div className="mx-auto mt-10 max-w-4xl">
            <FAQAccordion items={faqs} />
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl2 border border-brand-navy/15 bg-white p-6 text-center">
            <h2 className="text-2xl font-bold">Still have questions?</h2>
            <p className="mt-3 text-brand-slate">Give us a call and we&apos;ll help you out.</p>
            <p className="mt-3 text-sm text-brand-charcoal">
              Norterra: <a href="tel:+16235563193" className="font-semibold text-brand-navy hover:underline">(623) 556-3193</a> · Peoria: <a href="tel:+16234409412" className="font-semibold text-brand-navy hover:underline">(623) 440-9412</a>
            </p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-brand-navy underline-offset-4 hover:underline">
              Go to contact page →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

