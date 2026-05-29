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
            className="block rounded-full bg-foreground/40"
            style={{
              width: `calc(5.5 * var(--ps))`,
              height: `calc(5.5 * var(--ps))`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function FormatsAndHoles() {
  return (
    <section id="formats" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Форматы бумаги и отверстия
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          <Highlight>Единый стандарт отверстий</Highlight> — {spec.holeDiameter}
          {" "}с шагом {spec.holeSpacing} — объединяет популярные форматы в одну
          систему.
        </p>
      </div>

      <div
        className="mt-14 flex items-end justify-center gap-3 [--ps:0.55px] sm:gap-6 sm:[--ps:1px] md:gap-7 md:[--ps:1.2px] lg:gap-8 lg:[--ps:1.7px] xl:[--ps:1.85px]"
      >
        {formats.map((f) => (
          <div key={f.label} className="flex flex-col items-center">
            <PaperSheet
              widthMm={f.widthMm}
              heightMm={f.heightMm}
              holes={f.holes}
            />
            <div className="mt-4 text-center sm:mt-6">
              <div className="font-mono text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                {f.label}
              </div>
              <div className="mt-1 font-mono text-[11px] text-muted-foreground sm:text-xs lg:text-sm">
                {f.widthMm} × {f.heightMm} мм
              </div>
              <div className="font-mono text-[11px] text-muted-foreground sm:text-xs lg:text-sm">
                {f.holes} отверстий
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Etymology() {
  return (
    <section id="etymology" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Этимология слова
        </h2>
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
