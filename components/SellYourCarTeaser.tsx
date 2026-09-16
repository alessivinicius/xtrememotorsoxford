import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function SellYourCarTeaser() {
  return (
    <section className="bg-paper-white pt-0 pb-24 md:pb-28">
      <Container>
        <div className="relative overflow-hidden border border-ink/10 bg-ink px-8 py-16 text-center md:px-16">
          <Image
            src="/images/sell-your-car.png"
            alt=""
            fill
            className="object-cover opacity-35"
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
          <div className="relative">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest2 text-accent-light">
              Sell Your Car
            </span>
            <h2 className="mx-auto max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-paper md:text-5xl">
              Thinking of Selling Your Car?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base text-paper/65 md:text-lg">
              We may be interested in buying your vehicle.
            </p>
            <div className="mt-9 flex justify-center">
              <Button href="/sell-your-car" variant="primary">
                Get an Offer
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
