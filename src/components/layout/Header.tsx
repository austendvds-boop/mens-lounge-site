import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PRIMARY_BOOKING_URL } from "@/lib/constants";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/#locations" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-navy/10 bg-white/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Men's Lounge home">
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
              className="text-sm font-medium text-brand-charcoal transition hover:text-brand-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={PRIMARY_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="Book your cut now"
          >
            Book Now
          </Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}

