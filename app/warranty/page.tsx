import type { Metadata } from "next";
import { CalendarPlus, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaBanner } from "@/components/ui/MediaBanner";
import { CTASection } from "@/components/CTASection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Warranty",
  description: `Every car at Xtreme Motors Oxford passes a ${company.warranty.inspectionPoints}-point check and comes with a minimum of ${company.warranty.minMonths} months' warranty, with the option to extend.`,
};

const points = [
  {
    icon: ClipboardCheck,
    title: `${company.warranty.inspectionPoints}-Point Check Before Sale`,
    description:
      "Every vehicle is thoroughly checked over before it joins our stock, so any issues are caught early rather than after you've bought the car.",
  },
  {
    icon: ShieldCheck,
    title: `${company.warranty.minMonths} Months' Warranty Included`,
    description:
      "Every car we sell comes with a minimum of three months' warranty as standard — not just selected vehicles.",
  },
  {
    icon: CalendarPlus,
    title: "Extend Your Cover",
    description:
      "Want extra peace of mind? Ask us about extending your warranty term beyond the standard three months.",
  },
  {
    icon: Wrench,
    title: "Straightforward if an Issue Comes Up",
    description:
      "If something needs looking at, get in touch and we'll talk you through the next steps.",
  },
];

const faqs = [
  {
    question: "Does every car come with a warranty?",
    answer: `Yes. Every vehicle we sell comes with a minimum of ${company.warranty.minMonths} months' warranty included as standard, whatever car you buy.`,
  },
  {
    question: "What does the pre-sale check involve?",
    answer: `Before a car is advertised, it goes through a ${company.warranty.inspectionPoints}-point check covering its mechanical, electrical and cosmetic condition, so you can buy with confidence.`,
  },
  {
    question: "Can I extend my warranty?",
    answer:
      "Yes — if you'd like cover for longer than the standard three months, just ask us when you view the car and we'll talk you through the options.",
  },
  {
    question: "What happens if something goes wrong after I buy the car?",
    answer:
      "Get in touch with us directly. We'll talk through the issue and the options available under your warranty.",
  },
  {
    question: "Can I ask questions about warranty before I visit?",
    answer:
      "Yes — call, WhatsApp, or use our contact form and we'll answer any questions ahead of a viewing or test drive.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WarrantyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MediaBanner
        image="/images/warranty-home.png"
        alt="A car parked safely on a home driveway in the evening"
        className="pb-16 pt-32 md:pb-20 md:pt-40"
      >
        <Container>
          <SectionHeading
            eyebrow="Warranty"
            title="Drive Away With Peace of Mind"
            description={`Every car passes a ${company.warranty.inspectionPoints}-point check and comes with a minimum of ${company.warranty.minMonths} months' warranty included as standard — with the option to extend your cover.`}
            light
          />
        </Container>
      </MediaBanner>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {points.map((point) => (
              <div key={point.title} className="border-t border-ink/10 pt-6">
                <point.icon size={24} strokeWidth={1.5} className="text-accent-dark" />
                <h3 className="mt-5 font-display text-lg text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim py-24 md:py-32">
        <Container narrow>
          <SectionHeading eyebrow="Common Questions" title="Warranty FAQs" />
          <dl className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <dt className="font-display text-lg text-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ash">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <CTASection
        title="Have a Question About Warranty?"
        description="Get in touch and we'll talk you through the options for a specific vehicle."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Stock", href: "/stock" }}
      />
    </>
  );
}
