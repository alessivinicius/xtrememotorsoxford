import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaBanner } from "@/components/ui/MediaBanner";
import { CTASection } from "@/components/CTASection";
import { StockBrowser } from "@/components/vehicles/StockBrowser";
import { isMockData, vehicles } from "@/data/vehicles";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Stock | Used Cars for Sale in Oxford",
  description:
    "Browse our latest selection of quality used cars in Oxford. Filter by make, model, price, fuel type and more at Xtreme Motors Oxford.",
};

export default function StockPage() {
  return (
    <>
      <MediaBanner video="/videos/stock-grid.mp4" className="pb-14 pt-32 md:pb-20 md:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Our Stock"
            title="Find Your Next Car"
            description="Browse our latest selection of quality used cars in Oxford."
            light
          />
        </Container>
      </MediaBanner>

      <section className="py-14 md:py-20">
        <Container>
          {isMockData ? (
            <p className="mb-8 border border-accent/30 bg-accent/[0.06] px-5 py-3 text-sm text-ash">
              The vehicles below are example listings used to demonstrate this
              page's layout and filtering — not live stock.
            </p>
          ) : null}
          <StockBrowser vehicles={vehicles} />
        </Container>
      </section>

      <CTASection
        title="Can't See What You're Looking For?"
        description="New stock arrives regularly — get in touch and we'll let you know when something suitable comes in."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Call Us", href: company.phoneHref }}
      />
    </>
  );
}
