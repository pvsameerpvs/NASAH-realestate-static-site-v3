"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = { className?: string };

/**
 * Elegant Loom-style ribbon:
 * - Left loop then a long sweep to the right
 * - Draws quickly (≈35% of scroll) with spring easing
 * - Double layer (soft trail + crisp main line) with subtle gradient
 * - Renders above content (z-20) and ignores pointer events
 */
export default function HeroCurve({ className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // start when hero enters, end when leaves
  });

  // Finish drawing early for a faster feel, then spring for snap
  const rawLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(rawLength, {
    stiffness: 120,
    damping: 18,
    mass: 0.3,
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 z-20 ${className}`}
    >
      <svg
        className="absolute -left-[18vw] top-0 h-full w-[136vw] md:-left-[14vw] md:w-[128vw]"
        viewBox="0 0 1360 600"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          {/* subtle orange gradient for a premium finish */}
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--acc))" />
            <stop offset="100%" stopColor="rgba(255,120,0,0.65)" />
          </linearGradient>
        </defs>

        {/* --- BACK TRAIL (soft, wider, slightly transparent) --- */}
        <motion.path
          // loop (left) -> long sweep (right)
          d="M100,520 C200,160 420,560 310,140 C520,360 980,220 1360,380"
          stroke="rgb(var(--acc))"
          strokeOpacity={0.18}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />

        {/* --- MAIN RIBBON (crisp) --- */}
        <motion.path
          d="M90,510 C190,150 410,550 300,130 C510,350 970,210 1350,370"
          stroke="url(#ribbonGrad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
