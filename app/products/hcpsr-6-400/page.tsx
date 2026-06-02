import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Zap, Thermometer, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Model HCPSR-6 | 12T Heavy-Duty Automatic 4-Point Electric RV Leveling System",
  description:
    "The Henghong HCPSR-6 is a premium, fully automated 4-point electric leveling system engineered for modern motorized and towable RVs.",
};

const productImages = [
  "/products/leveling/hcpsr-6-400-01-main.webp",
  "/products/leveling/hcpsr-6-400-02-angle.webp",
  "/products/leveling/hcpsr-6-400-03-application.webp",
];

const keyAdvantages = [
  {
    icon: Zap,
    title: "One-Touch Intelligent Operation",
    description:
      "Features a user-friendly smart control panel that automatically levels the vehicle with a single press, ensuring effortless operation for end-users.",
  },
  {
    icon: Shield,
    title: "12-Ton Dynamic Lift Capacity",
    description:
      "Manufactured with heavy-gauge, high-strength alloy steel legs to reliably support and stabilize large travel trailers, motorhomes, and special vehicles (rated at 3 Tons per jack).",
  },
  {
    icon: Thermometer,
    title: "All-Weather Industrial Durability",
    description:
      "Equipped with weather-sealed high-torque motors and anti-corrosion protective coatings, proven to perform optimally in extreme outdoor environments ranging from -30°C to 50°C.",
  },
  {
    icon: Lock,
    title: "Comprehensive Safety Architecture",
    description:
      "Integrated automatic safety locks prevent accidental deployment during transit, supplemented by an accessible manual override feature for emergency backup.",
  },
];

const technicalSpecs = [
  { parameter: "Model Designation", value: "HCPSR-6" },
  { parameter: "Configuration", value: "4-Point Automatic Electric System" },
  { parameter: "Total Lifting Capacity", value: "12 Tons (3,000 kg per leg)" },
  { parameter: "Input Voltage", value: "12V DC / 24V DC Optional" },
  { parameter: "Structural Material", value: "High-Strength Heavy-Gauge Alloy Steel" },
  { parameter: "Weatherproofing", value: "IP67 Sealed Motor & Gearbox Assembly" },
  { parameter: "Control Interfaces", value: "Smart LCD Touchpad & Wireless Remote Control" },
];

export default function HCPSR6400Page() {
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
            <span className="text-primary">HCPSR-6</span>
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
                  alt="Henghong HCPSR-6 12T Auto Electric Leveling System"
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
                      alt={`HCPSR-6 product view ${i + 1}`}
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
                Model HCPSR-6 | 12T Heavy-Duty Automatic 4-Point Electric RV Leveling System
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                The Henghong HCPSR-6 is a premium, fully automated 4-point electric leveling system
                engineered for modern motorized and towable RVs. Designed to deliver stable,
                high-precision leveling within minutes via an advanced internal gyroscope and smart
                algorithms, it effectively eliminates chassis strain and ensures maximum safety at the
                campsite.
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
                    <span className="text-muted">12 Ton Total</span>
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
              <p className="mt-4 max-w-2xl mx-auto text-muted">
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
                  <h3 className="font-bold text-primary">Tailored Structural Engineering</h3>
                  <p className="mt-2 text-sm text-muted">
                    We offer fully customizable bracket designs, alternative mounting options, and
                    variable stroke lengths to integrate seamlessly with your proprietary chassis
                    design.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Global Supply Chain Support</h3>
                  <p className="mt-2 text-sm text-muted">
                    Direct factory pricing with flexible MOQ options for global RV manufacturers,
                    caravan bodybuilders, and parts distributors. Complete Intertek test reports, CE,
                    and ISO9001 certifications are readily available upon request.
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
              "Class A Motorhomes",
              "Class B & C Motorhomes",
              "Fifth-Wheel Trailers",
              "Travel Trailers",
              "Toy Haulers",
              "Commercial Trailers",
              "Special Purpose Vehicles",
              "Industrial Applications",
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
