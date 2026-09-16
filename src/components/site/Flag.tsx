import { cn } from "@/lib/utils";

export type FlagCode = "de" | "us" | "es" | "fr" | "br";

/**
 * Small inline flags (3:2) for the language selector — drawn with plain shapes so they stay crisp at
 * 20–24 px and need no image requests. Simplified civil versions (no coats of arms / mottos).
 */
export function Flag({ code, className, title }: { code: FlagCode; className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={cn("h-[15px] w-[22px] shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]", className)}
      aria-hidden={title ? undefined : "true"}
      role={title ? "img" : undefined}
    >
      {title && <title>{title}</title>}
      {code === "de" && (
        <>
          <rect width="60" height="40" fill="#000" />
          <rect y="13.33" width="60" height="13.34" fill="#DD0000" />
          <rect y="26.67" width="60" height="13.33" fill="#FFCE00" />
        </>
      )}
      {code === "us" && (
        <>
          <rect width="60" height="40" fill="#fff" />
          {[0, 2, 4, 6, 8, 10, 12].map((i) => (
            <rect key={i} y={(i * 40) / 13} width="60" height={40 / 13} fill="#B22234" />
          ))}
          <rect width="24" height={(7 * 40) / 13} fill="#3C3B6E" />
          {Array.from({ length: 9 }, (_, r) =>
            Array.from({ length: r % 2 === 0 ? 6 : 5 }, (_, c) => (
              <circle key={`${r}-${c}`} cx={2.2 + (r % 2 === 0 ? c * 4 : 2 + c * 4)} cy={1.3 + r * 2.4} r="0.8" fill="#fff" />
            )),
          )}
        </>
      )}
      {code === "es" && (
        <>
          <rect width="60" height="40" fill="#AA151B" />
          <rect y="10" width="60" height="20" fill="#F1BF00" />
        </>
      )}
      {code === "fr" && (
        <>
          <rect width="20" height="40" fill="#0055A4" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#EF4135" />
        </>
      )}
      {code === "br" && (
        <>
          <rect width="60" height="40" fill="#009C3B" />
          <polygon points="30,4.5 54.5,20 30,35.5 5.5,20" fill="#FFDF00" />
          <circle cx="30" cy="20" r="10.2" fill="#002776" />
          <path d="M20.6 17.4 C 27 15.4, 34 16.4, 39.6 20.4 L 39.2 22.6 C 33.6 18.8, 26.6 17.8, 20.2 19.6 Z" fill="#fff" />
        </>
      )}
    </svg>
  );
}
