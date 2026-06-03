import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Weight, Maximize2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Model HH-400 | 1000KG Electric Stabilizer Jack for Caravans and Trailers",
  description:
    "The Henghong HH-400 is a compact, high-efficiency 12V DC electric scissor stabilizer jack engineered to eliminate vehicle swaying and rocking.",
};

const productImages = [
  "/products/stabilizer/hh-400-01-main.webp",
  "/products/stabilizer/hh-400-02-angle.webp",
];

const keyAdvantages = [
  {
    icon: Zap,
    title: "Effortless Electric Stabilization",
    description:
      "Powered by a high-torque 12V motor, this jack expands and retracts rapidly via a simple switch, eliminating the physical strain of manual hand-cranking under the trailer chassis.",
  },
  {
    icon: Weight,
    title: "1,000KG Heavy-Duty Support Rating",
    description:
      "Features a premium reinforced steel scissor-arm architecture that provides a solid 1,000KG load capacity per jack to steady the vehicle when parked.",
  },
  {
    icon: Maximize2,
    title: "Low-Profile Compact Blueprint",
    description:
      "Designed with a space-saving, low-profile structure that mounts seamlessly beneath various trailer frames without sacrificing valuable ground clearance during transport.",
  },
  {
    icon: Shield,
    title: "Premium Rust-Resistant Finish",
    description:
      "Fully coated with an industrial-grade, anti-corrosion black powder-coated finish to withstand constant exposure to road debris, mud, and harsh weather.",
  },
];

const technicalSpecs = [
  { parameter: "Model Designation", value: "HH-400" },
  { parameter: "Static Load Capacity", value: "1,000 KG (2,200 lbs) per jack" },
  { parameter: "Operating Voltage", value: "12V DC" },
  { parameter: "Jack Type", value: "Power Scissor Stabilizer Jack" },
  { parameter: "Arm Structural Material", value: "High-Strength Heavy-Gauge Structural Steel" },
  { parameter: "Protective Surface Coating", value: "Rust-Resistant Corrosion-Sealed Black Powder Coat" },
  { parameter: "Main Applications", value: "Caravan Side-to-Side Stabilization & Frame Anchoring" },
];

export default function HH400StabilizerPage() {
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
            <Link href="/products?category=Stabilizer+Jacks" className="hover:text-accent">
              Stabilizer Jacks
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">HH-400</span>
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
                  alt="Henghong HH-400 Electric Stabilizer Jack for Caravans and Trailers"
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
                      alt={`HH-400 view ${i + 1}`}
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
                Stabilizer Jacks · Electric
              </p>
              <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Model HH-400 | 1000KG Electric Stabilizer Jack for Caravans and Trailers
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                The Henghong HH-400 is a compact, high-efficiency 12V DC electric scissor stabilizer
                jack engineered to eliminate vehicle swaying and rocking. Delivering a reliable 1,000KG
                (2,200 lbs) stabilization capacity, this power jack provides secondary leveling and
                firm anchoring for caravans, travel trailers, and lightweight cargo utility trailers,
                ensuring a rock-solid foundation at every stop.
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
                    <span className="text-muted">1,000 KG</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Type:</span>{" "}
                    <span className="text-muted">Scissor Stabilizer</span>
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
                  <h3 className="font-bold text-primary">Custom Frame Mounting Brackets</h3>
                  <p className="mt-2 text-sm text-muted">
                    We can modify the top mounting plate templates and dimensions to fit your
                    proprietary trailer chassis frames or specific OEM assembly lines.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Global Distribution Packages</h3>
                  <p className="mt-2 text-sm text-muted">
                    Available in bulk palletized shipping configurations with customized consumer box
                    printing for global RV aftermarket brands and retail distributors. Fully CE compliant.
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
              "Caravans",
              "Travel Trailers",
              "Lightweight Cargo Trailers",
              "RV Slide-out Support",
              "Trailer Axle Stabilization",
              "Camping Vehicles",
              "Pop-Up Campers",
              "Utility Trailers",
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
