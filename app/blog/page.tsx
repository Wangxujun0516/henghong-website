import { FileText, Clock } from "lucide-react";

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

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Technical Resources Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our team is preparing comprehensive technical articles, engineering guides, and industry insights for RV manufacturers and parts distributors worldwide.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Expected launch: Q3 2026</span>
            </div>
          </div>

          {/* Preview Topics */}
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Content Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Electric Jack Load Rating Calculations",
                "OEM/ODM Customization Best Practices",
                "RV Leveling System Installation Guides",
                "Intertek Factory Audit Process",
                "Corrosion Protection for Marine Environments",
                "ISO9001 Quality Compliance",
              ].map((topic, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Contact Us for Technical Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
