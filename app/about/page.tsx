import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/home/CtaSection";
import { Factory, Users, Award, Shield, Cog, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Intertek Verified RV Equipment Manufacturer",
  description:
    "Henghong RV Equipment: An Intertek-Verified Manufacturer with 39,000㎡ facility, 100+ skilled staff, and ISO9001:2015 certification for global RV OEMs and distributors.",
};

const factoryStats = [
  { value: "Est. 2014", label: "Over a decade of specialized B2B manufacturing excellence.", icon: Award },
  { value: "39,000 ㎡", label: "Expansive modern production workshops and raw material warehousing.", icon: Factory },
  { value: "100+ Staff", label: "Highly skilled production operators and certified technical specialists.", icon: Users },
  { value: "ISO9001:2015", label: "Fully integrated Quality Management System supervising every batch.", icon: Shield },
];

const capabilities = [
  {
    title: "Full-Cycle OEM/ODM Support",
    description: "On-site verification confirms our ability to handle custom structural designs, 3D prototyping, customized chassis mounting brackets, and custom stroke length development for heavy-duty leveling systems.",
  },
  {
    title: "Advanced Machinery",
    description: "Utilizing high-precision industrial laser cutters, heavy-tonnage CNC stamping machines, automated robotic welding stations, and specialized weather-resistant powder coating lines.",
  },
  {
    title: "Rigorous Quality Testing",
    description: "Every electric jack and leveling ram undergoes strict load-bearing and stress-durability testing. Salt-spray testing is regularly performed to ensure extreme outdoor anti-corrosion compliance.",
  },
];

const galleryImages = [
  { src: "/images/company/factory-front-view.webp", alt: "Factory Front View" },
  { src: "/images/company/cnc-workshop.webp", alt: "CNC Workshop" },
  { src: "/images/company/robotic-welding.webp", alt: "Robotic Welding Station" },
  { src: "/images/company/finished-product-warehouse.webp", alt: "Finished Product Warehouse" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Image
              src="/images/certifications/intertek-verified.svg"
              alt="Intertek Verified Supplier"
              className="h-12 w-12 rounded"
              width={48}
              height={48}
            />
            <span className="text-sm font-semibold uppercase tracking-wide">Intertek Verified Supplier</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Henghong RV Equipment: An Intertek-Verified Manufacturer Driven by Quality Engineering
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            National high-tech enterprise specializing in automatic leveling systems and RV intelligent equipment.
            Certified by Intertek through rigorous on-site factory audit.
          </p>
        </div>
      </section>

      {/* Verified Factory Statistics */}
      <section className="bg-neutral py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Verified Factory Metrics
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Trusted Manufacturing Excellence
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {factoryStats.map((stat) => (
              <div
                key={stat.value}
                className="group rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering & Customization Capabilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Engineering Excellence
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Core Engineering & Customization (OEM/ODM) Capabilities
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="flex gap-5 rounded-xl border border-border bg-neutral p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Cog className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{capability.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Photo Gallery */}
      <section className="bg-neutral py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Factory Tour
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Intertek-Audited Facilities
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-sm font-medium text-white">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 text-center sm:p-12">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white">
                <FileCheck className="h-8 w-8" />
              </div>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-primary sm:text-3xl">
              Want to review our full on-site capability?
            </h2>
            <p className="mt-4 text-muted">
              Download our official Intertek-verified factory audit report to see our complete manufacturing capabilities and quality certifications.
            </p>
            <Button asChild variant="cta" size="lg" className="mt-6">
              <Link href="/documents/intertek-factory-audit-report.pdf">
                Download Our Verified Factory Audit Report (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}