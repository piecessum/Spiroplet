import fs from "node:fs";
import path from "node:path";

const articlesDir = path.join(process.cwd(), "content", "articles");

export type Article = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  published: boolean;
  date: string;
  html: string;
};

export type ArticleSummary = Omit<Article, "html">;

type Frontmatter = Omit<ArticleSummary, "id">;

function stripQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(source: string): {
  frontmatter: Frontmatter;
  markdown: string;
} {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error("Article is missing frontmatter.");
  }

  const data = Object.fromEntries(
    match[1]
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        const key = line.slice(0, separator).trim();
        const value = stripQuotes(line.slice(separator + 1).trim());
        return [key, value];
      }),
  );

  return {
    frontmatter: {
      title: data.title,
      category: data.category,
      description: data.description,
      image: data.image,
      published: data.published !== "false",
      date: data.date,
    },
    markdown: match[2].trim(),
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(markdown: string) {
  return escapeHtml(markdown)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
    );
}

function renderBlock(block: string) {
  if (block.startsWith("<")) return block;

  const heading = block.match(/^(#{1,6})\s+(.+)$/);
  if (heading) {
    const level = heading[1].length;
    return `<h${level}>${renderInline(heading[2])}</h${level}>`;
  }

  const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (image) {
    return `<figure><img src="${image[2]}" alt="${escapeHtml(image[1])}"></figure>`;
  }

  const lines = block.split("\n");
  if (lines.every((line) => line.startsWith("- "))) {
    return `<ul>${lines
      .map((line) => `<li>${renderInline(line.slice(2))}</li>`)
      .join("")}</ul>`;
  }

  return `<p>${renderInline(lines.join(" "))}</p>`;
}

function renderMarkdown(markdown: string) {
  return markdown
    .split(/\n{2,}/)
    .map((block) => renderBlock(block.trim()))
    .join("\n");
}

function readArticleFile(fileName: string): Article {
  const id = fileName.replace(/\.md$/, "");
  const source = fs.readFileSync(path.join(articlesDir, fileName), "utf8");
  const { frontmatter, markdown } = parseFrontmatter(source);

  return {
    id,
    ...frontmatter,
    html: renderMarkdown(markdown),
  };
}

export function getArticles(): Article[] {
  return fs
    .readdirSync(articlesDir)
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
    .map(readArticleFile)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getPublishedArticles(): ArticleSummary[] {
  return getArticles()
    .filter((article) => article.published)
    .map((article) => ({
      id: article.id,
      title: article.title,
      category: article.category,
      description: article.description,
      image: article.image,
      published: article.published,
      date: article.date,
    }));
}

export function getArticleById(id: string) {
  return getArticles().find((article) => article.id === id);
}
