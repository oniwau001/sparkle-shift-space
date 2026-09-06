import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe2,
  Library,
  ListTree,
  PenLine,
  Plus,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const nav = [
  { label: "Thư viện tiểu thuyết", icon: Library, to: "/" },
  { label: "Bản thảo theo chương", icon: BookOpenText, to: "/chuong" },
  { label: "Soạn thảo", icon: PenLine, to: "/soan-thao" },
  { label: "Dàn ý", icon: ListTree, to: "/dan-y" },
  { label: "Đánh giá AI", icon: Star, to: "/danh-gia" },
  { label: "Nhân vật", icon: UsersRound, to: "/nhan-vat" },
  { label: "Thế giới", icon: Globe2, to: "/the-gioi" },
  { label: "Dòng thời gian", icon: Clock3, to: "/dong-thoi-gian" },
];

type ShellProps = {
  eyebrow: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function StudioShell({ eyebrow, title, actions, children }: ShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <div className="flex min-h-screen">
        <aside
          className={`${collapsed ? "w-20" : "w-64"} sticky top-0 hidden h-screen shrink-0 flex-col border-r-2 border-sidebar-border bg-sidebar p-5 transition-[width] duration-300 md:flex`}
        >
          <Link to="/" className="flex items-center gap-2.5 px-1">
            <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-lg text-primary-foreground">
              <Sparkles className="size-5" />
            </div>
            {!collapsed && (
              <div>
                <p className="font-display text-lg font-bold leading-none">Mực &amp; Mộng</p>
                <p className="mt-1 text-[11px] font-semibold leading-none text-muted-foreground">AI Novel Studio</p>
              </div>
            )}
          </Link>

          <Link to="/tieu-thuyet-moi" className="block">
            <Button variant="studio" className="mt-7 w-full" aria-label="Tạo tiểu thuyết mới">
              <Plus />
              {!collapsed && "Tiểu thuyết mới"}
            </Button>
          </Link>

          <nav className="mt-6 space-y-1.5 text-sm font-semibold" aria-label="Không gian sáng tác">
            {nav.map(({ label, icon: Icon, to }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  title={collapsed ? label : undefined}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-left transition-colors ${
                    active
                      ? "bg-card shadow-[0_4px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)]"
                      : "hover:bg-card/70"
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  {!collapsed && label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setCollapsed((value) => !value)}
            className="mt-auto flex items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold text-muted-foreground hover:bg-card"
            aria-label={collapsed ? "Mở rộng thanh bên" : "Thu gọn thanh bên"}
          >
            {collapsed ? <ChevronRight className="size-4" /> : (<><ChevronLeft className="size-4" />Thu gọn</>)}
          </button>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <header className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
              <h1 className="mt-1 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {actions}
              <div className="grid size-10 place-items-center rounded-full bg-peach font-display font-bold">B</div>
            </div>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
