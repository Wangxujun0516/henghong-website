import Link from "next/link";

import { siteConfig, type NavItem } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">{siteConfig.name}</h3>
            <p className="mt-3 text-sm text-white/75">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm text-white/75">
              {siteConfig.contact.address}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item: NavItem) => {
                if (item.children) {
                  return item.children.map((child: NavItem) => (
                    <li key={child.href}>
                      <Link
                        href={child.href!}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ));
                }
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-accent hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              {siteConfig.contact.whatsapp && (
                <li>
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {siteConfig.contact.whatsapp}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 sm:flex-row">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
