import { createFileRoute } from "@tanstack/react-router";
import { Hero, TrustStrip } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SignatureBand } from "@/components/home/SignatureBand";
import { SolutionSection } from "@/components/home/SolutionSection";
import { CognitiveSection } from "@/components/home/CognitiveSection";
import { FieldViews } from "@/components/home/FieldViews";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { CompanySection } from "@/components/sections/CompanySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { en } from "@/i18n/en";

const meta = en.meta.home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: "https://serenitech.global/" },
      { name: "twitter:description", content: meta.description },
    ],
    links: [{ rel: "canonical", href: "https://serenitech.global/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SignatureBand />
      <SolutionSection />
      <CognitiveSection />
      <FieldViews />
      <ServicesSection />
      <SectorsSection />
      <TechnologySection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
