import PropertyGrid from "@/components/PropertyGrid";
import { PROPERTIES } from "@/data/properties";
import CurvyLine from "../shared/curvy-line";

export default function PropertiesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
      <div className="mt-10">
        <CurvyLine />
      </div>
      {/* Heading + Description */}
      <div className="flex items-end justify-between">
        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          FEATURED <br className="hidden md:block" /> PROPERTIES
        </h2>
        <a
          href="/projects"
          className="hidden md:inline-block px-5 py-3 rounded-xl acc-bg text-white font-semibold"
        >
          See all
        </a>
      </div>
      <p className="mt-4 max-w-2xl opacity-70">
        Discover our hand-picked selection of properties designed for comfort,
        elegance, and convenience — each crafted to match your lifestyle.
      </p>

      {/* Property Grid */}
      <PropertyGrid items={PROPERTIES.slice(0, 3)} title="" className="pt-10" />

      {/* Mobile “See All” */}
      <div className="mt-8 text-center md:hidden">
        <a
          href="/projects"
          className="inline-block px-5 py-3 rounded-xl acc-bg text-white font-semibold"
        >
          View All Properties
        </a>
      </div>
      <div className="mt-10">
        <CurvyLine />
      </div>
    </section>
  );
}
