"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingQuoteCTA() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        href="/contact#quote"
        className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-cta/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <MessageSquareQuote className="h-4 w-4" />
        Get Quote
      </Link>
    </motion.div>
  );
}
