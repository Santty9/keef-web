"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import LivePreviewCard from "@/components/dashboard/LivePreviewCard";
import PrimaryButton from "@/components/dashboard/PrimaryButton";
import PublicProfileButton from "@/components/dashboard/PublicProfileButton";
import SectionHeader from "@/components/dashboard/SectionHeader";
import { GripVertical, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const PLATFORM_OPTIONS = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Spotify",
  "Discord",
  "Twitch",
  "X",
  "GitHub",
  "Website",
];

export default function LinksPage() {
  const { links, setLinks } = useDashboard();
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [dragOverId, setDragOverId] = useState<number | null>(null);

  const updateTitle = (id: number, value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, title: value } : link)));
  };

  const updateUrl = (id: number, value: string) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, url: value } : link)));
  };

  const toggleActive = (id: number) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, active: !link.active } : link)));
  };

  const addLink = () => {
    setLinks([
      ...links,
      {
        id: Date.now(),
        title: "Website",
        url: "https://example.com",
        active: true,
      },
    ]);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const moveItem = (fromId: number, toId: number) => {
    if (fromId === toId) return;

    const updated = [...links];
    const fromIndex = updated.findIndex((item) => item.id === fromId);
    const toIndex = updated.findIndex((item) => item.id === toId);

    if (fromIndex === -1 || toIndex === -1) return;

    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);

    setLinks(updated);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <div className="space-y-6">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Dashboard / Links</p>
            <h1 className="mt-2 text-3xl font-black text-white">
              Gestionar links
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <PublicProfileButton />

            <PrimaryButton
              className="inline-flex items-center gap-2"
              onClick={addLink}
            >
              <Plus size={16} />
              Nuevo link
            </PrimaryButton>
          </div>
        </header>

        <DashboardCard>
          <SectionHeader eyebrow="Links" title="Redes y enlaces" />

          <p className="mt-3 text-sm text-zinc-500">
            Arrastra las tarjetas para reordenar cómo se muestran los iconos en el perfil.
          </p>

          <div className="mt-6 space-y-4">
            {links.map((link, index) => {
              const isDragged = draggedId === link.id;
              const isOver = dragOverId === link.id && draggedId !== link.id;

              return (
                <div
                  key={link.id}
                  draggable
                  onDragStart={() => {
                    setDraggedId(link.id);
                  }}
                  onDragEnd={() => {
                    setDraggedId(null);
                    setDragOverId(null);
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOverId(link.id);
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (draggedId !== null) {
                      moveItem(draggedId, link.id);
                    }
                    setDraggedId(null);
                    setDragOverId(null);
                  }}
                  className={`rounded-[24px] border bg-black/30 p-5 transition ${
                    isDragged
                      ? "scale-[0.99] border-fuchsia-400/30 opacity-60"
                      : isOver
                      ? "border-fuchsia-400/30 bg-white/[0.06]"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300">
                        <GripVertical size={16} />
                      </div>

                      <div>
                        <p className="font-semibold text-white">
                          Link #{index + 1}
                        </p>
                        <p className="text-sm text-zinc-500">
                          Arrástralo para cambiar el orden
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeLink(link.id)}
                      className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-red-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <select
                      value={link.title}
                      onChange={(e) => updateTitle(link.id, e.target.value)}
                      className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none"
                    >
                      {PLATFORM_OPTIONS.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>

                    <input
                      value={link.url}
                      onChange={(e) => updateUrl(link.id, e.target.value)}
                      className="rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none"
                      placeholder="https://..."
                    />

                    <label className="flex items-center gap-2 text-sm text-zinc-300">
                      <input
                        type="checkbox"
                        checked={link.active}
                        onChange={() => toggleActive(link.id)}
                      />
                      Mostrar como icono en el perfil
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </DashboardCard>
      </div>

      <div>
        <LivePreviewCard />
      </div>
    </div>
  );
}