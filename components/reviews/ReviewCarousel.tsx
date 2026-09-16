"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviewExcerpts } from "@/data/reviews";
import { ReviewCard } from "@/components/reviews/ReviewCard";

export function ReviewCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 flex">
          {reviewExcerpts.map((review) => (
            <div
              key={review.id}
              className="min-w-[85%] shrink-0 grow-0 basis-auto pl-5 sm:min-w-[60%] lg:min-w-[32%]"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors disabled:opacity-30 hover:enabled:border-accent hover:enabled:text-accent-light"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next reviews"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 text-paper transition-colors disabled:opacity-30 hover:enabled:border-accent hover:enabled:text-accent-light"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
