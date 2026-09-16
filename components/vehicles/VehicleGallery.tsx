"use client";

import { useState } from "react";
import type { Vehicle } from "@/data/vehicles";
import { VehiclePlaceholder } from "@/components/vehicles/VehiclePlaceholder";
import { cn } from "@/lib/utils";

// Demo vehicles only carry one image seed. A real listing would provide an
// array of photo URLs here — this renders a small set of gallery slots so
// the layout can be evaluated with more than one frame.
const GALLERY_SLOTS = 4;

export function VehicleGallery({ vehicle }: { vehicle: Vehicle }) {
  const [active, setActive] = useState(0);
  const slots = Array.from({ length: GALLERY_SLOTS }, (_, i) => i);

  return (
    <div>
      <div className="aspect-[4/3] w-full overflow-hidden bg-ink">
        <VehiclePlaceholder
          make={vehicle.make}
          model={vehicle.model}
          seed={`${vehicle.imageSeed}-${active}`}
          showBadge={false}
        />
      </div>

      <div className="mt-3 flex snap-x gap-3 overflow-x-auto pb-1">
        {slots.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show photo ${i + 1} of ${vehicle.make} ${vehicle.model}`}
            className={cn(
              "aspect-[4/3] w-24 shrink-0 snap-start overflow-hidden border-2 transition-colors sm:w-28",
              active === i ? "border-accent" : "border-transparent"
            )}
          >
            <VehiclePlaceholder
              make={vehicle.make}
              model={vehicle.model}
              seed={`${vehicle.imageSeed}-${i}`}
              showBadge={false}
            />
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-ash">
        Sample vehicle — photography shown is a placeholder pending real
        images of this car.
      </p>
    </div>
  );
}
