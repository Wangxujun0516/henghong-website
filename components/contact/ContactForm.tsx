"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="cta" size="lg" disabled={pending}>
      {pending ? "Sending..." : "Request Factory-Direct Quote"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
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
            htmlFor="name"
            className="block text-sm font-medium text-primary"
          >
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.name && (
            <p className="mt-1 text-xs text-cta">{state.errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
          {state.errors?.email && (
            <p className="mt-1 text-xs text-cta">{state.errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-primary"
          >
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-primary"
          >
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-primary">
          Product Interest *
        </label>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            { value: "automatic-leveling", label: "Automatic Leveling Systems (HCPSR/HH Series)" },
            { value: "electric-jacks", label: "Electric Trailer Jacks & Stabilizers" },
            { value: "rv-accessories", label: "Integrated RV Accessories (Bike Racks/Ladders/Steps)" },
            { value: "oem-odm", label: "Pure OEM/ODM Private Label Project" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 rounded-md border border-border px-4 py-3 cursor-pointer hover:border-accent hover:bg-accent/5 transition-colors"
            >
              <input
                type="checkbox"
                name="product"
                value={option.value}
                className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
        {state.errors?.product && (
          <p className="mt-1 text-xs text-cta">{state.errors.product}</p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="volume"
            className="block text-sm font-medium text-primary"
          >
            Anticipated Initial Volume *
          </label>
          <select
            id="volume"
            name="volume"
            required
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select volume</option>
            <option value="trial">
              Trial / Fleet Evaluation (< 50 units)
            </option>
            <option value="wholesale">
              Commercial Wholesale / Container Load (50+ units)
            </option>
          </select>
          {state.errors?.volume && (
            <p className="mt-1 text-xs text-cta">{state.errors.volume}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="shipping"
            className="block text-sm font-medium text-primary"
          >
            Preferred Shipping Terms
          </label>
          <select
            id="shipping"
            name="shipping"
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="">Select shipping terms</option>
            <option value="FOB">FOB</option>
            <option value="CIF">CIF</option>
            <option value="EXW">EXW</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Please include preferred voltage (12V/24V), dimensions, or custom specifications here..."
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
