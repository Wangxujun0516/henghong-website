"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628] py-20 sm:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_20%_50%,#FF6B35_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_80%_50%,#FF6B35_0%,transparent_50%)]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            Ready to Partner
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Start Your OEM Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Whether you need custom leveling systems, private labeling, or technical support, our team is ready to assist
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              variant="cta"
              size="lg"
              className="group text-base font-semibold"
              style={{ backgroundColor: "#FF6B35", borderColor: "#FF6B35", padding: "14px 40px" }}
            >
              <Link href="/contact">
                Request OEM Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white text-base font-semibold"
              style={{ padding: "14px 40px" }}
            >
              <Link href="/documents/Catalog.pdf" target="_blank">
                Download Catalog
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:sales@henghongrv.com"
              className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm font-medium">sales@henghongrv.com</span>
            </a>
            <a
              href="tel:+8615384006618"
              className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">+86 153 8400 6618</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}