"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import { Activity, MapPin, Sparkles } from "lucide-react";
import {
  FaDiscord,
  FaGlobe,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function getAccentClasses(accentColor: string) {
  const map: Record<
    string,
    {
      text: string;
      badge: string;
      glow: string;
      hover: string;
      particle: string;
      iconRing: string;
    }
  > = {
    fuchsia: {
      text: "text-fuchsia-300",
      badge: "bg-fuchsia-500/10 border-fuchsia-400/20",
      glow: "rgba(217,70,239,0.22)",
      hover: "hover:bg-fuchsia-500/15",
      particle: "bg-fuchsia-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]",
    },
    cyan: {
      text: "text-cyan-300",
      badge: "bg-cyan-500/10 border-cyan-400/20",
      glow: "rgba(34,211,238,0.22)",
      hover: "hover:bg-cyan-500/15",
      particle: "bg-cyan-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
    },
    emerald: {
      text: "text-emerald-300",
      badge: "bg-emerald-500/10 border-emerald-400/20",
      glow: "rgba(16,185,129,0.22)",
      hover: "hover:bg-emerald-500/15",
      particle: "bg-emerald-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    },
    orange: {
      text: "text-orange-300",
      badge: "bg-orange-500/10 border-orange-400/20",
      glow: "rgba(249,115,22,0.22)",
      hover: "hover:bg-orange-500/15",
      particle: "bg-orange-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]",
    },
  };

  return map[accentColor] || map.fuchsia;
}

function getFontClass(fontStyle: string) {
  const map: Record<string, string> = {
    modern: "font-sans",
    elegant: "font-serif",
    mono: "font-mono",
  };

  return map[fontStyle] || map.modern;
}

function getLinkIcon(title: string) {
  const value = title.toLowerCase();

  if (value.includes("instagram")) return <FaInstagram size={20} />;
  if (value.includes("tiktok")) return <FaTiktok size={20} />;
  if (value.includes("youtube")) return <FaYoutube size={20} />;
  if (value.includes("spotify")) return <FaSpotify size={20} />;
  if (value.includes("discord")) return <FaDiscord size={20} />;
  if (value.includes("twitch")) return <FaTwitch size={20} />;
  if (value.includes("twitter") || value === "x") return <FaXTwitter size={20} />;
  if (value.includes("github")) return <FaGithub size={20} />;

  return <FaGlobe size={20} />;
}

export default function LivePreviewCard() {
  const {
    username,
    displayName,
    bio,
    avatarUrl,
    backgroundType,
    backgroundUrl,
    links,
    theme,
    glow,
    accentColor,
    fontStyle,
    discordStatus,
    discordTag,
    songTitle,
    songArtist,
    badges,
    location,
    ageLabel,
    customViews,
    statusText,
    overlayBlur,
    particlesEnabled,
    animatedGlow,
    linkHoverFx,
  } = useDashboard();

  const activeLinks = links.filter((link) => link.active).slice(0, 8);

  const themeClasses: Record<string, string> = {
    Neon: "from-zinc-900 via-zinc-950 to-black",
    Minimal: "from-zinc-950 via-zinc-900 to-zinc-950",
    Creator: "from-slate-950 via-zinc-900 to-black",
  };

  const statusColor: Record<string, string> = {
    online: "bg-green-400",
    idle: "bg-yellow-400",
    dnd: "bg-red-500",
    offline: "bg-zinc-500",
  };

  const accent = getAccentClasses(accentColor);
  const fontClass = getFontClass(fontStyle);

  return (
    <DashboardCard>
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.badge} ${accent.text}`}>
          <Sparkles size={20} />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            Preview
          </p>
          <h3 className="text-xl font-black text-white">Vista previa en vivo</h3>
        </div>
      </div>

      <div
        className={`mt-6 overflow-hidden rounded-[28px] border border-white/10 ${
          animatedGlow ? "animate-pulse" : ""
        }`}
        style={{
          boxShadow: `0 0 ${glow}px ${accent.glow}`,
        }}
      >
        <div className={`relative min-h-[760px] ${fontClass}`}>
          {backgroundUrl ? (
            backgroundType === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                src={backgroundUrl}
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundUrl})` }}
              />
            )
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-b ${themeClasses[theme] ?? themeClasses.Neon}`}
            />
          )}

          {particlesEnabled && (
            <div className="absolute inset-0 overflow-hidden">
              <span className={`absolute left-[10%] top-[15%] h-2 w-2 rounded-full ${accent.particle}`} />
              <span className={`absolute left-[80%] top-[20%] h-3 w-3 rounded-full ${accent.particle}`} />
              <span className={`absolute left-[20%] top-[70%] h-2 w-2 rounded-full ${accent.particle}`} />
              <span className={`absolute left-[70%] top-[60%] h-4 w-4 rounded-full ${accent.particle}`} />
              <span className={`absolute left-[50%] top-[35%] h-2.5 w-2.5 rounded-full ${accent.particle}`} />
            </div>
          )}

          <div
            className="absolute inset-0 bg-black/45"
            style={{ backdropFilter: `blur(${overlayBlur}px)` }}
          />

          <div className="relative flex min-h-[760px] flex-col justify-end p-6">
            <div className="rounded-[28px] border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
                <span>{customViews.toLocaleString()} views</span>
                <span className={accent.text}>{theme}</span>
              </div>

              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-zinc-800 text-2xl font-black text-white">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>{(displayName || username || "K").charAt(0).toUpperCase()}</span>
                )}
              </div>

              <h4 className="mt-4 text-center text-3xl font-black text-white">
                @{username || "keef"}
              </h4>

              <p className="mt-1 text-center text-sm font-medium text-zinc-200">
                {displayName || "Keef"}
              </p>

              <p className="mt-3 text-center text-sm text-zinc-300">
                {bio || "Tu bio aparecerá aquí"}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
                {location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} />
                    {location}
                  </span>
                )}
                {ageLabel && <span>{ageLabel}</span>}
                {statusText && (
                  <span className="inline-flex items-center gap-1">
                    <Activity size={14} />
                    {statusText}
                  </span>
                )}
              </div>

              {badges.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {badges.slice(0, 6).map((badge) => (
                    <span
                      key={badge}
                      className={`rounded-full border px-3 py-1 text-xs font-medium text-white ${accent.badge}`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-3 w-3 rounded-full ${statusColor[discordStatus] ?? statusColor.online}`}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Discord</p>
                    <p className="text-xs text-zinc-400">
                      {discordTag || "keef#0001"} · {discordStatus}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Now playing
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {songTitle || "No song"}
                </p>
                <p className="text-xs text-zinc-400">
                  {songArtist || "Unknown artist"}
                </p>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Socials
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {activeLinks.length > 0 ? (
                    activeLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        title={link.title}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition ${
                          linkHoverFx
                            ? `${accent.hover} ${accent.iconRing} hover:scale-[1.08]`
                            : ""
                        }`}
                      >
                        {getLinkIcon(link.title)}

                        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                          {link.title}
                        </span>
                      </a>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 px-4 py-4 text-center text-sm text-zinc-500">
                      No hay redes activas
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}