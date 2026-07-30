"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  submitDownloadForm,
  type DownloadFormState,
} from "@/app/actions/download-checklist";
import { Button } from "@/components/ui/button";

const initialState: DownloadFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="cta"
      size="lg"
      disabled={pending}
      className="w-full"
    >
      {pending ? "Sending..." : "Download OEM Sourcing Checklist"}
    </Button>
  );
}

export function ChecklistDownload() {
  const [state, formAction] = useActionState(submitDownloadForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && state.message) {
      window.open(state.message, "_blank");
      formRef.current?.reset();
    }
  }, [state.success, state.message]);

  if (state.success) {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
          <svg
            className="h-6 w-6 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Download Started!</h3>
        <p className="mt-2 text-sm text-muted">
          Your OEM Sourcing Checklist should open in a new tab. If not,{" "}
          <a
            href="/documents/oem-sourcing-checklist.html"
            className="text-accent hover:underline"
          >
            click here to download
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="dl-company"
            className="block text-sm font-medium text-primary"
          >
            Company Name *
          </label>
          <input
            id="dl-company"
            name="company"
            type="text"
            required
            placeholder="Your company name"
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.company && (
            <p className="mt-1 text-xs text-cta">{state.errors.company}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="dl-email"
            className="block text-sm font-medium text-primary"
          >
            Business Email *
          </label>
          <input
            id="dl-email"
            name="email"
            type="email"
            required
            placeholder="name@company.com"
            className="mt-1 w-full rounded-md border border-border bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-cta">{state.errors.email}</p>
          )}
        </div>
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-cta">{state.message}</p>
      )}

      <SubmitButton />

      <p className="text-center text-xs text-muted">
        We respect your privacy. Your information will not be shared with third
        parties.
      </p>
    </form>
  );
}
