 import type { Metadata } from "next";
 import { HowToChoosePage } from "@/components/seo/HowToChoosePage";
 import { JsonLd } from "@/components/seo/JsonLd";
 import { siteConfig } from "@/lib/site-config";
 
 export const metadata: Metadata = {
   title: { absolute: "How to Choose an RV Leveling System | Henghong" },
   description:
     "Learn how to choose the right RV leveling system: weight considerations, electric vs hydraulic, installation complexity, and supplier evaluation. Expert guide for RV manufacturers.",
   alternates: {
     canonical: `${siteConfig.url}/how-to-choose-leveling-system`,
   },
   openGraph: {
     title: "How to Choose an RV Leveling System | Henghong",
     description:
       "A practical guide for RV manufacturers on selecting the right leveling system based on vehicle type, weight, budget, and application requirements.",
   },
 };
 
 export default function Page() {
   const breadcrumbJsonLd = {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     itemListElement: [
       { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
       { "@type": "ListItem", position: 2, name: "How to Choose Leveling System", item: `${siteConfig.url}/how-to-choose-leveling-system` },
     ],
   };
 
   return (
     <>
       <JsonLd data={breadcrumbJsonLd} />
       <HowToChoosePage />
     </>
   );
 }
