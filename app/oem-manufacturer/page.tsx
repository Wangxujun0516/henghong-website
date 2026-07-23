 import type { Metadata } from "next";
 import { OemManufacturerPage } from "@/components/seo/OemManufacturerPage";
 import { JsonLd } from "@/components/seo/JsonLd";
 import { siteConfig } from "@/lib/site-config";
 
 export const metadata: Metadata = {
   title: "RV Leveling System OEM Manufacturer | Henghong",
   description:
     "Since 2004, Henghong has been the trusted OEM/ODM partner for global RV manufacturers. 39,000m² Intertek-verified facility, 21 R&D engineers, 50+ patents. Request a quote today.",
   alternates: {
     canonical: `${siteConfig.url}/oem-manufacturer`,
   },
   openGraph: {
     title: "RV Leveling System OEM Manufacturer | Henghong",
     description:
       "Since 2004, Henghong has been the trusted OEM/ODM partner for global RV manufacturers. 39,000m² Intertek-verified facility, 21 R&D engineers, 50+ patents.",
   },
 };
 
 export default function Page() {
   const breadcrumbJsonLd = {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     itemListElement: [
       { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
       { "@type": "ListItem", position: 2, name: "OEM Manufacturer", item: `${siteConfig.url}/oem-manufacturer` },
     ],
   };
 
   return (
     <>
       <JsonLd data={breadcrumbJsonLd} />
       <OemManufacturerPage />
     </>
   );
 }
