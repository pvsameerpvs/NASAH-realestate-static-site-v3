import { Metadata } from "next";

import PropertiesPreview from "@/components/home/PropertiesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Hero from "@/components/home/ Hero";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DubaiCommunitiesSection from "@/components/DubaiCommunitiesSection";
import DubaiMarketOverviewSection from "@/components/DubaiMarketOverviewSection";
import CurvyLine from "@/components/shared/curvy-line";

export const metadata: Metadata = { title: "NASAH — Innovation needs space" };

export default function Home() {
  return (
    <div>
      <Hero />
      <CurvyLine />
      <AboutSection />
      <CurvyLine />
      <DubaiCommunitiesSection />
      <CurvyLine />
      <PropertiesPreview />
      <CurvyLine />
      <ServicesPreview />
      <CurvyLine />
      {/* <DubaiMarketOverviewSection /> */}
    </div>
  );
}
