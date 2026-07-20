"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Factory, Users, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, React.ReactNode> = {
  "Years Experience": <Award className="h-6 w-6" />,
  "Countries Served": <Users className="h-6 w-6" />,
  "Factory Area": <Factory className="h-6 w-6" />,
  "R&D Engineers": <Shield className="h-6 w-6" />,
};

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9]/g, "");
    const suffix = value.replace(/[0-9]/g, "");
    const targetNum = parseInt(numericPart, 10);
    
    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1500, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easeOut * targetNum);
      setDisplayValue(currentNum + suffix);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return <div ref={ref}>{displayValue}</div>;
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-neutral">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {iconMap[stat.label] || <Award className="h-6 w-6" />}
            </div>
            <p className="mt-3 text-2xl font-bold text-primary sm:text-3xl">    
              <AnimatedNumber value={stat.value} />
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}