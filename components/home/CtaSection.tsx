import Link from "next/link";

import { SectionReveal } from "@/components/home/SectionReveal";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-primary py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Partner With Henghong?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Get a customized quote for OEM/ODM leveling systems and electric
            jacks. Our team responds within 24 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="cta" size="lg">
              <Link href="/contact#quote">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
