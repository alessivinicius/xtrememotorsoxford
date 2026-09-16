import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-[0.8rem] font-semibold uppercase tracking-widest2 transition-all duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-accent text-ink px-7 py-4 hover:bg-accent-light active:scale-[0.98]",
  dark: "bg-ink text-paper px-7 py-4 hover:bg-ink-soft active:scale-[0.98]",
  outline:
    "border border-ink/20 text-ink px-7 py-4 hover:border-ink hover:bg-ink hover:text-paper active:scale-[0.98]",
  "outline-light":
    "border border-paper/30 text-paper px-7 py-4 hover:border-paper hover:bg-paper hover:text-ink active:scale-[0.98]",
  ghost:
    "text-ink px-2 py-2 hover:text-accent-dark underline-offset-4 hover:underline",
};

type Variant = keyof typeof variants;

interface CommonProps {
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; external?: boolean };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    // tel:/mailto:/absolute URLs aren't app routes — render a plain anchor
    // rather than next/link, which expects an internal path.
    const isProtocolLink = /^(tel:|mailto:|https?:\/\/)/.test(href);

    if (external || isProtocolLink) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        />
      );
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonAsButton)} />;
}
