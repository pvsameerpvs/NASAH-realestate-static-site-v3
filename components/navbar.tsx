"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CurvyLine from "./shared/curvy-line";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACTS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/nasah.png"
            alt="Nasah Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative text-sm font-medium tracking-[0.2em] transition-all duration-300
                  ${
                    isActive
                      ? "text-[rgb(var(--acc))] italic"
                      : "hover:text-[rgb(var(--acc))] hover:italic"
                  }
                `}
              >
                {item.label}

                {/* Underline animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 
                    bg-[rgb(var(--acc))] transition-transform duration-300
                    ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 hover:text-[rgb(var(--acc))] transition-colors md:hidden"
          >
            <Menu className="w-7 h-7" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-full bg-black/90 dark:bg-black/90 border-t border-black/10 md:hidden"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 px-6 py-10 text-white">
              <div>
                <h4 className="text-sm opacity-60">Menu</h4>
                <ul className="mt-3 text-4xl leading-tight space-y-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`
                            transition-all duration-300
                            ${
                              isActive
                                ? "text-[rgb(var(--acc))] italic"
                                : "hover:text-[rgb(var(--acc))] hover:italic"
                            }
                          `}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm opacity-60">Get in touch</h4>
                <p className="mt-3 font-semibold hover:text-[rgb(var(--acc))] hover:italic transition-all duration-300">
                  hello@nasah.com
                </p>
              </div>

              <div>
                <h4 className="text-sm opacity-60">Social</h4>
                <ul className="mt-3 space-y-1">
                  {["LinkedIn", "Instagram", "YouTube"].map((name) => (
                    <li key={name}>
                      <a
                        href="#"
                        className="transition-all duration-300 hover:text-[rgb(var(--acc))] hover:italic"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <CurvyLine />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
