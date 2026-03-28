"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import LivePreviewCard from "@/components/dashboard/LivePreviewCard";
import PrimaryButton from "@/components/dashboard/PrimaryButton";
import PublicProfileButton from "@/components/dashboard/PublicProfileButton";
import SectionHeader from "@/components/dashboard/SectionHeader";

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

export default function ProfilePage() {
  const {
    displayName,
    username,
    bio,
    avatarUrl,
    discordStatus,
    discordTag,
    songTitle,
    songArtist,
    badges,
    location,
    ageLabel,
    statusText,
    customViews,
    setDisplayName,
    setUsername,
    setBio,
    setAvatarUrl,
    setDiscordStatus,
    setDiscordTag,
    setSongTitle,
    setSongArtist,
    setBadges,
    setLocation,
    setAgeLabel,
    setStatusText,
    setCustomViews,
  } = useDashboard();

  const handleAvatarUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Selecciona una imagen válida para el avatar.");
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      setAvatarUrl(dataUrl);
    } catch {
      alert("No se pudo cargar la imagen.");
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <div className="space-y-6">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Dashboard / Perfil</p>
            <h1 className="mt-2 text-3xl font-black text-white">Editar perfil</h1>
          </div>

          <PublicProfileButton />
        </header>

        <DashboardCard>
          <SectionHeader eyebrow="Perfil" title="Información principal" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Nombre visible"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <input
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="URL de foto de perfil"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none md:col-span-2"
            />

            <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-4 md:col-span-2">
              <label className="block text-sm font-medium text-white">
                Subir foto de perfil
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="mt-3 block w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white hover:file:bg-white/20"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Usa JPG, PNG o WEBP. Para mejor rendimiento, intenta que no sea muy pesada.
              </p>
            </div>

            {avatarUrl && (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 md:col-span-2">
                <p className="mb-3 text-sm font-medium text-white">Preview avatar</p>
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-zinc-900">
                  <img
                    src={avatarUrl}
                    alt="Avatar preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tu bio"
              className="min-h-[120px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none md:col-span-2"
            />
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Widgets" title="Datos extra del perfil" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ubicación"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <input
              value={ageLabel}
              onChange={(e) => setAgeLabel(e.target.value)}
              placeholder="Edad o label corta"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <input
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
              placeholder="Texto de estado"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none md:col-span-2"
            />

            <input
              type="number"
              value={customViews}
              onChange={(e) => setCustomViews(Number(e.target.value) || 0)}
              placeholder="Views"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none md:col-span-2"
            />
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Discord" title="Estado y presencia" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={discordTag}
              onChange={(e) => setDiscordTag(e.target.value)}
              placeholder="keef#0001"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <select
              value={discordStatus}
              onChange={(e) => setDiscordStatus(e.target.value)}
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option value="online">online</option>
              <option value="idle">idle</option>
              <option value="dnd">dnd</option>
              <option value="offline">offline</option>
            </select>
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Music" title="Now playing" />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              placeholder="Título de la canción"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <input
              value={songArtist}
              onChange={(e) => setSongArtist(e.target.value)}
              placeholder="Artista"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Badges" title="Etiquetas del perfil" />

          <textarea
            value={badges.join(", ")}
            onChange={(e) =>
              setBadges(
                e.target.value
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean)
              )
            }
            placeholder="designer, editor, artist"
            className="mt-6 min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
          />

          <p className="mt-3 text-sm text-zinc-500">
            Separa cada badge con coma.
          </p>

          <PrimaryButton className="mt-6">Guardar perfil</PrimaryButton>
        </DashboardCard>
      </div>

      <div>
        <LivePreviewCard />
      </div>
    </div>
  );
}