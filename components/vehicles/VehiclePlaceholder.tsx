import { Car } from "lucide-react";
import { cn } from "@/lib/utils";

interface VehiclePlaceholderProps {
  make: string;
  model: string;
  seed: string;
  className?: string;
  showBadge?: boolean;
}

// Deterministic pseudo-random angle so each vehicle's placeholder looks
// slightly different while staying within the brand palette. This keeps
// the mock stock grid from feeling like fifteen copies of one graphic.
function seedToAngle(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) % 360;
  }
  return hash;
}

export function VehiclePlaceholder({
  make,
  model,
  seed,
  className,
  showBadge = true,
}: VehiclePlaceholderProps) {
  const angle = seedToAngle(seed);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-ink",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, #11294A 0%, #081C33 55%, #17335C 100%)`,
      }}
      role="img"
      aria-label={`${make} ${model} — photo coming soon`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F5F6FA 0px, #F5F6FA 1px, transparent 1px, transparent 14px)",
        }}
      />
      <Car
        className="relative h-[38%] w-[38%] text-accent/70"
        strokeWidth={1}
      />
      <span className="absolute bottom-4 left-5 font-display text-sm tracking-wide text-paper/50">
        {make} {model}
      </span>
      {showBadge ? (
        <span className="absolute right-4 top-4 rounded-full border border-paper/20 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest2 text-paper/60">
          Sample vehicle
        </span>
      ) : null}
    </div>
  );
}
