import { formats, etymology, spec } from "@/lib/content";

function BindingEdge() {
  // Ряд отверстий — визуальная отсылка к переплёту.
  return (
    <div className="flex flex-col gap-2 py-2" aria-hidden>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="size-2 rounded-full border border-foreground/40"
        />
      ))}
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
          Единый стандарт отверстий — {spec.holeDiameter} с шагом {spec.holeSpacing} —
          объединяет популярные форматы в одну систему.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {formats.map((f) => (
          <div
            key={f.label}
            className="paper paper-tilt flex items-stretch gap-4 rounded-xl border border-border p-6"
          >
            <BindingEdge />
            <div className="flex flex-col justify-center">
              <span className="font-mono text-3xl font-semibold tracking-tight">
                {f.label}
              </span>
              <span className="mt-1 font-mono text-sm text-muted-foreground">
                {f.note}
              </span>
            </div>
          </div>
        ))}
      </div>

      <figure className="paper mt-12 rounded-2xl border border-border p-8 sm:p-10">
        <blockquote className="text-xl font-medium text-balance sm:text-2xl">
          {etymology}
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted-foreground">
          Этимология названия
        </figcaption>
      </figure>
    </section>
  );
}
