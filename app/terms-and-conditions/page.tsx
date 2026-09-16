import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false },
};

// Placeholder — replace with terms reviewed by a solicitor, covering use
// of this website and, separately, the terms of any vehicle sale.
export default function TermsPage() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container narrow>
        <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-ash">
          <p>
            This page is a placeholder for the terms and conditions
            governing use of this website. Separate terms apply to the sale
            of any vehicle and will be provided in writing at the point of
            purchase.
          </p>
        </div>
      </Container>
    </section>
  );
}
