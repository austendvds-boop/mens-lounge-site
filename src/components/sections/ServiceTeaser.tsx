import Image from "next/image";
import { featuredServices } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceTeaser() {
  return (
    <section id="services" className="bg-white py-14 md:py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Top Services"
          title="Classic Services, Clean Results"
          description="From precision fades to straight razor shaves, every service is done with care and consistency."
          centered
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <Card key={service.title} className="overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                {/* PLACEHOLDER: Replace with owner-supplied photo. Sources: 12304508, 7697492, 3998421, 7697360 on pexels.com */}
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-brand-navy">{service.title}</h3>
                  <Badge>{service.priceLabel}</Badge>
                </div>
                <p className="text-sm text-brand-slate">{service.description}</p>
                <a href="/#services" className="text-sm font-semibold text-brand-navy hover:underline">
                  Learn More →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
