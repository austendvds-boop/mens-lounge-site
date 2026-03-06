import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { DiscountBanner } from "@/components/sections/DiscountBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceMenu } from "@/data/services";
import { PRIMARY_BOOKING_URL } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Services & Prices · Men's Lounge Barbershop",
  "Full service menu — haircuts from $23, hot towel shaves, beard trims, kids cuts, and premium packages. Military discounts available.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark py-14 md:py-20">
        <div className="container-shell">
          <MotionReveal>
            <SectionHeading
              eyebrow="Services & Prices"
              title="Choose Your Service"
              description="Straightforward prices. No surprises."
              centered
            />
          </MotionReveal>

          <div className="mt-10 space-y-10">
            {serviceMenu.map((category, index) => (
              <MotionReveal key={category.title} delayMs={index * 70}>
                <section className="motion-surface rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-brand-cream">{category.title}</h2>

                  <div className="mt-5 overflow-hidden rounded-lg border border-brand-gold/20 bg-brand-dark">
                    <table className="w-full border-collapse text-sm md:text-base">
                      <tbody>
                        {category.items.map((item, rowIndex) => (
                          <tr
                            key={item.name}
                            className={`border-brand-gold/10 ${
                              rowIndex % 2 === 0 ? "bg-brand-dark-alt/60" : "bg-brand-dark/80"
                            } border-b last:border-b-0`}
                          >
                            <td className="px-4 py-3 md:px-5">
                              <p className="font-semibold text-brand-cream">{item.name}</p>
                              {item.description ? (
                                <p className="mt-1 text-xs text-brand-slate md:text-sm">{item.description}</p>
                              ) : null}
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-brand-gold md:px-5">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5">
                    <TrackedButton
                      href={PRIMARY_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="book_now_click"
                      eventParams={{ source: "services_page" }}
                    >
                      Book Your Cut
                    </TrackedButton>
                  </div>
                </section>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <DiscountBanner />
      <CTABanner />
    </>
  );
}
