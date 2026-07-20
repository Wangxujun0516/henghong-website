import type { Metadata } from "next";
import Link from "next/link";

import { ProductFilter } from "@/components/products/ProductFilter";
import { getAllProducts, getProductCategories } from "@/lib/products";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "RV Leveling Systems & Electric Jacks Manufacturer | OEM/ODM | Henghong",
  description:
    "Professional RV leveling systems, electric jacks, stabilizers, and automatic leveling systems manufacturer. Intertek verified, 22+ years experience, OEM/ODM ready. Exporting to 40+ countries.",
  alternates: {
    canonical: "https://www.henghongrv.com/products",
  },
  openGraph: {
    title: "RV Leveling Systems & Electric Jacks Manufacturer | Henghong OEM/ODM",
    description:
      "Professional RV leveling systems, electric jacks, stabilizers, and automatic leveling systems manufacturer. Intertek verified, 22+ years experience, OEM/ODM ready.",
    images: [{ url: "/images/factory/factory-complex.jpg", width: 1200, height: 630 }],
  },
};

export default function ProductsPage() {
  const products = getAllProducts();
  const categories = getProductCategories();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.henghongrv.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.henghongrv.com/products",
      },
    ],
  };

  return (
    <div className="bg-neutral">
      <JsonLd data={breadcrumbJsonLd} />
      
      <nav className="border-b border-border bg-white px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm">
          <Link href="/" className="text-accent hover:underline">Home</Link>
          <span className="text-muted">/</span>
          <span className="text-primary">Products</span>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#0F172A] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Professional RV Leveling Systems & Electric Jacks
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Intertek verified manufacturer with 22+ years experience. OEM/ODM ready. Exporting to 40+ countries worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="text-accent font-semibold">17+</span>
              <span className="text-sm text-white/70">Product Models</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="text-accent font-semibold">Intertek</span>
              <span className="text-sm text-white/70">Verified</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="text-accent font-semibold">OEM/ODM</span>
              <span className="text-sm text-white/70">Custom Solutions</span>
            </div>
          </div>
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