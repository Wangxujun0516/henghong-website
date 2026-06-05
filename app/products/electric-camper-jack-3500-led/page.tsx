import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ProductInquiryForm } from "@/components/products/ProductInquiryForm";
import { CheckCircle2, Lightbulb, Weight, Ruler, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Model HH-3500 Camper | 3500lbs 12V DC Electric A-Frame Tongue Jack with LED Light",
  description:
    "The Henghong HH-3500 Camper is a heavy-duty 12V DC electric tongue jack engineered for rapid, effortless lifting of A-frame travel trailers.",
};

const productImages = [
  "/products/electric-jacks/electric-camper-jack-3500-led-01-main.webp",
  "/products/electric-jacks/electric-camper-jack-3500-led-02-detail.webp",
];

const keyAdvantages = [
  {
    icon: Lightbulb,
    title: "High-Visibility Integrated LED Light",
    description:
      "Equipped with a front-facing, low-draw LED light angled perfectly toward the coupler, ensuring safe and easy nighttime hitching operations at the campsite.",
  },
  {
    icon: Weight,
    title: "3,500 lbs Dependable Lift Capacity",
    description:
      "Built with a premium hardened steel gears and a high-torque 12V motor, providing reliable, efficient vertical lift for mid-sized campers and cargo trailers.",
  },
  {
    icon: Ruler,
    title: "18-Inch Travel & Adjustable Footpad",
    description:
      "Features 14 inches of smooth vertical power travel, combined with an adjustable 8-inch drop-leg footpad to accommodate various towing heights and uneven terrains.",
  },
  {
    icon: Shield,
    title: "Heavy-Duty Weatherproof Shell",
    description:
      "Housed in a water-resistant, UV-stabilized industrial plastic cover with a durable powder-coated outer tube to prevent rust and withstand harsh outdoor elements.",
  },
];

const technicalSpecs = [
  { parameter: "Model Designation", value: "HH-3500 Camper" },
  { parameter: "Lift Capacity", value: "3,500 lbs (1,587 kg)" },
  { parameter: "Input Voltage", value: "12V DC" },
  { parameter: "Travel Stroke", value: "14&quot; Power Travel + 8&quot; Adjustable Drop Leg" },
  { parameter: "Tube Diameter", value: "Standard 2.25&quot; Outer Tube (Fits standard A-frame couplers)" },
  { parameter: "Outer Finish", value: "Durable Textured Black Powder Coating / Zinc Plated Foot" },
  { parameter: "Emergency Backup", value: "Includes Manual Crank Handle Override" },
];

export default function HH3500CamperPage() {
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
            <span className="text-primary">HH-3500 Camper</span>
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
                  alt="Henghong HH-3500 Camper Electric A-Frame Tongue Jack with LED Light"
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
                      alt={`HH-3500 Camper view ${i + 1}`}
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
                Model HH-3500 Camper | 3500lbs 12V DC Electric A-Frame Tongue Jack with LED Light
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                The Henghong HH-3500 Camper is a heavy-duty 12V DC electric tongue jack specifically
                engineered for rapid, effortless lifting and lowering of A-frame travel trailers and
                campers. Delivering 3,500 lbs of robust lifting power, this power jack eliminates
                manual cranking, making hitching and unhitching setups smoother than ever for global
                RV enthusiasts.
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
                    <span className="text-muted">3,500 lbs</span>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Travel:</span>{" "}
                    <span className="text-muted">14&quot; + 8&quot; Drop Leg</span>
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
                  <h3 className="font-bold text-primary">Custom Branding & Styling</h3>
                  <p className="mt-2 text-sm text-muted">
                    We support full OEM private labeling, customized shell colors (Black/White/Custom),
                    and tailored wiring harness lengths to meet your brand&apos;s retail or factory specifications.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-lg bg-neutral p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Wholesale Bulk Supply</h3>
                  <p className="mt-2 text-sm text-muted">
                    Direct manufacturer pricing with stable lead times. We regularly supply global RV parts
                    distributors, online e-commerce brands, and major trailer factories with full ISO9001
                    and CE compliance.
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
              "A-Frame Travel Trailers",
              "Pop-Up Campers",
              "Folding Campers",
              "Small Cargo Trailers",
              "Teardrop Trailers",
              "RV Accessories",
              "Camper Dealerships",
              "Online RV Parts Stores",
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

      {/* Product Inquiry Form */}
      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Get Started
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Request a Quote for HH-3500 Camper
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              Fill out the form below and our sales team will contact you within 24 hours with competitive pricing and lead time information.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-white p-6 sm:p-8">
            <ProductInquiryForm productName="Model HH-3500 Camper | 3500lbs Electric A-Frame Tongue Jack with LED" />
          </div>
        </div>
      </section>
    </div>
  );
}
