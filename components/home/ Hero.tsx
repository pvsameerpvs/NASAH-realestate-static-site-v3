// components/Hero.tsx
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import HeroTitle from "@/components/hero-title";
import CurvyLine from "@/components/shared/curvy-line";
import SearchBar from "@/components/search-bar";
import CardFanSlider from "@/components/CardFanSlider";

const HeroBlob = dynamic(() => import("@/components/hero-blob"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      className="
        relative w-full min-h-[90vh]
        flex items-center
        overflow-hidden
      "
    >
      {/* Animated background image */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 30, // slow zoom (seconds)
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="
            w-full h-full
            bg-[url('/hero5.jpg')]
            bg-cover bg-center bg-no-repeat
          "
        />
        {/* soft dark overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center lg:pl-6">
          {/* text */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <HeroTitle />
            <p className="mt-5 md:mt-6 max-w-xl mx-auto lg:mx-0 opacity-90 text-base lg:text-lg font-normal lg:font-medium">
              Nasah Realestate blends innovation and strategy to create spaces
              that inspire growth and success.
            </p>

            <div className="hidden md:block mt-8 md:mt-10 max-w-xl mx-auto lg:mx-0">
              <SearchBar />
            </div>
          </div>

          {/* If you want to put CardFanSlider back later, it can stay here */}
          {/* <div className="order-2 lg:order-2 mt-8 lg:mt-0">
            <CardFanSlider ... />
          </div> */}
        </div>

        <div className="">
          <CurvyLine />
        </div>
      </div>
    </section>
  );
}
