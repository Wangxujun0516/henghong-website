import { MetadataRoute } from "next";
import { allProducts, allBlogs } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = allProducts.map((product) => ({
    url: `https://www.henghongrv.com${product.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogs = allBlogs.map((blog) => ({
    url: `https://www.henghongrv.com${blog.url}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pages = [
    { url: "https://www.henghongrv.com/", priority: 1.0, changeFrequency: "daily" as const },
    { url: "https://www.henghongrv.com/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://www.henghongrv.com/products", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "https://www.henghongrv.com/technical-resources", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "https://www.henghongrv.com/honors", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "https://www.henghongrv.com/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "https://www.henghongrv.com/privacy-policy", priority: 0.5, changeFrequency: "yearly" as const },
    { url: "https://www.henghongrv.com/terms-of-service", priority: 0.5, changeFrequency: "yearly" as const },
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
