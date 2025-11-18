"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const COMMUNITIES = [
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    area: "Burj Khalifa District",
    tagline: "Luxury high-rise living near Dubai Mall & Burj Khalifa.",
    image: "/location1.jpeg",
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    area: "Waterfront Community",
    tagline: "Vibrant waterfront lifestyle with marina views.",
    image: "/location2.jpeg",
  },
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    area: "Iconic Palm Island",
    tagline: "Ultra-premium beachfront villas and apartments.",
    image: "/location3.jpeg",
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    area: "Central Business District",
    tagline: "Modern apartments close to Downtown & Canal.",
    image: "/location4.jpeg",
  },
  {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle (JVC)",
    area: "Family-Friendly Community",
    tagline: "Affordable, calm, and well-connected mid-town living.",
    image: "/location5.jpeg",
  },
  {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    area: "Suburban Villa Community",
    tagline: "Spacious villas, greenery, and a peaceful lifestyle.",
    image: "/location6.jpeg",
  },
  {
    slug: "jebel-ali",
    name: "Jebel Ali",
    area: "Free Zone & Waterfront",
    tagline: "Industrial hub mixed with modern residential communities.",
    image: "/location7.jpeg",
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    area: "Emaar Master Development",
    tagline: "Premium villas, green spaces, and Dubai Hills Mall.",
    image: "/location8.jpeg",
  },
  {
    slug: "jumeirah-beach-residence",
    name: "JBR – Jumeirah Beach Residence",
    area: "Beachfront Community",
    tagline: "Luxury beachfront apartments with The Walk at your doorstep.",
    image: "/location9.jpeg",
  },
  {
    slug: "mbr-city",
    name: "MBR City",
    area: "Mohammed Bin Rashid City",
    tagline: "Modern community with luxury villas and lagoon developments.",
    image: "/location10.jpeg",
  },
  {
    slug: "al-barsha",
    name: "Al Barsha",
    area: "City Center District",
    tagline: "Great for families—close to Mall of the Emirates.",
    image: "/location11.jpeg",
  },
  {
    slug: "meydan",
    name: "Meydan City",
    area: "Meydan District",
    tagline: "Home to Meydan Racecourse and luxury modern homes.",
    image: "/location12.jpeg",
  },
  {
    slug: "al-furjan",
    name: "Al Furjan",
    area: "Residential Community",
    tagline: "Affordable villas & townhouses with metro access.",
    image: "/location13.jpeg",
  },
  {
    slug: "bluewaters-island",
    name: "Bluewaters Island",
    area: "Artificial Island",
    tagline: "Home to Ain Dubai with premium waterfront living.",
    image: "/location14.jpeg",
  },
  {
    slug: "al-reem-island-abu-dhabi",
    name: "Al Reem Island",
    area: "Abu Dhabi Waterfront",
    tagline: "High-end apartments overlooking the Abu Dhabi skyline.",
    image: "/location15.jpeg",
  },
  {
    slug: "yas-island-abu-dhabi",
    name: "Yas Island",
    area: "Abu Dhabi Entertainment District",
    tagline: "Ferrari World, Yas Marina, and luxury residential communities.",
    image: "/location16.jpeg",
  },
  {
    slug: "al-majaz-sharjah",
    name: "Al Majaz",
    area: "Sharjah Waterfront",
    tagline:
      "Beautiful lagoons, walking areas, and family community lifestyle.",
    image: "/location17.jpeg",
  },
  {
    slug: "al-nuaimiya-ajman",
    name: "Al Nuaimiya",
    area: "Ajman Urban District",
    tagline: "Affordable apartments with quick access to Sharjah & Dubai.",
    image: "/location18.jpeg",
  },
];

const ITEMS_PER_PAGE = 6;
const WHATSAPP_NUMBER = "971500000000"; // 👈 put your number without + or spaces

type Community = (typeof COMMUNITIES)[number];

export default function DubaiCommunitiesSection() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Community | null>(null);

  const totalPages = Math.ceil(COMMUNITIES.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleCommunities = COMMUNITIES.slice(startIndex, endIndex);

  const handlePrev = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleCardClick = (community: Community) => {
    setSelected(community);
  };

  const closeModal = () => setSelected(null);

  const whatsappLink =
    selected &&
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hi, I'm interested in properties in ${selected.name}. Can you share more details?`
    )}`;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
      {/* Heading */}
      <div className="max-w-3xl">
        <p className="text-sm md:text-base tracking-[0.25em] uppercase opacity-70">
          Explore Properties in Dubai’s Top Communities
        </p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black leading-tight">
          Top <span className="italic text-[rgb(var(--acc))]">Properties</span>{" "}
          in Dubai
        </h2>
        <p className="mt-4 text-base md:text-lg opacity-80">
          Discover handpicked communities across Dubai and the UAE—from
          waterfront living to family-focused neighbourhoods and luxury freehold
          districts.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCommunities.map((community) => (
          <button
            key={community.slug}
            type="button"
            onClick={() => handleCardClick(community)}
            className="group block h-full text-left"
          >
            <div className="card h-full bg-[rgb(var(--bg))]/95 border-[rgb(var(--acc))]/30 overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative w-full h-52 md:h-60 overflow-hidden">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-[0.25em] opacity-70">
                  {community.area}
                </span>
                <h3 className="mt-2 text-lg md:text-xl font-semibold group-hover:text-[rgb(var(--acc))] group-hover:italic transition-all duration-300">
                  {community.name}
                </h3>
                <p className="mt-3 text-sm md:text-base opacity-80 leading-relaxed flex-1">
                  {community.tagline}
                </p>
                <span className="mt-4 text-xs md:text-sm font-medium text-[rgb(var(--acc))]">
                  View details &rarr;
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`px-4 py-2 text-sm rounded-full border border-[rgb(var(--acc))]/40 
                ${
                  page === 1
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-[rgb(var(--acc))] hover:text-white transition-colors"
                }`}
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`px-4 py-2 text-sm rounded-full border border-[rgb(var(--acc))]/40 
                ${
                  page === totalPages
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-[rgb(var(--acc))] hover:text-white transition-colors"
                }`}
            >
              Next →
            </button>
          </div>

          {/* Page dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === page;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium
                    ${
                      isActive
                        ? "bg-[rgb(var(--acc))] text-white"
                        : "border border-[rgb(var(--acc))]/40 text-[rgb(var(--acc))] hover:bg-[rgb(var(--acc))]/10"
                    }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={closeModal}
        >
          <div
            className="max-w-3xl w-full bg-[rgb(var(--bg))] text-[rgb(var(--fg))] rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm hover:bg-black/80"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr]">
              {/* Image */}
              <div className="relative h-56 md:h-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                <span className="text-xs uppercase tracking-[0.25em] opacity-70">
                  {selected.area}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {selected.name}
                </h3>
                <p className="text-sm md:text-base opacity-80">
                  {selected.tagline}
                </p>
                <p className="text-sm md:text-base opacity-70">
                  This community offers a mix of residential options, lifestyle
                  amenities, and convenient access to key destinations in the
                  city—ideal for both end-users and investors.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(var(--acc))] text-white text-sm font-medium hover:opacity-90 transition"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  )}

                  {/* <Link
                    href={`/communities/${selected.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgb(var(--acc))]/50 text-sm font-medium hover:bg-[rgb(var(--acc))]/10 transition"
                  >
                    View full details
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
