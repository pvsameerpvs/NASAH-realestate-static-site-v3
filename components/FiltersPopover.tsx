"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";
import { cssVar } from "@/lib/cssVar";

type Filters = {
  radius: number | "";
  beds: number | "";
  minPrice: number | "";
  maxPrice: number | "";
};

type FiltersPopoverProps = {
  filters: Filters;
  setFilters: (next: Filters) => void;
  textFg: React.CSSProperties;
};

export function FiltersPopover({
  filters,
  setFilters,
  textFg,
}: FiltersPopoverProps) {
  const setField =
    <K extends keyof Filters>(key: K) =>
    (val: Filters[K]) =>
      setFilters({ ...filters, [key]: val });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className="h-12 w-12 md:h-14 md:w-14 rounded-xl hover:bg-[rgba(var(--fg),.06)]"
          style={textFg}
          aria-label="More filters"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={10}
        className="min-w-[min(92vw,520px)] rounded-2xl p-4 ring-1 menu-surface"
        style={cssVar("--tw-ring-color", "rgba(var(--fg), .14)")}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Radius */}
          <div>
            <Label className="text-sm" style={{ color: "rgba(var(--fg),.75)" }}>
              Radius (km)
            </Label>
            <Select
              value={filters.radius === "" ? "" : String(filters.radius)}
              onValueChange={(v) => setField("radius")(v ? Number(v) : "")}
            >
              <SelectTrigger
                className="mt-1 h-11 rounded-lg bg-transparent ring-1 border-0"
                style={{
                  ...cssVar("--tw-ring-color", "rgba(var(--fg), .18)"),
                  ...textFg,
                }}
              >
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent className="menu-surface">
                <SelectItem value="">Any</SelectItem>
                {[2, 5, 10, 20, 35, 50].map((r) => (
                  <SelectItem key={r} value={String(r)}>
                    {r} km
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Beds */}
          <div>
            <Label className="text-sm" style={{ color: "rgba(var(--fg),.75)" }}>
              Bedrooms
            </Label>
            <Select
              value={filters.beds === "" ? "" : String(filters.beds)}
              onValueChange={(v) => setField("beds")(v ? Number(v) : "")}
            >
              <SelectTrigger
                className="mt-1 h-11 rounded-lg bg-transparent ring-1 border-0"
                style={{
                  ...cssVar("--tw-ring-color", "rgba(var(--fg), .18)"),
                  ...textFg,
                }}
              >
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent className="menu-surface">
                <SelectItem value="">Any</SelectItem>
                {[1, 2, 3, 4, 5].map((b) => (
                  <SelectItem key={b} value={String(b)}>
                    {b}+
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Min price */}
          <div>
            <Label className="text-sm" style={{ color: "rgba(var(--fg),.75)" }}>
              Min Price (AED)
            </Label>
            <Input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="e.g. 5000"
              value={filters.minPrice === "" ? "" : filters.minPrice}
              onChange={(e) =>
                setField("minPrice")(
                  e.target.value ? Number(e.target.value) : ""
                )
              }
              className="mt-1 h-11 rounded-lg bg-transparent ring-1 border-0 placeholder:opacity-60"
              style={{
                ...cssVar("--tw-ring-color", "rgba(var(--fg), .18)"),
                ...textFg,
              }}
            />
          </div>

          {/* Max price */}
          <div>
            <Label className="text-sm" style={{ color: "rgba(var(--fg),.75)" }}>
              Max Price (AED)
            </Label>
            <Input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="e.g. 15000"
              value={filters.maxPrice === "" ? "" : filters.maxPrice}
              onChange={(e) =>
                setField("maxPrice")(
                  e.target.value ? Number(e.target.value) : ""
                )
              }
              className="mt-1 h-11 rounded-lg bg-transparent ring-1 border-0 placeholder:opacity-60"
              style={{
                ...cssVar("--tw-ring-color", "rgba(var(--fg), .18)"),
                ...textFg,
              }}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() =>
              setFilters({ radius: "", beds: "", minPrice: "", maxPrice: "" })
            }
            className="h-10 rounded-lg ring-1"
            style={{
              ...cssVar("--tw-ring-color", "rgba(var(--fg), .2)"),
              ...textFg,
            }}
          >
            Clear
          </Button>
          <Button type="button" className="h-10 rounded-lg acc-bg text-white">
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
