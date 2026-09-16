import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaBanner } from "@/components/ui/MediaBanner";
import { Button } from "@/components/ui/Button";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { getFeaturedVehicles } from "@/data/vehicles";

export function FeaturedVehicles() {
  const featured = getFeaturedVehicles(6);

  return (
    <section>
      <MediaBanner video="/videos/featured-vehicles.mp4" className="mb-14">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
          <SectionHeading
            eyebrow="Current Stock"
            title="Our Latest Stock"
            description="A snapshot of what's currently available. New arrivals are added regularly, so check back often."
            light
          />
          <Button href="/stock" variant="outline-light" className="shrink-0">
            View All Cars
          </Button>
        </Container>
      </MediaBanner>

      <Container className="pb-24 md:pb-32">
        <VehicleGrid vehicles={featured} />
      </Container>
    </section>
  );
}
