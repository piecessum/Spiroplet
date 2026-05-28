import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/lib/content";

export function Reviews() {
  return (
    <section id="reviews" className="border-y border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Отзывы
          </h2>
        </div>

        {reviews.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Card key={i} className="paper border-border/70">
                <CardContent className="pt-6">
                  <Quote className="size-6 text-brand" />
                  <p className="mt-4 text-foreground">{r.text}</p>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    {r.name}
                  </p>
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
