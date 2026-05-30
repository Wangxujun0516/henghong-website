"use client";

import Script from "next/script";

const UMAMI_SCRIPT_URL = "https://cloud.umami.is/script.js";
const UMAMI_WEBSITE_ID = "1190f21a-0c1f-42f7-a153-ab58ad1826f6";

export function UmamiAnalytics() {
  return (
    <>
      <Script
        defer
        data-website-id={UMAMI_WEBSITE_ID}
        src={UMAMI_SCRIPT_URL}
        strategy="lazyOnload"
      />
    </>
  );
}