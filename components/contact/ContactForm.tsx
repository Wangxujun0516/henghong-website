"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="cta" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Request OEM Quote"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      trackUmamiEvent("form_submit", { type: "contact_form" });
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
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
        <h3 className="text-xl font-bold text-primary">Message Sent!</h3>
        <p className="mt-2 text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-primary"
          >
            Company Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Enter your company name"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.company && (
            <p className="mt-1 text-xs text-cta">{state.errors.company}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
            Business Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="prefer corporate email (e.g., name@company.com)"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          <p className="mt-1 text-xs text-muted">Suggested: Use corporate email for faster response</p>
          {state.errors?.email && (
            <p className="mt-1 text-xs text-cta">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-primary"
          >
            Country/Region *
          </label>
          <select
            id="country"
            name="country"
            required
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select country/region</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
            <option value="italy">Italy</option>
            <option value="spain">Spain</option>
            <option value="netherlands">Netherlands</option>
            <option value="australia">Australia</option>
            <option value="newzealand">New Zealand</option>
            <option value="japan">Japan</option>
            <option value="southkorea">South Korea</option>
            <option value="other">Other</option>
          </select>
          {state.errors?.country && (
            <p className="mt-1 text-xs text-cta">{state.errors.country}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-primary">
            Product Interested *
          </label>
          <div className="mt-2">
            <select
              id="product"
              name="product"
              required
              className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="">Select product category</option>
              <option value="6t-system">6T Leveling System (HCPTR-3)</option>
              <option value="12t-system">12T Leveling System (DC12V 4-Leg)</option>
              <option value="jacks">Electric Trailer Jacks (HH-2000/HH-3500/HH-7500)</option>
              <option value="stabilizers">Stabilizer Jacks (HH-400/HCPSR Series)</option>
              <option value="oem-odm">OEM/ODM Custom Project</option>
            </select>
          </div>
          {state.errors?.product && (
            <p className="mt-1 text-xs text-cta">{state.errors.product}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-primary"
        >
          Estimated Annual Sourcing Quantity *
        </label>
        <div className="mt-2">
          <select
            id="quantity"
            name="quantity"
            required
            className="w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select annual quantity</option>
            <option value="less-100">&lt; 100 pcs / year</option>
            <option value="100-500">100 - 500 pcs / year</option>
            <option value="500-2000">500 - 2000 pcs / year</option>
            <option value="2000-plus">2000+ pcs / year</option>
          </select>
        </div>
        {state.errors?.quantity && (
          <p className="mt-1 text-xs text-cta">{state.errors.quantity}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          Technical Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Please specify: vehicle type (Travel Trailer/Fifth Wheel/Motorhome), voltage preference (12V/24V), specific specs, or custom requirements..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-cta">{state.errors.message}</p>
        )}
      </div>

      {state.message && !state.success && (
        <p className="text-sm text-cta">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}