import { HeartHandshake, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

const items = [
  {
    icon: Star,
    title: `${company.reviews.rating.toFixed(1)}★ Google Rating`,
    description: `${company.reviews.count}+ customer reviews`,
  },
  {
    icon: Sparkles,
    title: "Quality Prepared",
    description: `${company.warranty.inspectionPoints}-point check before sale`,
  },
  {
    icon: ShieldCheck,
    title: "Warranty",
    description: `${company.warranty.minMonths} months included, extendable`,
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description: "We're here after you drive away",
  },
];

export function TrustBar() {
  return (
    <section id="trust-bar" className="border-b border-ink/8 bg-paper-white">
      <Container className="grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:gap-y-0 md:py-14">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-start gap-3 pr-6 md:border-ink/8 md:[&:not(:last-child)]:border-r"
          >
            <item.icon size={22} strokeWidth={1.5} className="text-accent" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-ash">{item.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
