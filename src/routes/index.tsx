import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock3,
  History,
  Library,
  ListTree,
  PenLine,
  Plus,
  Sparkles,
  Star,
  UserRound,
  UsersRound,
  WandSparkles,
  Globe2,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mực & Mộng — Không gian viết tiểu thuyết AI" },
      { name: "description", content: "Soạn thảo, lập dàn ý và quản lý thế giới tiểu thuyết trong một không gian sáng tác." },
      { property: "og:title", content: "Mực & Mộng — Không gian viết tiểu thuyết AI" },
      { property: "og:description", content: "Soạn thảo, lập dàn ý và quản lý thế giới tiểu thuyết trong một không gian sáng tác." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  { label: "Bản thảo theo chương", icon: PenLine },
  { label: "Dàn ý", icon: ListTree },
  { label: "Đánh giá", icon: Star },
  { label: "Nhân vật", icon: UsersRound },
  { label: "Thế giới", icon: Globe2 },
  { label: "Dòng thời gian", icon: Clock3 },
];

const characters = [
  { initial: "L", name: "Long Trần", role: "Nhân vật chính · Đan Đế", tone: "bg-pink/40" },
  { initial: "M", name: "Mộng Kỳ", role: "Đồng hành · Linh sư", tone: "bg-secondary/55" },
  { initial: "Đ", name: "Đường Uyển Nhi", role: "Kiếm tu · Đồng minh", tone: "bg-accent/60" },
];

function Index() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("Bản thảo theo chương");
  const [activeScene, setActiveScene] = useState(3);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="flex min-h-screen">
        <aside className={`${collapsed ? "w-20" : "w-64"} sticky top-0 hidden h-screen shrink-0 flex-col border-r-2 border-sidebar-border bg-sidebar p-5 transition-[width] duration-300 md:flex`}>
          <div className="flex items-center gap-2.5 px-1">
            <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-lg text-primary-foreground"><Sparkles className="size-5" /></div>
            {!collapsed && <div><p className="font-display text-lg font-bold leading-none">Mực & Mộng</p><p className="mt-1 text-[11px] font-semibold leading-none text-muted-foreground">AI Novel Studio</p></div>}
          </div>

          <Button variant="studio" className="mt-7 w-full" aria-label="Tạo tiểu thuyết mới"><Plus />{!collapsed && "Tiểu thuyết mới"}</Button>
          <nav className="mt-6 space-y-1.5 text-sm font-semibold" aria-label="Không gian sáng tác">
            <button className="flex w-full items-center gap-3 rounded-2xl bg-card px-3.5 py-2.5 text-left shadow-[0_4px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)]"><Library className="size-4 shrink-0" />{!collapsed && "Thư viện tiểu thuyết"}</button>
            {!collapsed && <div className="space-y-1 pl-8 text-xs font-medium text-muted-foreground"><p>Cửu Tinh Bá Thể Quyết</p><p>Đảo Mây</p><p>Ngã Ba</p></div>}
            {sections.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActiveSection(label)} title={collapsed ? label : undefined} className={`flex w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-left transition-colors ${activeSection === label ? "bg-accent" : "hover:bg-card/70"}`}><Icon className="size-4 shrink-0" />{!collapsed && label}</button>
            ))}
          </nav>
          <button onClick={() => setCollapsed((value) => !value)} className="mt-auto flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold text-muted-foreground hover:bg-card" aria-label={collapsed ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}>{collapsed ? <ChevronRight className="size-4" /> : <><ChevronLeft className="size-4" />Thu gọn</>}</button>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Bản thảo đang mở</p><h1 className="mt-1 font-display text-3xl font-bold leading-tight sm:text-4xl">Cửu Tinh Bá Thể Quyết — Chương 12</h1></div>
            <div className="flex items-center gap-3"><span className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold">4.280 từ</span><span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-bold">Đang viết</span><div className="grid size-10 place-items-center rounded-full bg-peach font-display font-bold">B</div></div>
          </header>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Button variant="studio"><PenLine />Viết chương</Button>
            <Button variant="studioOutline"><ListTree />Dàn ý chương</Button>
            <Button variant="studioOutline"><UserRound />Thêm nhân vật</Button>
            <Button variant="studioOutline"><History />Lịch sử</Button>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 xl:grid-cols-12">
            <section className="studio-card p-5 sm:p-6 xl:col-span-8">
              <div className="flex items-center justify-between gap-4"><h2 className="font-display text-xl font-bold">Nội dung chương</h2><span className="rounded-full bg-background px-3 py-1 text-xs font-bold text-muted-foreground">Cảnh {activeScene} / 5</span></div>
              <div className="mt-5 space-y-5 text-[15px] leading-8 text-foreground/85">
                <p>“Tề mộ” rơi xuống Cửu Tinh trận, trận môn Long gia lập tức mở ra một khe hở. Mạch nghịch đảo từ đường kinh quang tràn xuống, nhưng không sao át được thần thức của Long Trần.</p>
                <p>Hắn xoay la bàn Cửu Tinh, Long Trần ở được thế. Chín vì sao trong trận đồ đồng loạt sáng lên, từng đường linh văn đan xen thành một cánh cửa cổ xưa.</p>
                <p>“Muốn mở Bá Thể chi môn, trước phải lấy tâm làm mạch.” Lời sư phụ còn vọng bên tai. Hắn hít một hơi dài, linh khí theo đó tuôn xuống đan điền.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-muted-foreground">
                {[3,4,5].map((scene) => <button key={scene} onClick={() => setActiveScene(scene)} className={`rounded-full px-3 py-1.5 ${activeScene === scene ? "bg-pink text-foreground" : "bg-lilac/70"}`}>Cảnh {scene} — {scene === 3 ? "Trận môn" : scene === 4 ? "Cửu tinh" : "Sự lựa chọn"}</button>)}
              </div>
            </section>

            <aside className="space-y-5 xl:col-span-4">
              <section className="studio-card p-5"><div className="flex items-center justify-between"><h2 className="font-display text-lg font-bold">Nhân vật</h2><Button variant="ghost" size="icon" aria-label="Thêm nhân vật"><Plus /></Button></div><div className="mt-3 space-y-2.5">{characters.map((character) => <div key={character.name} className={`flex items-center gap-3 rounded-2xl p-2.5 ${character.tone}`}><div className="grid size-10 place-items-center rounded-full bg-card font-display font-bold">{character.initial}</div><div><p className="text-sm font-bold leading-none">{character.name}</p><p className="mt-1 text-xs text-muted-foreground">{character.role}</p></div></div>)}</div></section>
              <section className="studio-card p-5"><h2 className="font-display text-lg font-bold">Dòng thời gian</h2><div className="mt-4 space-y-0.5">{[["Ngày 1 · Khởi nguyên","Long Trần thức tỉnh"],["Ngày 3 · Linh vũ","Mở Cửu Tinh trận"],["Ngày 5 · Thiên kiếp","Bá thể chi môn"]].map(([day,event], index) => <div className="flex gap-3" key={day}><div className="flex flex-col items-center"><div className={`size-3.5 rounded-full ${index === 0 ? "bg-primary" : index === 1 ? "bg-lilac" : "bg-peach"}`} />{index < 2 && <div className="w-0.5 flex-1 bg-border" />}</div><div className="pb-4"><p className="text-xs font-bold">{day}</p><p className="text-xs text-muted-foreground">{event}</p></div></div>)}</div></section>
            </aside>
          </div>

          <section className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="studio-card p-5"><p className="text-xs font-bold uppercase text-primary">Thế giới</p><p className="mt-1 font-display text-lg font-bold">Thiên Võ Đại Lục</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Linh khí, tông môn và những bí cảnh cổ đang chờ được khám phá.</p></div>
            <div className="studio-card p-5"><p className="text-xs font-bold uppercase text-muted-foreground">Tiến độ</p><p className="mt-1 font-display text-lg font-bold">12 / 24 chương</p><div className="mt-3 h-3 overflow-hidden rounded-full bg-background"><div className="h-full w-1/2 rounded-full bg-accent" /></div></div>
            <div className="studio-card p-5"><p className="text-xs font-bold uppercase text-muted-foreground">Đánh giá</p><p className="mt-1 flex items-center gap-2 font-display text-lg font-bold"><WandSparkles className="size-4 text-primary" />Gợi ý của AI</p><p className="mt-1 text-sm leading-6 text-muted-foreground">“Cảnh mở trận đã tốt — hãy tăng sức nặng cho lựa chọn của Long Trần.”</p></div>
          </section>
        </main>
      </div>
    </div>
  );
}
