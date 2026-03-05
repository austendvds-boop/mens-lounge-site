"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { type AnalyticsEventName, trackEvent } from "@/lib/analytics";

type TrackedButtonProps = {
  href: string;
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventParams?: Record<string, string>;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
};

export function TrackedButton({
  href,
  children,
  eventName,
  eventParams,
  variant,
  className,
  target,
  rel,
  ariaLabel,
}: TrackedButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      target={target}
      rel={rel}
      ariaLabel={ariaLabel}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </Button>
  );
}

