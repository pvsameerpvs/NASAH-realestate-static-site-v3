import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, serviceBySlug } from "@/data/services";

import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";

type Props = { params: { slug: string } };

// SEO per service
export function generateMetadata({ params }: Props): Metadata {
  const s = serviceBySlug.get(params.slug);
  if (!s) return { title: "Service — NASAH" };
  return {
    title: `${s.title} — NASAH`,
    description: s.excerpt,
    openGraph: { title: s.title, description: s.excerpt },
  };
}

// Static params for SSG
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: Props) {
  const s = serviceBySlug.get(params.slug);
  if (!s) return notFound();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
      <ServiceHero s={s} />

      <section className="mt-10 grid lg:grid-cols-[1fr_360px] gap-10">
        {/* Main content */}
        <div>
          {s.content.map((sec) => (
            <div key={sec.heading} className="mt-8">
              <h2 className="text-xl md:text-2xl font-bold">{sec.heading}</h2>
              <p className="mt-2 leading-relaxed opacity-80">{sec.body}</p>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div
            className="rounded-2xl p-5 ring-1"
            style={{ ["--tw-ring-color" as any]: "rgba(var(--fg),.12)" }}
          >
            <h3 className="font-bold text-lg">Highlights</h3>
            <ul className="mt-3 space-y-2">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full acc-bg inline-block" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {s.cta && (
            <Link
              href={s.cta.href}
              className="block text-center px-5 py-3 rounded-xl acc-bg text-white font-semibold"
            >
              {s.cta.label}
            </Link>
          )}
        </aside>
      </section>
    </div>
  );
}
