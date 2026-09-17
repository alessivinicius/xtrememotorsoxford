import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function OwnerSection() {
  return (
    <section className="bg-paper-white py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-ink lg:max-w-none">
            <Image
              src="/images/ricardo-owner.png"
              alt="Ricardo, owner of Xtreme Motors Oxford, at the dealership"
              fill
              className="object-cover object-[35%_center]"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-7 right-7 flex items-stretch gap-3 md:bottom-9 md:right-9">
              <div className="w-px bg-accent-light" />
              <div>
                <p className="font-display text-xl tracking-wide text-paper md:text-2xl">
                  RICARDO
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest2 text-paper/70">
                  Founder
                </p>
              </div>
            </div>
          </div>

          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
              The Person Behind Xtreme Motors
            </span>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
              Meet Ricardo
            </h2>
            <p className="mt-4 font-display text-xl italic text-ash">
              A personal approach to buying your next car.
            </p>

            <div className="mt-7 space-y-4 text-base leading-relaxed text-ash md:text-lg">
              <p>
                At the heart of Xtreme Motors Oxford is Ricardo, who takes a
                hands-on approach to helping customers find the right
                vehicle.
              </p>
              <p>
                Customers consistently describe the experience as friendly,
                honest, professional and straightforward.
              </p>
              <p>
                From answering questions about a vehicle to helping with
                paperwork and supporting customers after the sale, the focus
                is always on making the process as easy as possible.
              </p>
            </div>

            <div className="mt-9">
              <Button href="/about" variant="outline">
                About Xtreme Motors
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
