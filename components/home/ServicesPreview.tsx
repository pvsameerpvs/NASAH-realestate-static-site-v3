import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import CurvyLine from "../shared/curvy-line";

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-5 md:py-20">
      <div className="flex items-end justify-between">
        <h2 className="text-5xl md:text-6xl font-black leading-tight">
          OUR <br className="hidden md:block" /> SERVICES
        </h2>
        <a
          href="/services"
          className="hidden md:inline-block px-5 py-3 rounded-xl acc-bg text-white font-semibold"
        >
          See all
        </a>
      </div>
      <p className="mt-4 max-w-2xl opacity-70">
        Explore our full suite of real estate solutions — from property
        management and investment advisory to project marketing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {SERVICES.slice(0, 3).map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <a
          href="/services"
          className="inline-block px-5 py-3 rounded-xl acc-bg text-white font-semibold"
        >
          View All Services
        </a>
      </div>
    </section>
  );
}
