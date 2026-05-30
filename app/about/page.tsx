import type { Metadata } from "next";
import Image from "next/image";
import { allAbouts } from "contentlayer/generated";

import { CtaSection } from "@/components/home/CtaSection";
import { SectionReveal } from "@/components/home/SectionReveal";
import { MdxContent } from "@/components/mdx/MdxContent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Henghong Intelligent Equipment — 22+ years of RV leveling system manufacturing and global export expertise.",
};

export default function AboutPage() {
  const about = allAbouts[0];

  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">About Henghong</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            National high-tech enterprise specializing in automatic leveling
            systems and RV intelligent equipment since 2004.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionReveal>
              {about && (
                <div className="prose-henghong">
                  <MdxContent code={about.body.code} />
                </div>
              )}
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/company/Overview.jpg"
                  alt="Henghong factory exterior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </SectionReveal>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-neutral p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <SectionReveal className="mt-16">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
              <Image
                src="/images/company/products.png"
                alt="Henghong product categories"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
