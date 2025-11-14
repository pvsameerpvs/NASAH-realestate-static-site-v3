// components/services/ServiceCard.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <motion.article
      className="rounded-2xl border bg-white/70 dark:bg-neutral-900/60 p-5 hover:shadow-md transition"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <div className="flex items-start gap-4">
        <div
          className="rounded-xl p-3 acc-bg/10 ring-1"
          style={{ ["--tw-ring-color" as any]: "rgba(var(--fg),.12)" }}
        >
          <ServiceIcon name={s.icon} className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{s.title}</h3>
          <p className="mt-1 opacity-70">{s.excerpt}</p>
        </div>
      </div>

      <Link
        href={`/services/${s.slug}`}
        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl acc-bg text-white"
      >
        Learn more
      </Link>
    </motion.article>
  );
}
