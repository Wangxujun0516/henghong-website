import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Wrench, Shield, Gauge, Footprints } from "lucide-react";

export const metadata: Metadata = {
  title: "Heavy-Duty RV Scissor Jack / Stabilizer Jack",
  description:
    "Henghong scissor jacks are engineered to provide maximum stability and dependable leveling for travel trailers, campers, and pop-up RVs.",
};

const productImages = [
  "/products/rv-accessories/scissor-jack-01-main.webp",
  "/products/rv-accessories/scissor-jack-01-angle.webp",
];

const keyAdvantages = [
  {
    icon: Wrench,
    title: "High-Tensile Steel Construction",
    description:
      "Manufactured using heavy-gauge, structural-grade steel for maximum rigidity and resistance to bending under peak loads.",
  },
  {
    icon: Shield,
    title: "Anti-Corrosion Black E-Coat",
    description:
      "Finished with a premium, multi-layer black e-coating (electrophoretic coating) providing exceptional rust and weather protection, proven to withstand long-term outdoor exposure.",
  },
  {
    icon: Gauge,
    title: "Smooth Rapid-Extension Mechanism",
    description:
      "Features a precision-machined threaded drive screw that provides effortless and smooth worm-gear extension using a standard crank handle or power drill adapter.",
  },
  {
    icon: Footprints,
    title: "Widened Stabilizing Footprint",
    description:
      "Designed with an oversized, extra-wide steel base foot to ensure secure anchoring on soft terrain like dirt, mud, or gravel.",
  },
];

const technicalSpecs = [
  { parameter: "Rated Lift Capacity", value: "5,000 lbs - 7,500 lbs (2.2T - 3.4T) Per Jack Optional" },
  { parameter: "Extended Height", value: "24 inches to 30 inches (Customizable Range)" },
  { parameter: "Retracted Height", value: "4 inches to 5 inches Low Profile Design" },
  { parameter: "Material", value: "High-Strength Heavy-Gauge Structural Steel" },
  { parameter: "Surface Treatment", value: "Corrosion-Resistant Black Powder / E-Coat Finish" },
  { parameter: "Package Options", value: "Set of 2 / Set of 4 (Includes Speed Crank Handle)" },
];

export default function ScissorJackPage() {
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
            <Link href="/products?category=RV+Accessories" className="hover:text-accent">
              RV Accessories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Scissor Jack</span>
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
                  alt="Henghong Heavy-Duty RV Scissor Jack / Stabilizer Jack"
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
                      alt={`Scissor Jack view ${i + 1}`}
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
                RV Accessories · Scissor
              </p>
              <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Heavy-Duty RV Scissor Jack / Stabilizer Jack
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Henghong scissor jacks are engineered to provide maximum stability and dependable
                leveling for travel trailers, campers, and pop-up RVs. Built from high-tensile
                structural steel, these jacks deliver quick extension and heavy-weight support,
                eliminating vehicle swaying and rocking at the campsite.
              </p>

              {/* Quick Specs */}
              <div className="mt-8 grid gap-4 rounded-lg border border-border bg-neutral p-5">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Capacity:</span>{" "}
                    <span className="text-muted">5,000-7,500 lbs</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Height:</span>{" "}
                    <span className="text-muted">4&quot;-30&quot; Adjustable</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Material:</span>{" "}
                    <span className="text-muted">Structural Steel</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Finish:</span>{" "}
                    <span className="text-muted">Black E-Coat</span>
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
              Key Engineering Features
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
              Technical Specifications
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Parameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Industrial Specification</th>
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
                  <h3 className="font-bold text-primary">Custom Branding & OEM Manufacturing</h3>
                  <p className="mt-2 text-sm text-muted">
                    We support bulk custom branding, private labeling, and custom color/coating
                    options for global RV parts brands and automotive distributors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Factory-Direct Wholesale Pricing</h3>
                  <p className="mt-2 text-sm text-muted">
                    22+ years of manufacturing experience as an Intertek Verified Supplier. We
                    provide stable supply chain guarantees, flexible MOQs, and comprehensive
                    ISO9001 quality management standard documentation for worldwide shipping.
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
              "Travel Trailers",
              "Fifth Wheels",
              "Pop-Up Campers",
              "Caravans",
              "Motorhomes",
              "Utility Trailers",
              "RV Leveling",
              "Emergency Support",
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