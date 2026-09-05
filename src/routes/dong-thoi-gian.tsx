import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { timeline } from "@/lib/novel-data";

export const Route = createFileRoute("/dong-thoi-gian")({
  head: () => ({
    meta: [
      { title: "Dòng thời gian — Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "Các sự kiện chính từ Ngày 1 Khởi nguyên đến Ngày 5 Thiên kiếp của Cửu Tinh Bá Thể Quyết." },
      { property: "og:title", content: "Dòng thời gian — Mực & Mộng" },
      { property: "og:description", content: "Theo dõi mạch sự kiện trong truyện theo ngày." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <StudioShell
      eyebrow="Cửu Tinh Bá Thể Quyết"
      title="Dòng thời gian"
      actions={
        <Button variant="studio">
          <CalendarPlus />
          Thêm sự kiện
        </Button>
      }
    >
      <section className="studio-card mt-7 max-w-2xl p-5 sm:p-6">
        <div className="space-y-0.5">
          {timeline.map((item, index) => (
            <div className="flex gap-4" key={item.day}>
              <div className="flex flex-col items-center">
                <div className={`size-4 shrink-0 rounded-full ${item.tone}`} />
                {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
              </div>
              <div className="pb-6">
                <p className="text-sm font-bold">{item.day}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </StudioShell>
  );
}
