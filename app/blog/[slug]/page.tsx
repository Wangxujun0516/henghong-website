import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { allBlogs } from "@/.contentlayer/generated";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { MdxContent } from "@/components/mdx/MdxContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${blog.title} | Henghong RV`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: ["Henghong RV"],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = allBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = allBlogs
    .filter((b) => b.slug !== slug && b.category === blog.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 md:p-8">
            <header className="mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {blog.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              <p className="text-lg text-gray-600">{blog.description}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              <MdxContent code={blog.body.code} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Help with Your RV Leveling System?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our engineering team is ready to help you choose the right
                  leveling solution for your vehicle.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Contact Engineering Team
                </Link>
              </div>
            </div>
          </article>

          <aside>
            <BlogSidebar currentSlug={slug} relatedPosts={relatedPosts} />
          </aside>
        </div>
      </div>
    </div>
  );
}
