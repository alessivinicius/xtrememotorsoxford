import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function WarrantyBanner() {
  return (
    <section className="bg-paper-dim py-20 md:py-24">
      <Container>
        <div className="grid overflow-hidden border border-ink/10 bg-paper-white md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src="/images/warranty-home.png"
              alt="A car parked safely on a home driveway in the evening"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
            <ShieldCheck size={36} strokeWidth={1.25} className="text-accent-dark" />
            <div>
              <h2 className="font-display text-3xl leading-[1.05] tracking-tight text-ink md:text-4xl">
                Drive Away With Peace of Mind
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ash">
                Every car we sell passes a {company.warranty.inspectionPoints}-point
                check and comes with a minimum of {company.warranty.minMonths}{" "}
                months&rsquo; warranty included as standard — with the option
                to extend your cover if you&rsquo;d like longer peace of mind.
              </p>
            </div>
            <Button href="/warranty" variant="dark" className="w-fit">
              Learn About Warranty
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
