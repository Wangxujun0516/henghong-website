import Link from "next/link";
import type { Product } from "contentlayer/generated";

import { ProductCard } from "@/components/products/ProductCard";
import { SectionReveal } from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";

export function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Our Products
              </p>
              <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                Featured Leveling & Stabilizer Systems
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <SectionReveal key={product.slug} delay={index * 0.08}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
