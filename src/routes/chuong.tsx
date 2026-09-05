import { createFileRoute, Link } from "@tanstack/react-router";
import { PenLine, Plus } from "lucide-react";
import { useState } from "react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { chapters, scenes } from "@/lib/novel-data";

export const Route = createFileRoute("/chuong")({
  head: () => ({
    meta: [
      { title: "Bản thảo theo chương — Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "Danh sách 12 chương của Cửu Tinh Bá Thể Quyết với số từ và trạng thái từng chương." },
      { property: "og:title", content: "Bản thảo theo chương — Mực & Mộng" },
      { property: "og:description", content: "Quản lý từng chương, cảnh và trạng thái bản thảo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChaptersPage,
});

function ChaptersPage() {
  const [activeChapter, setActiveChapter] = useState(12);
  const current = chapters.find((chapter) => chapter.no === activeChapter) ?? chapters[chapters.length - 1]!;

  return (
    <StudioShell
      eyebrow="Cửu Tinh Bá Thể Quyết"
      title="Bản thảo theo chương"
      actions={
        <>
          <span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-bold">12 / 24 chương</span>
          <Button variant="studio">
            <Plus />
            Chương mới
          </Button>
        </>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-12">
        <section className="studio-card p-5 sm:p-6 xl:col-span-8">
          <h2 className="font-display text-xl font-bold">Danh sách chương</h2>
          <ul className="mt-4 space-y-2.5">
            {chapters.map((chapter) => {
              const active = chapter.no === activeChapter;
              return (
                <li key={chapter.no}>
                  <button
                    onClick={() => setActiveChapter(chapter.no)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-colors ${
                      active ? "bg-pink/40" : "bg-background hover:bg-pink/20"
                    }`}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-card font-display text-sm font-bold">
                      {chapter.no}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold">
                        Chương {chapter.no} — {chapter.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">{chapter.words}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                        chapter.status === "Đang viết" ? "bg-peach" : "bg-accent/70"
                      }`}
                    >
                      {chapter.status}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="space-y-5 xl:col-span-4">
          <section className="studio-card p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-primary">Đang chọn</p>
            <h2 className="mt-1 font-display text-xl font-bold">
              Chương {current.no} — {current.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{current.words} · {current.status}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
              {scenes.map((scene) => (
                <span key={scene.no} className="rounded-full bg-lilac/70 px-3 py-1.5">
                  Cảnh {scene.no} — {scene.title}
                </span>
              ))}
            </div>
            <Link to="/soan-thao" className="mt-5 block">
              <Button variant="studio" className="w-full">
                <PenLine />
                Mở trình soạn thảo
              </Button>
            </Link>
          </section>
          <section className="studio-card p-5">
            <h2 className="font-display text-lg font-bold">Tiến độ quyển</h2>
            <p className="mt-1 text-sm text-muted-foreground">48.600 / ~96.000 từ dự kiến</p>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-background">
              <div className="h-full w-1/2 rounded-full bg-accent" />
            </div>
          </section>
        </aside>
      </div>
    </StudioShell>
  );
}
