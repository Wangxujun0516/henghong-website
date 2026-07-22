"use client";

import { motion } from "framer-motion";
import { Shield, TestTube, Eye, Award } from "lucide-react";

const qualityFeatures = [
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Material Testing",
    description: "Every batch of raw materials undergoes rigorous chemical and physical analysis",
    metric: "100%",
    metricLabel: "Inspected",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Load Testing",
    description: "Hydraulic cylinders tested to 150% of rated capacity for safety assurance",
    metric: "150%",
    metricLabel: "Capacity",
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Visual Inspection",
    description: "Multi-stage visual inspections catch defects before products leave the factory",
    metric: "4x",
    metricLabel: "Stages",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Certifications",
    description: "ISO 9001, CE, and Intertek verification ensure international quality standards",
    metric: "3+",
    metricLabel: "Certifications",
  },
];

export function QualityControl() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/factory/showroom.jpg"
                alt="Quality control testing"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
              Quality Assurance
            </span>
            <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Uncompromising Quality Standards
            </h2>
            <p className="mt-4 text-lg text-muted">
              Our dedicated QC team ensures every product meets or exceeds international quality standards before delivery.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl bg-neutral p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    {feature.icon}
                  </div>
                  <div className="mt-3">
                    <div className="text-2xl font-bold text-[#FF6B35]">{feature.metric}</div>
                    <div className="text-xs font-medium text-muted">{feature.metricLabel}</div>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-primary">{feature.title}</h3>
                  <p className="mt-1 text-xs text-muted">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}