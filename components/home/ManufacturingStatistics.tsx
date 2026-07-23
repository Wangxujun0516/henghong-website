"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Factory, Users, Award, TrendingUp } from "lucide-react";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#FF6B35] sm:text-5xl lg:text-6xl whitespace-nowrap">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export function ManufacturingStatistics() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-20 sm:py-28">
      {/* Background image from video - factory scale/facility overview */}
      <div className="absolute inset-0">
        <Image src="/images/video-frames/section-stats.jpg" alt="Henghong manufacturing facility" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/90 to-[#0A1628]" />
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
            Manufacturing Capability
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
            Industrial Scale &amp; Production Capacity
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            State-of-the-art manufacturing facility with vertically integrated production lines spanning 39,000 m²
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            {
              icon: <Factory className="h-8 w-8" />,
              value: 39000,
              suffix: " m²",
              label: "Factory Area",
              description: "Modern manufacturing facility"
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              value: 100000,
              suffix: "+",
              label: "Annual Output",
              description: "Units produced yearly"
            },
            {
              icon: <Users className="h-8 w-8" />,
              value: 21,
              suffix: "",
              label: "R&D Engineers",
              description: "Provincial-level R&D center"
            },
            {
              icon: <Award className="h-8 w-8" />,
              value: 22,
              suffix: "+",
              label: "Years Experience",
              description: "Export expertise since 2004"
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-accent border border-white/10">
                {stat.icon}
              </div>
              <div className="mt-4">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-lg font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] sm:text-4xl whitespace-nowrap">7</div>
              <p className="mt-2 text-lg font-medium text-white">Production Lines</p>
              <p className="mt-1 text-sm text-gray-400">Vertically integrated manufacturing</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] sm:text-4xl whitespace-nowrap">30 Days</div>
              <p className="mt-2 text-lg font-medium text-white">OEM Delivery</p>
              <p className="mt-1 text-sm text-gray-400">Lead time guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] sm:text-4xl whitespace-nowrap">40+</div>
              <p className="mt-2 text-lg font-medium text-white">Export Countries</p>
              <p className="mt-1 text-sm text-gray-400">Global market reach</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
