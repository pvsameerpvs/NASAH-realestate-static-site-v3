"use client";

import Image from "next/image";

const CARDS = [
  {
    title: "Tech-Driven Leadership",
    body: `Led by Shikha Agarwal, our operations combine technology, analytics,
and strategic planning — ensuring efficiency, transparency, and growth
across every business unit.`,
  },
  {
    title: "Consistent Quality",
    body: `From ceramic tiles to rice and other food items, every product undergoes
strict quality checks to meet our excellence standards and build long-term trust.`,
  },
  {
    title: "Fast Supply Chain",
    body: `With ex-stock availability, U.A.E-wide delivery, and export capabilities,
we support urgent timelines for construction companies, retailers, and distributors.`,
  },
  {
    title: "Fair Pricing & Long-Term Value",
    body: `We promise the right product at the right price — always delivered at
the right time — focusing on long-term partnerships over one-time deals.`,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="max-w-7xl mx-auto md:px-8 py-5 relative">
      {/* Heading */}
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-black leading-tight">
          WHY <span className="italic text-[rgb(var(--acc))]">CHOOSE US</span>
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          At Nasah Goods Wholesalers Co LLC, we focus on quality, reliability,
          and long-term trust — backed by strong leadership and a smart supply
          chain.
        </p>
      </div>

      {/* MOBILE / TABLET */}
      <div className="mt-14 lg:hidden">
        {/* Image */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl mb-8">
          <Image
            src="/why-choose-us.jpg"
            alt="Why Choose Us"
            fill
            className="object-cover"
          />
        </div>

        {/* Cards grid: 2 per row */}
        <div className="grid grid-cols-2 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="card bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/40 shadow-xl p-5 rounded-2xl"
            >
              <h3 className="font-semibold text-sm md:text-base text-[rgb(var(--acc))]">
                {card.title}
              </h3>
              <p className="text-xs md:text-sm opacity-80 mt-3 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="mt-24 hidden lg:flex justify-center">
        <div className="relative w-full max-w-3xl">
          {/* Center Image */}
          <div className="relative w-full h-[440px] rounded-3xl overflow-hidden shadow-xl mx-auto">
            <Image
              src="/why-choose-us.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover"
            />
          </div>

          {/* Top card */}
          {/* <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-88 card bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/40 shadow-xl p-7 rounded-2xl">
            <h3 className="font-semibold text-lg text-[rgb(var(--acc))]">
              {CARDS[0].title}
            </h3>
            <p className="text-sm opacity-80 mt-3 leading-relaxed">
              {CARDS[0].body}
            </p>
          </div> */}

          {/* Left card */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-80 card bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/40 shadow-xl p-7 rounded-2xl">
            <h3 className="font-semibold text-lg text-[rgb(var(--acc))]">
              {CARDS[1].title}
            </h3>
            <p className="text-sm opacity-80 mt-3 leading-relaxed">
              {CARDS[1].body}
            </p>
          </div>

          {/* Right card */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-80 card bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/40 shadow-xl p-7 rounded-2xl">
            <h3 className="font-semibold text-lg text-[rgb(var(--acc))]">
              {CARDS[2].title}
            </h3>
            <p className="text-sm opacity-80 mt-3 leading-relaxed">
              {CARDS[2].body}
            </p>
          </div>

          {/* Bottom card */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[380px] card bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/40 shadow-xl p-7 rounded-2xl">
            <h3 className="font-semibold text-lg text-[rgb(var(--acc))]">
              {CARDS[3].title}
            </h3>
            <p className="text-sm opacity-80 mt-3 leading-relaxed">
              {CARDS[3].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
