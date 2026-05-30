"use client";

import { useMemo, useState } from "react";
import type { Product } from "contentlayer/generated";

import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";

export function ProductFilter({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-neutral text-primary hover:bg-accent/10",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
