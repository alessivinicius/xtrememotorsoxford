import {
  Calendar,
  DoorOpen,
  Fuel as FuelIcon,
  Gauge,
  Palette,
  Settings2,
  Wrench,
} from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { formatMileage } from "@/lib/utils";

export function VehicleSpecs({ vehicle }: { vehicle: Vehicle }) {
  const specs = [
    { icon: Calendar, label: "Year", value: vehicle.year },
    { icon: Gauge, label: "Mileage", value: formatMileage(vehicle.mileage) },
    { icon: FuelIcon, label: "Fuel", value: vehicle.fuel },
    { icon: Settings2, label: "Transmission", value: vehicle.transmission },
    { icon: Wrench, label: "Engine", value: vehicle.engineSize },
    { icon: DoorOpen, label: "Doors", value: vehicle.doors },
    { icon: Palette, label: "Colour", value: vehicle.colour },
    { icon: Calendar, label: "Registration", value: "Available on request" },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
      {specs.map((spec) => (
        <div key={spec.label} className="border-t border-ink/10 pt-4">
          <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest2 text-ash">
            <spec.icon size={14} strokeWidth={1.75} />
            {spec.label}
          </dt>
          <dd className="mt-2 font-display text-lg text-ink">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
