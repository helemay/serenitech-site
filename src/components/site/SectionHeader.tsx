import type { ReactNode } from "react";
import { ContourLines, Eyebrow } from "./Decor";
import { FramedVisual } from "./FramedVisual";

/**
 * Section opener. With an image, the copy comes first (title left, intro right) and the whole
 * picture follows in a rounded frame with a subtle bluish tint — nothing overlaps the image.
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
      <header className="border-t border-ocean/60 pt-10 pb-4 md:pt-14 md:pb-6">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className={children ? "lg:col-span-6" : "lg:col-span-12"}>
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-4xl text-3xl leading-[1.05] font-bold md:text-5xl">{title}</h2>
            </div>
            {children && (
              <div className="text-base leading-relaxed text-steel md:text-lg lg:col-span-6">{children}</div>
            )}
          </div>
        </div>
        <FramedVisual src={image} alt={imageAlt ?? ""} className="mt-8 md:mt-10" />
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
