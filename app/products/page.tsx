import type { Metadata } from "next";

import { ProductFilter } from "@/components/products/ProductFilter";
import { getAllProducts, getProductCategories } from "@/lib/products";

export const metadata: Metadata = {
  title: "OEM/ODM Electric Trailer Jacks Manufacturer | Heng Hong",
  description:
    "Looking for reliable RV electric jacks? Heng Hong offers Intertek-certified, heavy-duty trailer jacks for global OEMs & distributors. Get custom quotes in 12h!",
  alternates: {
    canonical: "https://www.henghongrv.com/products",
  },
  openGraph: {
    title: "OEM/ODM Electric Trailer Jacks Manufacturer | Heng Hong",
    description:
      "Looking for reliable RV electric jacks? Heng Hong offers Intertek-certified, heavy-duty trailer jacks for global OEMs & distributors. Get custom quotes in 12h!",
    images: [{ url: "/images/company/Overview.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  return (
    <div className="bg-neutral">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Heavy-Duty Electric Trailer Jacks | Custom OEM & ODM Manufacturing</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Intertek-certified, heavy-duty trailer jacks for global OEMs & distributors. Get custom quotes in 12h!
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
