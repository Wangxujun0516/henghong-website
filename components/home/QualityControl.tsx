"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, TestTube, Eye, Award } from "lucide-react";

const qualityFeatures = [
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Material Testing",
    description: "Every batch of raw materials undergoes rigorous chemical and physical analysis before production approval.",
    metric: "100%",
    metricLabel: "Inspected",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Load Testing",
    description: "Hydraulic cylinders and electric jacks tested to 150% of rated capacity for safety and reliability assurance.",
    metric: "150%",
    metricLabel: "Capacity Tested",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Multi-Stage Inspection",
    description: "Dedicated QC team performs multi-stage visual and dimensional inspections throughout the production process.",
    metric: "4x",
    metricLabel: "Inspection Stages",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certifications",
    description: "ISO 9001:2015, CE, and Intertek third-party verification ensure international quality standards compliance.",
    metric: "3+",
    metricLabel: "Certifications",
  },
];

export function QualityControl() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-20 sm:py-28">
      {/* Background from video - testing / quality control */}
      <div className="absolute inset-0">
        <Image src="/images/video-frames/section-quality.jpg" alt="Quality testing equipment" fill className="object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A1628]/90 via-[#0A1628]/80 to-[#0A1628]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image src="/images/video-frames/section-quality.jpg" alt="Quality control testing" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              Quality Assurance
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
              Uncompromising Quality Standards
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Our dedicated QC team ensures every product meets or exceeds international quality standards before delivery. From incoming material inspection to final product validation.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    {feature.icon}
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-bold text-[#FF6B35]">{feature.metric}</div>
                    <div className="text-xs font-medium text-gray-400">{feature.metricLabel}</div>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-xs text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
