import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TrustBar } from "@/components/TrustBar";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Xtreme Motors Oxford, an independent used car dealership built on honesty, personal service and support that continues after you drive away.",
};

const values = [
  {
    title: "Straightforward",
    description:
      "Clear information about every vehicle, explained in plain terms — no pressure, no jargon.",
  },
  {
    title: "Personal",
    description:
      "You deal directly with the person who knows the car, from your first question to years down the line.",
  },
  {
    title: "Considered",
    description:
      "Vehicles are checked over and prepared before they join our stock, rather than sold as-is.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink pb-16 pt-32 md:pb-20 md:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="About Xtreme Motors Oxford"
            description="A trusted local dealership where you're treated like a person, not a number."
            light
          />
        </Container>
      </section>

      <TrustBar />

      <section className="pb-0 pt-24 md:pt-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
                The Person Behind Xtreme Motors
              </span>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                Meet Ricardo
              </h2>

              <div className="mt-7 space-y-4 text-base leading-relaxed text-ash md:text-lg">
                <p>
                  Xtreme Motors Oxford is run by Ricardo, who takes a
                  hands-on approach to every part of the business — from
                  sourcing and preparing each car to being the person you
                  speak to when you call.
                </p>
                <p>
                  Customers consistently describe the experience as
                  friendly, honest, professional and straightforward.
                  Questions about a vehicle's history, condition or paperwork
                  are answered directly, without being passed between
                  departments.
                </p>
                <p>
                  That same approach carries through to test drives, the
                  paperwork involved in buying a car, and what happens if a
                  small issue comes up after you've driven away. The aim is
                  always the same: make the process easy, and be there if
                  you need us.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/stock" variant="primary">
                  View Our Stock
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-ink lg:max-w-none">
              <Image
                src="/images/ricardo-owner.png"
                alt="Ricardo, owner of Xtreme Motors Oxford, at the dealership"
                fill
                className="object-cover object-[35%_center]"
                sizes="(min-width: 1024px) 40vw, 90vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper-dim pb-0 pt-24 md:pt-32">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="What You Can Expect"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t border-ink/10 pt-6 text-center sm:text-left">
                <h3 className="font-display text-xl text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-white py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:gap-12 sm:text-left">
            <div className="relative h-32 w-32 shrink-0 sm:h-40 sm:w-40">
              <Image
                src="/images/award-badge.png"
                alt="Business Awards UK 2026 Winner — Car Sales Business of the Year"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
                Awards &amp; Recognition
              </span>
              <h2 className="font-display text-3xl leading-[1.05] tracking-tight text-ink md:text-4xl">
                2026 Business Awards UK Winner
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ash">
                Xtreme Motors Oxford was named Car Sales Business of the
                Year at the 2026 Business Awards UK Automotive Awards — a
                reflection of the same honest, personal approach behind
                every sale.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
