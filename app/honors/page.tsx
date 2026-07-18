import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionReveal } from "@/components/home/SectionReveal";
import { honors } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Honors & Certifications",
  description:
    "National and provincial science & technology awards recognizing Henghong's innovation in intelligent leveling systems.",
  alternates: {
    canonical: "https://www.henghongrv.com/honors",
  },
};

export default function HonorsPage() {
  return (
    <div className="bg-neutral">
      <nav className="border-b border-border bg-white px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm">
          <Link href="/" className="text-accent hover:underline">Home</Link>
          <span className="text-muted">/</span>
          <span className="text-primary">Honors</span>
        </div>
      </nav>
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Honors & Certifications
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Recognized for innovation in electro-hydraulic servo leveling systems
            and intelligent energy-saving technologies.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {honors.map((award, index) => (
              <SectionReveal key={award.title} delay={index * 0.1}>
                <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-neutral">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent">
                      {award.year} · {award.organization}
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-primary">
                      {award.title}
                    </h2>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
