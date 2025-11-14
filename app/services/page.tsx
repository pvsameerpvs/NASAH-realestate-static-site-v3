import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — NASAH",
  description:
    "End-to-end real estate services from sales to management and advisory.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-black">SERVICES</h1>
      <p className="mt-4 max-w-2xl opacity-70">
        From acquisitions to closing and management — pick the service that fits
        your goal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {SERVICES.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </div>
    </div>
  );
}
