"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

interface ProductInquiryFormProps {
  productName?: string;
}

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="cta" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Request Quote"}
    </Button>
  );
}

export function ProductInquiryForm({ productName }: ProductInquiryFormProps) {
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
        <h3 className="text-xl font-bold text-primary">Quote Request Sent!</h3>
        <p className="mt-2 text-muted">
          Thank you for your inquiry. Our sales team will contact you within 24 hours.
        </p>
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
        <label
          htmlFor="product"
          className="block text-sm font-medium text-primary"
        >
          Product Interest
        </label>
        <input
          id="product"
          name="product"
          type="text"
          defaultValue={productName}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={productName || "Select a product"}
        />
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
          rows={4}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Please describe your requirements, quantity, and any specific customization needs..."
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
