import BlogCard from "@/components/blog/BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Electric Jack Load Ratings for RV Stability",
    excerpt: "Learn how to properly calculate load requirements for your trailer stabilization systems and ensure maximum safety at the campsite.",
    category: "Engineering Guide",
    date: "June 4, 2026",
    image: "/images/blog/electric-jack-engineering.webp",
    slug: "understanding-electric-jack-load-ratings",
  },
  {
    id: 2,
    title: "Intertek Factory Audit: What RV Manufacturers Need to Know",
    excerpt: "A comprehensive guide to Intertek verification requirements and how certification impacts your global supply chain.",
    category: "Factory News",
    date: "May 28, 2026",
    image: "/images/blog/intertek-audit.webp",
    slug: "intertek-factory-audit-guide",
  },
  {
    id: 3,
    title: "Advanced Auto-Leveling Systems for Modern Motorhomes",
    excerpt: "Discover the latest innovations in automatic RV leveling technology and how smart systems improve user experience.",
    category: "Technology",
    date: "May 21, 2026",
    image: "/images/blog/auto-leveling-system.webp",
    slug: "advanced-auto-leveling-systems",
  },
  {
    id: 4,
    title: "OEM Customization Process: From Design to Production",
    excerpt: "A step-by-step guide to our OEM/ODM customization workflow for trailer jacks and leveling systems.",
    category: "OEM Guide",
    date: "May 14, 2026",
    image: "/images/blog/oem-customization.webp",
    slug: "oem-customization-process",
  },
  {
    id: 5,
    title: "Corrosion Protection: Extending Jack Lifespan in Coastal Environments",
    excerpt: "Best practices for protecting your RV equipment from saltwater corrosion and harsh marine conditions.",
    category: "Maintenance",
    date: "May 7, 2026",
    image: "/images/blog/corrosion-protection.webp",
    slug: "corrosion-protection-guide",
  },
  {
    id: 6,
    title: "ISO9001 Quality Management: Ensuring Consistent Product Excellence",
    excerpt: "How our ISO9001 certification guarantees product quality and reliability for every shipment.",
    category: "Compliance",
    date: "April 30, 2026",
    image: "/images/blog/iso9001-quality.webp",
    slug: "iso9001-quality-management",
  },
];

export default function BlogPage() {
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

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
