import { FileDown, MessageSquare } from "lucide-react";
import Link from "next/link";

interface BlogSidebarProps {
  currentSlug?: string;
  relatedPosts?: {
    slug: string;
    title: string;
    category: string;
  }[];
}

export default function BlogSidebar({ currentSlug, relatedPosts }: BlogSidebarProps) {
  const displayPosts = relatedPosts?.length ? relatedPosts : [
    { title: "Understanding Electric Jack Load Ratings", slug: "understanding-electric-jack-load-ratings" },
    { title: "Intertek Factory Audit Guide", slug: "intertek-factory-audit-guide" },
    { title: "Advanced Auto-Leveling Systems", slug: "advanced-auto-leveling-systems" },
  ];

  return (
    <aside className="space-y-6">
      <div className="sticky top-24 bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white">
        <h3 className="text-lg font-bold">Need Custom RV Sourcing Solutions?</h3>
        <p className="mt-2 text-sm text-primary-foreground/80">
          Get direct factory pricing and professional technical support for your OEM/ODM projects.
        </p>
        <div className="mt-4 space-y-3">
          <a
            href="/documents/intertek-factory-audit-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Download Audit Report
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Inquire Now
          </a>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-gray-900">
          {relatedPosts?.length ? "Related Articles" : "Recent Articles"}
        </h3>
        <ul className="mt-4 space-y-3">
          {displayPosts.map((article, index) => (
            <li key={article.slug}>
              <Link
                href={`/blog/${article.slug}`}
                className={`text-sm hover:text-primary transition-colors line-clamp-2 ${article.slug === currentSlug ? "text-primary font-medium" : "text-gray-600"}`}
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
