import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import BlogSidebar from "@/components/blog/BlogSidebar";

const articles = {
  "understanding-electric-jack-load-ratings": {
    title: "Understanding Electric Jack Load Ratings for RV Stability",
    date: "June 4, 2026",
    category: "Engineering Guide",
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
};

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
              {/* Render markdown content */}
              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/^### (.+)$/gm, "<h3 class='text-xl font-bold text-gray-900 mt-8 mb-4'>$1</h3>")
                    .replace(/^## (.+)$/gm, "<h2 class='text-2xl font-bold text-gray-900 mt-10 mb-4'>$1</h2>")
                    .replace(/^- (.+)$/gm, "<li class='ml-4 text-gray-700'>$1</li>")
                    .replace(/^\d+\. (.+)$/gm, "<li class='ml-4 text-gray-700'>$1</li>")
                    .replace(/\|(.+)\|/g, "<table class='w-full border-collapse mt-4'><tbody>$1</tbody></table>")
                    .replace(/\| (.+) \| (.+) \|/g, "<tr><td class='border border-gray-300 px-4 py-2 font-medium'>$1</td><td class='border border-gray-300 px-4 py-2'>$2</td></tr>")
                    .replace(/\*\*(.+?)\*\*/g, "<strong class='font-semibold'>$1</strong>")
                    .replace(/\n/g, "<p class='text-gray-700 leading-relaxed mb-4'>")
                }}
              />
            </article>
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
