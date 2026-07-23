 import Link from "next/link";
 import { CheckCircle2, Factory, Users, Award, Settings, FileText, HelpCircle, ArrowRight } from "lucide-react";
 
 const certifications = [
   "National High-Tech Enterprise",
   "Zhejiang Specialized & Innovative SME",
   "Provincial-Level R&D Center",
   "Intertek Verified Supplier (2026)",
   "ISO 9001:2015 Quality Management",
   "ISO 14001:2015 Environmental Management",
   "ISO 45001:2018 Occupational Health & Safety",
   "CE Certified Products",
 ];
 
 const faqs = [
   {
     q: "What is the minimum order quantity (MOQ) for OEM projects?",
     a: "Our standard MOQ is 50-100 units per item, with a lead time as short as 7 days for small-batch trials. We understand the importance of testing before full-scale production.",
   },
   {
     q: "How long does it take to develop a custom RV leveling system?",
     a: "Our typical prototype development cycle is 90 days from design approval. We have completed over 10 new product styles in the past year alone, supported by 21 R&D engineers and a provincial-level R&D center.",
   },
   {
     q: "What customization services do you offer?",
     a: "We provide full OEM/ODM services including logo customization, label and packaging design, color and size modification, material selection, and graphics customization based on your specifications or samples.",
   },
   {
     q: "What certifications do your products have?",
     a: "Our facility is ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified. Products are CE certified and our factory is Intertek-verified as an Alibaba Gold Supplier. We also hold 15 invention patents and 35 utility patents.",
   },
   {
     q: "Do you support small-volume trial orders?",
     a: "Yes. We understand the importance of qualification testing. Our flexible MOQ policy allows for trial orders as small as 100 units with a 7-day lead time, so you can evaluate quality before committing to volume production.",
   },
   {
     q: "Which markets do you export to?",
     a: "With 19 years of export experience, we ship to 40+ countries across North America (37%), Oceania (10%), Europe, the Middle East, and South America. Our main ports are Ningbo and Shanghai.",
   },
 ];
 
 export function OemManufacturerPage() {
   return (
     <div className="min-h-screen bg-white">
       {/* Hero */}
       <section className="relative overflow-hidden bg-[#0A1628] py-20 sm:py-28">
         <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/80" />
         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
             <span className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/30 px-4 py-1.5 text-sm font-medium text-[#FF6B35]">
               OEM / ODM Manufacturer
             </span>
             <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
               RV Leveling System OEM Manufacturer
             </h1>
             <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
               Since 2004, Henghong has been the trusted OEM partner for global RV manufacturers. 
               Our 39,000 m<sup>2</sup> Intertek-verified facility delivers 100,000+ units annually 
               with full customization capability.
             </p>
             <div className="mt-8 flex flex-col gap-3 sm:flex-row">
               <Link
                 href="/contact"
                 className="inline-flex items-center justify-center rounded-lg bg-[#FF6B35] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#FF5A20] transition-colors shadow-lg shadow-[#FF6B35]/20"
               >
                 Request OEM Quote
               </Link>
               <Link
                 href="/documents/Catalog.pdf"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
               >
                 Download Catalog
               </Link>
             </div>
           </div>
         </div>
       </section>
 
       {/* Certifications Bar */}
       <section className="border-b border-border bg-neutral/50 py-6">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
             {certifications.map((cert) => (
               <div key={cert} className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                 <span className="text-sm text-muted">{cert}</span>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Factory Overview */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <div>
               <span className="text-sm font-semibold uppercase tracking-wide text-accent">Manufacturing Base</span>
               <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Vertically Integrated Production Facility</h2>
               <p className="mt-4 text-muted leading-relaxed">
                 Located in Hangzhou, our 39,000 m<sup>2</sup> smart factory operates 7 integrated production lines 
                 with 42 units of machinery including CNC lathes, machining centers, welding robots, and automated 
                 spray painting lines. From raw material to finished product, every step is controlled in-house.
               </p>
               <div className="mt-8 grid grid-cols-2 gap-6">
                 {[
                   { label: "Factory Area", value: "39,000 m²" },
                   { label: "Production Lines", value: "7" },
                   { label: "Equipment", value: "42 Units" },
                   { label: "Monthly Capacity", value: "20,000 Units" },
                   { label: "Annual Output", value: "100,000+" },
                   { label: "Employees", value: "160" },
                 ].map((s) => (
                   <div key={s.label} className="rounded-xl border border-border bg-neutral/50 p-4">
                     <p className="text-2xl font-bold text-primary">{s.value}</p>
                     <p className="text-sm text-muted">{s.label}</p>
                   </div>
                 ))}
               </div>
             </div>
             <div className="rounded-2xl overflow-hidden border border-border bg-neutral p-6">
               <h3 className="font-bold text-primary mb-4">Key Machinery</h3>
               <ul className="space-y-3">
                 {[
                   "CNC Lathes (18 units) — precision machining",
                   "Machining Centers (4 units) — complex parts",
                   "Welding Robot — automated assembly",
                   "Gearbox Special Machine — drivetrain components",
                   "Automatic Lathe — high-volume turning",
                   "Punching Machines (7 units) — metal forming",
                   "Spray Painting Line — automated finishing",
                   "Jack Test Bench (2 units) — quality verification",
                 ].map((item) => (
                   <li key={item} className="flex items-start gap-3 text-sm text-muted">
                     <Factory className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
         </div>
       </section>
 
       {/* R&D Capabilities */}
       <section className="bg-neutral py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">Innovation</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Provincial-Level R&D Center</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted">
               Our 21-person R&D team has developed 15 invention patents, 35 utility patents, and won three provincial-level science and technology awards.
             </p>
           </div>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {[
               { icon: Users, title: "21 R&D Engineers", desc: "14 with 11-20 years of experience, 6 bachelor's degree holders" },
               { icon: Award, title: "50+ Patents", desc: "15 invention patents, 35 utility models, 18 software copyrights" },
               { icon: Settings, title: "10+ New Products/Year", desc: "Average 90-day prototype cycle for new designs" },
               { icon: Award, title: "3 Science Awards", desc: "Provincial and national-level technology progress awards since 2022" },
               { icon: Users, title: "Industry Standards", desc: "2 national standards, 1 industry standard, 3 group standards" },
               { icon: FileText, title: "Full Customization", desc: "Logo, packaging, color, size, material, and graphics customization" },
             ].map((item) => (
               <div key={item.title} className="rounded-xl border border-border bg-white p-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                   <item.icon className="h-6 w-6" />
                 </div>
                 <h3 className="mt-4 font-bold text-primary">{item.title}</h3>
                 <p className="mt-2 text-sm text-muted">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Quality Control */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid gap-12 lg:grid-cols-2 items-center">
             <div className="rounded-2xl border border-border bg-neutral p-6">
               <h3 className="font-bold text-primary mb-4">Quality Assurance Process</h3>
               <ul className="space-y-3">
                 {[
                   "Incoming raw material inspection with written records",
                   "In-process quality control on every production line",
                   "Final product inspection: 100% or random sampling per client requirement",
                   "Salt spray testing: 72 hours (powder coating), 100 hours (zinc plating)",
                   "Durability testing: 600+ cycles, 1 million cycles for shock absorbers",
                   "Jack Test Bench verification for load capacity and stroke accuracy",
                   "Full traceability from raw material batch to finished product",
                   "Customer complaint closed-loop corrective action system",
                 ].map((item) => (
                   <li key={item} className="flex items-start gap-3 text-sm text-muted">
                     <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <span className="text-sm font-semibold uppercase tracking-wide text-accent">Quality</span>
               <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Rigorous Quality Management System</h2>
               <p className="mt-4 text-muted leading-relaxed">
                 Our 4-person dedicated QC team ensures every product meets international standards. 
                 With a 1-year warranty, full product traceability, and a documented customer feedback 
                 system, we stand behind every unit that leaves our factory.
               </p>
               <div className="mt-6 flex flex-wrap gap-3">
                 {["ISO 9001", "ISO 14001", "ISO 45001", "CE", "Intertek"].map((cert) => (
                   <span key={cert} className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent border border-accent/20">
                     {cert}
                   </span>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </section>
 
       {/* OEM Process */}
       <section className="bg-neutral py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">How It Works</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Our OEM/ODM Process</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted">
               From concept to production — a streamlined partnership designed for RV manufacturers.
             </p>
           </div>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
             {[
               { step: "01", title: "Requirement Analysis", desc: "Share your specifications, samples, or design concepts. Our engineers evaluate feasibility and provide recommendations." },
               { step: "02", title: "Prototype Development", desc: "Rapid prototyping within 90 days. Your custom design is developed, tested, and refined with your feedback." },
               { step: "03", title: "Sample Testing", desc: "Full functional testing including load capacity, stroke accuracy, salt spray, and durability — with documented reports." },
               { step: "04", title: "Mass Production", desc: "Once approved, we move to volume production with QC at every stage. MOQ as low as 100 units, delivery in 45 days." },
             ].map((item) => (
               <div key={item.step} className="rounded-xl border border-border bg-white p-6 relative">
                 <div className="text-4xl font-bold text-accent/20">{item.step}</div>
                 <h3 className="mt-2 text-lg font-bold text-primary">{item.title}</h3>
                 <p className="mt-2 text-sm text-muted">{item.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* FAQ */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <HelpCircle className="mx-auto h-8 w-8 text-accent" />
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Frequently Asked Questions</h2>
             <p className="mx-auto mt-4 max-w-xl text-muted">
               Common questions from RV manufacturers evaluating OEM partnerships.
             </p>
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
           <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your OEM Project?</h2>
           <p className="mx-auto mt-4 max-w-xl text-gray-300">
             Contact our engineering team today. We typically respond within 24 hours.
           </p>
           <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
             <Link
               href="/contact"
               className="inline-flex items-center justify-center rounded-lg bg-[#FF6B35] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#FF5A20] transition-colors shadow-lg shadow-[#FF6B35]/20"
             >
               Contact Our Team
             </Link>
             <Link
               href="/documents/Catalog.pdf"
               target="_blank"
               className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
             >
               Download Full Catalog
             </Link>
           </div>
         </div>
       </section>
     </div>
   );
 }
