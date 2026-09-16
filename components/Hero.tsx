import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const trustIndicators = [
  { label: `${company.reviews.rating.toFixed(1)}★ Google Reviews` },
  { label: `${company.reviews.count}+ Customer Reviews` },
  { label: `${company.warranty.minMonths}+ Months Warranty` },
  { label: "Oxford Based" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      {/* Darkens the footage and guarantees text contrast regardless of the
          underlying shot — strongest over the text zone on the left. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/30" />
      <div className="absolute inset-0 bg-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="absolute right-6 top-24 z-10 hidden animate-fade-in sm:block md:right-10 md:top-28 [animation-delay:600ms]">
        <div className="relative h-24 w-24 md:h-28 md:w-28">
          <Image
            src="/images/award-badge.png"
            alt="Business Awards UK 2026 Winner — Car Sales Business of the Year"
            fill
            className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
            sizes="112px"
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-8xl px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block animate-fade-up text-xs font-semibold uppercase tracking-widest2 text-accent-light [animation-delay:0ms]">
            Oxford&rsquo;s Independent Dealership
          </span>

          <h1 className="animate-fade-up font-display text-hero-mobile text-paper [animation-delay:80ms] md:text-hero lg:text-hero-xl">
            Quality Cars.
            <br />
            <span className="italic text-accent-light">Honest Service.</span>
          </h1>

          <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-paper/70 [animation-delay:200ms] md:text-xl">
            Quality used cars in Oxford, with a straightforward buying
            experience and support you can rely on.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-4 [animation-delay:320ms] sm:flex-row">
            <Button href="/stock" variant="primary">
              View Our Stock
            </Button>
            <Button href="/contact" variant="outline-light">
              Book a Test Drive
            </Button>
          </div>

          <ul className="mt-14 flex animate-fade-up flex-wrap gap-x-8 gap-y-4 [animation-delay:440ms]">
            {trustIndicators.map((item, i) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm text-paper/60"
              >
                {i === 0 ? (
                  <Star size={15} className="text-gold" fill="currentColor" />
                ) : (
                  <ShieldCheck size={15} className="text-accent-light" />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="#trust-bar"
        aria-label="Scroll to explore"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-paper/40 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-widest2">Explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
