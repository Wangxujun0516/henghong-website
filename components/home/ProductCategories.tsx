"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Settings, Battery, Shield } from "lucide-react";

const categories = [
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Automatic Leveling Systems",
    description: "Precision-engineered 4-point and 6-point automatic leveling systems for RVs and trailers. Smart control integration with OEM electrical systems.",
    products: "HCPSR-6-400, HCPSR-8-400, HCPTR-3",
    link: "/products?category=Automatic+Leveling+Systems",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Electric Trailer Jacks",
    description: "Heavy-duty electric tongue jacks with integrated LED lighting and remote control options. Rated up to 7,500 lbs.",
    products: "HH-2000, HH-3500, HH-7500",
    link: "/products?category=Electric+Trailer+Jacks",
  },
  {
    icon: <Battery className="h-10 w-10" />,
    title: "Hydraulic Leveling Systems",
    description: "High-capacity DC12V hydraulic leveling systems for Class A motorhomes and commercial vehicles. Up to 12T capacity.",
    products: "DC12V 4-Leg 12T, HCPTR-3 6T",
    link: "/products?category=Electric+Hydraulic",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Stabilizer Jacks",
    description: "Manual and electric stabilizer jacks designed for enhanced vehicle stability during setup and parking.",
    products: "HH-400, Scissor Jack, Manual Steel Jack",
    link: "/products?category=Stabilizer+Jacks",
  },
];

export function ProductCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background from video - product showcase */}
      <div className="absolute inset-0">
        <Image src="/images/video-frames/section-products.jpg" alt="Henghong product lineup" fill className="object-cover opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
            Product Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl tracking-tight">
            Comprehensive Product Range
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            From entry-level stabilizers to premium automatic leveling systems — every product engineered for reliability, tested for performance.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-sm">
                {category.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {category.description}
              </p>
              <p className="mt-4 text-xs font-medium text-accent/70">
                Featured: {category.products}
              </p>
              <Link
                href={category.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
              >
                View Products
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
