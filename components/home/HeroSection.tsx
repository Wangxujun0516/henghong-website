"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const heroImages = [
  { src: "/images/factory/factory-complex.jpg", alt: "Henghong factory complex - 39,000㎡ facility" },
  { src: "/images/factory/showroom.jpg", alt: "Henghong product showroom" },
  { src: "/images/factory/workshop.jpg", alt: "Henghong CNC workshop and production line" },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F172A] text-white">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-40" : "opacity-0"
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E3A5F]/95 to-[#0F172A]/80" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-1 flex-col gap-6 lg:w-3/5"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
            >
              Reliable RV Leveling System Manufacturer for Global RV Brands
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-lg text-gray-400 sm:text-xl"
            >
              20+ years manufacturing experience | OEM/ODM custom solutions | CE & ISO9001 compliant | Exporting to 40+ countries
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-3 gap-4 py-4"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-[#FF6B35]">50,000+</span>
                <span className="text-sm text-gray-400 mt-1">Systems/Year</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-[#FF6B35]">30-Day</span>
                <span className="text-sm text-gray-400 mt-1">OEM Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-[#FF6B35]">39,000㎡</span>
                <span className="text-sm text-gray-400 mt-1">Factory Layout</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                variant="cta"
                size="lg"
                className="w-full text-lg sm:w-auto"
                style={{ backgroundColor: "#FF6B35", borderColor: "#FF6B35" }}
              >
                <Link href="/contact">Request OEM Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white text-white hover:bg-white hover:text-primary text-lg sm:w-auto"
              >
                <Link href="/products">Download 2026 Catalog (PDF)</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="hidden flex-1 lg:block"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {heroImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}