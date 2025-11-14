// components/CardFanSlider.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type CardFanSliderProps = {
  images: string[];
  interval?: number; // ms between advances (default 2000)
  transitionMs?: number; // animation duration (default 700)
  label?: string; // optional top-left label text
};

export default function CardFanSlider({
  images,
  interval = 2000,
  transitionMs = 700,
  label,
}: CardFanSliderProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  // Show 5 at a time: center (slot 0) + two each side
  const frames = useMemo(() => {
    const out: { src: string; key: string; slot: number }[] = [];
    for (let s = -2; s <= 2; s++) {
      const idx = (index + s + images.length) % images.length;
      out.push({ src: images[idx], key: `${idx}-${s}`, slot: s });
    }
    return out;
  }, [index, images]);

  // map slot -> transform values
  const slotToStyle = (slot: number) => {
    // tune these for overlap/tilt
    const xPct = slot * 10; // horizontal offset in %
    const rotDeg = slot * 6; // rotation in degrees
    const z = 10 - Math.abs(slot); // stacking order (center on top)
    const scale = slot === 0 ? 1 : 0.96;
    const opacity = slot === 0 ? 1 : 0.92;
    return {
      transform: `translateX(${xPct}%) rotate(${rotDeg}deg) scale(${scale})`,
      transition: `transform ${transitionMs}ms ease, opacity ${transitionMs}ms ease`,
      zIndex: z,
      opacity,
    } as React.CSSProperties;
  };

  return (
    <div className="relative h-[50vh] md:h-auto md:aspect-[5/4] lg:aspect-[16/10]">
      {/* outer frame like your reference */}
      <div className="absolute inset-0 rounded-3xl  dark:ring-white/10 pointer-events-none" />

      {/* stack of cards */}
      <div className="absolute inset-0">
        {frames.map(({ src, key, slot }) => (
          <div key={key} className="absolute inset-0" style={slotToStyle(slot)}>
            <div className="absolute inset-3 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={slot === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* optional label */}
      {label ? (
        <div className="absolute left-4 top-4 z-20">
          <span className="inline-block rounded-md bg-black/55 text-white text-xs tracking-wide px-2 py-1 backdrop-blur-sm">
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
}
