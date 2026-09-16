import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Finance",
  description:
    "Finance options at Xtreme Motors Oxford — details coming soon. Get in touch to discuss what might work for you.",
};

// Placeholder page. Populate with real finance partners, representative
// APR examples and eligibility criteria once finance is available.
export default function FinancePage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Finance"
            title="Finance Options — Coming Soon"
            description="We're working on finance options to make buying your next car more flexible. In the meantime, get in touch and we'll be happy to talk through what might work for you."
            light
          />
        </Container>
      </section>

      <CTASection
        title="Ask Us About Finance"
        description="Every situation is different — contact us and we'll do our best to help."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "View Stock", href: "/stock" }}
      />
    </>
  );
}
