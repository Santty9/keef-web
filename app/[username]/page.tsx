"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useState } from "react";
import { Activity, MapPin } from "lucide-react";
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

type ProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

type LinkItem = {
  id: number;
  title: string;
  url: string;
  active: boolean;
};

type PublicProfileData = {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  backgroundType: "image" | "video";
  backgroundUrl: string;
  theme: string;
  accentColor: string;
  fontStyle: string;
  enterEnabled: boolean;
  glow: number;
  contrast: number;
  animation: number;
  overlayBlur: number;
  particlesEnabled: boolean;
  animatedGlow: boolean;
  linkHoverFx: boolean;
  discordStatus: string;
  discordTag: string;
  songTitle: string;
  songArtist: string;
  location: string;
  ageLabel: string;
  customViews: number;
  statusText: string;
  badges: string[];
  links: LinkItem[];
};

const STORAGE_KEY = "keef_profile_data";

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

function getFontClass(fontStyle: string) {
  const map: Record<string, string> = {
    modern: "font-sans",
    elegant: "font-serif",
    mono: "font-mono",
  };

  return map[fontStyle] || map.modern;
}

function getAccentClasses(accentColor: string) {
  const map: Record<
    string,
    {
      text: string;
      ring: string;
      badge: string;
      button: string;
      particle: string;
      iconRing: string;
    }
  > = {
    fuchsia: {
      text: "text-fuchsia-200",
      ring: "rgba(217,70,239,0.20)",
      badge: "bg-fuchsia-500/10 border-fuchsia-400/20",
      button: "hover:bg-fuchsia-500/15",
      particle: "bg-fuchsia-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]",
    },
    cyan: {
      text: "text-cyan-200",
      ring: "rgba(34,211,238,0.20)",
      badge: "bg-cyan-500/10 border-cyan-400/20",
      button: "hover:bg-cyan-500/15",
      particle: "bg-cyan-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]",
    },
    emerald: {
      text: "text-emerald-200",
      ring: "rgba(16,185,129,0.20)",
      badge: "bg-emerald-500/10 border-emerald-400/20",
      button: "hover:bg-emerald-500/15",
      particle: "bg-emerald-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    },
    orange: {
      text: "text-orange-200",
      ring: "rgba(249,115,22,0.20)",
      badge: "bg-orange-500/10 border-orange-400/20",
      button: "hover:bg-orange-500/15",
      particle: "bg-orange-400/30",
      iconRing: "hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]",
    },
  };

  return map[accentColor] || map.fuchsia;
}

export default function PublicProfilePage({ params }: ProfilePageProps) {
  const { username: routeUsername } = use(params);

  const [profile, setProfile] = useState<PublicProfileData>({
    username: routeUsername,
    displayName: routeUsername,
    bio: "diseñador digital • links • música • vibes",
    avatarUrl: "",
    backgroundType: "image",
    backgroundUrl: "",
    theme: "Neon",
    accentColor: "fuchsia",
    fontStyle: "modern",
    enterEnabled: true,
    glow: 80,
    contrast: 65,
    animation: 40,
    overlayBlur: 14,
    particlesEnabled: true,
    animatedGlow: true,
    linkHoverFx: true,
    discordStatus: "online",
    discordTag: "keef#0001",
    songTitle: "Midnight City",
    songArtist: "Synthwave Mix",
    location: "Argentina",
    ageLabel: "19",
    customViews: 12400,
    statusText: "editing all night",
    badges: ["designer", "artist", "editor"],
    links: [
      { id: 1, title: "Instagram", url: "#", active: true },
      { id: 2, title: "TikTok", url: "#", active: true },
      { id: 3, title: "YouTube", url: "#", active: true },
      { id: 4, title: "Spotify", url: "#", active: true },
    ],
  });

  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);

      setProfile({
        username: parsed.username || routeUsername,
        displayName: parsed.displayName || routeUsername,
        bio: parsed.bio || "diseñador digital • links • música • vibes",
        avatarUrl: parsed.avatarUrl || "",
        backgroundType: parsed.backgroundType || "image",
        backgroundUrl: parsed.backgroundUrl || "",
        theme: parsed.theme || "Neon",
        accentColor: parsed.accentColor || "fuchsia",
        fontStyle: parsed.fontStyle || "modern",
        enterEnabled:
          typeof parsed.enterEnabled === "boolean" ? parsed.enterEnabled : true,
        glow: typeof parsed.glow === "number" ? parsed.glow : 80,
        contrast: typeof parsed.contrast === "number" ? parsed.contrast : 65,
        animation: typeof parsed.animation === "number" ? parsed.animation : 40,
        overlayBlur: typeof parsed.overlayBlur === "number" ? parsed.overlayBlur : 14,
        particlesEnabled:
          typeof parsed.particlesEnabled === "boolean"
            ? parsed.particlesEnabled
            : true,
        animatedGlow:
          typeof parsed.animatedGlow === "boolean" ? parsed.animatedGlow : true,
        linkHoverFx:
          typeof parsed.linkHoverFx === "boolean" ? parsed.linkHoverFx : true,
        discordStatus: parsed.discordStatus || "online",
        discordTag: parsed.discordTag || "keef#0001",
        songTitle: parsed.songTitle || "Midnight City",
        songArtist: parsed.songArtist || "Synthwave Mix",
        location: parsed.location || "",
        ageLabel: parsed.ageLabel || "",
        customViews:
          typeof parsed.customViews === "number" ? parsed.customViews : 12400,
        statusText: parsed.statusText || "",
        badges: Array.isArray(parsed.badges) ? parsed.badges : [],
        links: Array.isArray(parsed.links) ? parsed.links : [],
      });
    } catch (error) {
      console.error("Error leyendo perfil público:", error);
    }
  }, [routeUsername]);

  useEffect(() => {
    if (!profile.enterEnabled) {
      setEntered(true);
    }
  }, [profile.enterEnabled]);

  const activeLinks = useMemo(
    () => profile.links.filter((link) => link.active),
    [profile.links]
  );

  const statusColor: Record<string, string> = {
    online: "bg-green-400",
    idle: "bg-yellow-400",
    dnd: "bg-red-500",
    offline: "bg-zinc-500",
  };

  const shownUsername =
    profile.username?.toLowerCase() === routeUsername.toLowerCase()
      ? profile.username
      : routeUsername;

  const shouldShowCanonicalLink =
    profile.username &&
    profile.username.toLowerCase() !== routeUsername.toLowerCase();

  const accent = getAccentClasses(profile.accentColor);
  const fontClass = getFontClass(profile.fontStyle);

  return (
    <main className={`relative min-h-screen overflow-hidden bg-black text-white ${fontClass}`}>
      {profile.backgroundUrl ? (
        profile.backgroundType === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            src={profile.backgroundUrl}
          />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${profile.backgroundUrl})` }}
          />
        )
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_35%)]" />
      )}

      {profile.particlesEnabled && (
        <div className="absolute inset-0 overflow-hidden">
          <span className={`absolute left-[10%] top-[15%] h-2 w-2 rounded-full ${accent.particle}`} />
          <span className={`absolute left-[80%] top-[20%] h-3 w-3 rounded-full ${accent.particle}`} />
          <span className={`absolute left-[20%] top-[70%] h-2 w-2 rounded-full ${accent.particle}`} />
          <span className={`absolute left-[70%] top-[60%] h-4 w-4 rounded-full ${accent.particle}`} />
          <span className={`absolute left-[50%] top-[35%] h-2.5 w-2.5 rounded-full ${accent.particle}`} />
        </div>
      )}

      <div
        className="absolute inset-0 bg-black/55"
        style={{ backdropFilter: `blur(${profile.overlayBlur}px)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,70,239,0.10),transparent_25%)]" />

      {!entered ? (
        <div className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
          <div className="w-full max-w-md rounded-[36px] border border-white/10 bg-black/50 p-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
              Keef Profile
            </p>
            <h1 className="mt-4 text-4xl font-black text-white">
              @{shownUsername}
            </h1>
            <p className="mt-3 text-zinc-300">
              Haz click para entrar al perfil
            </p>

            <button
              onClick={() => setEntered(true)}
              className={`mt-8 rounded-2xl border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white transition ${accent.button}`}
            >
              Enter profile
            </button>
          </div>
        </div>
      ) : (
        <div className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
          <div
            className={`w-full max-w-md rounded-[36px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl ${
              profile.animatedGlow ? "animate-pulse" : ""
            }`}
            style={{
              boxShadow: `0 0 ${profile.glow}px ${accent.ring}`,
            }}
          >
            <div className="rounded-[30px] border border-white/10 bg-black/45 p-8 backdrop-blur-xl">
              {shouldShowCanonicalLink && (
                <div className={`mb-5 rounded-2xl border p-4 text-center ${accent.badge}`}>
                  <p className="text-sm text-white/90">Este perfil ahora vive en</p>
                  <Link
                    href={`/${profile.username}`}
                    className="mt-2 inline-block font-semibold text-white underline underline-offset-4"
                  >
                    /{profile.username}
                  </Link>
                </div>
              )}

              <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
                <span>{profile.customViews.toLocaleString()} views</span>
                <span className={accent.text}>{profile.theme}</span>
              </div>

              <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-zinc-800 text-3xl font-black text-white shadow-[0_0_30px_rgba(217,70,239,0.16)]">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>
                    {(profile.displayName || shownUsername).charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-center text-4xl font-black text-white">
                @{shownUsername}
              </h1>

              <p className={`mt-2 text-center text-sm font-medium ${accent.text}`}>
                {profile.displayName || "Keef User"}
              </p>

              <p className="mt-4 text-center text-sm leading-7 text-zinc-300">
                {profile.bio || "Tu bio aparecerá aquí"}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
                {profile.location && (
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} />
                    {profile.location}
                  </span>
                )}
                {profile.ageLabel && <span>{profile.ageLabel}</span>}
                {profile.statusText && (
                  <span className="inline-flex items-center gap-1">
                    <Activity size={14} />
                    {profile.statusText}
                  </span>
                )}
              </div>

              {profile.badges.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {profile.badges.slice(0, 6).map((badge) => (
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
                    className={`h-3 w-3 rounded-full ${statusColor[profile.discordStatus] ?? statusColor.online}`}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">Discord</p>
                    <p className="text-xs text-zinc-400">
                      {profile.discordTag} · {profile.discordStatus}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Now playing
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {profile.songTitle}
                </p>
                <p className="text-xs text-zinc-400">{profile.songArtist}</p>
              </div>

              <div className="mt-6">
                <p className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Socials
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {activeLinks.length > 0 ? (
                    activeLinks.map((item) => (
                      <a
                        key={item.id}
                        href={item.url || "#"}
                        target="_blank"
                        rel="noreferrer"
                        title={item.title}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white transition ${
                          profile.linkHoverFx
                            ? `${accent.button} ${accent.iconRing} hover:scale-[1.08]`
                            : ""
                        }`}
                      >
                        {getLinkIcon(item.title)}

                        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                          {item.title}
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
      )}
    </main>
  );
}