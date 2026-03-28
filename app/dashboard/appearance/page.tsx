"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import LivePreviewCard from "@/components/dashboard/LivePreviewCard";
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

export default function AppearancePage() {
  const {
    theme,
    accentColor,
    fontStyle,
    enterEnabled,
    glow,
    contrast,
    animation,
    overlayBlur,
    particlesEnabled,
    animatedGlow,
    linkHoverFx,
    backgroundType,
    backgroundUrl,
    setTheme,
    setAccentColor,
    setFontStyle,
    setEnterEnabled,
    setGlow,
    setContrast,
    setAnimation,
    setOverlayBlur,
    setParticlesEnabled,
    setAnimatedGlow,
    setLinkHoverFx,
    setBackgroundType,
    setBackgroundUrl,
  } = useDashboard();

  const handleBackgroundUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      alert("Selecciona una imagen o video válido.");
      return;
    }

    try {
      const dataUrl = await readFileAsDataUrl(file);
      setBackgroundType(isVideo ? "video" : "image");
      setBackgroundUrl(dataUrl);
    } catch {
      alert("No se pudo cargar el fondo.");
    }
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <div className="space-y-6">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-zinc-500">Dashboard / Apariencia</p>
            <h1 className="mt-2 text-3xl font-black text-white">
              Personalización visual
            </h1>
          </div>

          <PublicProfileButton />
        </header>

        <DashboardCard>
          <SectionHeader eyebrow="Tema" title="Selecciona un estilo" />

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {["Neon", "Minimal", "Creator"].map((item) => (
              <button
                key={item}
                onClick={() => setTheme(item)}
                className={`rounded-2xl border px-4 py-6 text-white transition ${
                  theme === item
                    ? "border-fuchsia-400/30 bg-fuchsia-500/10"
                    : "border-white/10 bg-black/30 hover:border-fuchsia-400/20 hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Accent" title="Color principal" />

          <div className="mt-4 grid gap-4 sm:grid-cols-4">
            {["fuchsia", "cyan", "emerald", "orange"].map((item) => (
              <button
                key={item}
                onClick={() => setAccentColor(item)}
                className={`rounded-2xl border px-4 py-6 text-white capitalize transition ${
                  accentColor === item
                    ? "border-white/30 bg-white/10"
                    : "border-white/10 bg-black/30 hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Typography" title="Tipo de fuente" />

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {["modern", "elegant", "mono"].map((item) => (
              <button
                key={item}
                onClick={() => setFontStyle(item)}
                className={`rounded-2xl border px-4 py-6 text-white capitalize transition ${
                  fontStyle === item
                    ? "border-white/30 bg-white/10"
                    : "border-white/10 bg-black/30 hover:bg-white/5"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Entry Screen" title="Pantalla de entrada" />

          <label className="mt-6 flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={enterEnabled}
              onChange={(e) => setEnterEnabled(e.target.checked)}
            />
            Activar "Enter profile"
          </label>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Background" title="Fondo del perfil" />

          <div className="mt-6 grid gap-4">
            <select
              value={backgroundType}
              onChange={(e) =>
                setBackgroundType(e.target.value as "image" | "video")
              }
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            >
              <option value="image">Imagen</option>
              <option value="video">Video</option>
            </select>

            <input
              value={backgroundUrl}
              onChange={(e) => setBackgroundUrl(e.target.value)}
              placeholder="URL del fondo (imagen o video)"
              className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
            />

            <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-4">
              <label className="block text-sm font-medium text-white">
                Subir fondo
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleBackgroundUpload}
                className="mt-3 block w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white hover:file:bg-white/20"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Puedes subir imagen o video. Para demo funciona bien; para producción luego usamos storage real.
              </p>
            </div>

            {backgroundUrl && (
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="mb-3 text-sm font-medium text-white">Preview fondo</p>

                {backgroundType === "video" ? (
                  <video
                    src={backgroundUrl}
                    controls
                    className="max-h-64 w-full rounded-xl object-cover"
                  />
                ) : (
                  <img
                    src={backgroundUrl}
                    alt="Background preview"
                    className="max-h-64 w-full rounded-xl object-cover"
                  />
                )}
              </div>
            )}
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Efectos" title="Ajustes visuales" />

          <div className="mt-6 space-y-6">
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-zinc-400">Glow</p>
                <span className="text-sm text-white">{glow}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={glow}
                onChange={(e) => setGlow(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-zinc-400">Contraste</p>
                <span className="text-sm text-white">{contrast}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-zinc-400">Animación</p>
                <span className="text-sm text-white">{animation}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={animation}
                onChange={(e) => setAnimation(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-zinc-400">Overlay blur</p>
                <span className="text-sm text-white">{overlayBlur}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={overlayBlur}
                onChange={(e) => setOverlayBlur(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </DashboardCard>

        <DashboardCard>
          <SectionHeader eyebrow="Visual FX" title="Toggles avanzados" />

          <div className="mt-6 space-y-4">
            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                checked={particlesEnabled}
                onChange={(e) => setParticlesEnabled(e.target.checked)}
              />
              Activar particles
            </label>

            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                checked={animatedGlow}
                onChange={(e) => setAnimatedGlow(e.target.checked)}
              />
              Activar glow animado
            </label>

            <label className="flex items-center gap-3 text-white">
              <input
                type="checkbox"
                checked={linkHoverFx}
                onChange={(e) => setLinkHoverFx(e.target.checked)}
              />
              Activar hover fuerte en links
            </label>
          </div>
        </DashboardCard>
      </div>

      <div>
        <LivePreviewCard />
      </div>
    </div>
  );
}