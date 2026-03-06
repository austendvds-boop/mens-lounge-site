import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Services", href: "/services" },
  { label: "Book Now", href: "/booking" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-navy/10 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="motion-surface flex items-center gap-3" aria-label="Men's Lounge home">
          {/* PLACEHOLDER: Replace with owner-supplied logo */}
          <Image
            src="/images/logo.svg"
            alt="Men's Lounge Barbershop logo"
            width={128}
            height={52}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="motion-link text-sm font-medium text-brand-charcoal hover:text-brand-navy"
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

