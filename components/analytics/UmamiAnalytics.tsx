"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "f57c2081-9e72-4c14-9895-c13ed5d8a381";

declare global {
  interface Window {
    umami?: {
      track: (
        eventName: string,
        eventData?: Record<string, string | number>,
      ) => void;
    };
  }
}

export function UmamiAnalytics() {
  return (
    <Script
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={UMAMI_SCRIPT_URL}
      strategy="lazyOnload"
    />
  );
}

/**
 * Unified Umami event tracking function.
 * Usage: trackUmamiEvent("form_submit", { type: "contact" })
 */
export function trackUmamiEvent(
  eventName: string,
  eventData?: Record<string, string | number>,
) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(eventName, eventData);
  }
}
