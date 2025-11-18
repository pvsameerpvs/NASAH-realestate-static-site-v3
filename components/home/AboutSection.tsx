"use client";

import Image from "next/image";
import CurvyLine from "../shared/curvy-line";
import WhyChooseUsSection from "../WhyChooseUsSection";

export default function AboutSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
        {/* LEFT — IMAGE */}
        <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/property3.jpeg"
            alt="Nasah warehouse and products"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT — TEXT WITH BACKGROUND NASAH */}
        <div className="relative">
          {/* Background NASAH ONLY BEHIND TEXT */}
          <div className="absolute inset-0 flex items-center justify-start pointer-events-none -z-10">
            <span
              className="text-[22vw] md:text-[12vw] font-black tracking-tight 
              text-black/5 dark:text-white/5 select-none -translate-x-3 md:-translate-x-6"
            >
              NASAH
            </span>
          </div>

          {/* TEXT CONTENT (no card) */}
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            ABOUT
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed opacity-80">
            <strong className="text-[rgb(var(--acc))]">Shikha Agarwal</strong>,
            Director of <strong>Nasah Goods Wholesalers Co LLC</strong>, blends
            technology expertise with business precision to guide Nasah’s
            growing presence in the U.A.E. market.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            With an <strong>MCA</strong> and a strong foundation at{" "}
            <strong>Tata Infotech</strong>, she ensures Nasah operates with
            modern systems, reliable service standards, and a strong
            customer-centric focus.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            Today, Nasah has expanded from ceramic tiles into{" "}
            <strong>rice</strong> and other <strong>food products</strong>,
            maintaining quality, consistency, and a commitment to timely supply.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <WhyChooseUsSection />
      </div>
    </section>
  );
}
