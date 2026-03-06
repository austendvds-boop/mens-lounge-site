import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "motion-surface rounded-xl2 border border-brand-gold/20 bg-brand-dark-alt p-6 shadow-card",
        className,
      )}
    >
      {children}
    </article>
  );
}

