import PropertyGrid from "@/components/PropertyGrid";
import { PROPERTIES } from "@/data/properties";

export default function ProjectsPage() {
  return <PropertyGrid items={PROPERTIES} title="PROJECTS" />;
}
