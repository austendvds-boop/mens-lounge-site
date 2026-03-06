import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { INSTAGRAM_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-charcoal bg-brand-dark-alt text-brand-cream">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="font-display text-2xl text-brand-cream">
            Men&apos;s Lounge <span className="text-brand-gold">Barbershop</span>
          </p>
          <p className="max-w-sm text-sm text-brand-slate">
            Classic cuts, hot towel shaves, and beard grooming across two Valley locations.
          </p>
          <Button href="/booking" className="!px-5 !py-2">
            Book Your Cut
          </Button>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Locations & Hours</h3>
          <div className="mt-4 space-y-5 text-sm text-brand-slate">
            <div className="space-y-1">
              <p className="font-semibold text-brand-cream">Norterra</p>
              <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 4:00 PM</p>
              <p>Sun: 10:00 AM – 3:00 PM</p>
              <a href="tel:+16235563193" className="motion-link inline-block text-brand-cream hover:text-brand-gold">
                (623) 556-3193
              </a>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-brand-cream">Peoria</p>
              <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
              <p>Sat: 9:00 AM – 4:00 PM</p>
              <p>Sun: Closed</p>
              <a href="tel:+16234409412" className="motion-link inline-block text-brand-cream hover:text-brand-gold">
                (623) 440-9412
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-slate">
            <li>
              <Link href="/" className="motion-link inline-block hover:text-brand-cream">
                Home
              </Link>
            </li>
            <li>
              <Link href="/locations" className="motion-link inline-block hover:text-brand-cream">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/services" className="motion-link inline-block hover:text-brand-cream">
                Services & Prices
              </Link>
            </li>
            <li>
              <Link href="/booking" className="motion-link inline-block text-brand-gold hover:text-brand-gold-light">
                Book Now
              </Link>
            </li>
            <li>
              <Link href="/contact" className="motion-link inline-block hover:text-brand-cream">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="motion-link inline-block hover:text-brand-cream">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="motion-link inline-block hover:text-brand-cream"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-charcoal py-4 text-center text-xs text-brand-slate">
        © 2026 Men&apos;s Lounge Barbershop. All rights reserved.
      </div>
    </footer>
  );
}
