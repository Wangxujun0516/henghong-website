 import Link from "next/link";
 import { ArrowRight, HelpCircle, CheckCircle2, X } from "lucide-react";
 
 const comparisonRows = [
   { feature: "Power Source", electric: "DC12V/24V battery", hydraulic: "DC12V/24V + hydraulic pump" },
   { feature: "Load Capacity", electric: "2,500 - 7,500 lbs per jack", hydraulic: "4T - 20T (8,800 - 44,000 lbs)" },
   { feature: "Operation Speed", electric: "Moderate", hydraulic: "Fast" },
   { feature: "Control Type", electric: "Automatic or manual", hydraulic: "Automatic with remote" },
   { feature: "Installation", electric: "Simple bolt-on", hydraulic: "Requires hydraulic line routing" },
   { feature: "Maintenance", electric: "Minimal", hydraulic: "Periodic fluid check" },
   { feature: "Weight", electric: "Lighter", hydraulic: "Heavier (pump + fluid)" },
   { feature: "Cost", electric: "Lower upfront cost", hydraulic: "Higher upfront cost" },
   { feature: "Best For", electric: "Travel trailers, fifth wheels", hydraulic: "Class A motorhomes, heavy-duty" },
   { feature: "Durability", electric: "600+ cycle tested", hydraulic: "1M cycle tested (shock absorber)" },
 ];
 
 const faqs = [
   {
     q: "Which is more reliable — electric or hydraulic leveling systems?",
     a: "Both are highly reliable when properly maintained. Electric systems have fewer components and are simpler to maintain, making them ideal for smaller RVs. Hydraulic systems offer higher load capacity and faster operation, preferred for heavy-duty Class A motorhomes. Henghong's electric jacks are tested for 600+ cycles, while our hydraulic shock absorbers pass 1 million cycles.",
   },
   {
     q: "Can I retrofit an electric leveling system to a hydraulic system?",
     a: "Retrofitting is possible but requires significant modification. It's generally more cost-effective to choose the right system from the start based on your RV type and weight requirements.",
   },
   {
     q: "Which system is better for cold weather operation?",
     a: "Electric systems generally perform better in cold weather as hydraulic fluid can thicken in extreme temperatures. However, our hydraulic systems use cold-weather rated fluid for reliable operation down to -20°C.",
   },
   {
     q: "Are electric leveling systems loud?",
     a: "Electric jacks produce a moderate noise level during operation. Hydraulic systems tend to be quieter but require a pump motor that also generates some noise.",
   },
 ];
 
 const prosCons = [
   {
     title: "Electric Leveling Systems",
     pros: ["Lower upfront cost", "Simpler installation", "Minimal maintenance", "Lighter weight", "Better cold-weather performance", "Easy to replace individual components"],
     cons: ["Lower maximum load capacity", "Slower operation speed", "Less suitable for very heavy RVs"],
   },
   {
     title: "Hydraulic Leveling Systems",
     pros: ["Higher load capacity (up to 20T)", "Faster operation", "Smoother motion", "Ideal for Class A motorhomes", "Proven durability"],
     cons: ["Higher cost", "More complex installation", "Requires fluid maintenance", "Heavier system weight", "More components = more potential failure points"],
   },
 ];
 
 export function ElectricVsHydraulicPage() {
   return (
     <div className="min-h-screen bg-white">
       {/* Hero */}
       <section className="relative overflow-hidden bg-[#0A1628] py-20 sm:py-28">
         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
             <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 px-4 py-1.5 text-sm font-medium text-[#FF6B35]">
               Buyer&apos;s Guide
             </span>
             <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
               Electric vs Hydraulic RV Leveling System
             </h1>
             <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
               A comprehensive comparison of electric and hydraulic RV leveling systems — 
               covering load capacity, cost, maintenance, and which RV types each system suits best.
             </p>
           </div>
         </div>
       </section>
 
       {/* Pros & Cons */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">Overview</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Pros and Cons at a Glance</h2>
           </div>
           <div className="mt-12 grid gap-8 lg:grid-cols-2">
             {prosCons.map((section) => (
               <div key={section.title} className="rounded-2xl border border-border bg-neutral/30 p-8">
                 <h3 className="text-xl font-bold text-primary">{section.title}</h3>
                 <div className="mt-6">
                   <p className="text-sm font-semibold text-green-600 mb-3">Pros</p>
                   <ul className="space-y-2">
                     {section.pros.map((item) => (
                       <li key={item} className="flex items-start gap-3 text-sm text-muted">
                         <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="mt-6">
                   <p className="text-sm font-semibold text-red-600 mb-3">Cons</p>
                   <ul className="space-y-2">
                     {section.cons.map((item) => (
                       <li key={item} className="flex items-start gap-3 text-sm text-muted">
                         <X className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Comparison Table */}
       <section className="bg-neutral py-20 sm:py-28">
         <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">Side by Side</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Detailed Comparison</h2>
           </div>
           <div className="mt-12 overflow-x-auto rounded-2xl border border-border">
             <table className="w-full text-sm">
               <thead>
                 <tr className="bg-primary/5">
                   <th className="px-6 py-4 text-left font-bold text-primary">Feature</th>
                   <th className="px-6 py-4 text-left font-bold text-primary">Electric System</th>
                   <th className="px-6 py-4 text-left font-bold text-primary">Hydraulic System</th>
                 </tr>
               </thead>
               <tbody>
                 {comparisonRows.map((row, i) => (
                   <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-neutral/50"}>
                     <td className="px-6 py-4 font-semibold text-primary border-t border-border">{row.feature}</td>
                     <td className="px-6 py-4 text-muted border-t border-border">{row.electric}</td>
                     <td className="px-6 py-4 text-muted border-t border-border">{row.hydraulic}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </section>
 
       {/* Best For */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-bold text-primary sm:text-4xl">Which One Should You Choose?</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted">
               The right system depends on your RV type, weight, and budget. Here is a quick guide:
             </p>
           </div>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {[
               { type: "Travel Trailer", recommend: "Electric Jack", reason: "Lightweight, cost-effective, easy installation. Henghong electric jacks from 2,500 to 5,000 lbs." },
               { type: "Fifth Wheel", recommend: "Electric Leveling System", reason: "Good balance of capacity and cost. Our HCPSR series handles up to 8,000 lbs per leg." },
               { type: "Class A Motorhome", recommend: "Hydraulic Leveling System", reason: "Maximum load capacity. Our 12T hydraulic system handles the heaviest RVs." },
               { type: "Class C Motorhome", recommend: "Electric or Hydraulic", reason: "Depends on weight. Under 12,000 lbs — electric. Over — hydraulic." },
               { type: "Camper / Truck Camper", recommend: "Camper Jacks", reason: "Electric camper jacks with 800mm stroke and remote control for easy setup." },
               { type: "Commercial / Specialty", recommend: "Hydraulic Leveling", reason: "Heavy-duty hydraulic systems up to 20T for specialty vehicles and trailers." },
             ].map((item) => (
               <div key={item.type} className="rounded-xl border border-border bg-neutral/50 p-6">
                 <h3 className="font-bold text-primary">{item.type}</h3>
                 <p className="mt-1 text-sm font-semibold text-accent">{item.recommend}</p>
                 <p className="mt-2 text-sm text-muted">{item.reason}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* FAQ */}
       <section className="bg-neutral py-20 sm:py-28">
         <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <HelpCircle className="mx-auto h-8 w-8 text-accent" />
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Frequently Asked Questions</h2>
           </div>
           <div className="mt-12 space-y-4">
             {faqs.map((faq) => (
               <details key={faq.q} className="group rounded-xl border border-border bg-white p-5 open:border-accent/30 open:bg-accent/[0.02]">
                 <summary className="flex cursor-pointer items-center justify-between gap-4">
                   <span className="font-semibold text-primary text-sm sm:text-base">{faq.q}</span>
                   <ArrowRight className="h-5 w-5 shrink-0 text-accent transition-transform group-open:rotate-90" />
                 </summary>
                 <p className="mt-4 text-sm text-muted leading-relaxed border-t border-border pt-4">{faq.a}</p>
               </details>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="bg-[#0A1628] py-20 sm:py-28">
         <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-white sm:text-4xl">Need Help Choosing?</h2>
           <p className="mx-auto mt-4 max-w-xl text-gray-300">
             Our team can help you select the right leveling system for your RV platform.
           </p>
           <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
             <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#FF6B35] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#FF5A20] transition-colors shadow-lg shadow-[#FF6B35]/20">
               Contact Our Team
             </Link>
             <Link href="/products" className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors">
               Browse Products
             </Link>
           </div>
         </div>
       </section>
     </div>
   );
 }
