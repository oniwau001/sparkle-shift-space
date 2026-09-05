import { createFileRoute } from "@tanstack/react-router";
import { History, Save, WandSparkles } from "lucide-react";
import { useState } from "react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { chapterContent, characters, scenes } from "@/lib/novel-data";

export const Route = createFileRoute("/soan-thao")({
  head: () => ({
    meta: [
      { title: "Soạn thảo — Chương 12 Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "Trình soạn thảo chương với cảnh, số từ và gợi ý AI theo thời gian thực." },
      { property: "og:title", content: "Soạn thảo — Mực & Mộng" },
      { property: "og:description", content: "Viết chương trong không gian tập trung, có gợi ý AI đồng hành." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EditorPage,
});

function EditorPage() {
  const [activeScene, setActiveScene] = useState(3);

  return (
    <StudioShell
      eyebrow="Bản thảo đang mở"
      title="Chương 12 — Cửu Tinh trận môn"
      actions={
        <>
          <span className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold">4.280 từ</span>
          <span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-bold">Đang viết</span>
          <Button variant="studioOutline">
            <History />
            Lịch sử
          </Button>
          <Button variant="studio">
            <Save />
            Lưu chương
          </Button>
        </>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-12">
        <section className="studio-card p-5 sm:p-6 xl:col-span-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-xl font-bold">Nội dung chương</h2>
            <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-muted-foreground">
              Cảnh {activeScene} / 5
            </span>
          </div>
          <div className="mt-5 space-y-5 text-[15px] leading-8 text-foreground/85">
            {chapterContent.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-muted-foreground">
            {scenes.map((scene) => (
              <button
                key={scene.no}
                onClick={() => setActiveScene(scene.no)}
                className={`rounded-full px-3 py-1.5 ${activeScene === scene.no ? "bg-pink text-foreground" : "bg-lilac/70"}`}
              >
                Cảnh {scene.no} — {scene.title}
              </button>
            ))}
          </div>
        </section>

        <aside className="space-y-5 xl:col-span-4">
          <section className="studio-card p-5">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold">
              <WandSparkles className="size-4 text-primary" />
              Gợi ý của AI
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              “Cảnh mở trận đã tốt — hãy tăng sức nặng cho lựa chọn của Long Trần trước khi Bá Thể chi môn mở ra.”
            </p>
            <Button variant="studioOutline" className="mt-4 w-full">Viết tiếp cùng AI</Button>
          </section>
          <section className="studio-card p-5">
            <h2 className="font-display text-lg font-bold">Nhân vật trong chương</h2>
            <div className="mt-3 space-y-2.5">
              {characters.map((character) => (
                <div key={character.name} className={`flex items-center gap-3 rounded-2xl p-2.5 ${character.tone}`}>
                  <div className="grid size-10 place-items-center rounded-full bg-card font-display font-bold">
                    {character.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">{character.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{character.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </StudioShell>
  );
}
