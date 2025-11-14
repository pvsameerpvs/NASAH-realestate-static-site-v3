"use client";
import {
  Building2,
  ClipboardCheck,
  LineChart,
  Landmark,
  Scale,
  HandCoins,
} from "lucide-react";
import type { IconKey } from "@/data/services";

const ICONS = {
  Building2,
  ClipboardCheck,
  LineChart,
  Landmark,
  Scale,
  HandCoins,
} as const;

export default function ServiceIcon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? Building2;
  return <Cmp className={className} />;
}
