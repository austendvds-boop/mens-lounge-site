import Image from "next/image";
import { featuredServices } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceCards() {
  return (
    <section id="services" className="bg-brand-dark py-16 md:py-24">
      <div className="container-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="OUR SERVICES"
            title="Look Sharp Every Time"
            description="Precision cuts, clean shaves, and sharp details from barbers who know men&apos;s grooming."
            centered
          />
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.slice(0, 3).map((service, index) => (
            <MotionReveal key={service.title} delayMs={index * 70}>
              <Card className="overflow-hidden p-0 border border-brand-gold/20 hover:border-brand-gold/60 hover:-translate-y-1 transition-all duration-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-brand-cream">{service.title}</h3>
                    <Badge>{service.priceLabel}</Badge>
                  </div>
                  <p className="text-sm text-brand-slate">{service.description}</p>
                </div>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="flex justify-center" delayMs={180}>
          <Button href="/services" variant="secondary">
            See Full Menu
          </Button>
        </MotionReveal>
      </div>
    </section>
  );
}
