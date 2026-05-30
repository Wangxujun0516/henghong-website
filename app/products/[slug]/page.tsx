import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductGallery } from "@/components/products/ProductGallery";
import { MdxContent } from "@/components/mdx/MdxContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.title,
    description: product.features?.[0] ?? siteConfig.description,
    openGraph: {
      title: product.title,
      description: product.features?.[0],
      images: product.images?.[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.features?.join(". "),
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    sku: product.model,
    category: product.category,
    image: product.images?.map((img) => `${siteConfig.url}${img}`),
    url: `${siteConfig.url}${product.url}`,
  };

  return (
    <div className="bg-white">
      <JsonLd data={productJsonLd} />

      <section className="border-b border-border bg-neutral py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-muted">
            <Link href="/products" className="hover:text-accent">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">{product.title}</span>
          </nav>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery
              images={product.images ?? []}
              title={product.title}
            />

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {product.category}
                {product.subcategory && ` · ${product.subcategory}`}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
                {product.title}
              </h1>
              {product.model && (
                <p className="mt-2 text-lg text-muted">
                  Model: <strong>{product.model}</strong>
                </p>
              )}

              {product.features && product.features.length > 0 && (
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 grid gap-3 rounded-lg border border-border bg-neutral p-5 text-sm sm:grid-cols-2">
                {product.voltage && (
                  <div>
                    <span className="font-semibold text-primary">Voltage:</span>{" "}
                    {product.voltage}
                  </div>
                )}
                {product.stroke && (
                  <div>
                    <span className="font-semibold text-primary">Stroke:</span>{" "}
                    {product.stroke}
                  </div>
                )}
                {product.material && (
                  <div>
                    <span className="font-semibold text-primary">Material:</span>{" "}
                    {product.material}
                  </div>
                )}
                {product.power && (
                  <div>
                    <span className="font-semibold text-primary">Power:</span>{" "}
                    {product.power}
                  </div>
                )}
              </div>

              <Button asChild variant="cta" size="lg" className="mt-8">
                <Link href="/contact#quote">Request Quote for This Product</Link>
              </Button>
            </div>
          </div>

          <div className="prose-henghong mt-16">
            <MdxContent code={product.body.code} />
          </div>
        </div>
      </section>
    </div>
  );
}
