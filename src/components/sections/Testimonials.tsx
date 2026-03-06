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
            eyebrow="WHAT CLIENTS SAY"
            title="Trusted Across the Valley"
            description="Real feedback from regulars at both shops."
            centered
          />
          <p className="mt-2 text-center text-base text-brand-cream/70">4.9 stars across 300+ reviews</p>
        </MotionReveal>

        <MotionReveal>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-display text-2xl italic leading-relaxed text-brand-cream md:text-3xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-brand-slate">
              — {testimonials[0].author}, {testimonials[0].location}
            </footer>
          </blockquote>
        </MotionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(1, 4).map((testimonial, index) => (
            <MotionReveal key={`${testimonial.author}-${testimonial.quote}`} delayMs={index * 55}>
              <Card className="bg-brand-dark">
                <p className="text-brand-gold">★★★★★</p>
                <p className="mt-3 text-base leading-relaxed text-brand-cream">
                  &ldquo;{testimonial.quote}&rdquo;
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
