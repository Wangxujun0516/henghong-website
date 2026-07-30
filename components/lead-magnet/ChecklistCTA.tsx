import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ChecklistCTA() {
  return (
    <div className="mt-12 rounded-xl border-2 border-accent/20 bg-accent/[0.03] p-8 text-center sm:p-10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <svg
          className="h-7 w-7 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
        Free OEM Sourcing Checklist
      </h3>
      <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
        A practical 6-step checklist covering capacity calculation,
        certification verification, supplier qualification, and logistics
        planning — designed for RV OEM buyers and procurement teams.
      </p>
      <div className="mt-6">
        <Button asChild variant="cta" size="lg">
          <Link href="/contact#checklist">Download Free Checklist</Link>
        </Button>
      </div>
      <p className="mt-3 text-xs text-muted">
        No spam. Your information will not be shared with third parties.
      </p>
    </div>
  );
}
