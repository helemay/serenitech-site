import type { ReactNode } from "react";
import { ContourLines, Eyebrow } from "./Decor";
import { FramedVisual } from "./FramedVisual";

/**
 * Section opener. With an image, the whole picture is shown in a rounded frame (no zoom-crop) with a
 * subtle bluish tint, and the copy sits in a translucent panel over its lower-left corner.
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
        <FramedVisual src={image} alt={imageAlt ?? ""} overlayFrom={children ? "xl" : "md"} panelClassName={children ? "xl:max-w-2xl" : undefined}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl leading-[1.05] font-bold md:text-4xl xl:text-5xl">{title}</h2>
          {children && <div className="mt-5 text-base leading-relaxed text-steel">{children}</div>}
        </FramedVisual>
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
