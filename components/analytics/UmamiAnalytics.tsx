"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "f57c2081-9e72-4c14-9895-c13ed5d8a381";

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
