import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const products = getAllProducts();

  const featuredProducts = products
    .filter((p) => 
      p.category === "Automatic Leveling Systems" || 
      p.category === "Electric Jacks"
    )
    .slice(0, 8);

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
      <TrustBar />
      <FeaturedProducts products={featuredProducts} />
      <WhyChooseUs />
      <ApplicationsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}
