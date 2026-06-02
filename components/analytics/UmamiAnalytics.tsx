"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function UmamiAnalytics() {
  if (!UMAMI_WEBSITE_ID) return null;

  return (
    <Script
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={UMAMI_SCRIPT_URL}
      strategy="lazyOnload"
    />
  );
}