import type { Metadata } from "next";
import { TrackedButton } from "@/components/analytics/TrackedButton";
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
      <section className="bg-white py-14 md:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services & Prices"
            title="Choose Your Service"
            description="Straightforward prices. No surprises."
            centered
          />

          <div className="mt-10 space-y-10">
            {serviceMenu.map((category) => (
              <section key={category.title} className="rounded-xl2 border border-brand-navy/15 bg-brand-cream/40 p-6 md:p-8">
                <h2 className="text-2xl font-bold">{category.title}</h2>

                <div className="mt-5 overflow-hidden rounded-lg border border-brand-navy/15 bg-white">
                  <table className="w-full border-collapse text-sm md:text-base">
                    <tbody>
                      {category.items.map((item) => (
                        <tr key={item.name} className="border-b border-brand-navy/10 last:border-b-0">
                          <td className="px-4 py-3 md:px-5">
                            <p className="font-semibold text-brand-charcoal">{item.name}</p>
                            {item.description ? (
                              <p className="mt-1 text-xs text-brand-slate md:text-sm">{item.description}</p>
                            ) : null}
                          </td>
                          <td className="px-4 py-3 text-right font-bold text-brand-navy md:px-5">{item.price}</td>
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
                    Book Now
                  </TrackedButton>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <DiscountBanner />
      <CTABanner />
    </>
  );
}

