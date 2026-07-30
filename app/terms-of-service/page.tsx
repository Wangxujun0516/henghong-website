import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read Henghong's terms of service for B2B customers, OEMs, and distributors of RV leveling systems and electric jacks.",
  alternates: {
    canonical: "https://www.henghongrv.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Henghong",
    description:
      "Henghong's terms of service for B2B customers, OEMs, and distributors of RV leveling systems and electric jacks.",
    images: [{ url: "/images/factory/factory-complex.jpg", width: 1200, height: 630 }],
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-border bg-neutral py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Terms of Service</h1>
          <p className="mt-2 text-muted">Last updated: June 5, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Henghong Intelligent Equipment Co., Ltd. website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2>2. Nature of Business</h2>
            <p>
              Henghong Intelligent Equipment Co., Ltd. is a professional manufacturer and exporter of RV leveling systems, electric jacks, and related equipment. We serve global B2B customers including RV manufacturers, distributors, and OEM partners.
            </p>

            <h2>3. Product Information</h2>
            <p>
              All product specifications, images, and descriptions on this website are for reference purposes only. Actual product dimensions, specifications, and performance may vary. We reserve the right to modify products without prior notice.
            </p>

            <h2>4. Pricing and Payment</h2>
            <p>
              Product pricing is subject to change without notice. All prices are quoted in USD unless otherwise specified. Payment terms are negotiated on a per-order basis for B2B customers.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Henghong Intelligent Equipment Co., Ltd. and protected by international copyright laws.
            </p>

            <h2>6. OEM/ODM Services</h2>
            <p>
              Custom OEM/ODM projects are subject to separate agreements specifying design ownership, production rights, confidentiality terms, and quality standards. Contact our sales team for custom project terms.
            </p>

            <h2>7. Shipping and Delivery</h2>
            <p>
              Shipping costs and delivery times vary by destination and order volume. We ship worldwide via major freight forwarders. Risk of loss transfers upon delivery to the carrier.
            </p>

            <h2>8. Warranty</h2>
            <p>
              Henghong products are warranted against defects in materials and workmanship under normal use for a period specified in the product documentation. Warranty claims must be supported by proof of purchase.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              Henghong shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services. Our total liability shall not exceed the purchase price of the products in question.
            </p>

            <h2>10. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
            </p>

            <h2>11. Export Compliance</h2>
            <p>
              Products sold by Henghong are subject to export control laws and regulations. Customers are responsible for ensuring compliance with import regulations in their destination countries.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any disputes shall be resolved through arbitration in Hangzhou, Zhejiang Province.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions regarding these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:sales@henghongrv.com">sales@henghongrv.com</a></li>
              <li>Phone: +86 153 8400 6618</li>
              <li>Address: No. 38, Kenmao Street, Yinong Town, Xiaoshan District, Hangzhou City, Zhejiang Province, China</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
