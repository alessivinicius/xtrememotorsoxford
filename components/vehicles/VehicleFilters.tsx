"use client";

import type { ReactNode } from "react";
import { fuelTypes, getModelsForMake, makes, transmissionTypes, years } from "@/data/vehicles";
import { Button } from "@/components/ui/Button";

export interface FilterState {
  make: string;
  model: string;
  maxPrice: string;
  fuel: string;
  transmission: string;
  maxMileage: string;
  minYear: string;
}

export const emptyFilters: FilterState = {
  make: "",
  model: "",
  maxPrice: "",
  fuel: "",
  transmission: "",
  maxMileage: "",
  minYear: "",
};

const priceOptions = [3000, 5000, 7500, 10000, 12500, 15000];
const mileageOptions = [20000, 40000, 60000, 80000, 100000, 130000];

const selectClasses =
  "w-full appearance-none border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink transition-colors focus:border-accent focus:outline-none";

interface VehicleFiltersProps {
  draft: FilterState;
  onChange: (next: FilterState) => void;
  onSearch: () => void;
  onClear: () => void;
  className?: string;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash">
        {label}
      </span>
      {children}
    </label>
  );
}

export function VehicleFilters({
  draft,
  onChange,
  onSearch,
  onClear,
  className,
}: VehicleFiltersProps) {
  const models = draft.make ? getModelsForMake(draft.make) : [];

  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-7">
        <Field label="Make">
          <select
            className={selectClasses}
            value={draft.make}
            onChange={(e) =>
              onChange({ ...draft, make: e.target.value, model: "" })
            }
          >
            <option value="">All Makes</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Model">
          <select
            className={selectClasses}
            value={draft.model}
            onChange={(e) => onChange({ ...draft, model: e.target.value })}
            disabled={!draft.make}
          >
            <option value="">All Models</option>
            {models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Max Price">
          <select
            className={selectClasses}
            value={draft.maxPrice}
            onChange={(e) => onChange({ ...draft, maxPrice: e.target.value })}
          >
            <option value="">Any Price</option>
            {priceOptions.map((price) => (
              <option key={price} value={price}>
                Up to £{price.toLocaleString()}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Fuel">
          <select
            className={selectClasses}
            value={draft.fuel}
            onChange={(e) => onChange({ ...draft, fuel: e.target.value })}
          >
            <option value="">Any Fuel</option>
            {fuelTypes.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Transmission">
          <select
            className={selectClasses}
            value={draft.transmission}
            onChange={(e) => onChange({ ...draft, transmission: e.target.value })}
          >
            <option value="">Any Transmission</option>
            {transmissionTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Max Mileage">
          <select
            className={selectClasses}
            value={draft.maxMileage}
            onChange={(e) => onChange({ ...draft, maxMileage: e.target.value })}
          >
            <option value="">Any Mileage</option>
            {mileageOptions.map((m) => (
              <option key={m} value={m}>
                Up to {m.toLocaleString()} miles
              </option>
            ))}
          </select>
        </Field>

        <Field label="Year (from)">
          <select
            className={selectClasses}
            value={draft.minYear}
            onChange={(e) => onChange({ ...draft, minYear: e.target.value })}
          >
            <option value="">Any Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y} onwards
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button type="button" variant="dark" onClick={onSearch} className="sm:flex-1">
          Search Cars
        </Button>
        <Button type="button" variant="outline" onClick={onClear} className="sm:flex-1">
          Clear Filters
        </Button>
      </div>
    </div>
  );
}
