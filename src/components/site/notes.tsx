import Image from "next/image";
import Link from "next/link";
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

      {/* Сетка-листочки: ровная CSS Grid, чтобы все 11 карточек надёжно
          раскладывались. Лёгкий наклон через paper-tilt оставляет
          «случайный» вайб без багов масonry. */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((note) => (
          <Link
            key={note.id}
            href={`/zapiski/${note.id}`}
            className="paper paper-tilt group flex flex-col overflow-hidden rounded-xl border border-border/70"
          >
            <div className="relative aspect-[4/3] w-full bg-muted">
              <Image
                src={note.image}
                alt={note.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
