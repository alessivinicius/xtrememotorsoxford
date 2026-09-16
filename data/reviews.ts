// ---------------------------------------------------------------------------
// GOOGLE REVIEW EXCERPTS
//
// These are short excerpts drawn from real customer feedback themes for
// Xtreme Motors Oxford. They are intentionally kept short and unedited in
// meaning — do not expand, embellish or invent additional review text.
//
// Before launch: replace with the verbatim review text and reviewer first
// names/initials pulled directly from the Google Business Profile (with
// permission), or embed the live Google Reviews widget instead of static
// copies.
// ---------------------------------------------------------------------------

export interface ReviewExcerpt {
  id: number;
  quote: string;
  rating: 5;
  source: "Google Review";
  mentions: string[];
}

export const reviewExcerpts: ReviewExcerpt[] = [
  {
    id: 1,
    quote: "Great A+ experience buying my car…",
    rating: 5,
    source: "Google Review",
    mentions: ["buying experience"],
  },
  {
    id: 2,
    quote: "Ricardo was patient, answered all my questions…",
    rating: 5,
    source: "Google Review",
    mentions: ["Ricardo", "customer service"],
  },
  {
    id: 3,
    quote: "Excellent customer service…",
    rating: 5,
    source: "Google Review",
    mentions: ["customer service"],
  },
  {
    id: 4,
    quote: "Honest, trustworthy and very professional…",
    rating: 5,
    source: "Google Review",
    mentions: ["honesty", "trust", "professionalism"],
  },
  {
    id: 5,
    quote: "Great car and great customer service…",
    rating: 5,
    source: "Google Review",
    mentions: ["car quality", "customer service"],
  },
];
