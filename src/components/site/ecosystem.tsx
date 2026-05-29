import { formats, etymology, spec, type Format } from "@/lib/content";
import { Highlight, renderHighlighted } from "./highlight";

/**
 * Миниатюрный лист в реальной пропорции с отверстиями переплёта по стандарту.
 * Размер задаётся CSS-переменной --ps (px на 1 мм) — масштабируется адаптивно.
 */
function PaperSheet({ widthMm, heightMm, holes }: Omit<Format, "label">) {
  return (
    <div
      className="paper paper-tilt relative shrink-0 rounded-sm border border-border/70"
      style={{
        width: `calc(${widthMm} * var(--ps))`,
        height: `calc(${heightMm} * var(--ps))`,
      }}
      aria-hidden
    >
      {/* Ряд отверстий по длинному краю — flex с justify-between
          распределяет любое количество дотов ровно по всей высоте. */}
      <div className="absolute top-[6%] bottom-[6%] left-[4%] flex flex-col items-center justify-between">
        {Array.from({ length: holes }).map((_, i) => (
          <span
            key={i}
            className="block size-[3px] rounded-full bg-foreground/40"
          />
        ))}
      </div>
    </div>
  );
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Экосистема
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          <Highlight>Единый стандарт отверстий</Highlight> — {spec.holeDiameter}
          {" "}с шагом {spec.holeSpacing} — объединяет популярные форматы в одну
          систему.
        </p>
      </div>

      <div
        className="mt-12 flex items-end justify-center gap-4 [--ps:0.46px] sm:gap-10 sm:[--ps:0.72px] lg:gap-14 lg:[--ps:0.9px]"
      >
        {formats.map((f) => (
          <div key={f.label} className="flex flex-col items-center">
            <PaperSheet
              widthMm={f.widthMm}
              heightMm={f.heightMm}
              holes={f.holes}
            />
            <div className="mt-4 text-center">
              <div className="font-mono text-xl font-semibold tracking-tight sm:text-2xl">
                {f.label}
              </div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground sm:text-xs">
                {f.widthMm} × {f.heightMm} мм
              </div>
              <div className="font-mono text-[11px] text-muted-foreground sm:text-xs">
                {f.holes} отверстий
              </div>
            </div>
          </div>
        ))}
      </div>

      <figure className="paper mt-16 rounded-2xl border border-border p-8 sm:p-10">
        <blockquote className="text-xl font-medium text-balance sm:text-2xl">
          {renderHighlighted(etymology)}
        </blockquote>
        <figcaption className="mt-4 font-mono text-sm tracking-tight text-muted-foreground">
          Этимология названия
        </figcaption>
      </figure>
    </section>
  );
}
