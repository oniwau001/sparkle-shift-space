import { createFileRoute } from "@tanstack/react-router";
import { RefreshCcw, Star, WandSparkles } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { reviews } from "@/lib/novel-data";

export const Route = createFileRoute("/danh-gia")({
  head: () => ({
    meta: [
      { title: "Đánh giá AI — Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "AI chấm điểm nhịp truyện, nhân vật và thế giới của Chương 12 kèm gợi ý chỉnh sửa." },
      { property: "og:title", content: "Đánh giá AI — Mực & Mộng" },
      { property: "og:description", content: "Nhận xét và điểm số cho bản thảo đang viết." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewPage,
});

function ReviewPage() {
  return (
    <StudioShell
      eyebrow="Chương 12 · Cửu Tinh trận môn"
      title="Đánh giá AI"
      actions={
        <Button variant="studio">
          <RefreshCcw />
          Đánh giá lại
        </Button>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <section key={review.title} className="studio-card p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">{review.title}</h2>
              <span className="flex items-center gap-1.5 rounded-full bg-peach px-3 py-1.5 text-sm font-bold">
                <Star className="size-4" />
                {review.score}/10
              </span>
            </div>
            <div className="mt-3 h-3 overflow-hidden rounded-full bg-background">
              <div className="h-full rounded-full bg-primary" style={{ width: `${review.score * 10}%` }} />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{review.note}</p>
          </section>
        ))}
      </div>

      <section className="studio-card mt-5 p-5 sm:p-6">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold">
          <WandSparkles className="size-5 text-primary" />
          Nhận xét tổng quan
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-8 text-foreground/85">
          Chương 12 giữ được sức nén của mạch Cửu Tinh. Điểm mạnh là hình tượng trận đồ sáng dần theo từng nhịp hành
          động; điểm cần cân lại là độ dài đoạn miêu tả linh văn — rút ngắn một phần ba sẽ giúp Cảnh 5 bùng hơn. Cân
          nhắc để Mộng Kỳ phản ứng trước lựa chọn của Long Trần để tạo đối thoại căng.
        </p>
      </section>
    </StudioShell>
  );
}
