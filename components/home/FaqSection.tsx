"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are you a manufacturer or trading company?",
    answer:
      "Henghong is an Intertek-Verified Manufacturer with a 39,000㎡ factory in Hangzhou, China. We specialize in OEM/ODM RV leveling systems and electric jacks with 22+ years of export expertise.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "We accept OEM/ODM orders of all sizes. MOQ depends on the product model and customization requirements. Contact our sales team for a detailed quote.",
  },
  {
    question: "Do you offer custom RV leveling system designs?",
    answer:
      "Yes. Our provincial-level R&D center with 21 professional engineers provides full OEM/ODM customization including custom stroke lengths, mounting brackets, voltage configurations (12V/24V DC), and special materials.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping time varies by destination. We have experience exporting to 40+ countries and can arrange FOB/CIF/DDP terms. Typical lead time is 15-30 days after order confirmation.",
  },
  {
    question: "What certifications do your products have?",
    answer:
      "Henghong is ISO9001:2015 certified and Intertek Verified. Our products comply with CE standards and undergo rigorous load-bearing, stress-durability, and salt-spray corrosion testing.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-neutral py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Support
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know about Henghong products and services.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-border bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-primary">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-border px-6 py-4">
                  <p className="text-muted">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
