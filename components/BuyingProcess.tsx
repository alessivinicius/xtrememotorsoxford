import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Find Your Car",
    description: "Browse our stock and find a vehicle that suits you.",
    image: "/images/buying-process/01-find-your-car.png",
  },
  {
    number: "02",
    title: "Book a Viewing",
    description: "Come and see the car in person and take a test drive.",
    image: "/images/buying-process/02-book-a-viewing.png",
  },
  {
    number: "03",
    title: "Get the Details",
    description: "We'll walk you through the vehicle, paperwork and warranty.",
    image: "/images/buying-process/03-get-the-details.png",
  },
  {
    number: "04",
    title: "Drive Away",
    description:
      "Once everything is agreed, we'll help make the final process as smooth as possible.",
    image: "/images/buying-process/04-drive-away.png",
  },
];

export function BuyingProcess() {
  return (
    <section className="bg-paper-white pb-0 pt-24 md:pt-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="Buying a Car Made Simple"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <span className="mt-5 block font-display text-2xl text-accent-dark">
                {step.number}
              </span>
              <h3 className="mt-1 font-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
