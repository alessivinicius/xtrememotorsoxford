import { Handshake, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

const pillars = [
  {
    icon: Handshake,
    title: "Honest Advice",
    description: "We take the time to understand what you actually need.",
  },
  {
    icon: Sparkles,
    title: "Quality Cars",
    description: `Every vehicle passes a ${company.warranty.inspectionPoints}-point check before it joins our stock.`,
  },
  {
    icon: ShieldCheck,
    title: "Warranty",
    description: `Every car includes a minimum of ${company.warranty.minMonths} months' warranty, with the option to extend.`,
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description: "Our relationship doesn't end when you drive away.",
  },
];

export function WhyXtreme() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why Xtreme Motors"
            title="A Different Way to Buy a Used Car"
            description="Buying a used car should feel straightforward. At Xtreme Motors Oxford, we focus on making the process simple, transparent and personal — from choosing the right car to supporting you after the sale."
            light
          />

          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="border-t border-paper/15 pt-6">
                <pillar.icon size={24} strokeWidth={1.5} className="text-accent-light" />
                <h3 className="mt-5 font-display text-lg text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/60">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
