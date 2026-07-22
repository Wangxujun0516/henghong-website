"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, Settings, Battery, Shield } from "lucide-react";

const categories = [
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Automatic Leveling Systems",
    description: "Precision-engineered 4-point and 6-point hydraulic leveling systems for RVs and trailers",
    products: "HCPSR-6-400, HCPSR-8-400, HCPTR-3",
    link: "/products?category=Automatic+Leveling+Systems",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: <Truck className="h-10 w-10" />,
    title: "Electric Trailer Jacks",
    description: "Heavy-duty electric tongue jacks with LED lights and remote control options",
    products: "HH-2000, HH-3500, HH-7500",
    link: "/products?category=Electric+Trailer+Jacks",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: <Battery className="h-10 w-10" />,
    title: "Hydraulic Leveling Systems",
    description: "High-capacity hydraulic leveling systems for Class A motorhomes and commercial vehicles",
    products: "DC12V 4-Leg 12T, HCPTR-3 6T",
    link: "/products?category=Electric+Hydraulic",
    color: "from-green-500 to-emerald-700",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Stabilizer Jacks",
    description: "Manual and electric stabilizer jacks for enhanced vehicle stability",
    products: "HH-400, Scissor Jack, Manual Steel Jack",
    link: "/products?category=Stabilizer+Jacks",
    color: "from-purple-600 to-indigo-700",
  },
];

export function ProductCategories() {
  return (
    <section className="bg-neutral py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Product Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Comprehensive Product Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            From entry-level stabilizers to premium automatic leveling systems, we have solutions for every RV application
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                {category.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {category.description}
              </p>
              <p className="mt-3 text-xs font-medium text-accent/70">
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