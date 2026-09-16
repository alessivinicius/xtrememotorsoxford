import { Star } from "lucide-react";
import type { ReviewExcerpt } from "@/data/reviews";

export function ReviewCard({ review }: { review: ReviewExcerpt }) {
  return (
    <div className="flex h-full flex-col justify-between border border-paper/12 bg-ink-soft p-8">
      <div>
        <div className="flex gap-1">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} size={15} className="text-gold" fill="currentColor" />
          ))}
        </div>
        <p className="mt-5 font-display text-xl italic leading-snug text-paper">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <p className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-paper/40">
        Verified {review.source}
      </p>
    </div>
  );
}
