import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { cn, formatMileage, formatPrice } from "@/lib/utils";
import { VehiclePlaceholder } from "@/components/vehicles/VehiclePlaceholder";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const unavailable = vehicle.status !== "In Stock";

  return (
    <Link
      href={`/stock/${vehicle.slug}`}
      className="group block overflow-hidden border border-ink/8 bg-paper-white transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-premium group-hover:scale-[1.04]">
          <VehiclePlaceholder
            make={vehicle.make}
            model={vehicle.model}
            seed={vehicle.imageSeed}
          />
        </div>
        {unavailable ? (
          <span className="absolute left-4 top-4 bg-ink px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest2 text-paper">
            {vehicle.status}
          </span>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl text-ink">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="mt-0.5 text-sm text-ash">{vehicle.variant}</p>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-ash transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-dark"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ash">
          <span>{vehicle.year}</span>
          <span aria-hidden>·</span>
          <span>{formatMileage(vehicle.mileage)}</span>
        </div>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ash">
          <span>{vehicle.fuel}</span>
          <span aria-hidden>·</span>
          <span>{vehicle.transmission}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-5">
          <span
            className={cn(
              "font-display text-2xl",
              unavailable ? "text-ash line-through" : "text-ink"
            )}
          >
            {formatPrice(vehicle.price)}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest2 text-accent-dark">
            View Vehicle
          </span>
        </div>
      </div>
    </Link>
  );
}
