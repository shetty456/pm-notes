import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getNote } from "@/lib/notes";

interface Props {
  params: Promise<{ topic: string; note: string }>;
}

export default async function NotePage({ params }: Props) {
  const { topic, note } = await params;
  const data = getNote(topic, note);
  if (!data) notFound();

  return (
    <main className="min-h-screen max-w-[660px] mx-auto px-10 py-12">
      {/* Back link */}
      <Link href="/" className="back-link inline-flex items-center gap-1 mb-10 text-xs">
        ← {data.topicName}
      </Link>

      {/* Note content */}
      <article
        className="prose max-w-none"
        style={{ fontSize: "14px", lineHeight: "1.75" }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {data.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
