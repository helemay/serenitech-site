import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type OverlayFrom = "md" | "lg" | "xl";

type PanelSide = "left" | "right";

type PanelWidth = "xl" | "2xl";

type PanelAlign = "bottom" | "center";

const positions: Record<OverlayFrom, Record<PanelSide, string>> = {
  md: {
    left: "md:absolute md:bottom-6 md:left-6 md:mt-0 lg:bottom-8 lg:left-8",
    right: "md:absolute md:right-6 md:bottom-6 md:mt-0 lg:right-8 lg:bottom-8",
  },
  lg: {
    left: "lg:absolute lg:bottom-8 lg:left-8 lg:mt-0",
    right: "lg:absolute lg:right-8 lg:bottom-8 lg:mt-0",
  },
  xl: {
    left: "xl:absolute xl:bottom-10 xl:left-10 xl:mt-0",
    right: "xl:absolute xl:right-10 xl:bottom-10 xl:mt-0",
  },
};

// vertically centred variant, biased slightly upwards so the bottom corner — and the logo baked
// into every image there — stays clear even at the smallest overlay width
const centred: Record<OverlayFrom, string> = {
  md: "md:top-[46%] md:bottom-auto md:-translate-y-1/2",
  lg: "lg:top-[46%] lg:bottom-auto lg:-translate-y-1/2",
  xl: "xl:top-[46%] xl:bottom-auto xl:-translate-y-1/2",
};

const widths: Record<OverlayFrom, Record<PanelWidth, string>> = {
  md: { xl: "md:max-w-xl", "2xl": "md:max-w-2xl" },
  lg: { xl: "lg:max-w-xl", "2xl": "lg:max-w-2xl" },
  xl: { xl: "xl:max-w-xl", "2xl": "xl:max-w-2xl" },
};

/**
 * A field image shown whole — native 1920×1088 aspect, no zoom-crop — inside a rounded frame,
 * with a subtle bluish tint that keeps the page calm. The copy sits in a translucent panel:
 * overlaid in a bottom corner once the frame is large enough, stacked under the picture before that.
 */
export function FramedVisual({
  src,
  alt,
  children,
  overlay,
  priority = false,
  overlayFrom = "lg",
  panelSide = "left",
  panelWidth = "xl",
  panelAlign = "bottom",
  className,
  panelClassName,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  /** Drawn over the picture (above the tint), clipped to the frame — e.g. an animated HUD. */
  overlay?: ReactNode;
  priority?: boolean;
  overlayFrom?: OverlayFrom;
  panelSide?: PanelSide;
  panelWidth?: PanelWidth;
  panelAlign?: PanelAlign;
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
          {overlay}
        </div>
        {children && (
          <div
            className={cn(
              "glass-panel mt-4 p-6 md:p-8",
              positions[overlayFrom][panelSide],
              panelAlign === "center" && centred[overlayFrom],
              widths[overlayFrom][panelWidth],
              panelClassName,
            )}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
