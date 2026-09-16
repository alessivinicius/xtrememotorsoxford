"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import type { Vehicle } from "@/data/vehicles";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";
import { VehicleFilters, emptyFilters, type FilterState } from "@/components/vehicles/VehicleFilters";

function applyFilters(vehicles: Vehicle[], filters: FilterState): Vehicle[] {
  return vehicles.filter((v) => {
    if (filters.make && v.make !== filters.make) return false;
    if (filters.model && v.model !== filters.model) return false;
    if (filters.maxPrice && v.price > Number(filters.maxPrice)) return false;
    if (filters.fuel && v.fuel !== filters.fuel) return false;
    if (filters.transmission && v.transmission !== filters.transmission) return false;
    if (filters.maxMileage && v.mileage > Number(filters.maxMileage)) return false;
    if (filters.minYear && v.year < Number(filters.minYear)) return false;
    return true;
  });
}

export function StockBrowser({ vehicles }: { vehicles: Vehicle[] }) {
  const [draft, setDraft] = useState<FilterState>(emptyFilters);
  const [applied, setApplied] = useState<FilterState>(emptyFilters);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(() => applyFilters(vehicles, applied), [vehicles, applied]);

  const handleSearch = () => {
    setApplied(draft);
    setDrawerOpen(false);
  };

  const handleClear = () => {
    setDraft(emptyFilters);
    setApplied(emptyFilters);
    setDrawerOpen(false);
  };

  return (
    <div>
      <div className="hidden border border-ink/10 bg-paper-white p-8 lg:block">
        <VehicleFilters
          draft={draft}
          onChange={setDraft}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </div>

      <div className="flex items-center justify-between lg:hidden">
        <p className="text-sm text-ash">
          {results.length} {results.length === 1 ? "car" : "cars"} found
        </p>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 border border-ink/15 px-4 py-3 text-xs font-semibold uppercase tracking-widest2 text-ink"
        >
          <SlidersHorizontal size={15} />
          Filters
        </button>
      </div>

      <div className="mt-8 hidden items-center justify-between lg:flex">
        <p className="text-sm text-ash">
          {results.length} {results.length === 1 ? "car" : "cars"} found
        </p>
      </div>

      <div className="mt-6 lg:mt-8">
        <VehicleGrid vehicles={results} />
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-paper p-6 pb-10">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-display text-xl text-ink">Filter Cars</h2>
              <button
                type="button"
                aria-label="Close filters"
                onClick={() => setDrawerOpen(false)}
                className="flex h-10 w-10 items-center justify-center border border-ink/15"
              >
                <X size={18} />
              </button>
            </div>
            <VehicleFilters
              draft={draft}
              onChange={setDraft}
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
