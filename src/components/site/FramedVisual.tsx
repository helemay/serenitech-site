import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type OverlayFrom = "md" | "lg" | "xl";

const overlay: Record<OverlayFrom, string> = {
  md: "md:absolute md:bottom-6 md:left-6 md:mt-0 md:max-w-xl lg:bottom-8 lg:left-8",
  lg: "lg:absolute lg:bottom-8 lg:left-8 lg:mt-0 lg:max-w-xl",
  xl: "xl:absolute xl:bottom-10 xl:left-10 xl:mt-0 xl:max-w-xl",
};

/**
 * A field image shown whole — native 1920×1088 aspect, no zoom-crop — inside a rounded frame,
 * with a subtle bluish tint that keeps the page calm. The copy sits in a translucent panel:
 * overlaid bottom-left once the frame is large enough, stacked under the picture before that.
 */
export function FramedVisual({
  src,
  alt,
  children,
  priority = false,
  overlayFrom = "lg",
  className,
  panelClassName,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  priority?: boolean;
  overlayFrom?: OverlayFrom;
  className?: string | undefined;
  panelClassName?: string | undefined;
}) {
  return (
    <div className={cn("mx-auto max-w-[1400px] px-5 md:px-10", className)}>
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl border border-ocean/60 bg-navy/30 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.9)]">
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            width={1920}
            height={1088}
            className="block aspect-[1920/1088] w-full object-cover"
          />
          <div aria-hidden="true" className="img-tint absolute inset-0" />
        </div>
        {children && (
          <div className={cn("glass-panel mt-4 p-6 md:p-8", overlay[overlayFrom], panelClassName)}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
