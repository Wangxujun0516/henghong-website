import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { UmamiAnalytics } from "@/components/analytics/UmamiAnalytics";
import { FloatingQuoteCTA } from "@/components/layout/FloatingQuoteCTA";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "RV Leveling Systems & Electric Jacks Manufacturer | Henghong OEM/ODM",
    template: "%s | Henghong Intelligent Equipment",
  },
  description: "Intertek verified manufacturer of automatic RV leveling systems and electric jacks. 22+ years, 39,000㎡ factory, OEM/ODM. Serving 40+ countries. Competitive factory-direct pricing.",
  keywords: [
    "RV leveling system",
    "electric jack",
    "automatic leveling",
    "RV parts manufacturer",
    "OEM leveling system",
    "hydraulic leveling China",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "RV Leveling Systems & Electric Jacks OEM Manufacturer",
    description: "Factory-direct RV leveling systems, Intertek verified, 22+ years experience.",
    images: [{ url: "/images/factory/factory-complex.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/factory/factory-complex.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="8D6F31DCA8160F9E6387E9F02FAC503E" />
        <meta name="google-site-verification" content="gbQPvyC9OT410KdApHlyP0CurQ6BprpHOXblITV7MyA" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingQuoteCTA />
        <WhatsAppFloat />
        <UmamiAnalytics />
      </body>
    </html>
  );
}
