"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { categories, locations, types } from "@/data/realestate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Divider } from "./Divider";
import { SelectField } from "./SelectField";
import { FiltersPopover } from "./FiltersPopover";
import { cssVar } from "@/lib/cssVar";

type Props = { className?: string };

export default function SearchBar({ className = "" }: Props) {
  // primary fields
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState<string>("");
  const [kind, setKind] = React.useState<string>("");
  const [loc, setLoc] = React.useState<string>("");

  // filters
  const [filters, setFilters] = React.useState({
    radius: "" as number | "",
    minPrice: "" as number | "",
    maxPrice: "" as number | "",
    beds: "" as number | "",
  });

  const router = useRouter();
  const textFg = { color: "rgb(var(--fg))" } as React.CSSProperties;

  const go = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (cat) params.set("category", cat);
    if (kind) params.set("type", kind);
    if (loc) params.set("location", loc);
    if (filters.radius !== "") params.set("radiusKm", String(filters.radius));
    if (filters.minPrice !== "")
      params.set("minPrice", String(filters.minPrice));
    if (filters.maxPrice !== "")
      params.set("maxPrice", String(filters.maxPrice));
    if (filters.beds !== "") params.set("beds", String(filters.beds));
    router.push(`/projects?${params.toString()}`);
  };

  return (
    <form
      onSubmit={go}
      className={
        "absolute left-1/2 -translate-x-1/2 z-30 w-[min(1100px,92vw)] pt-3 " +
        className
      }
      aria-label="property search"
    >
      {/* Outer transparent pill: subtle glass + theme ring */}
      <div
        className="
    rounded-[28px]
    backdrop-blur-xl
    bg-white/50 dark:bg-black/40
    ring-1 ring-black/10 dark:ring-white/10
    transition-colors duration-300
  "
        style={{
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
        }}
      >
        {/* Inner stroke like your screenshot */}
        <div
          className="m-3 rounded-[22px] ring-2 bg-transparent"
          style={cssVar("--tw-ring-color", "rgba(var(--fg), .45)")}
        >
          {/* Mobile: stacked. md+: pill row */}
          <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-[1fr,auto,auto,auto,auto] items-stretch">
            {/* Keyword */}
            <div className="px-2 md:px-0">
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Enter keyword here…"
                className="h-12 md:h-14 bg-transparent border-0 focus-visible:ring-0 placeholder:opacity-60 text-[15px] md:text-base"
                style={textFg}
              />
            </div>

            <Divider className="hidden md:block" />

            {/* Category */}
            <SelectField
              value={cat}
              onValueChange={setCat}
              placeholder="Select Category"
              items={categories}
              textStyle={textFg}
            />

            <Divider className="hidden md:block" />

            {/* Type */}
            <SelectField
              value={kind}
              onValueChange={setKind}
              placeholder="Select Type"
              items={types}
              textStyle={textFg}
            />

            <Divider className="hidden md:block" />

            {/* Location */}
            <SelectField
              value={loc}
              onValueChange={setLoc}
              placeholder="Select Location"
              items={locations}
              textStyle={textFg}
            />

            <Divider className="hidden md:block" />

            {/* Actions */}
            <div className="flex items-center gap-2 p-2 md:p-3">
              <FiltersPopover
                filters={filters}
                setFilters={setFilters}
                textFg={textFg}
              />

              <Button
                type="submit"
                className="acc-bg text-white font-bold tracking-wide h-12 md:h-14 px-6 rounded-xl flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
