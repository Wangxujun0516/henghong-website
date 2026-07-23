 import type { Metadata } from "next";
 import { ElectricVsHydraulicPage } from "@/components/seo/ElectricVsHydraulicPage";
 import { JsonLd } from "@/components/seo/JsonLd";
 import { siteConfig } from "@/lib/site-config";
 
 export const metadata: Metadata = {
   title: "Electric vs Hydraulic RV Leveling System | Henghong",
   description:
     "Compare electric and hydraulic RV leveling systems: load capacity, cost, maintenance, and best fit for travel trailers, fifth wheels, and motorhomes. Expert guide from Henghong.",
   alternates: {
     canonical: `${siteConfig.url}/electric-vs-hydraulic`,
   },
   openGraph: {
     title: "Electric vs Hydraulic RV Leveling System | Henghong",
     description:
       "Compare electric and hydraulic RV leveling systems. Expert guide covering pros, cons, costs, and which RV types each system suits best.",
   },
 };
 
 export default function Page() {
   const breadcrumbJsonLd = {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     itemListElement: [
       { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
       { "@type": "ListItem", position: 2, name: "Electric vs Hydraulic", item: `${siteConfig.url}/electric-vs-hydraulic` },
     ],
   };
 
   return (
     <>
       <JsonLd data={breadcrumbJsonLd} />
       <ElectricVsHydraulicPage />
     </>
   );
 }
