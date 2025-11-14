import Image from "next/image";
import type { Service } from "@/data/services";

export default function ServiceHero({ s }: { s: Service }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <div className="relative aspect-[21/9] md:aspect-[16/6] bg-neutral-100 dark:bg-neutral-800">
        {s.hero && (
          <Image
            src={s.hero}
            alt={s.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 theme-overlay opacity-10 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 flex items-end">
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-5xl font-black">{s.title}</h1>
            <p className="mt-2 max-w-2xl opacity-80">{s.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
