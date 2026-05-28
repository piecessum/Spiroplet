import { buttonVariants } from "@/components/ui/button";
import { site, spec } from "@/lib/content";
import { Spiral } from "./spiral";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-16 overflow-hidden"
    >
      {/* Спираль-фон: уходит вправо за край и вверх под шапку,
          снизу плавно растворяется в бумаге через маску. */}
      <Spiral className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent_95%)] lg:w-[60%]" />

      {/* Градиент для читаемости текста поверх спирали. */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-background via-background/85 to-background/10 lg:via-background/60 lg:to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-20 sm:px-6 lg:pt-44 lg:pb-28">
        <div className="flex max-w-xl flex-col items-start">
          <span className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 font-mono text-xs font-medium tracking-tight text-muted-foreground backdrop-blur">
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
      </div>
    </section>
  );
}
