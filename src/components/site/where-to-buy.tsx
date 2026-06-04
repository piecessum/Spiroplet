import { ArrowUpRight, Store } from "lucide-react";
import { about } from "@/lib/content";
import { renderHighlighted } from "./highlight";

export function WhereToBuy() {
  return (
    <section id="buy">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Где купить
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Товары спироплётного стандарта — в нашем магазине.
          </p>
        </div>

        <a
          href="https://shop.spiroplet.ru"
          target="_blank"
          rel="noopener noreferrer"
          className="group paper paper-tilt mt-12 flex flex-col items-start gap-6 rounded-2xl border border-border p-8 hover:border-foreground/40 sm:flex-row sm:items-center sm:justify-between sm:p-12"
        >
          <div className="flex items-center gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/5 sm:size-16">
              <Store className="size-7 sm:size-8" />
            </span>
            <div>
              <span className="block font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
                Магазин Спироплёт
              </span>
              <span className="mt-1 block text-muted-foreground">
                shop.spiroplet.ru
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 self-stretch rounded-xl border border-border px-5 py-3 font-medium transition-colors group-hover:border-foreground/40 sm:self-auto">
            Перейти в магазин
            <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          </span>
        </a>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          {renderHighlighted(about.cooperation)}
        </p>
      </div>
    </section>
  );
}
