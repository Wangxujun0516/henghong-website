import type { Product } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images?.[0] ?? "/logo.png";

  return (
    <Link
      href={product.url}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral">
        <Image
          src={image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-accent">
          {product.title}
        </h3>
        {product.model && (
          <p className="mt-1 text-sm text-muted">Model: {product.model}</p>
        )}
        {product.features && product.features.length > 0 && (
          <p className="mt-3 line-clamp-2 text-sm text-muted">
            {product.features[0]}
          </p>
        )}
        <span className="mt-4 text-sm font-semibold text-cta">
          View Details →
        </span>
      </div>
    </Link>
  );
}
