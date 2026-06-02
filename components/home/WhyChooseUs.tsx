import { CheckCircle2 } from "lucide-react";

import { SectionReveal } from "@/components/home/SectionReveal";

const whyChooseUs = [
  "Verified Manufacturing Power: 39,000㎡ modern facility equipped with 7 integrated production lines to ensure stable supply and on-time delivery.",
  "Strong OEM/ODM Capabilities: Backed by a provincial-level R&D center and 21 professional engineers, we provide tailored custom solutions from design to mass production.",
  "Strict Quality Assurance: As an Intertek Verified Supplier with 22 years of industry experience, our dedicated QC team guarantees international standard compliance (ISO9001/CE).",
  "Global Supply Experience: Proven track record of exporting reliable electric jacks and auto-leveling systems to industry leaders across 40+ countries.",
];

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
              Your Trusted Manufacturing Partner for RV & Industrial Equipment
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
            <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/S_UWfbPEHdk"
                title="Inside Henghong: Leading RV Leveling Systems &amp; Electric Jacks Factory"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full border-none"
              ></iframe>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
