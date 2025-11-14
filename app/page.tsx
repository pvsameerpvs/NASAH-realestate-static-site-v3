import { Metadata } from "next";

import PropertiesPreview from "@/components/home/PropertiesPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import Hero from "@/components/home/ Hero";
import AboutSection from "@/components/home/AboutSection";

export const metadata: Metadata = { title: "NASAH — Innovation needs space" };

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <PropertiesPreview />
      <ServicesPreview />
    </div>
  );
}
