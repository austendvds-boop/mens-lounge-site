import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-dark font-semibold hover:bg-brand-gold-light focus-visible:ring-brand-gold",
  secondary:
    "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark focus-visible:ring-brand-gold",
  ghost: "text-brand-cream hover:text-brand-gold focus-visible:ring-brand-gold",
};

const baseClasses =
  "motion-surface inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark active:scale-[0.99]";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  onClick,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (!href) {
    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
