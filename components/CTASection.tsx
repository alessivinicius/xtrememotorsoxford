import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({
  title = "Ready to Find Your Next Car?",
  description = "Browse our latest stock or get in touch with the Xtreme Motors team.",
  primary = { label: "View Stock", href: "/stock" },
  secondary = { label: "Contact Us", href: "/contact" },
}: CTASectionProps) {
  return (
    <section className="border-t border-paper/10 bg-ink pb-20 pt-24 md:pb-24 md:pt-32">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-paper md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-paper/65 md:text-lg">
          {description}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={primary.href} variant="primary">
            {primary.label}
          </Button>
          <Button href={secondary.href} variant="outline-light">
            {secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
