import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { SectionReveal } from "@/components/home/SectionReveal";
import { whyChooseUs } from "@/lib/site-config";

export function WhyChooseUs() {
  return (
    <section className="bg-neutral py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionReveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Why Choose Henghong
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Engineered for Global RV & Industrial Markets
            </h2>
            <ul className="mt-8 space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/company/oem.avif"
                alt="Henghong OEM and ODM manufacturing capabilities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
