import { createFileRoute } from "@tanstack/react-router";
import { Hero, TrustStrip } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SignatureBand } from "@/components/home/SignatureBand";
import { SolutionSection } from "@/components/home/SolutionSection";
import { CognitiveSection } from "@/components/home/CognitiveSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TwinSection } from "@/components/home/TwinSection";
import { AiStack } from "@/components/home/AiStack";
import { PresenceSection } from "@/components/home/PresenceSection";
import { LeadershipTeaser } from "@/components/home/LeadershipTeaser";
import { CtaBand } from "@/components/site/CtaBand";
import { en } from "@/i18n/en";

const meta = en.meta.home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <ServicesOverview />
      <HowItWorks />
      <TwinSection />
      <AiStack />
      <PresenceSection />
      <LeadershipTeaser />
      <CtaBand />
    </>
  );
}
