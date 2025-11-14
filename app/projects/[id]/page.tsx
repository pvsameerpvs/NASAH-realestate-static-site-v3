import PropertyCard from "@/components/property-card";
import { propertyById } from "@/data/properties";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export default function ProjectDetailPage({ params }: Props) {
  const data = propertyById.get(params.id);
  if (!data) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-black mb-8">{data.title}</h1>
      <PropertyCard p={data} />
    </div>
  );
}
