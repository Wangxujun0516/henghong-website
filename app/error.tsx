"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
  _error,
  reset,
}: {
  _error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full bg-cta/10 p-4">
        <AlertTriangle className="h-12 w-12 text-cta" />
      </div>
      <h1 className="mt-6 text-3xl font-bold text-primary sm:text-4xl">
        Something Went Wrong
      </h1>
      <p className="mt-4 max-w-md text-muted">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={() => reset()}
          variant="cta"
          size="lg"
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}