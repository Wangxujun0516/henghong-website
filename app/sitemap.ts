import { MetadataRoute } from "next";
import { allProducts, allBlogs } from "@/.contentlayer/generated";

import { siteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const products = allProducts.map((product) => ({
    url: `${baseUrl}${product.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogs = allBlogs.map((blog) => ({
    url: `${baseUrl}${blog.url}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/technical-resources`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/honors`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/oem-manufacturer`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/electric-vs-hydraulic`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/how-to-choose-leveling-system`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy-policy`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms-of-service`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return [
    ...pages.map((page) => ({
      url: page.url,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...products,
    ...blogs,
  ];
}
