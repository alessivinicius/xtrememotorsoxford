import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

// Placeholder — replace with a policy reviewed against UK GDPR / the Data
// Protection Act 2018 before launch.
export default function PrivacyPolicyPage() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container narrow>
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ash">
          <p>
            This page is a placeholder. Xtreme Motors Oxford will publish a
            full privacy policy explaining what personal data is collected
            through this website (for example, via the contact and sell
            your car forms), how it is used, how long it is kept, and how
            visitors can exercise their rights under UK data protection law.
          </p>
          <p>
            Until the full policy is published, please contact us directly
            at {company.phone} with any questions about how your
            information is handled.
          </p>
        </div>
      </Container>
    </section>
  );
}
