import Image from "next/image";

import { SectionReveal } from "@/components/home/SectionReveal";
import { partners } from "@/lib/site-config";

export function PartnersSection() {
  return (
    <section className="border-y border-border bg-neutral py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Trusted Partners
          </p>
          <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
            Serving Industry Leaders Worldwide
          </h2>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-2 items-center gap-8 md:grid-cols-4">
          {partners.map((partner, index) => (
            <SectionReveal
              key={partner.name}
              delay={index * 0.08}
              className="flex items-center justify-center"
            >
              <div className="relative h-16 w-full max-w-[160px] grayscale transition-all hover:grayscale-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
