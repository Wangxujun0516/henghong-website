"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function ProductGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral text-muted">
        No image available
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-neutral">
        <Image
          src={activeImage}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={activeIndex === index ? "true" : undefined}
              className={cn(
                "relative aspect-square overflow-hidden rounded-md border-2 transition-colors",
                activeIndex === index
                  ? "border-accent"
                  : "border-transparent hover:border-border",
              )}
            >
              <Image
                src={image}
                alt={`${title} view ${index + 1}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
