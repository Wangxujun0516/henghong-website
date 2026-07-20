"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled || !isHomePage
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <span className={cn(
            "hidden text-xs font-medium uppercase tracking-wider sm:block",
            scrolled || !isHomePage ? "text-muted" : "text-white/70",
          )}>
            RV Intelligent Equipment
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item: NavItem) => {
            if (item.children) {
              return (
                <div key={item.label} className="relative group">
                  <button className={cn(
                    "text-xs font-medium uppercase tracking-wide transition-colors flex items-center gap-1",
                    scrolled || !isHomePage
                      ? "text-primary/80 hover:text-accent"
                      : "text-white/80 hover:text-white",
                  )}>
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            const active = isActive(item.href!);
            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "text-xs font-medium uppercase tracking-wide transition-colors relative",
                  scrolled || !isHomePage
                    ? active
                      ? "text-accent"
                      : "text-primary/80 hover:text-accent"
                    : active
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden font-bold text-xs uppercase tracking-wider bg-[#FF6B35] hover:bg-[#FF5A20] text-white border-0 sm:inline-flex"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden",
                  scrolled || !isHomePage ? "text-primary" : "text-white",
                )}
                aria-label="Open menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <SheetHeader>
                <SheetTitle className="text-primary">Menu</SheetTitle>
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
                              className={cn(
                                "text-base font-medium transition-colors",
                                isActive(child.href!) ? "text-accent" : "text-primary hover:text-accent",
                              )}
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
                      className={cn(
                        "text-base font-medium transition-colors",
                        isActive(item.href!) ? "text-accent" : "text-primary hover:text-accent",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  size="sm"
                  className="mt-4 font-bold text-xs uppercase tracking-wider bg-[#FF6B35] hover:bg-[#FF5A20] text-white border-0"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
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