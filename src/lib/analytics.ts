"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | "book_now_click"
  | "call_click"
  | "directions_click"
  | "service_view"
  | "contact_form_submit"
  | "faq_expand";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function trackEvent(
  name: AnalyticsEventName,
  params?: Record<string, string>,
) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", name, params);
}

