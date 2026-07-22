"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Palette, Cpu, FileText, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Custom Design",
    description: "Full engineering support for custom leveling systems tailored to your specific vehicle requirements",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Smart Integration",
    description: "Seamless integration with existing RV electrical systems and control panels",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Documentation",
    description: "Complete technical documentation including installation manuals and CAD drawings",
  },
  {
    icon: <GitBranch className="h-8 w-8" />,
    title: "Private Label",
    description: "Branding options including custom logos, packaging, and marketing materials",
  },
];

export function OEMCapability() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              OEM / ODM Services
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Your Trusted OEM Partner
            </h2>
            <p className="mt-4 text-lg text-muted">
              With 22 years of export experience and a provincial-level R&D center, we provide complete OEM/ODM solutions for global RV manufacturers and distributors.
            </p>

            <div className="mt-8 space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
                    {capability.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{capability.title}</h3>
                    <p className="mt-1 text-sm text-muted">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                variant="cta"
                size="lg"
                className="text-base font-semibold"
                style={{ backgroundColor: "#FF6B35", borderColor: "#FF6B35" }}
              >
                <Link href="/contact">Request OEM Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base font-semibold"
              >
                <Link href="/documents/Catalog.pdf" target="_blank">
                  Download Catalog
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/factory/workshop.jpg"
                alt="Henghong manufacturing workshop"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl sm:-bottom-8 sm:-left-8">
              <div className="text-4xl font-bold text-[#FF6B35] sm:text-5xl">21</div>
              <p className="mt-1 text-sm font-medium text-primary">R&D Engineers</p>
              <p className="text-xs text-muted">Provincial-level R&D Center</p>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-[#0A1628] p-6 shadow-xl sm:-top-6 sm:-right-6">
              <div className="text-3xl font-bold text-[#FF6B35] sm:text-4xl">30 Days</div>
              <p className="mt-1 text-sm font-medium text-white">OEM Delivery</p>
              <p className="text-xs text-gray-400">Guaranteed Lead Time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}