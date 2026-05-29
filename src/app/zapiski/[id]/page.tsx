import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { getArticleById, getPublishedArticles } from "@/lib/articles";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return getPublishedArticles().map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const note = getArticleById(id);
  if (!note) return {};
  return {
    title: `${note.title} — Спироплёт`,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      images: [note.image],
      locale: "ru_RU",
      type: "article",
    },
  };
}

export default async function NotePage({ params }: Params) {
  const { id } = await params;
  const note = getArticleById(id);
  if (note && !note.published) notFound();
  if (!note) notFound();

  const dateLabel = new Date(note.date).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            href="/#ecosystem"
            className="inline-flex items-center gap-1 font-mono text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-4" />К записям
          </Link>

          <header className="mt-8">
            <span className="font-mono text-xs font-medium tracking-tight text-muted-foreground uppercase">
              {note.category}
            </span>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {note.title}
            </h1>
            <p className="mt-3 font-mono text-sm tracking-tight text-muted-foreground">
              {dateLabel}
            </p>
          </header>

          <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
            <Image
              src={note.image}
              alt={note.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          <div className="paper mt-10 rounded-2xl border border-border p-6 sm:p-10">
            <div
              className="prose-paper"
              dangerouslySetInnerHTML={{ __html: note.html }}
            />
          </div>

          <div className="mt-12">
            <Link
              href="/#ecosystem"
              className="inline-flex items-center gap-1 font-mono text-sm tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronLeft className="size-4" />Ко всем записям
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
