import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenText, PenLine, Plus } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { novels } from "@/lib/novel-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thư viện tiểu thuyết — Mực & Mộng" },
      { name: "description", content: "Tất cả bản thảo của bạn trong một thư viện: Cửu Tinh Bá Thể Quyết, Đảo Mây, Ngã Ba." },
      { property: "og:title", content: "Thư viện tiểu thuyết — Mực & Mộng" },
      { property: "og:description", content: "Tất cả bản thảo của bạn trong một thư viện sáng tác pastel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  return (
    <StudioShell
      eyebrow="Không gian sáng tác"
      title="Thư viện tiểu thuyết"
      actions={
        <Link to="/tieu-thuyet-moi">
          <Button variant="studio">
            <Plus />
            Tiểu thuyết mới
          </Button>
        </Link>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {novels.map((novel) => (
          <article key={novel.title} className="studio-card flex flex-col p-5 sm:p-6">
            <div className={`grid h-28 place-items-center rounded-2xl ${novel.tone}`}>
              <span className="font-display text-2xl font-bold">{novel.title.slice(0, 1)}</span>
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-primary">{novel.genre}</p>
            <h2 className="mt-1 font-display text-xl font-bold leading-snug">{novel.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{novel.blurb}</p>

            <div className="mt-4 flex items-center justify-between text-xs font-bold">
              <span>{novel.chapters}</span>
              <span className="rounded-full bg-secondary px-3 py-1">{novel.status}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-background">
              <div className="h-full rounded-full bg-accent" style={{ width: `${novel.progress * 100}%` }} />
            </div>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">{novel.words}</p>

            <div className="mt-5 flex gap-2.5">
              <Link to="/chuong" className="flex-1">
                <Button variant="studio" className="w-full">
                  <BookOpenText />
                  Mở bản thảo
                </Button>
              </Link>
              <Link to="/soan-thao">
                <Button variant="studioOutline">
                  <PenLine />
                  Viết tiếp
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </StudioShell>
  );
}
