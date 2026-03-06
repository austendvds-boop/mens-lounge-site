import { testimonials } from "@/data/testimonials";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-cream py-14 md:py-20">
      <div className="container-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trusted by Local Clients"
            title="What People Are Saying"
            description="Real feedback from clients across both locations."
            centered
          />
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={`${testimonial.author}-${testimonial.quote}`} delayMs={index * 55}>
              <Card>
                <p className="text-brand-gold">★★★★★</p>
                <p className="mt-3 text-base leading-relaxed text-brand-charcoal">
                  “{testimonial.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-navy">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-brand-slate">
                  {testimonial.location}
                </p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

