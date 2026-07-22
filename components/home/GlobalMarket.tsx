"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, MapPin } from "lucide-react";

const regions = [
  { name: "North America", countries: "USA, Canada, Mexico", percent: 45, color: "bg-blue-500" },
  { name: "Europe", countries: "Germany, UK, France, Italy", percent: 30, color: "bg-green-500" },
  { name: "Asia Pacific", countries: "Australia, Japan, South Korea", percent: 15, color: "bg-orange-500" },
  { name: "Others", countries: "Middle East, South America", percent: 10, color: "bg-purple-500" },
];

const partners = [
  { name: "Thor Industries", country: "USA" },
  { name: "Forest River", country: "USA" },
  { name: "Grand Design", country: "USA" },
  { name: "Heartland RV", country: "USA" },
];

export function GlobalMarket() {
  return (
    <section className="bg-neutral py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Global Reach
          </span>
          <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
            Trusted by RV Brands Worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            Exporting to 40+ countries with established partnerships and distribution networks
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Market Distribution</h3>
            </div>
            
            <div className="mt-6 space-y-4">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-primary">{region.name}</span>
                      <p className="text-xs text-muted">{region.countries}</p>
                    </div>
                    <span className="text-lg font-bold text-[#FF6B35]">{region.percent}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                      className={`h-full ${region.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-primary">Trusted Partners</h3>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-neutral p-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-bold">{partner.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{partner.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted">
                      <MapPin className="h-3 w-3" />
                      {partner.country}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#FF6B35]/5 p-4 text-center">
                <TrendingUp className="mx-auto h-6 w-6 text-[#FF6B35]" />
                <div className="mt-2 text-2xl font-bold text-primary">40+</div>
                <p className="text-xs text-muted">Countries</p>
              </div>
              <div className="rounded-xl bg-[#FF6B35]/5 p-4 text-center">
                <Globe className="mx-auto h-6 w-6 text-[#FF6B35]" />
                <div className="mt-2 text-2xl font-bold text-primary">22+</div>
                <p className="text-xs text-muted">Years Export</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}