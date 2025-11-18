// components/services/ServiceCard.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <motion.article
      className="
        relative h-full rounded-3xl border border-black/5
        bg-[rgba(var(--bg),0.9)] dark:bg-neutral-900/70
        shadow-sm hover:shadow-2xl
        transition-all duration-300
        overflow-hidden
        flex flex-col
      "
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      {/* subtle top accent line */}
      <div className="h-1 w-full bg-[rgb(var(--acc))]/70" />

      <div className="p-6 md:p-7 flex flex-col gap-5 flex-1">
        <div className="flex items-start gap-4">
          {/* Icon bubble */}
          <div className="relative">
            <div className="absolute inset-0 blur-xl bg-[rgb(var(--acc))]/35 -z-10" />
            <div
              className="
                rounded-2xl p-3 md:p-3.5
                bg-[rgba(var(--bg),0.95)]
                ring-1
              "
              style={{
                ["--tw-ring-color" as any]: "rgba(var(--acc),0.35)",
              }}
            >
              <ServiceIcon name={s.icon} className="h-7 w-7 md:h-8 md:w-8" />
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm md:text-base opacity-75 leading-relaxed">
              {s.excerpt}
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-auto pt-2 flex items-center justify-between gap-3">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
            Real Estate Service
          </p>

          <Link
            href={`/services/${s.slug}`}
            className="
              inline-flex items-center gap-2
              px-4 md:px-5 py-2 md:py-2.5
              rounded-full
              bg-[rgb(var(--acc))]
              text-white text-xs md:text-sm font-semibold
              shadow-md shadow-[rgb(var(--acc))]/40
              hover:shadow-lg hover:shadow-[rgb(var(--acc))]/50
              transition-all duration-300
            "
          >
            <span>Learn more</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
