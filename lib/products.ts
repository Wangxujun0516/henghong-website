import { allProducts } from "contentlayer/generated";

export function getAllProducts() {
  return allProducts.sort((a, b) => a.title.localeCompare(b.title));
}

export function getProductBySlug(slug: string) {
  return allProducts.find((product) => product.slug === slug);
}

export function getProductCategories() {
  const categories = new Set(allProducts.map((product) => product.category));
  return Array.from(categories).sort();
}
