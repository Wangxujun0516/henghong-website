import { Award, Factory, Users, Shield } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const iconMap: Record<string, React.ReactNode> = {
  "Years Experience": <Award className="h-6 w-6" />,
  "Countries Served": <Users className="h-6 w-6" />,
  "Factory Area": <Factory className="h-6 w-6" />,
  "R&D Engineers": <Shield className="h-6 w-6" />,
};

export function TrustBar() {
  return (
    <section className="border-y border-border bg-neutral">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {siteConfig.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              {iconMap[stat.label] || <Award className="h-6 w-6" />}
            </div>
            <p className="mt-3 text-2xl font-bold text-primary sm:text-3xl">    
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
