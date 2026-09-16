import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MediaBannerProps {
  video?: string;
  image?: string;
  /** Descriptive alt text when the image conveys meaning beyond decoration. */
  alt?: string;
  className?: string;
  overlayClassName?: string;
  children: ReactNode;
}

// Full-bleed video or image band used behind a section heading, with a
// dark overlay guaranteeing text contrast regardless of the footage.
export function MediaBanner({
  video,
  image,
  alt = "",
  className,
  overlayClassName,
  children,
}: MediaBannerProps) {
  return (
    <div className={cn("relative overflow-hidden bg-ink", className)}>
      {video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
      ) : image ? (
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90",
          overlayClassName
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
