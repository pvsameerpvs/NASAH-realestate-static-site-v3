"use client";
import { useTheme } from "./theme-provider";
import { Palette } from "lucide-react";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const order: Array<typeof theme> = ["default", "oceans", "forest"];

  const next = () => {
    const idx = order.indexOf(theme);
    setTheme(order[(idx + 1) % order.length]);
  };

  // const label =
  //   theme === "default" ? "Orange" : theme === "oceans" ? "Ocean" : "Forest";

  return (
    <button
      onClick={next}
      className="flex items-center gap-2 px-3 py-2  hover:text-[rgb(var(--acc))] transition-colors"
      aria-label="Toggle theme"
    >
      <Palette className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
      {/* <span className="font-semibold">{label}</span> */}
    </button>
  );
}
