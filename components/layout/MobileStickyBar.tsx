"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Send } from "lucide-react";
import { company } from "@/data/company";

export function MobileStickyBar() {
  const pathname = usePathname();
  const vehicleMatch = pathname.match(/^\/stock\/([^/]+)$/);

  if (vehicleMatch) {
    const slug = vehicleMatch[1];
    return (
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink/10 bg-paper-white/95 backdrop-blur-sm lg:hidden">
        <a
          href={company.phoneHref}
          aria-label="Call us"
          className="flex w-16 items-center justify-center border-r border-ink/10 text-ink"
        >
          <Phone size={18} strokeWidth={1.75} />
        </a>
        <Link
          href={`/contact?vehicle=${slug}`}
          className="flex flex-1 items-center justify-center gap-2 bg-ink py-4 text-sm font-semibold uppercase tracking-wide text-paper"
        >
          <Send size={16} strokeWidth={1.75} />
          Enquire Now
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-ink/10 bg-paper-white/95 backdrop-blur-sm lg:hidden">
      <a
        href={company.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-ink/10 py-4 text-sm font-semibold uppercase tracking-wide text-ink"
      >
        <Phone size={17} strokeWidth={1.75} />
        Call Us
      </a>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-ink py-4 text-sm font-semibold uppercase tracking-wide text-paper"
      >
        <MessageCircle size={17} strokeWidth={1.75} />
        WhatsApp
      </a>
    </div>
  );
}
