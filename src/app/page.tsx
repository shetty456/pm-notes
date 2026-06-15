import Link from "next/link";
import { getAllTopics } from "@/lib/notes";

export default function Home() {
  const topics = getAllTopics();

  return (
    <main className="min-h-screen max-w-[660px] mx-auto px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <h1 className="text-lg font-semibold tracking-tight mb-1.5" style={{ color: "var(--color-text-heading)" }}>
          PM Notes
        </h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Distilled from lectures, podcasts, and deep dives.
        </p>
      </div>

      {/* Topics */}
      {topics.length === 0 ? (
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Create folders with{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--color-bg-code)", color: "var(--color-text-subtle)" }}>
            .md
          </code>{" "}
          files inside{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--color-bg-code)", color: "var(--color-text-subtle)" }}>
            notes/
          </code>{" "}
          to get started.
        </p>
      ) : (
        <div className="space-y-8">
          {topics.map((topic) => (
            <section key={topic.slug}>
              {/* Topic label */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.12em] shrink-0"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {topic.name}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-separator)" }} />
              </div>

              {/* Notes */}
              <ul>
                {topic.notes.map((note) => (
                  <li key={note.slug}>
                    <Link
                      href={`/notes/${topic.slug}/${note.slug}`}
                      className="note-item flex items-center px-2 py-2 -mx-2 rounded-md text-sm"
                    >
                      {note.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
