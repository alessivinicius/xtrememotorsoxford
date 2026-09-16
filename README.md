# Xtreme Motors Oxford — Website Skeleton

A Next.js (App Router) + TypeScript + Tailwind CSS skeleton for the Xtreme
Motors Oxford used car dealership website.

## Getting started

This machine doesn't have Node.js installed, so the build has not been run
yet — install Node 18+ first, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's implemented

- **Pages**: Home, Stock (with client-side filtering), Vehicle detail
  (`/stock/[vehicle]`), About, Warranty (with FAQ schema), Sell Your Car,
  Contact (with map embed + pre-filled enquiry form), Finance (placeholder),
  plus Privacy Policy / Cookie Policy / Terms placeholders, a 404 page,
  `sitemap.xml` and `robots.txt`.
- **Layout**: sticky navbar (transparent-over-hero → solid on scroll),
  footer, and a mobile sticky bottom bar (Call/WhatsApp site-wide, switches
  to Call/Enquire Now on vehicle detail pages).
- **Design system**: `tailwind.config.ts` defines the full palette (`ink`,
  `paper`, `accent`, `ash`) — a deep navy + steel-blue theme matched to the
  Xtreme Motors logo — the `Fraunces` display / `Work Sans` body font
  pairing, and shared spacing/shadow/animation tokens. See the
  `frontend-design` skill principles this follows (no Inter/Arial,
  distinctive type pairing, dominant colour + sharp accent).
- **Mock data**: `data/vehicles.ts` (6 fictional cars, clearly flagged via
  `isMockData` and on-card "Sample vehicle" badges), `data/reviews.ts`
  (short real review excerpts as provided, not expanded or invented),
  `data/company.ts` (address, hours, phone, etc.).
- **Forms**: `ContactForm` and `SellCarForm` are fully built UI with no
  backend wired up yet — see the `NOTE` comments in each file.
- **Real photography & video**: the Hero, Stock and Featured Vehicles
  section banners use real AI-animated footage of the dealership's BMW
  (`public/videos/`), and the Ricardo portrait, buying-process steps,
  Google Reviews backdrop, Sell Your Car and Warranty sections use real
  photography (`public/images/`) via `next/image`. The 6 *mock* stock
  listings still use the illustrated `VehiclePlaceholder` graphic — see
  point 3 below.

## Before launch — things that still need real content

1. **Video file size.** `public/videos/hero.mp4` (~20MB), `stock-grid.mp4`
   (~12.6MB) and `featured-vehicles.mp4` (~9.5MB) are the original
   AI-generated exports. Re-encode them (e.g. H.264, ~2–4 Mbps, 1080p or
   720p) before launch — the Home page currently loads two of these at
   once (Hero + Featured Vehicles ≈ 30MB), which will hurt Core Web
   Vitals/LCP on mobile connections. `ffmpeg` isn't installed on this
   machine, so this wasn't done automatically.
2. **Forms need a backend.** Wire `ContactForm` and `SellCarForm` to an API
   route / email provider (Resend, Formspree, etc.).
3. **Real stock data.** Replace `data/vehicles.ts` with a real data source
   (CMS, database, or DMS feed) and remove the `isMockData` flag — at that
   point each listing should get its own real photography instead of
   `VehiclePlaceholder`.
4. **Google Reviews.** `data/reviews.ts` holds short excerpts from the
   themes provided. Swap in verbatim review text (with permission) or embed
   the live Google Reviews widget.
5. **Map & geo coordinates.** `data/company.ts` has an approximate lat/lng
   for Littleworth, Oxford — replace with the exact pin, and consider
   swapping the no-API-key map embed for the Google Maps Embed API.
6. **Legal pages.** Privacy Policy, Cookie Policy and Terms & Conditions are
   placeholders and need review before launch.
7. **Finance page.** Currently a "coming soon" placeholder per the brief.
8. **Reduced motion.** The Hero/Stock/Featured Vehicles `<video>` elements
   autoplay unconditionally. Consider pausing them for visitors with
   `prefers-reduced-motion: reduce` before launch.
