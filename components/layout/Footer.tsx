import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Stock", href: "/stock" },
  { label: "About", href: "/about" },
  { label: "Warranty", href: "/warranty" },
  { label: "Sell Your Car", href: "/sell-your-car" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-2">
          <Link
            href="/"
            aria-label="Xtreme Motors — home"
            className="relative inline-block aspect-[1038/636] h-16 w-auto"
          >
            <Image
              src="/images/logo.png"
              alt="Xtreme Motors — Nearly New Second Hand"
              fill
              className="object-contain object-left"
              sizes="260px"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
            A local, independent used car dealership in Oxford, focused on
            honest advice, carefully prepared vehicles and support that
            continues after you drive away.
          </p>
          <div className="mt-7 flex gap-3">
            <a
              href={company.social.facebook}
              aria-label="Xtreme Motors Oxford on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-accent hover:text-accent-light"
            >
              <Facebook size={16} strokeWidth={1.75} />
            </a>
            <a
              href={company.social.instagram}
              aria-label="Xtreme Motors Oxford on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 transition-colors hover:border-accent hover:text-accent-light"
            >
              <Instagram size={16} strokeWidth={1.75} />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="relative h-16 w-16 shrink-0">
              <Image
                src="/images/award-badge.png"
                alt="Business Awards UK 2026 Winner — Car Sales Business of the Year"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <p className="text-xs leading-snug text-paper/50">
              Business Awards UK
              <br />
              2026 Winner — Car Sales Business of the Year
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-paper/50">
            Site
          </h3>
          <ul className="mt-5 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/80 transition-colors hover:text-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest2 text-paper/50">
            Visit &amp; Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-paper/80">
            <li className="flex gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-accent-light" />
              <span>
                {company.address.line1}, {company.address.line2}
                <br />
                {company.address.city} {company.address.postcode}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-accent-light" />
              <a href={company.phoneHref} className="hover:text-accent-light">
                {company.phone}
              </a>
            </li>
          </ul>
          <div className="mt-6 space-y-1 text-xs text-paper/50">
            {company.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-paper/45 md:flex-row">
          <p>© {new Date().getFullYear()} Xtreme Motors Oxford. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-paper/80">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
