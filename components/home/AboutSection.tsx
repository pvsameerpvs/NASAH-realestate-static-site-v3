// components/AboutSection.tsx
"use client";

import Image from "next/image";
import CurvyLine from "../shared/curvy-line";

export default function AboutSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      {/* ⭐ Background Center Text */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          pointer-events-none -z-10
        "
      >
        <span
          className="
            text-[18vw] md:text-[12vw]
            font-black tracking-tight
            text-black/5 dark:text-white/5
            select-none
          "
        >
          NASAH
        </span>
      </div>

      {/* Floating images (desktop only) */}
      <div className="hidden lg:block">
        {/* top-left */}
        <div className="absolute -left-0 top-50 w-56 h-40 rounded-xl overflow-hidden shadow-md">
          <Image src="/property3.jpeg" alt="" fill className="object-cover" />
        </div>
        {/* top-right */}
        <div className="absolute -right-0 top-0 w-60 h-72 rounded-xl overflow-hidden shadow-md">
          <Image src="/property2.jpeg" alt="" fill className="object-cover" />
        </div>
        {/* bottom-left */}
        <div className="absolute -left-0 bottom-10 w-64 h-44 rounded-xl overflow-hidden shadow-md">
          <Image src="/property5.jpeg" alt="" fill className="object-cover" />
        </div>
        {/* bottom-right */}
        <div className="absolute -right-0 bottom-0 w-60 h-56 rounded-xl overflow-hidden shadow-md">
          <Image src="/property6.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>

      {/* Your original content (unchanged) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative">
        {/* Left: Text */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            ABOUT
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed opacity-80">
            <strong>Shikha Agarwal</strong>, the Director of{" "}
            <strong>Nasah Goods Wholesalers Co LLC</strong>, is a powerhouse of
            innovation and strategy who plays an instrumental role in the
            brand’s growth and success. A post-graduate of Delhi University with
            a Master’s in Computer Applications (MCA) and a rich professional
            background at <strong>Tata Infotech</strong>, she brings deep
            technological insight into every facet of the company.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            Leveraging her expertise in technology, Shikha masterfully oversees
            Nasah’s marketing, digital presence, and tech operations with
            remarkable precision. She is the backbone of Nasah’s business
            operations — managing the brand’s financial and strategic roadmap
            while ensuring each campaign reflects its creative essence.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            Her ability to seamlessly bridge the worlds of technology and
            business has positioned <strong>Nasah Goods Wholesalers</strong> as
            a distinctive leader in a competitive market. With sharp business
            acumen, unwavering dedication, and a flair for innovation, Shikha
            transforms the company’s vision into a sustainable, successful
            enterprise. Whether it’s curating impactful digital campaigns,
            scaling operations, or strengthening the brand identity, her work
            ensures Nasah continues to grow and connect deeply with its
            audience.
          </p>
        </div>

        {/* Right: Company Overview */}
        <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-lg ring-1 ring-white/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Nasah Goods Wholesalers Co LLC
          </h3>
          <p className="text-base md:text-lg leading-relaxed opacity-80">
            <strong>Nasah Goods</strong> has evolved into one of the leading
            wholesalers of <strong>Ceramic Tiles</strong> in the United Arab
            Emirates and has recently expanded into the supply of{" "}
            <strong>Rice</strong> and other <strong>food items</strong>.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            In a short span, Nasah has earned a reputation for being a trusted
            and reliable supplier in the U.A.E. market. Most items are readily
            available <em>ex-stock</em> from our warehouse, and we also provide
            delivery across the U.A.E. with arrangements for export to other
            countries.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed opacity-80">
            We remain committed to offering our customers the{" "}
            <strong>
              right product, at the right price, at the right time
            </strong>{" "}
            — ensuring every purchase perfectly fits its intended application.
          </p>
        </div>
      </div>
    </section>
  );
}
