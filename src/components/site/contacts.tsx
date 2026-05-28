import { Mail, Phone, Briefcase } from "lucide-react";
import { contacts, socials } from "@/lib/content";

export function Contacts() {
  return (
    <section id="contacts" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Контакты
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            По вопросам участия в экосистеме и сотрудничества.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`mailto:${contacts.email}`}
            className="group paper rounded-xl border border-border p-6 transition-colors hover:border-foreground/40"
          >
            <Mail className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Почта</p>
            <p className="mt-1 font-medium group-hover:underline">{contacts.email}</p>
          </a>

          <a
            href={`tel:${contacts.phoneHref}`}
            className="group paper rounded-xl border border-border p-6 transition-colors hover:border-foreground/40"
          >
            <Phone className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Телефон</p>
            <p className="mt-1 font-medium group-hover:underline">{contacts.phone}</p>
          </a>

          <a
            href={`mailto:${contacts.businessEmail}`}
            className="group paper rounded-xl border border-border p-6 transition-colors hover:border-foreground/40"
          >
            <Briefcase className="size-5 text-brand" />
            <p className="mt-4 text-sm text-muted-foreground">Деловые предложения</p>
            <p className="mt-1 font-medium group-hover:underline">
              {contacts.businessEmail}
            </p>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {contacts.person} ·
          </span>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
