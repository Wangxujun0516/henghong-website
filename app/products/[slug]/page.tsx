import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ChecklistCTA } from "@/components/lead-magnet/ChecklistCTA";
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

  const featuresText = product.features?.join(" ") ?? "";
  const categoryText = product.category ? `${product.category} ` : "";
  const modelText = product.model ? ` ${product.model}` : "";

  return {
    title: `${product.title}${modelText} | ${siteConfig.shortName}`,
    description: `${categoryText}${product.title} - ${featuresText} Intertek verified, OEM/ODM ready.`,
    alternates: {
      canonical: `${siteConfig.url}${product.url}`,
    },
    openGraph: {
      title: `${product.title} | ${siteConfig.shortName}`,
      description: `${categoryText}${product.title} - ${featuresText}`,
      images: product.images?.[0] ? [{ url: `${siteConfig.url}${product.images[0]}`, width: 1200, height: 800 }] : undefined,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const additionalProperties = [];
  if (product.voltage) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Operating Voltage",
      value: product.voltage,
    });
  }
  if (product.capacity?.system) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Load Capacity",
      value: product.capacity.system,
    });
  }
  if (product.capacity?.singleLeg) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Single Leg Capacity",
      value: product.capacity.singleLeg,
    });
  }
  if (product.stroke) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Stroke Length",
      value: product.stroke,
    });
  }
  if (product.material) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Material",
      value: product.material,
    });
  }
  if (product.power) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Power Rating",
      value: product.power,
    });
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteConfig.url}${product.url}#product`,
    name: product.title,
    description: product.features?.join(". ") || product.title,
    brand: {
      "@type": "Brand",
      name: siteConfig.shortName,
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    model: product.model ?? product.slug,
    productID: product.model ?? product.slug,
    category: product.category,
    image: product.images?.map((img) => `${siteConfig.url}${img}`),
    url: `${siteConfig.url}${product.url}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
    additionalProperty: additionalProperties.length > 0 ? additionalProperties : undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${siteConfig.url}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.category,
        item: `${siteConfig.url}/products#${product.category.toLowerCase().replace(/\s+/g, "-")}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.model ?? product.title,
        item: `${siteConfig.url}${product.url}`,
      },
    ],
  };

  const allProductsList = getAllProducts();
  const related = allProductsList
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-white">
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <nav className="border-b border-border bg-neutral/50 px-4 py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm">
          <Link href="/" className="text-accent hover:underline">Home</Link>
          <span className="text-muted">/</span>
          <Link href="/products" className="text-accent hover:underline">Products</Link>
          <span className="text-muted">/</span>
          <span className="text-primary">{product.title}</span>
        </div>
      </nav>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery
              images={product.images ?? []}
              title={product.title}
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {product.category}
                </span>
                {product.subcategory && (
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {product.subcategory}
                  </span>
                )}
              </div>
              
              <h1 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                {product.title}
              </h1>
              
              {product.model && (
                <p className="mt-2 text-lg text-muted">
                  Model: <strong>{product.model}</strong>
                </p>
              )}

              {product.features && product.features.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1 h-5 w-5 shrink-0 flex items-center justify-center rounded-full bg-accent/10">
                        <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 rounded-xl border border-border bg-neutral p-6">
                <h3 className="font-semibold text-primary mb-4">Quick Specs</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {product.voltage && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">⚡</span>
                      <div>
                        <p className="text-xs text-muted">Voltage</p>
                        <p className="font-semibold text-primary">{product.voltage}</p>
                      </div>
                    </div>
                  )}
                  {product.capacity?.system && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">⚖️</span>
                      <div>
                        <p className="text-xs text-muted">Capacity</p>
                        <p className="font-semibold text-primary">{product.capacity.system}</p>
                      </div>
                    </div>
                  )}
                  {product.stroke && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">📏</span>
                      <div>
                        <p className="text-xs text-muted">Stroke</p>
                        <p className="font-semibold text-primary">{product.stroke}</p>
                      </div>
                    </div>
                  )}
                  {product.material && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">🔧</span>
                      <div>
                        <p className="text-xs text-muted">Material</p>
                        <p className="font-semibold text-primary">{product.material}</p>
                      </div>
                    </div>
                  )}
                  {product.power && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">🔋</span>
                      <div>
                        <p className="text-xs text-muted">Power</p>
                        <p className="font-semibold text-primary">{product.power}</p>
                      </div>
                    </div>
                  )}
                  {product.capacity?.singleLeg && (
                    <div className="flex items-center gap-2">
                      <span className="text-accent">🦵</span>
                      <div>
                        <p className="text-xs text-muted">Single Leg</p>
                        <p className="font-semibold text-primary">{product.capacity.singleLeg}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="cta" size="lg" className="flex-1 text-lg">
                  <Link href="/contact#quote">Request Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 text-lg">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>In Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Intertek Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span>OEM/ODM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="prose-henghong mt-16">
            <MdxContent code={product.body.code} />
          </div>

          <div className="mt-16 rounded-2xl border border-accent/20 bg-accent/[0.03] p-8 sm:p-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
              OEM / Custom Design
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Need a Custom Solution for Your RV Platform?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Our engineering team can customize this product to your specifications — parameter adjustments, appearance modification, low-volume trial runs supported.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild variant="cta" size="lg" className="text-base font-semibold">
                <Link href="/contact">Talk to Our Engineer</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base font-semibold">
                <Link href="/documents/Catalog.pdf" target="_blank" rel="noopener noreferrer">Download Catalog</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted">
              Low MOQ (100 pcs) · Prototype in 90 days · 21 R&amp;D Engineers · CE Certified
            </p>
          </div>

          <ChecklistCTA />

          {related.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-primary">Related Products</h2>
                <Link href="/products" className="text-sm text-accent hover:underline">View All</Link>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link key={p.slug} href={p.url} className="group block rounded-xl border border-border bg-neutral/50 p-4 transition-all hover:border-accent hover:shadow-lg">
                    {p.images?.[0] && (
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-white">
                        <Image src={p.images[0]} alt={p.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                      </div>
                    )}
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">{p.category}</p>
                    <h3 className="mt-1 font-bold text-primary line-clamp-2">{p.title}</h3>
                    {p.model && (
                      <p className="mt-1 text-sm text-muted">
                        Model: {p.model}
                      </p>
                    )}
                    {p.capacity?.system && (
                      <p className="mt-2 text-sm font-semibold text-primary">
                        {p.capacity.system}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}