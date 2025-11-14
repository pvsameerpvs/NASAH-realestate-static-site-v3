"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CurvyLine() {
  const { scrollYProgress } = useScroll();
  const length = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="h-16 relative overflow-visible">
      <svg
        className="absolute -top-8 left-0 w-full h-32"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,150 C250,10 750,190 1000,60"
          stroke="rgb(var(--acc))"
          strokeWidth="6"
          fill="transparent"
          strokeLinecap="round"
          style={{ pathLength: length }}
        />
      </svg>
    </div>
  );
}
