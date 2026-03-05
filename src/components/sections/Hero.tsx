import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PRIMARY_BOOKING_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-28 text-white md:py-36">
      {/* PLACEHOLDER: Replace with owner-supplied photo. Source: https://www.pexels.com/photo/the-interior-of-a-barber-shop-7518728/ */}
      <Image
        src="/images/hero/barbershop-interior-01.jpg"
        alt="Interior of Men's Lounge Barbershop"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-navy/70" />

      <div className="container-shell relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            Men&apos;s Lounge Barbershop
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Phoenix&apos;s Premier Men&apos;s Barbershop
          </h1>
          <p className="mt-5 text-lg text-white/90 md:text-xl">
            Classic cuts. Hot towel shaves. Two locations. Walk-ins welcome.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={PRIMARY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-44"
            >
              Book Your Cut
            </Button>
            <Button
              href="/#services"
              variant="secondary"
              className="min-w-44 border-white bg-white/10 text-white hover:bg-white hover:text-brand-navy"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
