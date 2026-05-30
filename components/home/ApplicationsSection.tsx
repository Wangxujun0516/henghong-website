import Image from "next/image";

import { SectionReveal } from "@/components/home/SectionReveal";

const applications = [
  {
    title: "Towable RVs",
    description: "Travel trailers and fifth-wheel campers requiring stable auto-leveling.",
    image: "/images/applications/Folded-Auto-Leveling-System.jpg",
  },
  {
    title: "Motorized RVs",
    description: "Class A, B, and C motorhomes with heavy-duty leveling demands.",
    image: "/images/applications/Vertical-Auto-Leveling-System.png",
  },
  {
    title: "Commercial & Special Vehicles",
    description: "Industrial equipment and specialty vehicles needing precision support.",
    image: "/images/company/use-cases.png",
  },
];

export function ApplicationsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Applications
          </p>
          <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Solutions for Every Vehicle Type
          </h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {applications.map((app, index) => (
            <SectionReveal key={app.title} delay={index * 0.1}>
              <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary">{app.title}</h3>
                  <p className="mt-2 text-sm text-muted">{app.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
