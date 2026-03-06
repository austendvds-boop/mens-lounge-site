import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-sm font-semibold text-brand-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
