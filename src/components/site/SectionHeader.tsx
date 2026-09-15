import type { ReactNode } from "react";
import { ContourLines, Eyebrow } from "./Decor";

/**
 * Section opener. With an image, the picture runs full-bleed at full opacity (no gradient mask)
 * and the copy sits in a translucent panel, so the measurements, sensors and wavefronts stay visible.
 */
export function SectionHeader({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <header className="relative overflow-hidden border-y border-ocean/60">
        {/* Mobile: the whole picture as a block, copy below it */}
        <img
          src={image}
          alt={imageAlt ?? ""}
          loading="lazy"
          className="block aspect-[16/10] w-full object-cover md:hidden"
          width={1920}
          height={1088}
        />
        {/* Desktop: full-bleed, full opacity */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          width={1920}
          height={1088}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-abyss/70 to-transparent md:block"
        />
        <div className="relative mx-auto flex max-w-[1400px] items-end px-5 py-6 md:min-h-[640px] md:px-10 md:pt-64 md:pb-12">
          <div className="glass-panel max-w-3xl p-6 md:p-8">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl leading-[1.05] font-bold md:text-5xl">{title}</h2>
            {children && (
              <div className="mt-5 text-base leading-relaxed text-steel">{children}</div>
            )}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative overflow-hidden border-y border-ocean/60 py-10 md:py-14">
      <ContourLines />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-4xl text-3xl leading-[1.05] font-bold md:text-5xl">{title}</h2>
        {children && (
          <div className="mt-6 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
