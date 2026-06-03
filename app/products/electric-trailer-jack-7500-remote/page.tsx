import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Radio, Weight, Shield, ToggleLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Model HH-7500 Remote | 7500lbs Heavy-Duty 12V Electric Trailer Jack with Wireless Remote",
  description:
    "The Henghong HH-7500 Remote is an ultra-heavy-duty 12V DC power jack designed for commercial, agricultural, and industrial trailers.",
};

const productImages = [
  "/products/electric-jacks/electric-trailer-jack-7500-remote-01-main.webp",
  "/products/electric-jacks/electric-trailer-jack-7500-remote-02-detail.webp",
];

const keyAdvantages = [
  {
    icon: Radio,
    title: "Wireless Remote Control Integration",
    description:
      "Equipped with a secure wireless remote control kit, allowing operators to raise or lower heavy trailer tongues from up to 50 feet away for enhanced situational safety and convenience.",
  },
  {
    icon: Weight,
    title: "7,500 lbs Ultra-Heavy Lift Capacity",
    description:
      "Engineered with reinforced industrial-grade hardened steel gears and a high-torque dual-stage motor, effortlessly handling large equipment haulers, horse trailers, and heavy cargo trailers.",
  },
  {
    icon: Shield,
    title: "Commercial-Grade Anti-Corrosion Protection",
    description:
      "The outer tube features a heavy-duty, weather-resistant textured powder coating, complemented by a zinc-plated heavy steel footpad to withstand brutal job-site environments.",
  },
  {
    icon: ToggleLeft,
    title: "Dual Operating Modes & Safety Lockout",
    description:
      "Supports both wireless remote and manual toggle switch controls, featuring an integrated automatic circuit breaker to protect the motor from unexpected power surges or overloading.",
  },
];

const technicalSpecs = [
  { parameter: "Model Designation", value: "HH-7500 Remote" },
  { parameter: "Maximum Lift Capacity", value: "7,500 lbs (3,401 kg)" },
  { parameter: "Operating Voltage", value: "12V DC Heavy-Duty Motor" },
  { parameter: "Control System", value: "Wireless Remote Control + Manual Toggle Switch" },
  { parameter: "Gear Mechanism", value: "Reinforced Dual-Stage Hardened Steel Gears" },
  { parameter: "Finish Coating", value: "Weather-Sealed Textured Black Powder Coat / Zinc Foot" },
  { parameter: "Applications", value: "Commercial Cargo, Heavy Agriculture & Gooseneck Trailers" },
];

export default function HH7500RemotePage() {
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
            <Link href="/products?category=Electric+Jacks" className="hover:text-accent">
              Electric Jacks
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">HH-7500 Remote</span>
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
                  alt="Henghong HH-7500 Remote Electric Trailer Jack with Wireless Remote"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {productImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral"
                  >
                    <Image
                      src={img}
                      alt={`HH-7500 Remote view ${i + 1}`}
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
                Electric Jacks · Trailer Jack
              </p>
              <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Model HH-7500 Remote | 7500lbs Heavy-Duty 12V Electric Trailer Jack with Wireless Remote
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                The Henghong HH-7500 Remote is an ultra-heavy-duty 12V DC power jack designed for
                commercial, agricultural, and industrial trailers requiring maximum lifting power.
                Delivering a massive 7,500 lbs of lifting capacity, this premium power jack features
                an integrated wireless remote control system, allowing operators to safely manage
                trailer hitching and unhitching from a distance.
              </p>

              {/* Quick Specs */}
              <div className="mt-8 grid gap-4 rounded-lg border border-border bg-neutral p-5">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Voltage:</span>{" "}
                    <span className="text-muted">12V DC</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Capacity:</span>{" "}
                    <span className="text-muted">7,500 lbs</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Control:</span>{" "}
                    <span className="text-muted">Wireless Remote + Manual</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Finish:</span>{" "}
                    <span className="text-muted">Black Powder Coat</span>
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
                  <h3 className="font-bold text-primary">Custom Remote Systems & Wiring</h3>
                  <p className="mt-2 text-sm text-muted">
                    We can customize the wireless frequency, remote control enclosure design, and
                    wiring harness connectors to fit your specific fleet assembly line requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Direct Factory Bulk Supply</h3>
                  <p className="mt-2 text-sm text-muted">
                    As an Intertek Verified Supplier, Henghong offers scalable manufacturing runs
                    with highly competitive factory-direct pricing for international trailer
                    manufacturers and heavy equipment distributors.
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
              "Commercial Cargo Trailers",
              "Heavy Equipment Haulers",
              "Horse Trailers",
              "Agricultural Trailers",
              "Gooseneck Trailers",
              "Industrial Trailers",
              "Construction Trailers",
              "Fleet Operations",
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
