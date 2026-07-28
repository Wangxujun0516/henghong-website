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
            poster="/images/video-frames/section-stats.jpg"
            preload="metadata"
            disablePictureInPicture
            aria-hidden="true"
            style={{ opacity: isVisible ? 0.8 : 0, transition: "opacity 1s ease-out" }}
          >
            <source src="/videos/henghong.mp4" type="video/mp4" />
          </video>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/70 via-[#0A1628]/50 to-[#0A1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-[#0A1628]/30 to-transparent" />
        
        {dataSaverMode && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(/images/video-frames/section-stats.jpg)`,
              opacity: 0.4
            }}
          />
        )}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-1 flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 px-4 py-1.5 text-sm font-medium text-[#FF6B35]"
            >
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#FF6B35]" />
              22 Years OEM Experience · Intertek Verified · CE Certified
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Reliable RV Leveling Solutions<br />
              for Global RV Manufacturers
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-base text-gray-300 sm:text-lg leading-relaxed">
                Since 2004, Henghong has been the OEM partner of choice for RV manufacturers worldwide. 
                Our 39,000 m² Intertek-verified facility with 21 R&amp;D engineers delivers 
                100,000+ units annually — ISO 9001:2015, CE certified, and customized to your specifications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 gap-x-8 gap-y-3 py-6 max-w-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]/20">
                  <svg className="h-4 w-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">OEM/ODM Custom Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]/20">
                  <svg className="h-4 w-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">Prototype in 90 Days</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]/20">
                  <svg className="h-4 w-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">Low MOQ (100 pcs)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF6B35]/20">
                  <svg className="h-4 w-4 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-sm text-gray-300 font-medium">After-Sales Support</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row pt-2"
            >
              <Button
                asChild
                size="lg"
                className="w-full text-base font-semibold sm:w-auto bg-[#FF6B35] hover:bg-[#FF5A20] text-white border-0 shadow-lg shadow-[#FF6B35]/20"
                style={{ padding: "14px 32px" }}
              >
                <Link href="/contact">Request OEM Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/40 text-white hover:bg-white/10 hover:text-white text-base font-semibold sm:w-auto"
                style={{ padding: "14px 32px" }}
              >
                <Link href="/documents/Catalog.pdf" target="_blank" rel="noopener noreferrer">
                  Download Product Catalog
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
