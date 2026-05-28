import { Target, Users } from "lucide-react";
import { about } from "@/lib/content";
import { renderHighlighted } from "./highlight";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          О проекте
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="paper paper-tilt rounded-2xl border border-border p-8">
          <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Target className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Задача</h3>
          <p className="mt-2 text-lg text-muted-foreground text-balance">
            {renderHighlighted(about.mission)}
          </p>
        </div>

        <div className="paper paper-tilt rounded-2xl border border-border p-8">
          <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
            <Users className="size-5" />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Участники</h3>
          <p className="mt-2 text-lg text-muted-foreground text-balance">
            {about.invite}
          </p>
        </div>
      </div>
    </section>
  );
}
