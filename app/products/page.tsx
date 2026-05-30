import type { Metadata } from "next";

import { ProductFilter } from "@/components/products/ProductFilter";
import { getAllProducts, getProductCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Henghong automatic leveling systems and electric stabilizer jacks for RVs, trailers, and special vehicles.",
};

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  return (
    <div className="bg-neutral">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Our Products</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            High-precision automatic leveling systems and electric stabilizer
            jacks engineered for global RV and industrial markets.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductFilter products={products} categories={categories} />
        </div>
      </section>
    </div>
  );
}
