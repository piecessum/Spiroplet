import { Layers, ShieldCheck, RotateCw, Ruler, Replace } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { advantages } from "@/lib/content";
import { Highlight } from "./highlight";

const icons = [Layers, ShieldCheck, RotateCw, Ruler, Replace];

export function Advantages() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Почему спироплётный стандарт
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          <Highlight>Один формат отверстий</Highlight> — и любые листы и блоки
          совместимы между собой.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card key={item.title} className="paper paper-tilt border-border/70">
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" />
                </div>
                <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
