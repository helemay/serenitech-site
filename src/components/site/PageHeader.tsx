import type { ReactNode } from "react";
import { ContourLines, Eyebrow } from "./Decor";

export function PageHeader({
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
    <header className="relative overflow-hidden border-b border-ocean/60 pt-24 pb-10 md:pt-28 md:pb-14">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            width={2560}
            height={1440}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/85 to-abyss/40"
          />
        </>
      ) : (
        <ContourLines />
      )}

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-bold md:text-6xl">
          {title}
        </h1>
        {children && (
          <div className="mt-6 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
