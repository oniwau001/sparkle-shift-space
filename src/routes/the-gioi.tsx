import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Plus } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { world } from "@/lib/novel-data";

export const Route = createFileRoute("/the-gioi")({
  head: () => ({
    meta: [
      { title: "Thế giới — Thiên Võ Đại Lục" },
      { name: "description", content: "Bách khoa thế giới: Thiên Võ Đại Lục, Cửu Tinh trận đồ, Đan thất Long gia và Bá Thể chi môn." },
      { property: "og:title", content: "Thế giới — Mực & Mộng" },
      { property: "og:description", content: "Các mục thế giới, trận pháp, địa điểm và bí cảnh." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorldPage,
});

function WorldPage() {
  return (
    <StudioShell
      eyebrow="Bách khoa thế giới"
      title="Thế giới"
      actions={
        <Button variant="studio">
          <Plus />
          Thêm mục
        </Button>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
        {world.map((entry) => (
          <article key={entry.name} className="studio-card p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className={`grid size-12 place-items-center rounded-2xl ${entry.tone}`}>
                <Globe2 className="size-5" />
              </div>
              <span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-muted-foreground">
                {entry.type}
              </span>
            </div>
            <h2 className="mt-4 font-display text-xl font-bold">{entry.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{entry.desc}</p>
          </article>
        ))}
      </div>
    </StudioShell>
  );
}
