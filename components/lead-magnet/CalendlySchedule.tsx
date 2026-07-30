"use client";

import { Button } from "@/components/ui/button";
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";

export function CalendlySchedule() {
  return (
    <div className="rounded-lg border border-border bg-white p-5">
      <h3 className="font-semibold text-primary">Schedule a Call</h3>
      <p className="mt-2 text-xs text-muted leading-relaxed">
        Prefer a live conversation? Book a 15-minute call with our sales team to
        discuss your requirements.
      </p>
      <Button asChild variant="cta" size="sm" className="mt-4 w-full">
        <a
          href="https://calendly.com/wangxujun0516/30min"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackUmamiEvent("calendly_click", { source: "contact_page" })
          }
        >
          Schedule a Call
        </a>
      </Button>
    </div>
  );
}
