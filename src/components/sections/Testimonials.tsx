import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-cream py-14 md:py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Trusted by Local Clients"
          title="What People Are Saying"
          description="Real feedback from clients across both locations."
          centered
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={`${testimonial.author}-${testimonial.quote}`}>
              <p className="text-brand-gold">★★★★★</p>
              <p className="mt-3 text-base leading-relaxed text-brand-charcoal">
                “{testimonial.quote}”
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-navy">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-brand-slate">
                {testimonial.location}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

