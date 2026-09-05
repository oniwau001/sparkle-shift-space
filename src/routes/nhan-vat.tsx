import { createFileRoute } from "@tanstack/react-router";
import { UserRoundPlus } from "lucide-react";

import { StudioShell } from "@/components/studio/StudioShell";
import { Button } from "@/components/ui/button";
import { characters } from "@/lib/novel-data";

export const Route = createFileRoute("/nhan-vat")({
  head: () => ({
    meta: [
      { title: "Nhân vật — Cửu Tinh Bá Thể Quyết" },
      { name: "description", content: "Hồ sơ Long Trần, Mộng Kỳ và Đường Uyển Nhi: vai trò, tính cách và mạch nhân vật." },
      { property: "og:title", content: "Nhân vật — Mực & Mộng" },
      { property: "og:description", content: "Quản lý hồ sơ nhân vật của bản thảo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CharactersPage,
});

function CharactersPage() {
  return (
    <StudioShell
      eyebrow="Cửu Tinh Bá Thể Quyết"
      title="Nhân vật"
      actions={
        <Button variant="studio">
          <UserRoundPlus />
          Thêm nhân vật
        </Button>
      }
    >
      <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <article key={character.name} className="studio-card p-5 sm:p-6">
            <div className={`flex items-center gap-4 rounded-2xl p-4 ${character.tone}`}>
              <div className="grid size-14 place-items-center rounded-full bg-card font-display text-xl font-bold">
                {character.initial}
              </div>
              <div>
                <h2 className="font-display text-lg font-bold leading-tight">{character.name}</h2>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">{character.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-foreground/85">{character.desc}</p>
            <p className="mt-4 inline-flex rounded-full bg-background px-3 py-1.5 text-xs font-bold text-muted-foreground">
              {character.trait}
            </p>
          </article>
        ))}
      </div>
    </StudioShell>
  );
}
