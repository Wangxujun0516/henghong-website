"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig, type NavItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item: NavItem) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <button className="text-sm font-medium text-primary/80 transition-colors hover:text-accent flex items-center gap-1">
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-56 rounded-lg border border-border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.children.map((child: NavItem) => (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="block px-4 py-2.5 text-sm text-primary/80 hover:text-accent hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href!}
                className="text-sm font-medium text-primary/80 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="cta" className="hidden sm:inline-flex">
            <Link href="/contact#quote">Get Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-4">
                {siteConfig.nav.map((item: NavItem) => {
                  if (item.children) {
                    return (
                      <div key={item.label} className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-primary/60 uppercase tracking-wide">{item.label}</span>
                        <div className="flex flex-col gap-1 pl-3 border-l-2 border-gray-200">
                          {item.children.map((child: NavItem) => (
                            <Link
                              key={child.href}
                              href={child.href!}
                              onClick={() => setOpen(false)}
                              className="text-base font-medium text-primary hover:text-accent"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={item.href}
                      href={item.href!}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-primary hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button asChild variant="cta" className="mt-4">
                  <Link href="/contact#quote" onClick={() => setOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
