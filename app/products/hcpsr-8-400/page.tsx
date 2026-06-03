import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Settings2, Scale, CloudRain, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Model HCPSR-8 | 8T High-Capacity Automatic 4-Jack Electric Leveling System",
  description:
    "The Henghong HCPSR-8 is an advanced, high-efficiency 4-jack electric leveling solution custom-engineered for mid-to-heavy travel trailers.",
};

const productImages = [
  "/products/leveling/hcpsr-8-400-01-main.webp",
  "/products/leveling/hcpsr-8-400-02-angle.webp",
  "/products/leveling/hcpsr-8-400-03-installed.webp",
];

const keyAdvantages = [
  {
    icon: Settings2,
    title: "Intelligent Terrain Synchronization",
    description:
      "Equipped with sensitive internal tilt sensors that automatically calculate and balance each jack independently, compensating for complex uneven terrain.",
  },
  {
    icon: Scale,
    title: "8-Ton Stable Support Rating",
    description:
      "Constructed with precision-welded alloy steel columns, providing a dependable 8-Ton dynamic load capacity (rated at 2 Tons per leg) for long-term stabilization.",
  },
  {
    icon: CloudRain,
    title: "Weather-Proofed Infrastructure",
    description:
      "Features fully sealed drive-gear mechanisms and anti-rust surface treatments to ensure reliable outdoor operation across harsh seasonal climates.",
  },
  {
    icon: AlertTriangle,
    title: "Seamless Emergency Manual Override",
    description:
      "Designed with integrated safety mechanisms alongside a highly accessible manual override feature, guaranteeing full control even during total power loss.",
  },
];

const technicalSpecs = [
  { parameter: "Model Designation", value: "HCPSR-8" },
  { parameter: "Configuration", value: "4-Jack Automatic Synchronized Electric System" },
  { parameter: "Total Lifting Capacity", value: "8 Tons (2,000 kg per leg)" },
  { parameter: "Input Voltage", value: "12V DC / 24V DC Optional" },
  { parameter: "Structural Material", value: "High-Strength Precision-Welded Alloy Steel" },
  { parameter: "Weatherproofing", value: "Sealed Drive-Gear & Motor Assembly" },
  { parameter: "Control Interfaces", value: "Smart One-Touch Control Panel & Wireless Remote" },
];

export default function HCPSR8400Page() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-neutral py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted">
            <Link href="/products" className="hover:text-accent">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products?category=Automatic+Leveling+Systems" className="hover:text-accent">
              Automatic Leveling Systems
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">HCPSR-8</span>
          </nav>
        </div>
      </section>

      {/* Product Header & Gallery */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral">
                <Image
                  src={productImages[0]}
                  alt="Henghong HCPSR-8 8T High-Capacity Auto Electric Leveling System"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {productImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral"
                  >
                    <Image
                      src={img}
                      alt={`HCPSR-8 product view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Automatic Leveling Systems · Vertical Type
              </p>
              <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Model HCPSR-8 | 8T High-Capacity Automatic 4-Jack Electric Leveling System
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                The Henghong HCPSR-8 is an advanced, high-efficiency 4-jack electric leveling solution
                custom-engineered for mid-to-heavy travel trailers, fifth wheels, and caravans.
                Utilizing automatic terrain synchronization, this system delivers exceptional stability
                and precise balance in less than 3 minutes, effectively securing your vehicle on
                uneven surfaces.
              </p>

              {/* Quick Specs */}
              <div className="mt-8 grid gap-4 rounded-lg border border-border bg-neutral p-5">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Voltage:</span>{" "}
                    <span className="text-muted">12V / 24V DC</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Capacity:</span>{" "}
                    <span className="text-muted">8 Ton Total</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Stroke:</span>{" "}
                    <span className="text-muted">400 mm</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Material:</span>{" "}
                    <span className="text-muted">Alloy Steel</span>
                  </div>
                </div>
              </div>

              <Button asChild variant="cta" size="lg" className="mt-8 w-full sm:w-auto">
                <Link href="/contact#quote">Request Quote for This Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Engineering Advantages */}
      <section className="bg-neutral py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Engineering Excellence
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Key Engineering Advantages
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {keyAdvantages.map((advantage) => (
              <div
                key={advantage.title}
                className="flex gap-5 rounded-lg bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <advantage.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{advantage.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Technical Data
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Detailed Technical Specifications
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Technical Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {technicalSpecs.map((spec, i) => (
                  <tr key={spec.parameter} className={i % 2 === 0 ? "bg-white" : "bg-neutral"}>
                    <td className="px-6 py-4 text-sm font-medium text-primary">{spec.parameter}</td>
                    <td className="px-6 py-4 text-sm text-muted">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* OEM/ODM Customization */}
      <section className="bg-accent/5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-accent/30 bg-white p-8 sm:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Partnership Opportunities
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                B2B OEM/ODM Customization Capabilities
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-muted">
                We offer comprehensive customization services for global RV manufacturers, caravan
                bodybuilders, and parts distributors.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Flexible Fleet Customization</h3>
                  <p className="mt-2 text-sm text-muted">
                    Full technical support for tailored stroke expansions, specialized mounting
                    brackets, and custom electrical wiring configurations to fit your exact fleet or
                    chassis blueprints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Direct-from-Factory Advantage</h3>
                  <p className="mt-2 text-sm text-muted">
                    Maximize your margins with direct wholesale pricing and scalable production
                    support. Intertek verification, ISO9001 quality compliance, and CE markings are
                    available for global import requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="cta" size="lg">
                <Link href="/contact#quote">Contact Our Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Use Cases
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Ideal Applications
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fifth-Wheel Trailers",
              "Travel Trailers",
              "Mid-to-Heavy Caravans",
              "Toy Haulers",
              "Horse Trailers",
              "Cargo Trailers",
              "Seasonal Campers",
              "Industrial Trailers",
            ].map((app) => (
              <div
                key={app}
                className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3"
              >
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-primary">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
