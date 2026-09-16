import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { company } from "@/data/company";
import { to24Hour } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.xtrememotorsoxford.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xtreme Motors Oxford | Quality Used Cars in Oxford",
    template: "%s | Xtreme Motors Oxford",
  },
  description:
    "Quality used cars in Oxford from Xtreme Motors. Browse our latest stock, book a test drive and experience a straightforward, personal approach to buying a car.",
  keywords: [
    "used cars Oxford",
    "car dealership Oxford",
    "used car dealer Oxfordshire",
    "Xtreme Motors Oxford",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Xtreme Motors Oxford",
    title: "Xtreme Motors Oxford | Quality Used Cars in Oxford",
    description:
      "Quality used cars in Oxford from Xtreme Motors. Browse our latest stock, book a test drive and experience a straightforward, personal approach to buying a car.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtreme Motors Oxford | Quality Used Cars in Oxford",
    description:
      "Quality used cars in Oxford. Browse stock, book a test drive, and buy with confidence.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: company.name,
  image: `${siteUrl}/og-image.jpg`,
  telephone: company.phone,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    postalCode: company.address.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.lat,
    longitude: company.geo.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: company.reviews.rating,
    reviewCount: company.reviews.count,
  },
  openingHoursSpecification: company.hours
    .filter((h) => h.hours !== "Closed")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: to24Hour(h.hours.split(" – ")[0]),
      closes: to24Hour(h.hours.split(" – ")[1]),
    })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
