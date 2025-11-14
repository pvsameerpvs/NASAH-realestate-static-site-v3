"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link"; // keep if you still want a normal page link somewhere
import PropertyModal from "./PropertyModal";

export type Property = {
  id: string;
  title: string;
  location: string;
  minutes: number;
  image: string;
  price: string;
  images?: string[];
  description?: string;
  amenities?: string[];
};

export default function PropertyCard({ p }: { p: Property }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="card bg-white/80 p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70 }}
        whileHover={{ y: -6 }}
      >
        <div className="relative h-56 w-full rounded-2xl overflow-hidden group">
          {/* image zoom on hover */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="View details"
          >
            <span className="px-4 py-2 rounded-xl acc-bg text-white font-semibold backdrop-blur-sm">
              View Details
            </span>
          </button>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">{p.title}</h3>
            <span className="acc font-black text-2xl">{p.minutes}</span>
          </div>
          <p className="text-sm opacity-70">{p.location}</p>
          <p className="mt-1 font-semibold">{p.price}</p>

          {/* Fallback text button for accessibility / mobile */}
          <Button
            onClick={() => setOpen(true)}
            className="mt-3 rounded-xl acc-bg text-white"
          >
            View Details
          </Button>
        </div>
      </motion.div>

      {/* Modal */}
      <PropertyModal open={open} onOpenChange={setOpen} data={p} />
    </>
  );
}
