"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cog, Hammer, Wrench, Package } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: <Cog className="h-8 w-8" />,
    title: "CNC Precision Machining",
    description: "Advanced CNC machining centers produce high-quality components with tight tolerances. Raw materials undergo rigorous inspection before processing.",
  },
  {
    step: "02",
    icon: <Hammer className="h-8 w-8" />,
    title: "Professional Assembly",
    description: "Skilled technicians assemble each system following strict quality protocols. Every unit is built to OEM specifications with full traceability.",
  },
  {
    step: "03",
    icon: <Wrench className="h-8 w-8" />,
    title: "Comprehensive Testing",
    description: "Every system undergoes comprehensive load testing and quality inspections at 150% of rated capacity to ensure reliability and safety compliance.",
  },
  {
    step: "04",
    icon: <Package className="h-8 w-8" />,
    title: "Export-Grade Packaging",
    description: "Products are packaged using export-grade materials designed to protect during international shipping. Custom packaging options available for OEM partners.",
  },
];

export function ManufacturingProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Background from video - CNC machining / production */}
      <div className="absolute inset-0">
        <Image src="/images/video-frames/section-process.jpg" alt="CNC precision machining" fill className="object-cover opacity-[0.03]" />
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
            Production Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl tracking-tight">
            State-of-the-Art Manufacturing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            From raw material to finished product, every step of our manufacturing process is executed with precision and quality control
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex items-center gap-8 lg:grid lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:text-right" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2 lg:text-right" : ""}`}>
                    <div className={`inline-flex items-center gap-4 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-5xl font-bold text-gray-200">{step.step}</span>
                        <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-accent">
                          <div className="h-2 w-2 rounded-full bg-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-border bg-neutral p-8 sm:p-12"
        >
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">ISO 9001:2015</div>
              <p className="mt-2 text-sm text-muted">Quality Management System</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">CE Certified</div>
              <p className="mt-2 text-sm text-muted">European Compliance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">Intertek Verified</div>
              <p className="mt-2 text-sm text-muted">Third-Party Factory Audit</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
