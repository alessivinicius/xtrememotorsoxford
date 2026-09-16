import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Cookie Policy",
  robots: { index: false },
};

// Placeholder — replace with a full cookie policy (and a consent banner,
// if analytics/marketing cookies are added) before launch.
export default function CookiePolicyPage() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container narrow>
        <SectionHeading eyebrow="Legal" title="Cookie Policy" />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ash">
          <p>
            This page is a placeholder. This website does not currently set
            any non-essential cookies. If analytics or marketing tools are
            added in future, this policy will be updated to explain what is
            set, why, and how visitors can manage their preferences.
          </p>
        </div>
      </Container>
    </section>
  );
}
