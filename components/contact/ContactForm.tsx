"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  product: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  country: "",
  product: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent(
      `Quote Request from ${form.company || form.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nCountry: ${form.country}\nProduct Interest: ${form.product}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/5 p-8 text-center">
        <h3 className="text-xl font-bold text-primary">Thank You!</h3>
        <p className="mt-2 text-muted">
          Your email client should open shortly. If it doesn&apos;t, email us
          directly at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-accent hover:underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-primary">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-primary">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-primary">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          value={form.product}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Select a product</option>
          <option value="Automatic Leveling Systems">Automatic Leveling Systems</option>
          <option value="Stabilizer Jacks">Stabilizer Jacks</option>
          <option value="OEM/ODM Custom">OEM/ODM Custom</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-border px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {error && <p className="text-sm text-cta">{error}</p>}

      <Button type="submit" variant="cta" size="lg">
        Send Quote Request
      </Button>
    </form>
  );
}
