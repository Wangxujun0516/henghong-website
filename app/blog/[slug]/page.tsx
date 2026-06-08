import type { Metadata } from "next";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";

const articles = {
  "understanding-electric-jack-load-ratings": {
    title: "Understanding Electric Jack Load Ratings for RV Stability",
    date: "June 4, 2026",
    category: "Engineering Guide",
    description: "Learn how to properly assess load requirements when selecting electric jacks for your RV or trailer. Covers static vs dynamic load, safety factors, and common ratings.",
    content: `
      ## Introduction
      When selecting electric jacks for your RV or trailer, understanding load ratings is critical for safety and performance. This guide explains how to properly assess your load requirements.

      ## Key Load Rating Concepts

      ### Static Load vs Dynamic Load
      - **Static Load**: The weight supported when the vehicle is stationary
      - **Dynamic Load**: The forces encountered during travel or operation

      ### Safety Factor
      Always select jacks with a safety factor of at least 2:1. This means if your calculated load is 1,500 lbs, choose jacks rated for at least 3,000 lbs.

      ## Load Calculation Formula

      | Component | Formula |
      |-----------|---------|
      | Tongue Weight | (GVW x TW%) / 100 |
      | Total Load per Jack | Total Weight / Number of Jacks |
      | Required Rating | Calculated Load x Safety Factor |

      ## Common Load Ratings

      | Rating | Applications |
      |--------|--------------|
      | 2,000 lbs | Small campers, pop-ups |
      | 3,500 lbs | Mid-size travel trailers |
      | 5,000 lbs | Large fifth wheels |
      | 7,500 lbs | Heavy commercial trailers |

      ## Conclusion
      Proper load rating selection ensures safe and reliable operation of your RV stabilization system. Always consult with your equipment manufacturer for specific requirements.
    `,
  },
  "intertek-factory-audit-guide": {
    title: "Intertek Factory Audit: What RV Manufacturers Need to Know",
    date: "May 28, 2026",
    category: "Factory News",
    description: "Learn about the Intertek factory verification process and why it matters for your supply chain. Covers audit steps, benefits, and Henghong's certification status.",
    content: `
      ## What is Intertek Verification?

      Intertek is a leading global provider of quality and safety solutions. Their factory verification process ensures that manufacturers meet international standards.

      ## Audit Process Overview

      1. **Initial Assessment**: Review of company documentation and certifications
      2. **On-site Inspection**: Evaluation of production facilities and quality control processes
      3. **Product Testing**: Verification of product compliance with industry standards
      4. **Report Generation**: Comprehensive audit report with recommendations

      ## Benefits of Intertek Certification

      - Global recognition and credibility
      - Access to international markets
      - Improved supply chain trust
      - Reduced risk for buyers

      ## Henghong's Certification Status

      We are proud to maintain Intertek Verified Supplier status, demonstrating our commitment to quality and compliance.
    `,
  },
  "how-to-find-reliable-rv-jack-manufacturer-china": {
    title: "How to Find a Reliable RV Jack Manufacturer in China",
    date: "June 7, 2026",
    category: "Sourcing Guide",
    description: "A step-by-step guide for RV manufacturers and distributors to find a reliable RV jack manufacturer in China. Covers factory audits, certifications, quality control, and the OEM process.",
    content: `
      <blockquote class="bg-gray-100 border-l-4 border-primary p-4 my-6"><p class="text-gray-700"><strong>TL;DR:</strong> Finding a reliable RV jack manufacturer in China requires verifying factory credentials (Intertek, ISO9001), auditing manufacturing capabilities (CNC machinery, robotic welding), checking quality control processes (load testing, salt-spray testing), and assessing OEM/ODM experience. Start with <a href="/about" class="text-primary hover:underline">Intertek-verified suppliers</a> who have a proven export track record to 40+ countries.</p></blockquote>

      ## What Makes an RV Jack Manufacturer "Reliable"?

      A reliable RV jack manufacturer is a factory that has verifiable third-party credentials, demonstrable in-house manufacturing capabilities, documented quality control processes, and a proven track record of exporting to international markets.

      When sourcing RV electric jacks, automatic leveling systems, or stabilizer jacks from China, distinguishing between genuine manufacturers and trading companies is the most critical step. A reliable manufacturer should be able to show you:

      - **Third-party verification**: Intertek audit reports, ISO9001 certification
      - **In-house production**: Own factory floor, not just an office
      - **Engineering capability**: R&D team, custom design support
      - **Quality systems**: Load testing, salt-spray testing, batch inspection
      - **Export experience**: Proven shipping records to your target markets

      ## Why Source RV Jacks from China?

      China has become the world's leading manufacturing hub for RV components, including electric trailer jacks and leveling systems. The advantages include:

      - **Cost efficiency**: Factory-direct pricing vs. branded distributors
      - **Customization**: OEM/ODM capabilities for custom specs
      - **Scale**: Production lines capable of bulk orders
      - **Experience**: Decades of export experience to 40+ countries

      However, the key challenge is finding manufacturers that meet international quality standards. This guide will help you navigate that process.

      ## Step-by-Step Guide to Verifying a Manufacturer

      ### Step 1: Check Third-Party Verification (Intertek)

      <img src="/images/certifications/intertek-verified.webp" alt="Intertek Verified Supplier certification for RV jack manufacturer China" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-sm text-gray-500 italic mb-6">Intertek verification confirms the manufacturer has passed a rigorous on-site factory audit.</p>

      Third-party verification is the fastest way to confirm a manufacturer's legitimacy. Intertek, one of the world's leading inspection and certification organizations, conducts on-site factory audits that verify:

      - Actual manufacturing facilities and equipment
      - Production capacity and lead times
      - Quality management systems
      - Workforce and technical capabilities

      An Intertek-verified supplier has already been vetted by an independent third party, which significantly reduces your sourcing risk.

      ### Step 2: Audit Manufacturing Capabilities

      <img src="/images/company/cnc-workshop.webp" alt="CNC machining workshop at Henghong RV jack factory" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-sm text-gray-500 italic mb-4">Advanced CNC machinery indicates the manufacturer has in-house production capabilities.</p>

      <img src="/images/company/robotic-welding.webp" alt="Robotic welding station at Henghong electric trailer jack factory" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-sm text-gray-500 italic mb-6">Automated robotic welding ensures consistent weld quality across production batches.</p>

      A genuine manufacturer should have:

      - **CNC machining**: Precision cutting and forming of metal components
      - **Welding capabilities**: Robotic or automated welding for consistent quality
      - **Assembly lines**: Organized production flow for <a href="/products#electric-jacks" class="text-primary hover:underline">electric jacks</a> and <a href="/products#automatic-leveling-systems" class="text-primary hover:underline">leveling systems</a>
      - **Powder coating**: In-house or dedicated coating for corrosion resistance

      Ask for a video tour or schedule a physical audit. If the supplier hesitates to show their factory floor, that's a red flag.

      ### Step 3: Verify Quality Control Processes

      <img src="/images/company/finished-product-warehouse.webp" alt="Finished product warehouse at Henghong RV leveling system factory" class="w-full h-auto rounded-lg mb-4" />
      <p class="text-sm text-gray-500 italic mb-6">A well-organized warehouse indicates systematic quality management.</p>

      Quality control is what separates reliable manufacturers from commodity producers. Look for:

      - **Load testing**: Every electric jack should be tested at rated capacity before shipping
      - **Salt-spray testing**: Verifies corrosion resistance for outdoor use
      - **Cycle testing**: Ensures mechanical components can withstand repeated use
      - **Batch sampling**: Statistical quality control for bulk orders

      Reputable manufacturers will share their QC reports and testing procedures. Ask about their defect rate and how they handle quality issues.

      ### Step 4: Assess OEM/ODM Experience

      A manufacturer's OEM/ODM experience tells you how flexible they are. Questions to ask:

      - Can they customize stroke length, voltage (12V/24V), or mounting brackets?
      - Do they have in-house engineers for custom designs?
      - What is their typical lead time for custom orders?
      - Can they provide samples before mass production?

      Manufacturers with a dedicated R&D center are better equipped to handle custom projects.

      ### Step 5: Review Export Track Record

      Export experience to multiple countries demonstrates compliance with international standards. A manufacturer that exports to 40+ countries across North America, Europe, Australia, and Asia has proven:

      - Compliance with CE, FCC, IC certifications
      - Experience with international shipping and documentation
      - Understanding of different market requirements
      - Reliability in meeting delivery deadlines

      Ask for trade references or case studies from buyers in your region.

      ## Red Flags to Watch Out For

      **Red Flag 1: Trading company posing as a manufacturer**
      - They only show an office, not a factory
      - Product images look stock or generic
      - They can't provide factory audit reports

      **Red Flag 2: Unusually low prices**
      - Prices significantly below market average
      - Can't explain how they achieve such low costs
      - Quality certifications are missing or expired

      **Red Flag 3: Vague quality claims**
      - No specific testing data shared
      - Can't name their quality management system
      - Hesitate to provide samples

      **Red Flag 4: Poor communication**
      - Slow response times on technical questions
      - Can't provide detailed specifications
      - Unclear about delivery terms and lead times

      ## Frequently Asked Questions

      <div class="space-y-4 my-6">
      <div class="bg-gray-50 rounded-lg p-4"><p class="font-semibold text-gray-900">Q1: How do I verify if an RV jack manufacturer in China is legitimate?</p><p class="text-gray-700 mt-2">A: Request their Intertek or SGS factory audit report. Visit the factory in person or via video tour. Check their business license and export documentation.</p></div>
      <div class="bg-gray-50 rounded-lg p-4"><p class="font-semibold text-gray-900">Q2: What certifications should a reliable RV jack factory have?</p><p class="text-gray-700 mt-2">A: At minimum, ISO9001:2015 quality management certification and Intertek factory verification. CE, FCC, and IC certifications are also important.</p></div>
      <div class="bg-gray-50 rounded-lg p-4"><p class="font-semibold text-gray-900">Q3: What is the typical MOQ for electric trailer jacks from China?</p><p class="text-gray-700 mt-2">A: MOQ varies by manufacturer and model. Some accept small trial orders (50-100 units), while others require bulk orders (500+ units).</p></div>
      <div class="bg-gray-50 rounded-lg p-4"><p class="font-semibold text-gray-900">Q4: How long does OEM production take for custom RV jacks?</p><p class="text-gray-700 mt-2">A: Typical lead time is 15-30 days after order confirmation, depending on complexity. Custom designs may require additional time.</p></div>
      <div class="bg-gray-50 rounded-lg p-4"><p class="font-semibold text-gray-900">Q5: Can I visit the factory before placing an order?</p><p class="text-gray-700 mt-2">A: Yes, reputable manufacturers welcome factory visits. Intertek-verified suppliers can arrange tours or virtual tours via video call.</p></div>
      </div>

      ## Start Your Sourcing Journey with Henghong

      Henghong Intelligent Equipment Co., Ltd. is an <a href="/about" class="text-primary hover:underline">Intertek-verified manufacturer</a> with 22+ years of export experience. Our 39,000㎡ factory features 7 production lines, a provincial-level R&D center with 21 engineers, and ISO9001:2015 certification.

      We specialize in <a href="/about" class="text-primary hover:underline">OEM/ODM manufacturing</a> of RV leveling systems, electric jacks, and stabilizer jacks — exported to 40+ countries worldwide.

      <div class="mt-6 flex flex-col sm:flex-row gap-4">
        <a href="/contact#quote" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">Request a quote</a>
        <a href="mailto:sales@henghongrv.com" class="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">Contact our sales team</a>
      </div>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://www.henghongrv.com/blog/${slug}`,
    },
    openGraph: {
      title: `${article.title} | Henghong`,
      description: article.description,
      url: `https://www.henghongrv.com/blog/${slug}`,
      images: slug === "how-to-find-reliable-rv-jack-manufacturer-china"
        ? [{ url: "/images/company/factory-front-view.webp", width: 1200, height: 630 }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p className="text-gray-600">Article not found.</p>
        <Link href="/blog" className="mt-4 text-primary hover:underline">
          Return to blog
        </Link>
      </div>
    );
  }

  // Render markdown content with HTML protection
  const renderContent = (content: string) => {
    return content
      // Step 1: Trim leading/trailing whitespace
      .trim()
      // Step 2: Convert markdown headings (allow leading whitespace)
      .replace(/^\s*### (.+)$/gm, "<h3 class='text-xl font-bold text-gray-900 mt-8 mb-4'>$1</h3>")
      .replace(/^\s*## (.+)$/gm, "<h2 class='text-2xl font-bold text-gray-900 mt-10 mb-4'>$1</h2>")
      // Step 3: Convert bold
      .replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold'>$1</strong>")
      // Step 4: Convert double newlines to paragraph breaks
      .replace(/\n\n/g, "</p><p class='text-gray-700 leading-relaxed mb-4'>")
      // Step 5: Wrap remaining text in paragraph tags
      .replace(/^(.+)$/gm, (match) => {
        // Skip if already wrapped in a block element
        if (/^<(h[1-6]|p|blockquote|li|ul|ol|div)/i.test(match)) {
          return match;
        }
        return "<p class='text-gray-700 leading-relaxed mb-4'>" + match + "</p>";
      })
      // Step 6: Remove empty paragraphs
      .replace(/<p[^>]*>\s*<\/p>/g, "");
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Henghong Intelligent Equipment Co., Ltd." },
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "Henghong Intelligent Equipment Co., Ltd." },
  };

  // FAQPage Schema (only for the sourcing guide article)
  const faqSchema = resolvedParams.slug === "how-to-find-reliable-rv-jack-manufacturer-china"
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I verify if an RV jack manufacturer in China is legitimate?",
            acceptedAnswer: { "@type": "Answer", text: "Request their Intertek or SGS factory audit report. Visit the factory in person or via video tour. Check their business license and export documentation." },
          },
          {
            "@type": "Question",
            name: "What certifications should a reliable RV jack factory have?",
            acceptedAnswer: { "@type": "Answer", text: "At minimum, ISO9001:2015 quality management certification and Intertek factory verification. For international markets, CE, FCC, and IC certifications are also important." },
          },
          {
            "@type": "Question",
            name: "What is the typical MOQ for electric trailer jacks from China?",
            acceptedAnswer: { "@type": "Answer", text: "MOQ varies by manufacturer and model. Some accept small trial orders (50-100 units), while others require bulk orders (500+ units). Contact the manufacturer directly for specific MOQ terms." },
          },
          {
            "@type": "Question",
            name: "How long does OEM production take for custom RV jacks?",
            acceptedAnswer: { "@type": "Answer", text: "Typical lead time is 15-30 days after order confirmation, depending on complexity. Custom designs with new tooling may require additional time for prototyping and testing." },
          },
          {
            "@type": "Question",
            name: "Can I visit the factory before placing an order?",
            acceptedAnswer: { "@type": "Answer", text: "Yes, reputable manufacturers welcome factory visits. Intertek-verified suppliers are accustomed to regular audits and can arrange factory tours. Virtual tours via video call are also available." },
          },
        ],
      }
    : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Back link */}
            <Link
              href="/blog"
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Technical Resources
            </Link>

            {/* Metadata */}
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              {article.title}
            </h1>

            {/* Content */}
            <article className="mt-8 prose prose-lg max-w-none">
              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{
                  __html: renderContent(article.content),
                }}
              />
            </article>

            {/* JSON-LD Schemas */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleSchema),
              }}
            />
            {faqSchema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(faqSchema),
                }}
              />
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
