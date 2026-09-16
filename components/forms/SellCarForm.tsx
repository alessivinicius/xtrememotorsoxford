"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full border border-ink/15 bg-paper-white px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none";
const labelClasses = "mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ash";

// NOTE: This form does not yet submit anywhere. Wire the onSubmit handler
// up to an API route / email provider before launch — it currently only
// demonstrates the intended UX, including the photo upload control.
export function SellCarForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-ink/10 bg-paper-white p-8 text-center">
        <h3 className="font-display text-xl text-ink">Thanks for the details</h3>
        <p className="mt-2 text-sm text-ash">
          We've received your vehicle details and will be in touch about a
          possible offer.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sell-name" className={labelClasses}>Name</label>
          <input id="sell-name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sell-phone" className={labelClasses}>Phone</label>
          <input id="sell-phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="sell-email" className={labelClasses}>Email</label>
        <input id="sell-email" name="email" type="email" required className={inputClasses} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="sell-make" className={labelClasses}>Make</label>
          <input id="sell-make" name="make" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sell-model" className={labelClasses}>Model</label>
          <input id="sell-model" name="model" type="text" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="sell-year" className={labelClasses}>Year</label>
          <input id="sell-year" name="year" type="number" min={1980} max={2100} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sell-mileage" className={labelClasses}>Mileage</label>
          <input id="sell-mileage" name="mileage" type="number" min={0} className={inputClasses} />
        </div>
        <div>
          <label htmlFor="sell-reg" className={labelClasses}>Registration</label>
          <input id="sell-reg" name="registration" type="text" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="sell-message" className={labelClasses}>Message</label>
        <textarea
          id="sell-message"
          name="message"
          rows={4}
          placeholder="Tell us about the condition of your car, service history, or anything else worth knowing."
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="sell-photos" className={labelClasses}>Upload Photos</label>
        <label
          htmlFor="sell-photos"
          className="flex cursor-pointer flex-col items-center justify-center gap-2 border-2 border-dashed border-ink/20 px-6 py-10 text-center transition-colors hover:border-accent"
        >
          <UploadCloud size={24} strokeWidth={1.5} className="text-ash" />
          <span className="text-sm text-ash">
            {fileCount > 0
              ? `${fileCount} photo${fileCount > 1 ? "s" : ""} selected`
              : "Click to upload photos of your car"}
          </span>
          <input
            id="sell-photos"
            name="photos"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => setFileCount(e.target.files?.length ?? 0)}
          />
        </label>
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Get an Offer
      </Button>
    </form>
  );
}
