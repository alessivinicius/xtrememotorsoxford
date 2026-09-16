import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { company } from "@/data/company";
import { getVehicleBySlug } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Xtreme Motors Oxford — call, WhatsApp, or send an enquiry. Find our Oxford forecourt and opening hours.",
};

const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  company.address.full
)}&output=embed`;

interface ContactPageProps {
  searchParams: { vehicle?: string; intent?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const vehicle = searchParams.vehicle ? getVehicleBySlug(searchParams.vehicle) : undefined;
  const isTestDrive = searchParams.intent === "test-drive";

  const defaultSubject = vehicle
    ? `${isTestDrive ? "Test drive request" : "Enquiry"}: ${vehicle.make} ${vehicle.model} (${vehicle.year})`
    : "";
  const defaultMessage = vehicle
    ? `Hi, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.variant}${isTestDrive ? " and would like to book a test drive." : "."}`
    : "";

  return (
    <section className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container>
        <SectionHeading eyebrow="Get In Touch" title="Come and See Us" />

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-accent-dark" />
                <div>
                  <p className="font-display text-lg text-ink">Xtreme Motors Oxford</p>
                  <p className="mt-1 text-sm leading-relaxed text-ash">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.city} {company.address.postcode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-accent-dark" />
                <div>
                  <p className="font-display text-lg text-ink">Phone</p>
                  <a href={company.phoneHref} className="mt-1 block text-sm text-ash hover:text-ink">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className="font-display text-lg text-ink">Opening Hours</p>
                <div className="mt-3 space-y-1 text-sm text-ash">
                  {company.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6 border-b border-ink/8 py-1.5">
                      <span>{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={company.phoneHref} variant="dark">
                <Phone size={15} strokeWidth={1.75} />
                Call Us
              </Button>
              <Button href={company.whatsappHref} variant="outline" external>
                <MessageCircle size={15} strokeWidth={1.75} />
                WhatsApp Us
              </Button>
              <Button href={company.mapsHref} variant="ghost" external>
                Get Directions
              </Button>
            </div>

            <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-ink/10 sm:aspect-video">
              <iframe
                title="Xtreme Motors Oxford location"
                src={mapEmbedSrc}
                loading="lazy"
                className="h-full w-full grayscale"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="border border-ink/10 bg-paper-white p-8 md:p-10">
            <h2 className="font-display text-2xl text-ink">
              {vehicle ? "Send an Enquiry" : "Send Us a Message"}
            </h2>
            {vehicle ? (
              <p className="mt-2 text-sm text-ash">
                Asking about the {vehicle.year} {vehicle.make} {vehicle.model}.
              </p>
            ) : null}
            <div className="mt-6">
              <ContactForm defaultSubject={defaultSubject} defaultMessage={defaultMessage} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
