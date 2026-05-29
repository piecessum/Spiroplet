import Image from "next/image";
import Link from "next/link";
import { getPublishedArticles, type ArticleSummary } from "@/lib/articles";

/** Раскидываем записи по колонкам через i % N — стабильно, без CSS columns. */
function distribute<T>(items: T[], cols: number): T[][] {
  const result: T[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => result[i % cols].push(item));
  return result;
}

function NoteCard({ note }: { note: ArticleSummary }) {
  return (
    <Link
      href={`/zapiski/${note.id}`}
      className="paper paper-tilt group block overflow-hidden rounded-xl border border-border/70"
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
    </Link>
  );
}

function ColumnSet({ items, count }: { items: ArticleSummary[]; count: number }) {
  const cols = distribute(items, count);
  return (
    <>
      {cols.map((col, i) => (
        <div key={i} className="flex min-w-0 flex-1 flex-col gap-5">
          {col.map((n) => (
            <NoteCard key={n.id} note={n} />
          ))}
        </div>
      ))}
    </>
  );
}

export function Notes() {
  const visible = getPublishedArticles();

  return (
    <section
      id="ecosystem"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Экосистема
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          Каталог изделий и заметки о спироплётной системе.
        </p>
      </div>

      {/* Мобильная: одна колонка */}
      <div className="mt-12 flex flex-col gap-5 sm:hidden">
        {visible.map((n) => (
          <NoteCard key={n.id} note={n} />
        ))}
      </div>
      {/* Планшет: 2 колонки */}
      <div className="mt-12 hidden items-start gap-5 sm:flex lg:hidden">
        <ColumnSet items={visible} count={2} />
      </div>
      {/* Десктоп: 3 колонки */}
      <div className="mt-12 hidden items-start gap-5 lg:flex">
        <ColumnSet items={visible} count={3} />
      </div>
    </section>
  );
}
