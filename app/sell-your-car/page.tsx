import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SellCarForm } from "@/components/forms/SellCarForm";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description:
    "Thinking of selling your car? Xtreme Motors Oxford may be interested in buying your vehicle — tell us about it and get an offer.",
};

export default function SellYourCarPage() {
  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sell Your Car"
              title="Thinking of Selling Your Car?"
              description="We may be interested in buying your vehicle. Tell us a little about it below and we'll get back to you."
            />
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-ash">
              <p>
                Whether you're upgrading, downsizing, or simply ready for a
                change, we're happy to take a look at your car.
              </p>
              <p>
                The more detail you can share — condition, service history,
                mileage and a few photos — the sooner we can come back to you
                with a realistic offer.
              </p>
            </div>
          </div>

          <div className="border border-ink/10 bg-paper-white p-8 md:p-10">
            <SellCarForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
