"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CurvyLine from "./shared/curvy-line";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-6  flex items-center justify-between">
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2  hover:text-[rgb(var(--acc))] transition-colors"
          >
            <Menu className="w-7 h-7 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-full bg-black/90 dark:bg-black/90 border-t border-black/10"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10 text-white">
              <div>
                <h4 className="text-sm opacity-60">Menu</h4>
                <ul className="mt-3 text-5xl leading-tight space-y-2">
                  {[
                    { href: "/", label: "HOME" },
                    { href: "/projects", label: "PROJECTS" },
                    { href: "/about", label: "ABOUT" },
                    { href: "/contact", label: "CONTACTS" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="transition-all duration-300 hover:text-[rgb(var(--acc))] hover:italic"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
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
