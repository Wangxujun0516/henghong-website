import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { GlobalMarket } from "@/components/home/GlobalMarket";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SolutionsByRvType } from "@/components/home/SolutionsByRvType";
import { ManufacturingProcess } from "@/components/home/ManufacturingProcess";
import { ManufacturingStatistics } from "@/components/home/ManufacturingStatistics";
import { OEMCapability } from "@/components/home/OEMCapability";
import { ProductCategories } from "@/components/home/ProductCategories";
import { QualityControl } from "@/components/home/QualityControl";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Henghong | RV Leveling Systems & Jacks OEM Factory",
  },
  description:
    "We specialize in OEM/ODM RV leveling systems and electric jacks. Intertek audited manufacturer with 22+ years of export experience.",
  openGraph: {
    title: "Henghong | RV Leveling Systems & Jacks OEM Factory",
    description:
      "We specialize in OEM/ODM RV leveling systems and electric jacks. Intertek audited manufacturer with 22+ years of export experience.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hangzhou",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "sales",
    },
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <HeroSection />
      <WhyChooseUs />
      <ManufacturingStatistics />
      <ProductCategories />
      <SolutionsByRvType />
      <OEMCapability />
      <ManufacturingProcess />
      <QualityControl />
      <GlobalMarket />
      <CTASection />
    </>
  );
}