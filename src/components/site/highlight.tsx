import type { ReactNode } from "react";

/** Жёлтый «маркер» под словом — стиль bullet journal. */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="highlight">{children}</span>;
}

/**
 * Превращает строку с метками `==слово==` в массив React-узлов,
 * оборачивая помеченные части в <Highlight>.
 */
export function renderHighlighted(text: string): ReactNode[] {
  const parts = text.split(/==(.+?)==/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <Highlight key={i}>{part}</Highlight> : part,
  );
}
