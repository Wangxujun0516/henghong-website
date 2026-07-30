import { FileText, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { allBlogs } from "@/.contentlayer/generated";
import { NewsletterSubscribe } from "@/components/blog/NewsletterSubscribe";

export const metadata: Metadata = {
  title: "Blog - Industry Insights & Guides",
  description:
    "Explore engineering guides, buying guides, and industry insights about RV leveling systems, electric jacks, and stabilizers from Henghong.",
  alternates: {
    canonical: "https://www.henghongrv.com/blog",
  },
  openGraph: {
    title: "Henghong Blog - RV Leveling Systems & Electric Jacks Insights",
    description:
      "Engineering guides, buying guides, and industry insights from Henghong Intelligent Equipment.",
  },
};

export default function BlogPage() {
  const articles = allBlogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Technical Resources & Industry Insights
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Engineering guides, factory compliance updates, and RV stabilization solutions from Henghong.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              
              <div className="space-y-6">
                {articles.map((article) => (
                  <article key={article.slug} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {[...new Set(articles.map(a => a.category))].map((category) => (
                    <li key={category}>
                      <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <NewsletterSubscribe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
