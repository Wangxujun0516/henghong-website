import { siteConfig } from "@/lib/site-config";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-neutral">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-bold text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
