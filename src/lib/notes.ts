import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "notes");

export interface NoteFile {
  slug: string;
  title: string;
  topicSlug: string;
}

export interface Topic {
  name: string;
  slug: string;
  notes: NoteFile[];
}

function toTitle(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getAllTopics(): Topic[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  return fs
    .readdirSync(NOTES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((dir) => {
      const topicPath = path.join(NOTES_DIR, dir.name);
      const notes: NoteFile[] = fs
        .readdirSync(topicPath)
        .filter((f) => f.endsWith(".md"))
        .sort()
        .map((file) => {
          const raw = fs.readFileSync(path.join(topicPath, file), "utf-8");
          const { data } = matter(raw);
          const slug = file.replace(/\.md$/, "");
          return { slug, title: data.title || toTitle(slug), topicSlug: dir.name };
        });

      return { name: toTitle(dir.name), slug: dir.name, notes };
    });
}

export function getNote(topicSlug: string, noteSlug: string) {
  const filePath = path.join(NOTES_DIR, topicSlug, `${noteSlug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    title: data.title || toTitle(noteSlug),
    topicName: toTitle(topicSlug),
    topicSlug,
    content,
  };
}
