"use client";

import { motion } from "framer-motion";
import { Cog, Hammer, Wrench, Package } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: <Cog className="h-8 w-8" />,
    title: "CNC Machining",
    description: "Precision CNC machining centers produce high-quality components with tight tolerances",
  },
  {
    step: "02",
    icon: <Hammer className="h-8 w-8" />,
    title: "Assembly",
    description: "Skilled technicians assemble each system following strict quality protocols",
  },
  {
    step: "03",
    icon: <Wrench className="h-8 w-8" />,
    title: "Testing",
    description: "Comprehensive load testing and quality inspections ensure reliability",
  },
  {
    step: "04",
    icon: <Package className="h-8 w-8" />,
    title: "Packaging",
    description: "Export-grade packaging protects products during international shipping",
  },
];

export function ManufacturingProcess() {
  return (
    <section className="bg-[#0A1628] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-[#FF6B35]/20 px-4 py-1.5 text-sm font-medium text-[#FF6B35]">
            Production Process
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            State-of-the-Art Manufacturing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            From raw materials to finished products, every step is executed with precision
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            <div className="hidden absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2 lg:block" />
            
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
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FF6B35]/20 text-[#FF6B35]">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-5xl font-bold text-white/20">{step.step}</span>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        <p className="mt-1 text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF6B35]">
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
          className="mt-16 rounded-2xl bg-white/5 p-8 sm:p-12"
        >
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">ISO 9001:2015</div>
              <p className="mt-2 text-sm text-gray-400">Quality Management System</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">CE Certified</div>
              <p className="mt-2 text-sm text-gray-400">European Compliance</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF6B35]">Intertek Verified</div>
              <p className="mt-2 text-sm text-gray-400">Third-Party Audited</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}