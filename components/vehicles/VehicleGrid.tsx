import type { Vehicle } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function VehicleGrid({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) {
    return (
      <div className="border border-dashed border-ink/15 px-6 py-20 text-center">
        <p className="font-display text-2xl text-ink">No vehicles match your search</p>
        <p className="mt-2 text-sm text-ash">
          Try adjusting or clearing your filters, or get in touch — we may have
          something suitable arriving soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
