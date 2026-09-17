import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ReviewCarousel } from "@/components/reviews/ReviewCarousel";
import { company } from "@/data/company";

export function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      {/* Subtle background texture only — kept low-opacity and under a
          dark scrim so it never competes with the review cards on top. */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="/videos/reviews.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/75" />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest2 text-accent-light">
              Social Proof
            </span>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-paper md:text-5xl">
              What Our Customers Say
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="text-gold" fill="currentColor" />
                ))}
              </div>
              <span className="font-display text-lg text-paper">
                {company.reviews.rating.toFixed(1)}
              </span>
              <span className="text-sm text-paper/50">
                &middot; {company.reviews.count} Google Reviews
              </span>
            </div>
          </div>

          <Button href={company.mapsHref} variant="outline-light" external>
            Read All Reviews
          </Button>
        </div>

        <div className="mt-14">
          <ReviewCarousel />
        </div>
      </Container>
    </section>
  );
}
