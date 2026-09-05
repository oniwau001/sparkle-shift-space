import { createFileRoute } from "@tanstack/react-router";
import { GitBranchPlus, Plus } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { outline } from "@/lib/novel-data";

export const Route = createFileRoute("/dan-y")({
  head: () => ({
    meta: [
      { title: "Dàn ý — Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "Dàn ý ba quyển của Cửu Tinh Bá Thể Quyết: Trùng sinh, Đan đạo và Cửu Tinh." },
      { property: "og:title", content: "Dàn ý — Mực & Mộng" },
      { property: "og:description", content: "Khung truyện theo quyển, mạch sự kiện và nút rẽ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OutlinePage,
});

const tones = ["bg-pink/40", "bg-lilac/50", "bg-peach/50"];

function OutlinePage() {
  return (
    <StudioShell
      eyebrow="Cửu Tinh Bá Thể Quyết"
      title="Dàn ý"
      actions={
        <Button variant="studio">
          <GitBranchPlus />
          Thêm quyển
        </Button>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {outline.map((arc, index) => (
          <section key={arc.arc} className="studio-card p-5 sm:p-6">
            <div className={`inline-flex rounded-2xl px-4 py-2 font-display text-sm font-bold ${tones[index % tones.length]}`}>
              Quyển {index + 1}
            </div>
            <h2 className="mt-3 font-display text-xl font-bold">{arc.arc.split(" — ")[1]}</h2>
            <ul className="mt-4 space-y-3">
              {arc.items.map((item, itemIndex) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-card text-xs font-bold shadow-[0_3px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)]">
                    {itemIndex + 1}
                  </span>
                  <p className="text-sm leading-6 text-foreground/85">{item}</p>
                </li>
              ))}
            </ul>
            <button className="mt-5 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold text-muted-foreground hover:bg-background">
              <Plus className="size-4" />
              Thêm mạch truyện
            </button>
          </section>
        ))}
      </div>
    </StudioShell>
  );
}
