import type { ReactNode } from "react";
import { ContourLines, Eyebrow } from "./Decor";

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
  return (
    <header className="relative overflow-hidden border-y border-ocean/60 py-10 md:py-14">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
            width={2560}
            height={1440}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/70 to-abyss/15"
          />
        </>
      ) : (
        <ContourLines />
      )}

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 max-w-4xl text-3xl leading-[1.05] font-bold md:text-5xl">
          {title}
        </h2>
        {children && (
          <div className="mt-6 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
