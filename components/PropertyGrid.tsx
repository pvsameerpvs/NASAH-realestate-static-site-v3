// Reusable grid wrapper so any page can render a list of properties
import PropertyCard from "@/components/property-card";
import type { Property } from "@/data/properties";

type Props = {
  items: Property[];
  title?: string;
  className?: string;
};

export default function PropertyGrid({
  items,
  title = "PROJECTS",
  className = "",
}: Props) {
  return (
    <section className={`max-w-7xl mx-auto px-6 py-16 ${className}`}>
      <h1 className="text-4xl md:text-6xl font-black">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {items.map((p) => (
          <PropertyCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
