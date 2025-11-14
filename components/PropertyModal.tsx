"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Property } from "@/components/property-card";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  data: Property;
};

export default function PropertyModal({ open, onOpenChange, data }: Props) {
  // prepare gallery
  const gallery = React.useMemo(() => {
    const base = data.images && data.images.length ? data.images : [data.image];
    // ensure unique (avoid duplicates)
    return Array.from(new Set(base));
  }, [data]);

  const [idx, setIdx] = React.useState(0);

  // loop helpers
  const next = () => setIdx((i) => (i + 1) % gallery.length);
  const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);

  // keyboard navigation when open
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, gallery.length]);

  // touch swipe
  const touchRef = React.useRef<{ x: number | null }>({ x: null });
  const onTouchStart = (e: React.TouchEvent) => {
    touchRef.current.x = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchRef.current.x == null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    if (Math.abs(dx) > 40) {
      dx < 0 ? next() : prev();
    }
    touchRef.current.x = null;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        // centered & responsive
        className="max-w-[min(1100px,92vw)] p-0 overflow-hidden rounded-2xl"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{data.title}</DialogTitle>
          <DialogDescription>{data.location}</DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-[1.3fr_1fr]">
          {/* Gallery */}
          <div
            className="relative bg-black"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative aspect-[16/10] md:aspect-[16/11]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={gallery[idx]}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[idx]}
                    alt={data.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev/Next */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Dots */}
            {gallery.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      i === idx ? "bg-white w-7" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right panel */}
          <div className="p-5 md:p-7">
            <h3 className="text-2xl md:text-3xl font-black">{data.title}</h3>
            <p className="mt-1 text-sm opacity-70">
              {data.location} • {data.minutes} min
            </p>
            <p className="mt-2 text-xl font-semibold">{data.price}</p>

            {data.description && (
              <p className="mt-4 leading-relaxed opacity-80">
                {data.description}
              </p>
            )}

            {data.amenities && data.amenities.length > 0 && (
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {data.amenities.map((a) => (
                  <li
                    key={a}
                    className="rounded-lg px-3 py-2 ring-1"
                    style={{
                      ["--tw-ring-color" as any]: "rgba(var(--fg),.12)",
                    }}
                  >
                    {a}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              <Button className="acc-bg text-white">Book a Visit</Button>
              <Button variant="outline">Contact Agent</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
