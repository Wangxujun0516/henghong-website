import Link from "next/link";
import { FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="rounded-full bg-neutral p-6">
        <FileQuestion className="h-16 w-16 text-accent" />
      </div>
      <h1 className="mt-6 text-5xl font-bold text-primary sm:text-6xl">
        404
      </h1>
      <p className="mt-4 text-lg text-muted">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild variant="cta" size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
      <div className="mt-12 grid w-full max-w-md grid-cols-2 gap-4 text-left">
        <div>
          <p className="text-sm font-semibold text-primary">Popular Pages</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li><Link href="/products" className="hover:text-accent">Products</Link></li>
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-primary">Need Help?</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li><Link href="/contact" className="hover:text-accent">Contact Us</Link></li>
            <li><a href="mailto:sales@henghong-equipment.com" className="hover:text-accent">Email Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
