import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    slug: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500 font-medium">{post.date}</time>
        <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-flex items-center mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all"
        >
          Read Article
          <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
        </a>
      </div>
    </article>
  );
}
