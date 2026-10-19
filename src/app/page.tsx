import { Awards } from "@/components/home/awards";
import { CaseStudy } from "@/components/home/case-study";
import { CtaBanner } from "@/components/home/cta-banner";
import { Faq } from "@/components/home/faq";
import { FeaturedOn } from "@/components/home/featured-on";
import { Founder } from "@/components/home/founder";
import { GrowthPartner } from "@/components/home/growth-partner";
import { Hero } from "@/components/home/hero";
import { Insights } from "@/components/home/insights";
import { LogoCloud } from "@/components/home/logo-cloud";
import { ProofBar } from "@/components/home/proof-bar";
import { Reviews } from "@/components/home/reviews";
import { Services } from "@/components/home/services";
import { Team } from "@/components/home/team";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <div id="top" />
      <Hero />
      <ProofBar />
      <LogoCloud />
      <Reviews />
      <Services />
      <CaseStudy />
      <GrowthPartner />
      <Awards />
      <Founder />
      <Team />
      <FeaturedOn />
      <Faq />
      <Insights />
      <CtaBanner />
    </main>
  );
}
