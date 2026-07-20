"use client";

import { Check, X } from "lucide-react";
import React, { useMemo, useState } from "react";
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
  const [selectedVoltages, setSelectedVoltages] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("default");

  const allVoltages = useMemo(() => {
    const voltages = new Set<string>();
    products.forEach((p) => {
      if (p.voltage) voltages.add(p.voltage);
    });
    return Array.from(voltages);
  }, [products]);

  const allCapacities = useMemo(() => {
    const capacities = new Set<string>();
    products.forEach((p) => {
      if (p.capacity?.system) capacities.add(p.capacity.system);
    });
    return Array.from(capacities);
  }, [products]);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "All") {
      result = result.filter((product) => product.category === activeCategory);
    }

    if (selectedVoltages.length > 0) {
      result = result.filter((product) =>
        selectedVoltages.includes(product.voltage || "")
      );
    }

    if (selectedCapacities.length > 0) {
      result = result.filter((product) =>
        selectedCapacities.includes(product.capacity?.system || "")
      );
    }

    switch (sortBy) {
      case "name-asc":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result = [...result].sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "capacity":
        result = [...result].sort((a, b) => {
          const capA = parseInt((a.capacity?.system || "").replace(/[^0-9]/g, "")) || 0;
          const capB = parseInt((b.capacity?.system || "").replace(/[^0-9]/g, "")) || 0;
          return capB - capA;
        });
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, selectedVoltages, selectedCapacities, sortBy, products]);

  const groupedProducts = useMemo(() => {
    if (activeCategory !== "All" || selectedVoltages.length > 0 || selectedCapacities.length > 0) {
      return null;
    }

    const groups: Record<string, Product[]> = {};
    categories.forEach((cat) => {
      groups[cat] = products.filter((p) => p.category === cat);
    });
    return groups;
  }, [activeCategory, categories, products, selectedVoltages, selectedCapacities]);

  const toggleFilter = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedVoltages([]);
    setSelectedCapacities([]);
  };

  const hasActiveFilters = selectedVoltages.length > 0 || selectedCapacities.length > 0;

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Sidebar filters */}
      <aside className="hidden w-72 flex-shrink-0 lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-primary">Categories</h3>
            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                  activeCategory === "All"
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-gray-50"
                )}
              >
                <span>All Products</span>
                <span className="text-xs text-muted">{products.length}</span>
              </button>
              {categories.map((category) => {
                const count = products.filter((p) => p.category === category).length;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors",
                      activeCategory === category
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-gray-50"
                    )}
                  >
                    <span>{category}</span>
                    <span className="text-xs text-muted">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {allVoltages.length > 0 && (
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-semibold text-primary">Voltage</h3>
              <div className="mt-4 space-y-2">
                {allVoltages.map((voltage) => (
                  <label
                    key={voltage}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      selectedVoltages.includes(voltage)
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-gray-50"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={selectedVoltages.includes(voltage)}
                      onChange={() => toggleFilter(setSelectedVoltages, voltage)}
                      className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span>{voltage}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {allCapacities.length > 0 && (
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="font-semibold text-primary">Capacity</h3>
              <div className="mt-4 space-y-2">
                {allCapacities.map((capacity) => (
                  <label
                    key={capacity}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                      selectedCapacities.includes(capacity)
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-gray-50"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCapacities.includes(capacity)}
                      onChange={() => toggleFilter(setSelectedCapacities, capacity)}
                      className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
                    />
                    <span>{capacity}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-semibold text-primary">Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="mt-4 w-full rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="default">Default</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="capacity">Capacity (Highest First)</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-white py-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex flex-1 flex-col">
        {/* Mobile filters bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 lg:hidden">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-1 text-xs text-muted"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          )}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">
            Showing <span className="font-semibold text-primary">{filtered.length}</span> products
            {hasActiveFilters && (
              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                <Check className="h-3 w-3" />
                Filtered
              </span>
            )}
          </p>
          <div className="hidden lg:block">
            <label className="text-xs text-muted">
              Sort:
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ml-2 rounded-md border border-border px-2 py-1 text-xs focus:outline-none"
              >
                <option value="default">Default</option>
                <option value="name-asc">A-Z</option>
                <option value="name-desc">Z-A</option>
                <option value="capacity">Capacity</option>
              </select>
            </label>
          </div>
        </div>

        {/* Grouped display (when "All" is selected and no filters) */}
        {groupedProducts && (
          <div className="mt-8 space-y-10">
            {categories.map((category) => (
              <div key={category}>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-primary">{category}</h2>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                    {groupedProducts[category]?.length} items
                  </span>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {groupedProducts[category]?.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filtered display */}
        {!groupedProducts && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-muted">No products found matching your filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-sm text-accent hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}