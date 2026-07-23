 "use client";
 
 import Link from "next/link";
 import { motion } from "framer-motion";
 import { Truck, Home, Tent, ArrowRight } from "lucide-react";
 
 const solutions = [
   {
     icon: <Tent className="h-10 w-10" />,
     title: "Travel Trailer",
     description:
       "Lightweight and reliable leveling and towing solutions for travel trailers and campers. Ideal for OEMs seeking compact electric jacks with consistent performance.",
     products: "Electric Tongue Jack, Stabilizer Jacks, Scissor Jack",
     link: "/products?category=Electric+Trailer+Jacks",
   },
   {
     icon: <Home className="h-10 w-10" />,
     title: "Fifth Wheel",
     description:
       "Heavy-duty automatic leveling systems and landing gear designed for fifth wheel trailers. Precision control and high load capacity for demanding applications.",
     products: "Automatic Leveling System, Fifth Wheel Landing Gear, Slide Out Support",
     link: "/products?category=Automatic+Leveling+Systems",
   },
   {
     icon: <Truck className="h-10 w-10" />,
     title: "Motorhome",
     description:
       "High-capacity hydraulic and electric leveling systems for Class A and Class C motorhomes. Engineered for stability, safety, and integration with OEM electrical systems.",
     products: "Hydraulic Leveling System, Heavy-Duty Electric Jack, Electric Step",
     link: "/products?category=Electric+Hydraulic",
   },
 ];
 
 export function SolutionsByRvType() {
   return (
     <section className="relative overflow-hidden bg-neutral py-20 sm:py-28">
       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center"
         >
           <span className="inline-block rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm font-medium text-accent">
             Solutions by RV Type
           </span>
           <h2 className="mt-4 text-3xl font-bold text-primary sm:text-4xl lg:text-5xl tracking-tight">
             Find the Right Solution for Your RV Platform
           </h2>
           <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
             Every RV type has unique requirements. We engineer specific solutions for each platform — from lightweight travel trailers to heavy-duty motorhomes.
           </p>
         </motion.div>
 
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.15 }}
           className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
         >
           {solutions.map((solution) => (
             <Link
               key={solution.title}
               href={solution.link}
               className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
             >
               <div className="flex flex-col gap-5">
                 <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                   {solution.icon}
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-primary">
                     {solution.title}
                   </h3>
                   <p className="mt-2 text-sm leading-relaxed text-muted">
                     {solution.description}
                   </p>
                 </div>
                 <div className="border-t border-border pt-4">
                   <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                     Recommended Products
                   </p>
                   <p className="mt-1 text-sm text-primary">
                     {solution.products}
                   </p>
                 </div>
                 <div className="flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                   <span>View Products</span>
                   <ArrowRight className="h-4 w-4" />
                 </div>
               </div>
             </Link>
           ))}
         </motion.div>
       </div>
     </section>
   );
 }
