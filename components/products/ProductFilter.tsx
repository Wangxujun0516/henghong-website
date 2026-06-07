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

  // Group products by category for display
  const groupedProducts = useMemo(() => {
    if (activeCategory !== "All") return null;
    
    const groups: Record<string, Product[]> = {};
    categories.forEach((cat) => {
      groups[cat] = products.filter((p) => p.category === cat);
    });
    return groups;
  }, [activeCategory, categories, products]);

  return (
    <div>
      {/* Filter buttons */}
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
                : "bg-white text-primary hover:bg-accent/10",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grouped display (when "All" is selected) */}
      {groupedProducts && (
        <div className="mt-10 space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-primary">{category}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {groupedProducts[category]?.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filtered display (when a specific category is selected) */}
      {!groupedProducts && (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
