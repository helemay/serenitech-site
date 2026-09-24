import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Serenitech — Underwater Intelligence" },
      {
        name: "description",
        content:
          "Artificial intelligence for the underwater management of port infrastructure, offshore platforms, subsea structures and the naval industry.",
      },
      { name: "author", content: "Serenitech" },
      { property: "og:site_name", content: "Serenitech" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      // Link-preview card (WhatsApp, LinkedIn, iMessage, Slack…): whole logo on the site's dark blue.
      // 1200×630 JPEG (~70 KB) — WhatsApp ignores images above ~300 KB and crops transparent PNGs.
      {
        property: "og:image",
        content: "https://serenitech.global/og/serenitech-og-1200x630.jpg",
      },
      {
        property: "og:image:secure_url",
        content: "https://serenitech.global/og/serenitech-og-1200x630.jpg",
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Serenitech — Serenity beyond the waterline",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Serenitech — Underwater Intelligence" },
      {
        name: "twitter:image",
        content: "https://serenitech.global/og/serenitech-og-1200x630.jpg",
      },
      { name: "theme-color", content: "#061424" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/brand/favicon-32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/brand/favicon-192.png",
      },
      { rel: "apple-touch-icon", href: "/brand/favicon-180.png" },
      { rel: "alternate", hrefLang: "x-default", href: "https://serenitech.global/" },
      { rel: "alternate", hrefLang: "en", href: "https://serenitech.global/" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Rendered directly: the router de-duplicates meta tags sharing the same property. */}
        {["de_DE", "es_ES", "fr_FR", "pt_BR"].map((loc) => (
          <meta key={loc} property="og:locale:alternate" content={loc} />
        ))}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-abyss"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
      </I18nProvider>
    </QueryClientProvider>
  );
}
