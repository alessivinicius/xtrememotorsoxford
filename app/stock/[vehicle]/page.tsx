import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/CTASection";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { VehicleSpecs } from "@/components/vehicles/VehicleSpecs";
import { getVehicleBySlug, vehicles } from "@/data/vehicles";
import { company } from "@/data/company";
import { formatMileage, formatPrice } from "@/lib/utils";

interface PageProps {
  params: { vehicle: string };
}

export function generateStaticParams() {
  return vehicles.map((v) => ({ vehicle: v.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const vehicle = getVehicleBySlug(params.vehicle);
  if (!vehicle) return {};

  const title = `${vehicle.make} ${vehicle.model} (${vehicle.year}) | ${formatPrice(vehicle.price)}`;
  const description = `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.variant} — ${formatMileage(vehicle.mileage)}, ${vehicle.fuel}, ${vehicle.transmission}. For sale at Xtreme Motors Oxford.`;

  return { title, description };
}

export default function VehicleDetailPage({ params }: PageProps) {
  const vehicle = getVehicleBySlug(params.vehicle);
  if (!vehicle) notFound();

  const enquireHref = `/contact?vehicle=${vehicle.slug}`;
  const testDriveHref = `/contact?vehicle=${vehicle.slug}&intent=test-drive`;

  return (
    <>
      <section className="pb-16 pt-28 md:pb-24 md:pt-36">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <VehicleGallery vehicle={vehicle} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
                {vehicle.make} / {vehicle.model}
              </p>
              <h1 className="mt-2 font-display text-3xl leading-tight text-ink md:text-4xl">
                {vehicle.make} {vehicle.model}
              </h1>
              <p className="mt-1 text-base text-ash">{vehicle.variant}</p>

              <p className="mt-6 font-display text-4xl text-ink">
                {formatPrice(vehicle.price)}
              </p>

              <div className="mt-8">
                <VehicleSpecs vehicle={vehicle} />
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <Button href={testDriveHref} variant="primary" className="w-full">
                  Book a Test Drive
                </Button>
                <Button href={enquireHref} variant="dark" className="w-full">
                  Enquire About This Car
                </Button>
                <Button href={company.phoneHref} variant="outline" className="w-full">
                  <Phone size={15} strokeWidth={1.75} />
                  Call Us
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-14 border-t border-ink/10 pt-14 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-ink">
                Vehicle Description
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-ash">
                {vehicle.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <h2 className="mt-12 font-display text-2xl text-ink">
                Key Features
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                {vehicle.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-ash before:mt-2 before:h-1 before:w-1 before:shrink-0 before:bg-accent"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xl text-ink">
                  Service History
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {vehicle.serviceHistory}. Full documentation is available to
                  view when you visit us.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-ink">Warranty</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  This car has passed our {company.warranty.inspectionPoints}-point
                  check and comes with a minimum of {company.warranty.minMonths}{" "}
                  months&rsquo; warranty included, with the option to extend.{" "}
                  <a href="/warranty" className="text-accent-dark underline underline-offset-2">
                    Learn more about warranty
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-ink">Finance</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  Finance options for this vehicle will be available soon.
                  Get in touch and we'll be happy to discuss what might work
                  for you.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl text-ink">
                  Delivery / Collection
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  Collect in person from our Oxford forecourt, or contact us
                  to ask about delivery options for this vehicle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Interested in This Car?"
        description="Book a test drive or send an enquiry and we'll get back to you as soon as we can."
        primary={{ label: "Book a Test Drive", href: testDriveHref }}
        secondary={{ label: "Enquire Now", href: enquireHref }}
      />
    </>
  );
}
