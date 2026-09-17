"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Stock", href: "/stock" },
  { label: "About Us", href: "/about" },
  { label: "Warranty", href: "/warranty" },
  { label: "Sell Your Car", href: "/sell-your-car" },
  { label: "Contact", href: "/contact" },
];

// Only these pages open with a full-bleed dark hero/banner behind the
// navbar, so only they can safely start transparent. Every other page
// (contact, sell your car, vehicle detail, legal pages...) opens on a
// light background and needs the solid navbar from the first frame.
const DARK_HERO_ROUTES = new Set(["/", "/stock", "/warranty", "/about", "/finance"]);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_ROUTES.has(pathname);

  useEffect(() => {
    if (!hasDarkHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasDarkHero]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        !hasDarkHero || scrolled || open
          ? "bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_rgba(245,246,250,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-8xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="Xtreme Motors — home"
          className="relative inline-block aspect-[1018/586] h-12 w-auto shrink-0 md:h-16"
        >
          <Image
            src="/images/logo-compact.png"
            alt="Xtreme Motors"
            fill
            className="object-contain"
            sizes="200px"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[0.8rem] font-medium uppercase tracking-wide transition-colors duration-300",
                    active
                      ? "text-accent-light"
                      : "text-paper/80 hover:text-paper"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Test Drive
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={company.phoneHref}
            aria-label="Call us"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:border-accent hover:text-accent-light"
          >
            <Phone size={18} strokeWidth={1.75} />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-paper/10 bg-ink lg:hidden"
          >
            <ul className="flex flex-col px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-paper/10">
                  <Link
                    href={link.href}
                    className="block py-4 text-base font-medium uppercase tracking-wide text-paper/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-8">
              <Button href="/contact" variant="primary" className="w-full">
                Book a Test Drive
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
