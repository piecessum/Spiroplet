import { getPublishedArticles } from "@/lib/articles";
import { NotesGallery } from "@/components/site/notes-gallery";

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

      <NotesGallery notes={visible} />
    </section>
  );
}
