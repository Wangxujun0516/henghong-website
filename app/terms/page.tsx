import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Henghong Intelligent Equipment - Conditions governing the use of our website and business relationships.",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-primary py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose-henghong">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Henghong Intelligent Equipment website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2>Business Relationships</h2>
            <p>
              Any inquiry, quote request, or business discussion initiated through this website does not constitute a binding agreement. All business relationships, including product orders, pricing, and delivery terms, must be formalized through a separate written agreement signed by authorized representatives of both parties.
            </p>

            <h2>Product Information</h2>
            <p>
              We strive to provide accurate product specifications, images, and descriptions. However:
            </p>
            <ul>
              <li>Product specifications may change without prior notice</li>
              <li>Images are for illustration purposes and may not exactly match the final product</li>
              <li>Prices quoted through inquiries are estimates and may vary</li>
              <li>Minimum order quantities may apply to certain products</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and product designs, is the property of Henghong Intelligent Equipment or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Henghong Intelligent Equipment shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Any errors or omissions in product information</li>
              <li>Any actions taken based on information provided on this website</li>
            </ul>

            <h2>OEM/ODM Partnerships</h2>
            <p>
              For OEM (Original Equipment Manufacturer) or ODM (Original Design Manufacturer) collaborations:
            </p>
            <ul>
              <li>Non-disclosure agreements (NDAs) are available upon request</li>
              <li>Custom product development timelines vary by project scope</li>
              <li>Intellectual property rights are negotiated on a case-by-case basis</li>
              <li>Minimum order quantities apply to custom products</li>
            </ul>

            <h2>Export Compliance</h2>
            <p>
              Our products may be subject to export control regulations. Customers are responsible for ensuring compliance with all applicable export laws and regulations in their country of residence.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any disputes shall be resolved through binding arbitration or in the courts of Hangzhou, Zhejiang Province, China.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>For questions regarding these Terms of Service, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:sales@henghong-equipment.com">sales@henghong-equipment.com</a></li>
              <li>Phone: +86 153 8400 6618</li>
              <li>Address: Hangzhou, Zhejiang Province, China</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}