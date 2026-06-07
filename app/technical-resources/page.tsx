import { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Resources & Industry Guides",
  description:
    "Access technical specifications, installation guides, and industry insights for RV leveling systems and electric jacks from Henghong.",
  alternates: {
    canonical: "https://www.henghongrv.com/technical-resources",
  },
};

const guides = [
  {
    title: "Electric Jack Installation Guide",
    description: "Step-by-step installation instructions for electric tongue jacks and stabilizer jacks.",
    icon: FileText,
    category: "Installation",
  },
  {
    title: "Automatic Leveling System Manual",
    description: "Complete technical manual for HCPSR-6 and HCPSR-8 leveling systems.",
    icon: BookOpen,
    category: "Technical Manual",
  },
  {
    title: "Load Rating Calculator",
    description: "Calculate the correct load capacity for your RV or trailer setup.",
    icon: HelpCircle,
    category: "Tools",
  },
  {
    title: "Maintenance & Care Guide",
    description: "Best practices for maintaining your electric jacks and leveling systems.",
    icon: Download,
    category: "Maintenance",
  },
];

const howToGuides = [
  {
    title: "How to Choose the Right RV Leveling System",
    excerpt: "Compare different leveling solutions based on your vehicle type and requirements.",
    category: "Buying Guide",
  },
  {
    title: "Understanding Electric Jack Specifications",
    excerpt: "Learn about voltage, lift capacity, and stroke specifications.",
    category: "Technical Guide",
  },
  {
    title: "OEM/ODM Customization Process",
    excerpt: "How to work with Henghong on custom RV equipment solutions.",
    category: "B2B Guide",
  },
];

export default function TechnicalResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Technical Resources & Industry Guides
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Access technical specifications, installation guides, and industry insights for RV leveling systems and electric jacks from Henghong.
            </p>
          </div>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Resources
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              Technical Documentation
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              Download comprehensive guides and technical documentation for Henghong RV equipment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {guides.map((guide) => (
              <div
                key={guide.title}
                className="group rounded-xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <guide.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-primary">{guide.title}</h3>
                <p className="mt-2 text-sm text-muted">{guide.description}</p>
                <span className="mt-4 inline-block text-xs font-medium text-accent">
                  {guide.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How-to Guides */}
      <section className="bg-neutral py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Expert Advice
            </p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              How-To Guides
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted">
              Comprehensive guides to help you choose and use the right RV equipment.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howToGuides.map((guide) => (
              <div
                key={guide.title}
                className="rounded-xl border border-border bg-white p-6"
              >
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {guide.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{guide.title}</h3>
                <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
                >
                  Coming Soon <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Need Custom Technical Support?
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Our engineering team can provide custom technical documentation and specifications for your OEM/ODM projects.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Contact Our Technical Team
          </Link>
        </div>
      </section>
    </div>
  );
}
