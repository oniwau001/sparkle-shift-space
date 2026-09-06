import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/tieu-thuyet-moi")({
  head: () => ({
    meta: [
      { title: "Tiểu thuyết mới — Mực & Mộng" },
      { name: "description", content: "Tạo tiểu thuyết mới: đặt tiêu đề, đề bài, ngôn ngữ và số chương mục tiêu." },
      { property: "og:title", content: "Tiểu thuyết mới — Mực & Mộng" },
      { property: "og:description", content: "Tạo tiểu thuyết mới với quy trình Architect, Writer, Editor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewNovelPage,
});

const steps = [
  { name: "Architect", desc: "Xây dựng nền tảng và dàn ý cuốn chiếu." },
  { name: "Writer", desc: "Viết bản thảo và chỉnh sửa nội dung chương." },
  { name: "Editor", desc: "Kiểm tra tính liên tục, nhịp truyện, logic và phong cách." },
];

function NewNovelPage() {
  const [title, setTitle] = useState("");
  const [premise, setPremise] = useState("");
  const [language, setLanguage] = useState("Tiếng Việt");
  const [targetChapters, setTargetChapters] = useState(12);
  const [manualReview, setManualReview] = useState(false);
  const [created, setCreated] = useState(false);

  return (
    <StudioShell eyebrow="Không gian sáng tác" title="Tiểu thuyết mới">
      <nav className="mt-6 flex items-center gap-2 text-sm font-bold text-muted-foreground" aria-label="Đường dẫn">
        <Link to="/" className="hover:text-foreground">Thư viện</Link>
        <ChevronRight className="size-4" />
        <span className="text-foreground">Tiểu thuyết mới</span>
      </nav>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        <form
          className="studio-card p-5 sm:p-7 lg:col-span-2"
          onSubmit={(event) => {
            event.preventDefault();
            setCreated(true);
          }}
        >
          <h2 className="font-display text-xl font-bold">Tạo tiểu thuyết mới</h2>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="novel-title" className="text-sm font-bold">Tiêu đề</label>
              <input
                id="novel-title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Ví dụ: Cửu Tinh Bá Thể Quyết"
                className="mt-2 w-full rounded-2xl border-2 border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="novel-premise" className="text-sm font-bold">Đề bài</label>
              <textarea
                id="novel-premise"
                value={premise}
                onChange={(event) => setPremise(event.target.value)}
                placeholder="Một ý tưởng mở đầu cho câu chuyện của bạn..."
                rows={4}
                className="mt-2 w-full resize-y rounded-2xl border-2 border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="novel-language" className="text-sm font-bold">Ngôn ngữ sáng tác</label>
              <select
                id="novel-language"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="mt-2 w-full appearance-none rounded-2xl border-2 border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              >
                <option>Tiếng Việt</option>
                <option>English</option>
                <option>中文</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="novel-chapters" className="text-sm font-bold">Số chương mục tiêu</label>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold">{targetChapters}</span>
              </div>
              <input
                id="novel-chapters"
                type="range"
                min={1}
                max={100}
                value={targetChapters}
                onChange={(event) => setTargetChapters(Number(event.target.value))}
                className="mt-3 w-full accent-primary"
              />
            </div>

            <div>
              <label htmlFor="novel-review" className="flex cursor-pointer items-center gap-3 text-sm font-bold">
                <input
                  id="novel-review"
                  type="checkbox"
                  checked={manualReview}
                  onChange={(event) => setManualReview(event.target.checked)}
                  className="size-4 rounded accent-primary"
                />
                Yêu cầu duyệt thủ công trước khi chốt chương
              </label>
              <p className="mt-1.5 pl-7 text-xs leading-5 text-muted-foreground">
                Tắt mặc định. Khi tắt, chương vượt qua đánh giá AI sẽ được tự động duyệt.
              </p>
            </div>

            <Button variant="studio" type="submit" className="w-full py-3">
              <Plus />
              Tạo tiểu thuyết
            </Button>
            {created && (
              <p className="rounded-2xl bg-accent/60 px-4 py-3 text-sm font-bold">
                Đã ghi nhận! “{title || "Tiểu thuyết mới"}” sẽ xuất hiện trong thư viện của bạn.
              </p>
            )}
          </div>
        </form>

        <section className="studio-card p-5 sm:p-7" aria-label="Quy trình sáng tác">
          <h2 className="font-display text-xl font-bold">Quy trình sáng tác</h2>
          <ul className="mt-4 divide-y divide-border">
            {steps.map((step) => (
              <li key={step.name} className="py-4 first:pt-0">
                <p className="font-display text-base font-bold">{step.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </li>
            ))}
            <li className="py-4 last:pb-0">
              <p className="font-display text-base font-bold">Kiểm soát của người viết</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Có thể chỉnh bản thảo bất cứ lúc nào. Tự động lưu dùng optimistic concurrency.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </StudioShell>
  );
}
