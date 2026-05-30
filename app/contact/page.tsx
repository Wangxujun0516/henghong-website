import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Henghong Intelligent Equipment for quotes on RV leveling systems, stabilizer jacks, and OEM/ODM projects.",
};

export default function ContactPage() {
  return (
    <div className="bg-neutral">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Request a quote or discuss OEM/ODM partnership opportunities. We
            typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
            <div className="flex gap-3 text-muted">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p>{siteConfig.contact.address}</p>
            </div>
            <div className="flex gap-3 text-muted">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="flex gap-3 text-muted">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
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
              <p className="flex items-center gap-2 text-sm text-muted">
                <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.406-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                </svg>
                WeChat: {siteConfig.contact.wechat}
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
                Fill out the form below and we&apos;ll get back to you shortly.
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
