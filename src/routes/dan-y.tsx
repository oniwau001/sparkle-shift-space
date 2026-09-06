import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  ChevronDown,
  ChevronUp,
  CircleAlert,
  Clock3,
  FilePenLine,
  Plus,
  Save,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { chapters } from "@/lib/novel-data";

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

const chapterNotes = [
  "Long Trần tỉnh lại sau biến cố và nhận ra ký ức Đan Đế vẫn còn nguyên vẹn.",
  "La bàn Cửu Tinh phản ứng với linh lực, hé lộ con đường tu luyện mới.",
  "Long Trần vào tạp phòng linh dược để tìm nguyên liệu cho lần luyện đan đầu tiên.",
  "Cuộc gặp với Đường Uyển Nhi mở ra một lời hứa và một mối nguy mới.",
  "Kiếm khắc trên cổ thạch dẫn tới manh mối về trận đồ đã thất truyền.",
  "Đan thất bí mật được mở, nhưng dấu vết của một kẻ lạ đã xuất hiện.",
  "Lôi đan thành hình giữa thiên tượng bất thường và gây chấn động Long gia.",
  "Mộng Kỳ bước ra từ bí cảnh, mang theo lời cảnh báo về Cửu Tinh trận.",
  "Tông môn đại bỉ buộc Long Trần phải để lộ một phần thực lực.",
  "Bí cảnh mở ra, các tuyến nhân vật cùng hội tụ trước trận môn.",
  "Lời thề dưới trăng khiến lựa chọn của Long Trần trở nên khó khăn hơn.",
  "Cửu Tinh trận môn hé mở và đặt Long Trần trước cái giá của Bá Thể.",
];

const history = [
  { title: "Chương 12", detail: "Cập nhật diễn biến chính", time: "2 phút trước" },
  { title: "Chương 10", detail: "Đã duyệt dàn ý", time: "18 phút trước" },
  { title: "Chương 8", detail: "AI đề xuất xung đột mới", time: "1 giờ trước" },
  { title: "Chương 5", detail: "Sửa mục tiêu chương", time: "Hôm qua" },
];

function OutlinePage() {
  const [openChapter, setOpenChapter] = useState(12);

  return (
    <StudioShell
      eyebrow="Cửu Tinh Bá Thể Quyết"
      title="Dàn ý"
      actions={
        <Button variant="studio">
          <Plus />
          Thêm chương
        </Button>
      }
    >
      <div className="mt-7 grid items-start gap-5 xl:grid-cols-[minmax(0,3fr)_minmax(230px,1fr)]">
        <section className="min-w-0 overflow-hidden rounded-[var(--radius-xl)] bg-card shadow-[0_8px_0_color-mix(in_oklab,var(--foreground)_6%,transparent)]">
          <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <h2 className="font-display text-xl font-bold">Dàn ý theo chương</h2>
              <p className="mt-1 text-sm text-muted-foreground">12 chương · 11 đã duyệt · 1 đang chỉnh sửa</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">
              <Check className="size-3.5" />
              92% hoàn thiện
            </div>
          </div>

          <div className="divide-y divide-border">
            {[...chapters].reverse().map((chapter, index) => {
              const isOpen = openChapter === chapter.no;
              const isDraft = chapter.no === 12;
              return (
                <article key={chapter.no} className="group bg-card transition-colors hover:bg-background/45">
                  <Button
                    variant="ghost"
                    className="h-auto w-full justify-start rounded-none px-5 py-4 text-left hover:bg-transparent sm:px-6"
                    onClick={() => setOpenChapter(isOpen ? 0 : chapter.no)}
                    aria-expanded={isOpen}
                  >
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${isDraft ? "bg-pink/50" : "bg-secondary/55"}`}>
                      {chapter.no}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-display text-base font-bold">Chương {chapter.no}: {chapter.title}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-normal text-muted-foreground">
                        <span>{chapter.words}</span>
                        <span className="inline-flex items-center gap-1"><Clock3 className="size-3" /> {isDraft ? "Vừa cập nhật" : "Đã duyệt"}</span>
                      </span>
                    </span>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-foreground">92</span>
                    {isOpen ? <ChevronUp className="size-4 text-muted-foreground" /> : <ChevronDown className="size-4 text-muted-foreground" />}
                  </Button>

                  {isOpen && (
                    <form className="border-t border-border bg-background/55 px-5 py-5 sm:px-6" onSubmit={(event) => event.preventDefault()}>
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="space-y-2 text-sm font-bold">
                          Tiêu đề chương
                          <input
                            defaultValue={chapter.title}
                            className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 font-body font-normal outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                          />
                        </label>
                        <label className="space-y-2 text-sm font-bold">
                          Trạng thái
                          <select
                            defaultValue={isDraft ? "Đang chỉnh sửa" : "Đã duyệt"}
                            className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 font-body font-normal outline-none focus:ring-2 focus:ring-ring/30"
                          >
                            <option>Đang chỉnh sửa</option>
                            <option>Chờ duyệt</option>
                            <option>Đã duyệt</option>
                          </select>
                        </label>
                        <label className="space-y-2 text-sm font-bold md:col-span-2">
                          Mục tiêu &amp; diễn biến chính
                          <textarea
                            defaultValue={chapterNotes[chapter.no - 1]}
                            rows={3}
                            className="mt-2 w-full resize-y rounded-xl border border-input bg-card px-3 py-3 font-body font-normal leading-6 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                          />
                        </label>
                        <label className="space-y-2 text-sm font-bold">
                          Nhân vật xuất hiện
                          <input
                            defaultValue={chapter.no > 7 ? "Long Trần, Mộng Kỳ" : "Long Trần"}
                            className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 font-body font-normal outline-none focus:ring-2 focus:ring-ring/30"
                          />
                        </label>
                        <label className="space-y-2 text-sm font-bold">
                          Xung đột chính
                          <input
                            defaultValue={isDraft ? "Đánh đổi để mở trận môn" : "Vượt qua thử thách của chương"}
                            className="mt-2 h-11 w-full rounded-xl border border-input bg-card px-3 font-body font-normal outline-none focus:ring-2 focus:ring-ring/30"
                          />
                        </label>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <p className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Sparkles className="size-4 text-primary" /> AI đã kiểm tra mạch truyện, chưa phát hiện xung đột.
                        </p>
                        <Button variant="studio" size="sm" type="submit"><Save />Lưu chương {chapter.no}</Button>
                      </div>
                    </form>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-8">
          <section className="studio-card overflow-hidden">
            <div className="border-b border-border p-5">
              <h2 className="font-display text-lg font-bold">Lịch sử chỉnh sửa</h2>
              <p className="mt-1 text-xs text-muted-foreground">Thay đổi gần đây của dàn ý</p>
            </div>
            <div className="divide-y divide-border">
              {history.map((item, index) => (
                <div key={`${item.title}-${item.time}`} className="flex gap-3 p-4">
                  <span className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-pink/45 text-primary" : "bg-muted text-muted-foreground"}`}>
                    <FilePenLine className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-sm font-bold">{item.title}</p>
                      <span className="shrink-0 text-[10px] text-muted-foreground">{item.time}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[var(--radius-xl)] border-2 border-dashed border-primary/20 bg-pink/20 p-5">
            <CircleAlert className="size-5 text-primary" />
            <h2 className="mt-3 font-display text-base font-bold">1 chương cần xem lại</h2>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">Chương 12 đang chờ bạn hoàn thiện xung đột chính trước khi duyệt.</p>
          </section>
        </aside>
      </div>
    </StudioShell>
  );
}
