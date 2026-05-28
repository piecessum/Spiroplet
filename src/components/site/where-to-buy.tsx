import { ArrowUpRight } from "lucide-react";
import { marketplaces, about } from "@/lib/content";

export function WhereToBuy() {
  return (
    <section id="buy" className="border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Где купить
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Товары спироплётного стандарта — на популярных маркетплейсах.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {marketplaces.map((m) => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group paper flex items-center justify-between rounded-xl border border-border p-6 transition-colors hover:border-foreground/40"
            >
              <span className="text-xl font-semibold">{m.name}</span>
              <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          {about.cooperation}
        </p>
      </div>
    </section>
  );
}
