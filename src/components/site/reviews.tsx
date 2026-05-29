import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/lib/content";

const reviewAccent = "oklch(0.76 0.18 78)";

function RatingStars({ value }: { value: number }) {
  return (
    <div
      className="mt-4 flex items-center gap-1"
      style={{ color: reviewAccent }}
      aria-label={`${value} из 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4"
          fill={i < value ? "currentColor" : "none"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Отзывы
          </h2>
        </div>

        {reviews.length > 0 ? (
          <div className="mt-10 -mx-4 flex snap-x items-start gap-5 overflow-x-auto px-4 pt-2 pb-10 sm:mt-12 sm:mx-0 sm:grid sm:grid-cols-2 sm:items-stretch sm:overflow-visible sm:px-0 sm:pt-0 sm:pb-0 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Card
                key={i}
                className="paper paper-tilt w-[82%] shrink-0 snap-start border-border/70 sm:w-auto sm:shrink"
              >
                <CardContent className="pt-6">
                  <Quote className="size-6" style={{ color: reviewAccent }} />
                  <p className="mt-4 font-mono text-sm font-semibold tracking-tight">
                    {r.name}
                  </p>
                  <RatingStars value={r.rating} />
                  <p className="mt-4 text-foreground">{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card/60 p-10 text-center">
            <p className="text-lg text-muted-foreground text-balance">
              Здесь скоро появятся отзывы пользователей экосистемы.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
