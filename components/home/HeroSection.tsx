"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/company/Overview.jpg"
          alt="Henghong manufacturing facility"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-1 flex-col gap-6 lg:w-3/5"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-semibold uppercase tracking-widest text-accent"
            >
              Intertek Verified Supplier · Since 2004
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              OEM/ODM RV Leveling Systems & Electric Jacks Manufacturer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl text-lg text-white/85 sm:text-xl"
            >
              Intertek Verified Supplier with 22+ Years of Export Expertise. Serving Global RV Manufacturers and Wholesale Distributors in 40+ Countries.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild variant="cta" size="lg" className="w-full sm:w-auto">
                <Link href="/contact#quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white text-white hover:bg-white hover:text-primary sm:w-auto"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden flex-1 lg:block"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/company/Overview.jpg"
                alt="Henghong factory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { value: "22+", label: "Years of Experience" },
            { value: "40+", label: "Countries Served" },
            { value: "39,000", label: "Square Meter Factory" },
            { value: "21", label: "R&D Engineers" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl bg-white/10 backdrop-blur-sm p-6 text-center"
            >
              <p className="text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}