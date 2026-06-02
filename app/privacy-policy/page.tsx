import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Henghong Intelligent Equipment - How we collect, use, and protect your information when you contact us or browse our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-henghong">
            <h2>Information We Collect</h2>
            <p>
              When you contact us through our website form or email, we collect the following information:
            </p>
            <ul>
              <li>Name and company name (if provided)</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Country/Region</li>
              <li>Product interest and message content</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiry about our products and services</li>
              <li>Provide you with quotes and technical specifications</li>
              <li>Communicate about orders, shipments, and after-sales support</li>
              <li>Send you product updates and company news (only with your consent)</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Your information is only shared with:
            </p>
            <ul>
              <li>Our internal sales and technical teams to serve your inquiry</li>
              <li>Third-party email service providers (only for sending emails you have requested)</li>
              <li>Legal authorities when required by applicable law</li>
            </ul>

            <h2>Data Retention</h2>
            <p>
              We retain your contact information for as long as your inquiry is active or as needed to provide you with services. You may request deletion of your data at any time by contacting us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses privacy-friendly analytics that does not track individual users or store personal data. We only collect anonymous, aggregated data about page visits and referrers to improve our website.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, please contact us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul>
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Address: {siteConfig.contact.address}</li>
            </ul>

            <h2>International Transfers</h2>
            <p>
              If you are located outside China, please note that your information will be transferred to and processed in China, where our servers are located. China may have different data protection laws than your country.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
