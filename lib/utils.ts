import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatMileage(mileage: number): string {
  return `${new Intl.NumberFormat("en-GB").format(mileage)} miles`;
}

// Converts "9:30am" / "5pm" style opening-hours strings into 24-hour
// "HH:MM" format for schema.org OpeningHoursSpecification.
export function to24Hour(time: string): string {
  const match = time.trim().match(/^(\d{1,2})(?::(\d{2}))?(am|pm)$/i);
  if (!match) return time;
  let [, hourStr, minuteStr, meridiem] = match;
  let hour = parseInt(hourStr, 10);
  const minute = minuteStr ?? "00";
  if (meridiem.toLowerCase() === "pm" && hour !== 12) hour += 12;
  if (meridiem.toLowerCase() === "am" && hour === 12) hour = 0;
  return `${hour.toString().padStart(2, "0")}:${minute}`;
}
