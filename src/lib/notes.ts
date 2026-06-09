import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "notes");

export interface NoteFile {
  slug: string;       // URL-safe slug (spaces → hyphens, lowercase)
  filename: string;   // actual filename without .md
  title: string;
  topicSlug: string;
}

export interface Topic {
  name: string;
  slug: string;
  notes: NoteFile[];
}

function toTitle(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Converts any filename to a URL-safe slug
function toSlug(filename: string): string {
  return filename
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
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
          const filename = file.replace(/\.md$/, "");
          const slug = toSlug(filename);
          return {
            slug,
            filename,
            title: data.title || toTitle(filename),
            topicSlug: dir.name,
          };
        });

      return { name: toTitle(dir.name), slug: dir.name, notes };
    });
}

export function getNote(topicSlug: string, noteSlug: string) {
  const decodedTopic = decodeURIComponent(topicSlug);
  const decodedSlug = decodeURIComponent(noteSlug);
  const topicPath = path.join(NOTES_DIR, decodedTopic);

  if (!fs.existsSync(topicPath)) return null;

  // Find the actual file whose slug matches (handles spaces/caps in filenames)
  const match = fs
    .readdirSync(topicPath)
    .filter((f) => f.endsWith(".md"))
    .find((file) => toSlug(file.replace(/\.md$/, "")) === decodedSlug);

  if (!match) return null;

  const raw = fs.readFileSync(path.join(topicPath, match), "utf-8");
  const { data, content } = matter(raw);
  const filename = match.replace(/\.md$/, "");
  return {
    title: data.title || toTitle(filename),
    topicName: toTitle(decodedTopic),
    topicSlug: decodedTopic,
    content,
  };
}
