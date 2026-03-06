import { testimonials } from "@/data/testimonials";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-dark-alt py-16 md:py-24">
      <div className="container-shell space-y-10">
        <MotionReveal>
          <SectionHeading
            eyebrow="Trusted by Local Clients"
            title="What the Regulars Say"
            description="Real feedback from people who keep coming back."
            centered
          />
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <MotionReveal key={`${testimonial.author}-${testimonial.quote}`} delayMs={index * 100}>
              <Card>
                <p className="text-brand-gold">{"\u2605\u2605\u2605\u2605\u2605"}</p>
                <p className="mt-3 text-base leading-relaxed text-brand-cream">
                  “{testimonial.quote}”
                </p>
                <p className="mt-4 text-sm font-semibold text-brand-cream">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-brand-slate">
                  {testimonial.location}
                </p>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delayMs={160} className="flex justify-center">
          <Button href="/booking">Book Your Cut</Button>
        </MotionReveal>
      </div>
    </section>
  );
}

