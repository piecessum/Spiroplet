import { buttonVariants } from "@/components/ui/button";
import { site, spec } from "@/lib/content";
import { Spiral } from "./spiral";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-dots"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            Единый стандарт переплёта
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-muted-foreground text-balance">
            {site.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#buy"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base")}
            >
              Где купить
            </a>
            <a
              href="#ecosystem"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 px-6 text-base",
              )}
            >
              Узнать об экосистеме
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            <div>
              <dt className="text-sm text-muted-foreground">Диаметр отверстий</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold">
                {spec.holeDiameter}
              </dd>
            </div>
            <div className="border-l border-border pl-8">
              <dt className="text-sm text-muted-foreground">Шаг отверстий</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold">
                {spec.holeSpacing}
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <Spiral className="absolute inset-0" />
        </div>
      </div>
    </section>
  );
}
