import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { INSTAGRAM_URL, PRIMARY_BOOKING_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-navy text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xl font-extrabold tracking-wide text-brand-gold">MEN&apos;S LOUNGE</p>
          <p className="max-w-sm text-sm text-white/85">
            Classic cuts. Modern style. Two Phoenix-area locations.
          </p>
          <Button
            href={PRIMARY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="!px-5 !py-2"
          >
            Book Now
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/90">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#locations">Locations</Link></li>
            <li><Link href="/#services">Services & Prices</Link></li>
            <li><Link href="/#testimonials">Reviews</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-sm text-white/90">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Contact
          </h3>
          <p>Norterra: <a href="tel:+16235563193" className="hover:underline">(623) 556-3193</a></p>
          <p>Peoria: <a href="tel:+16234409412" className="hover:underline">(623) 440-9412</a></p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-block hover:underline">
            Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/15 py-4 text-center text-xs text-white/70">
        © 2026 Men&apos;s Lounge Barbershop. All rights reserved.
      </div>
    </footer>
  );
}

