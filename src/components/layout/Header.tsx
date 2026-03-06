"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        hasScrolled
          ? "border-brand-gold/15 bg-brand-dark/95 backdrop-blur"
          : "border-transparent bg-transparent",
      )}
    >
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

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="motion-link text-sm font-medium uppercase tracking-[0.1em] text-brand-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/booking" ariaLabel="Book your cut">
            Book Your Cut
          </Button>
        </div>

        <MobileNav links={navLinks} />
      </div>
    </header>
  );
}

