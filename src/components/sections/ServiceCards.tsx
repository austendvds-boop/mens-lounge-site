import Image from "next/image";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredServices } from "@/data/services";

export function ServiceCards() {
  return (
    <section id="services" className="bg-brand-dark py-16 md:py-24">
      <div className="container-shell space-y-12">
        <MotionReveal>
          <SectionHeading
            eyebrow="Top Services"
            title="Built Around Your Look"
            description="Every service is finished with care, consistency, and the details people notice."
            centered
          />
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <MotionReveal key={service.title} delayMs={index * 100}>
              <article className="motion-surface group relative overflow-hidden rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 space-y-3 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-brand-cream">{service.title}</h3>
                    <Badge>{service.priceLabel}</Badge>
                  </div>
                  <p className="text-sm text-brand-cream/85">{service.description}</p>
                  <a href="/booking" className="motion-link inline-block text-sm font-semibold text-brand-gold">
                    Book This {"\u2192"}
                  </a>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

