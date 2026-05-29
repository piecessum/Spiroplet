import Image from "next/image";
import { notes } from "@/lib/content";

export function Notes() {
  const visible = notes.filter((n) => n.published);

  return (
    <section
      id="notes"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Записи
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          Каталог изделий и заметки о спироплётной системе.
        </p>
      </div>

      {/* Masonry через CSS columns: листочки висят на «доске» как закреплённые
          заметки разной высоты. break-inside-avoid не даёт карточкам разорваться. */}
      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {visible.map((note) => (
          <article
            key={note.id}
            className="paper paper-tilt mb-5 inline-block w-full break-inside-avoid overflow-hidden rounded-xl border border-border/70"
          >
            <div className="relative aspect-[4/3] w-full bg-muted">
              <Image
                src={note.image}
                alt={note.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <span className="font-mono text-[11px] font-medium tracking-tight text-muted-foreground uppercase">
                {note.category}
              </span>
              <h3 className="mt-2 font-mono text-lg font-semibold tracking-tight">
                {note.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {note.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
