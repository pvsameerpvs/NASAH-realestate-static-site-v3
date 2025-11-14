"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "default" | "oceans" | "forest";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeCtx = createContext<Ctx | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default");

  // load from storage once (client)
  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("nasah-theme") as Theme)) ||
      null;
    if (saved === "default" || saved === "oceans" || saved === "forest") {
      setTheme(saved);
    }
  }, []);

  // reflect to <html> as data-theme + .dark for forest
  useEffect(() => {
    if (typeof document === "undefined") return;
    const el = document.documentElement;
    el.setAttribute("data-theme", theme);

    // shadcn dark tokens depend on .dark
    const isDark = theme === "forest";
    el.classList.toggle("dark", isDark);

    // persist
    localStorage.setItem("nasah-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
