"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";
import { trackUmamiEvent } from "@/components/analytics/UmamiAnalytics";

const initialState: NewsletterState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
    >
      {pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
}

export function NewsletterSubscribe() {
  const [state, formAction] = useActionState(subscribeNewsletter, initialState);

  useEffect(() => {
    if (state.success) {
      trackUmamiEvent("newsletter_subscribe", { source: "blog_sidebar" });
    }
  }, [state.success]);

  if (state.success) {
    return (
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-center">
          <svg
            className="mx-auto mb-2 h-8 w-8 text-accent"
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
          <p className="text-sm text-gray-700">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
      <p className="mb-4 text-sm text-gray-600">
        Subscribe for the latest industry insights and product updates.
      </p>
      <form action={formAction} className="space-y-3">
        <input
          name="email"
          type="email"
          required
          placeholder="Your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        {state.errors?.email && (
          <p className="text-xs text-red-500">{state.errors.email}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
