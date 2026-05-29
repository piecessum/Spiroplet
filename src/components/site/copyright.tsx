import { Copyright as CopyrightIcon, Mail, UserRound } from "lucide-react";
import { contacts, site } from "@/lib/content";

export function Copyright() {
  const year = new Date().getFullYear();

  return (
    <section id="copyright">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Авторские права
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Материалы проекта защищены авторским правом. По вопросам
            сотрудничества и использования материалов свяжитесь с автором.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <div className="paper paper-tilt rounded-xl border border-border p-6">
            <CopyrightIcon className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Правообладатель</p>
            <p className="mt-1 font-mono font-medium tracking-tight">
              © {year} {site.name}
            </p>
          </div>

          <div className="paper paper-tilt rounded-xl border border-border p-6">
            <UserRound className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Автор проекта</p>
            <p className="mt-1 font-mono font-medium tracking-tight">
              {contacts.person}
            </p>
          </div>

          <a
            href={`mailto:${contacts.email}`}
            className="group paper paper-tilt rounded-xl border border-border p-6 hover:border-foreground/40"
          >
            <Mail className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Почта</p>
            <p className="mt-1 font-mono font-medium tracking-tight group-hover:underline">
              {contacts.email}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
