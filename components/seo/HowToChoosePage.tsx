 import Link from "next/link";
 import { ArrowRight, HelpCircle, Scale, Wrench, DollarSign, Shield, Truck, Home, Tent } from "lucide-react";
 
 const faqs = [
   {
     q: "What is the most important factor when choosing an RV leveling system?",
     a: "Weight capacity is the most critical factor. Your leveling system must support the full weight of your RV. Always choose a system with capacity exceeding your RV's gross vehicle weight rating (GVWR) by at least 20% for a safety margin.",
   },
   {
     q: "Can I install a leveling system myself?",
     a: "Electric jacks and bolt-on leveling systems are designed for straightforward installation and can often be installed by experienced RV technicians. Hydraulic systems require professional installation due to hydraulic line routing and pump integration.",
   },
   {
     q: "How long do RV leveling systems last?",
     a: "With proper maintenance, a quality leveling system can last the lifetime of your RV. Henghong electric jacks are tested for 600+ cycles, and our shock absorbers pass 1 million cycles. We offer a 1-year warranty on all products.",
   },
   {
     q: "What is the difference between stabilizer jacks and leveling systems?",
     a: "Stabilizer jacks reduce movement and sway once your RV is parked, but they are not designed to lift the full weight of the vehicle. Leveling systems are built to lift and support the RV's full weight to achieve a level position.",
   },
 ];
 
 const factors = [
   {
     icon: Scale,
     title: "Weight & Load Capacity",
     desc: "Match the system's capacity to your RV's weight. Travel trailers under 10,000 lbs can use electric jacks. Heavy motorhomes need hydraulic systems rated for 12T-20T.",
   },
   {
     icon: Truck,
     title: "RV Type",
     desc: "Different RV types need different systems. Travel trailers → electric jacks. Fifth wheels → automatic leveling. Motorhomes → hydraulic leveling systems.",
   },
   {
     icon: Wrench,
     title: "Installation Complexity",
     desc: "Electric systems bolt on easily. Hydraulic systems need professional installation. Consider your technical capability and budget for installation labor.",
   },
   {
     icon: DollarSign,
     title: "Budget",
     desc: "Electric systems have lower upfront cost. Hydraulic systems cost more but offer higher capacity and faster operation for heavy-duty applications.",
   },
   {
     icon: Shield,
     title: "Certification & Quality",
     desc: "Look for Intertek-verified suppliers, ISO-certified factories, and CE-certified products. Henghong meets all three standards.",
   },
   {
     icon: Home,
     title: "OEM Customization",
     desc: "If you are an RV manufacturer, consider whether the supplier supports OEM customization — logo, packaging, parameters, and small-batch trials.",
   },
 ];
 
 export function HowToChoosePage() {
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
               How to Choose an RV Leveling System
             </h1>
             <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
               A practical guide for RV manufacturers and owners on selecting the right leveling system 
               based on vehicle type, weight, budget, and application requirements.
             </p>
           </div>
         </div>
       </section>
 
       {/* Key Factors */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">Selection Criteria</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Key Factors to Consider</h2>
             <p className="mx-auto mt-4 max-w-2xl text-muted">
               Six essential factors to evaluate when selecting an RV leveling system or electric jack supplier.
             </p>
           </div>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {factors.map((factor) => (
               <div key={factor.title} className="rounded-xl border border-border bg-neutral/30 p-6">
                 <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                   <factor.icon className="h-6 w-6" />
                 </div>
                 <h3 className="mt-4 font-bold text-primary">{factor.title}</h3>
                 <p className="mt-2 text-sm text-muted leading-relaxed">{factor.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* By RV Type */}
       <section className="bg-neutral py-20 sm:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <span className="text-sm font-semibold uppercase tracking-wide text-accent">Quick Reference</span>
             <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Choose by RV Type</h2>
           </div>
           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {[
               { icon: Tent, type: "Travel Trailer", weight: "Under 10,000 lbs", recommend: "Electric Tongue Jack + Stabilizer Jacks", reason: "Lightweight, cost-effective, easy installation. Henghong HH series jacks rated 2,500-5,000 lbs." },
               { icon: Home, type: "Fifth Wheel", weight: "10,000 - 20,000 lbs", recommend: "Automatic Leveling System + Landing Gear", reason: "Our HCPSR automatic leveling systems handle 6,000-8,000 lbs per leg with precision control." },
               { icon: Truck, type: "Motorhome (Class A/B/C)", weight: "12,000 - 40,000+ lbs", recommend: "Hydraulic Leveling System", reason: "High-capacity DC12V hydraulic systems up to 12T-20T for the heaviest RVs." },
             ].map((item) => (
               <div key={item.type} className="rounded-xl border border-border bg-white p-6">
                 <item.icon className="h-10 w-10 text-accent" />
                 <h3 className="mt-4 text-lg font-bold text-primary">{item.type}</h3>
                 <p className="mt-1 text-sm text-muted">GVWR: {item.weight}</p>
                 <p className="mt-3 text-sm font-semibold text-accent">Recommended: {item.recommend}</p>
                 <p className="mt-1 text-sm text-muted">{item.reason}</p>
                 <Link href="/products" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:gap-2 transition-all">
                   View Products <ArrowRight className="h-4 w-4" />
                 </Link>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Decision Steps */}
       <section className="py-20 sm:py-28">
         <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h2 className="text-3xl font-bold text-primary sm:text-4xl">Step-by-Step Decision Guide</h2>
           </div>
           <div className="mt-12 space-y-8">
             {[
               { step: "1", title: "Determine Your RV's Weight", desc: "Check your RV's GVWR. This is the maximum weight your leveling system needs to support. Add 20% safety margin." },
               { step: "2", title: "Choose Electric or Hydraulic", desc: "Under 10,000 lbs — electric is sufficient and cost-effective. Over 12,000 lbs — hydraulic offers better capacity and speed." },
               { step: "3", title: "Select Number of Jack Points", desc: "Most RVs use 4-point systems. Larger motorhomes may need 6-point systems for better stability." },
               { step: "4", title: "Verify Supplier Credentials", desc: "Check for ISO certifications, Intertek verification, export experience, and OEM customization capability." },
               { step: "5", title: "Request Samples or Specs", desc: "Ask for technical datasheets, installation manuals, and CAD drawings. If possible, request samples for testing." },
             ].map((item) => (
               <div key={item.step} className="flex gap-6">
                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white font-bold text-lg">
                   {item.step}
                 </div>
                 <div>
                   <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                   <p className="mt-1 text-sm text-muted">{item.desc}</p>
                 </div>
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
           <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Find the Right System?</h2>
           <p className="mx-auto mt-4 max-w-xl text-gray-300">
             Our team can help you select the ideal leveling solution for your RV platform.
           </p>
           <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#FF6B35] px-8 py-3.5 text-base font-semibold text-white hover:bg-[#FF5A20] transition-colors shadow-lg shadow-[#FF6B35]/20">
             Contact Our Team
           </Link>
         </div>
       </section>
     </div>
   );
 }
