import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/company/Overview.jpg"
          alt="Henghong manufacturing facility"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Intertek Verified Supplier · Since 2004
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          OEM/ODM RV Leveling Systems & Electric Jacks Manufacturer
        </h1>
        <p className="max-w-2xl text-lg text-white/85 sm:text-xl">
          Intertek Verified Supplier with 22+ Years of Export Expertise. Serving Global RV Manufacturers and Wholesale Distributors in 40+ Countries.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="cta" size="lg">
            <Link href="/contact#quote">Get Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            <Link href="/products">View Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
