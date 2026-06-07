import { ApplicationsSection } from "@/components/home/ApplicationsSection";
import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you a manufacturer or trading company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Henghong is an Intertek-Verified Manufacturer with a 39,000㎡ factory in Hangzhou, China. We specialize in OEM/ODM RV leveling systems and electric jacks with 22+ years of export expertise.",
        },
      },
      {
        "@type": "Question",
        name: "What is your minimum order quantity (MOQ)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept OEM/ODM orders of all sizes. MOQ depends on the product model and customization requirements. Contact our sales team for a detailed quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer custom RV leveling system designs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our provincial-level R&D center with 21 professional engineers provides full OEM/ODM customization including custom stroke lengths, mounting brackets, voltage configurations (12V/24V DC), and special materials.",
        },
      },
      {
        "@type": "Question",
        name: "How long does shipping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shipping time varies by destination. We have experience exporting to 40+ countries and can arrange FOB/CIF/DDP terms. Typical lead time is 15-30 days after order confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "What certifications do your products have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Henghong is ISO9001:2015 certified and Intertek Verified. Our products comply with CE standards and undergo rigorous load-bearing, stress-durability, and salt-spray corrosion testing.",
        },
      },
    ],
  };

  return (
    <>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={faqJsonLd} />
      <HeroSection />
      <TrustBar />
      <FeaturedProducts products={featuredProducts} />
      <WhyChooseUs />
      <ApplicationsSection />
      <FaqSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}
