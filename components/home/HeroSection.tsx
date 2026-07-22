"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [dataSaverMode, setDataSaverMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".hero-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-data: reduce)");
    setDataSaverMode(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setDataSaverMode(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current && !dataSaverMode) {
      videoRef.current.play().catch(() => {});
    }
  }, [isVisible, dataSaverMode]);

  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-[#0A1628] text-white">
      <div className="absolute inset-0">
        {!dataSaverMode && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/hero-loop-poster.jpg"
            preload="metadata"
            disablePictureInPicture
            style={{ opacity: isVisible ? 0.6 : 0, transition: "opacity 1s ease-out" }}
          >
            <source
              src="/videos/hero-loop.mp4"
              type="video/mp4"
              media="(min-width: 768px)"
            />
            <source
              src="/videos/hero-loop.mp4"
              type="video/mp4"
              media="(max-width: 767px)"
            />
          </video>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/85 to-[#0A1628]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
        
        {dataSaverMode && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(/videos/hero-loop-poster.jpg)`,
              opacity: 0.4
            }}
          />
        )}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="flex flex-1 flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Reliable RV Electric Jack &
              <br />
              Leveling System Manufacturer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <p className="text-lg text-gray-300 sm:text-xl">
                22 Years Manufacturing Experience
              </p>
              <p className="text-lg text-gray-300 sm:text-xl">
                100,000+ Units Annual Production
              </p>
              <p className="text-lg text-gray-400 sm:text-xl">
                OEM / ODM Solutions for Global RV Brands
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 gap-4 py-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-bold">
                  ✔
                </span>
                <span className="text-sm text-gray-300 font-medium">22 Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-bold">
                  ✔
                </span>
                <span className="text-sm text-gray-300 font-medium">39,000㎡ Factory</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-bold">
                  ✔
                </span>
                <span className="text-sm text-gray-300 font-medium">100,000+ Annual Capacity</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-bold">
                  ✔
                </span>
                <span className="text-sm text-gray-300 font-medium">OEM / ODM</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                asChild
                variant="cta"
                size="lg"
                className="w-full text-base font-semibold sm:w-auto"
                style={{ backgroundColor: "#FF6B35", borderColor: "#FF6B35", padding: "14px 32px" }}
              >
                <Link href="/contact">Request OEM Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/60 text-white hover:bg-white/10 hover:text-white text-base font-semibold sm:w-auto"
                style={{ padding: "14px 32px" }}
              >
                <Link href="/documents/Catalog.pdf" target="_blank" rel="noopener noreferrer">
                  Download Catalog
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}