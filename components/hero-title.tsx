"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroTitle() {
  const fullLine1 = "BUILDING TRUST";
  const fullLine2 = "DESIGNING FUTURES";

  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");

  // Type first line
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setLine1(fullLine1.slice(0, i));
      if (i >= fullLine1.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  // Type second line after small delay
  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setLine2(fullLine2.slice(0, i));
        if (i >= fullLine2.length) clearInterval(interval);
      }, 90);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="space-y-4">
      {/* Small label above heading */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
          inline-flex items-center rounded-full
          border border-white/40 bg-black/30
          px-4 py-1 text-xs md:text-sm
          tracking-[0.25em] uppercase
          text-white/80 backdrop-blur
        "
      >
        Nasah Real Estate
      </motion.span>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-black leading-tight tracking-tight
        "
      >
        {line1}
        <br />
        <span
          className="
            acc inline-block mt-1
            border-t border-white/40 pt-2
          "
        >
          {line2}
        </span>
      </motion.h1>
    </div>
  );
}
