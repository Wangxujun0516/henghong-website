import type { MetadataRoute } from "next";

import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getAllProducts();
  const baseUrl = siteConfig.url;

  const staticPages = ["", "/about", "/products", "/honors", "/contact"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const productPages = products.map((product) => ({
    url: `${baseUrl}${product.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages];
}
