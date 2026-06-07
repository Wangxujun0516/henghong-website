import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us - RV Leveling System Manufacturer | Henghong",
  description:
    "Contact Henghong for quotes on RV leveling systems, stabilizer jacks, and OEM/ODM projects. Intertek Verified Supplier with 22+ years of export experience. We reply within 24 hours.",
  alternates: {
    canonical: "https://www.henghongrv.com/contact",
  },
  openGraph: {
    title: "Contact Henghong RV Equipment Manufacturer",
    description:
      "Get quotes for RV leveling systems and electric jacks. Contact our sales team for OEM/ODM partnerships and technical support.",
    images: [{ url: "/images/company/Overview.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-neutral">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Get in touch with our Sales Team for product quotes, technical
            specifications, or OEM/ODM partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary">Get In Touch</h2>
              <p className="mt-2 text-sm text-muted">
                Reach out to our Sales Team. We&apos;re here to help with product
                inquiries, quotes, and partnership opportunities.
              </p>
            </div>

            <div className="flex gap-3 text-muted">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary">Our Office</p>
                <p className="mt-1 text-sm">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>

            <div className="flex gap-3 text-muted">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary">Email Sales Team</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 block text-sm hover:text-accent"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3 text-muted">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary">Phone / WhatsApp</p>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-sm hover:text-accent"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3 text-muted">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-primary">Business Hours</p>
                <p className="mt-1 text-sm">
                  {siteConfig.contact.businessHours}
                </p>
              </div>
            </div>

            <div className="space-y-3 rounded-lg border border-border bg-white p-5">
              <h3 className="font-semibold text-primary">Quick Contact</h3>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp?.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: {siteConfig.contact.whatsapp}
              </a>
              <p className="text-xs text-muted">
                {siteConfig.contact.responseTime}
              </p>
            </div>

            <div className="rounded-lg border border-border bg-white p-5">
              <h3 className="font-semibold text-primary">Trust Signals</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {siteConfig.trustSignals.map((signal) => (
                  <li key={signal}>✓ {signal}</li>
                ))}
              </ul>
            </div>
          </div>

          <div id="quote" className="scroll-mt-24 lg:col-span-2">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-primary">
                Request a Quote
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form below and our Sales Team will get back to you
                shortly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
