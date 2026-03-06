import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-charcoal bg-brand-dark/95 backdrop-blur-sm">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="motion-surface flex items-center" aria-label="Men's Lounge home">
          <span className="font-display text-xl leading-tight text-brand-cream md:text-2xl">
            Men&apos;s Lounge <span className="text-brand-gold">Barbershop</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="motion-link text-sm font-medium text-brand-cream hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/booking" ariaLabel="Book your cut now">
            Book Now
          </Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}
