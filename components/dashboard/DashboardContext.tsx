"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useUser } from "@clerk/nextjs";

type LinkItem = {
  id: number;
  title: string;
  url: string;
  active: boolean;
};

type DashboardContextType = {
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
  clerkEmail: string;
  clerkFullName: string;
  clerkAvatar: string;
  setUsername: (value: string) => void;
  setDisplayName: (value: string) => void;
  setBio: (value: string) => void;
  setAvatarUrl: (value: string) => void;
  setBackgroundType: (value: "image" | "video") => void;
  setBackgroundUrl: (value: string) => void;
  setTheme: (value: string) => void;
  setAccentColor: (value: string) => void;
  setFontStyle: (value: string) => void;
  setEnterEnabled: (value: boolean) => void;
  setGlow: (value: number) => void;
  setContrast: (value: number) => void;
  setAnimation: (value: number) => void;
  setOverlayBlur: (value: number) => void;
  setParticlesEnabled: (value: boolean) => void;
  setAnimatedGlow: (value: boolean) => void;
  setLinkHoverFx: (value: boolean) => void;
  setDiscordStatus: (value: string) => void;
  setDiscordTag: (value: string) => void;
  setSongTitle: (value: string) => void;
  setSongArtist: (value: string) => void;
  setLocation: (value: string) => void;
  setAgeLabel: (value: string) => void;
  setCustomViews: (value: number) => void;
  setStatusText: (value: string) => void;
  setBadges: (value: string[]) => void;
  setLinks: (value: LinkItem[]) => void;
};

const DashboardContext = createContext<DashboardContextType | null>(null);

function slugifyUsername(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9._-]/g, "")
    .slice(0, 24);
}

export function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();

  const userId = user?.id ?? "guest";
  const storageKey = useMemo(() => `keef_profile_data_${userId}`, [userId]);

  const clerkEmail = user?.primaryEmailAddress?.emailAddress ?? "";
  const clerkFullName =
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    "";
  const clerkAvatar = user?.imageUrl ?? "";

  const fallbackUsername =
    user?.username ||
    slugifyUsername(
      clerkEmail.split("@")[0] || clerkFullName || "keef"
    ) ||
    "keef";

  const fallbackDisplayName = clerkFullName || "Keef";

  const [username, setUsername] = useState("keef");
  const [displayName, setDisplayName] = useState("Keef");
  const [bio, setBio] = useState("diseñador digital • links • música • vibes");

  const [avatarUrl, setAvatarUrl] = useState("");
  const [backgroundType, setBackgroundType] = useState<"image" | "video">(
    "image"
  );
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const [theme, setTheme] = useState("Neon");
  const [accentColor, setAccentColor] = useState("fuchsia");
  const [fontStyle, setFontStyle] = useState("modern");
  const [enterEnabled, setEnterEnabled] = useState(true);

  const [glow, setGlow] = useState(80);
  const [contrast, setContrast] = useState(65);
  const [animation, setAnimation] = useState(40);
  const [overlayBlur, setOverlayBlur] = useState(14);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [animatedGlow, setAnimatedGlow] = useState(true);
  const [linkHoverFx, setLinkHoverFx] = useState(true);

  const [discordStatus, setDiscordStatus] = useState("online");
  const [discordTag, setDiscordTag] = useState("keef#0001");

  const [songTitle, setSongTitle] = useState("Midnight City");
  const [songArtist, setSongArtist] = useState("Synthwave Mix");

  const [location, setLocation] = useState("Argentina");
  const [ageLabel, setAgeLabel] = useState("19");
  const [customViews, setCustomViews] = useState(12400);
  const [statusText, setStatusText] = useState("editing all night");

  const [badges, setBadges] = useState<string[]>([
    "designer",
    "artist",
    "editor",
  ]);

  const [links, setLinks] = useState<LinkItem[]>([
    { id: 1, title: "Instagram", url: "https://instagram.com", active: true },
    { id: 2, title: "TikTok", url: "https://tiktok.com", active: true },
    { id: 3, title: "YouTube", url: "https://youtube.com", active: true },
    { id: 4, title: "Spotify", url: "https://spotify.com", active: true },
  ]);

  useEffect(() => {
    if (!user) return;

    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        setUsername(parsed.username || fallbackUsername);
        setDisplayName(parsed.displayName || fallbackDisplayName);
        setBio(parsed.bio || "diseñador digital • links • música • vibes");
        setAvatarUrl(parsed.avatarUrl || clerkAvatar || "");
        setBackgroundType(parsed.backgroundType || "image");
        setBackgroundUrl(parsed.backgroundUrl || "");
        setTheme(parsed.theme || "Neon");
        setAccentColor(parsed.accentColor || "fuchsia");
        setFontStyle(parsed.fontStyle || "modern");
        setEnterEnabled(
          typeof parsed.enterEnabled === "boolean" ? parsed.enterEnabled : true
        );
        setGlow(typeof parsed.glow === "number" ? parsed.glow : 80);
        setContrast(typeof parsed.contrast === "number" ? parsed.contrast : 65);
        setAnimation(typeof parsed.animation === "number" ? parsed.animation : 40);
        setOverlayBlur(typeof parsed.overlayBlur === "number" ? parsed.overlayBlur : 14);
        setParticlesEnabled(
          typeof parsed.particlesEnabled === "boolean" ? parsed.particlesEnabled : true
        );
        setAnimatedGlow(
          typeof parsed.animatedGlow === "boolean" ? parsed.animatedGlow : true
        );
        setLinkHoverFx(
          typeof parsed.linkHoverFx === "boolean" ? parsed.linkHoverFx : true
        );
        setDiscordStatus(parsed.discordStatus || "online");
        setDiscordTag(parsed.discordTag || "keef#0001");
        setSongTitle(parsed.songTitle || "Midnight City");
        setSongArtist(parsed.songArtist || "Synthwave Mix");
        setLocation(parsed.location || "Argentina");
        setAgeLabel(parsed.ageLabel || "19");
        setCustomViews(
          typeof parsed.customViews === "number" ? parsed.customViews : 12400
        );
        setStatusText(parsed.statusText || "editing all night");
        setBadges(Array.isArray(parsed.badges) ? parsed.badges : ["designer", "artist", "editor"]);
        setLinks(Array.isArray(parsed.links) ? parsed.links : []);
        return;
      } catch (error) {
        console.error("Error leyendo localStorage:", error);
      }
    }

    setUsername(fallbackUsername);
    setDisplayName(fallbackDisplayName);
    setAvatarUrl(clerkAvatar || "");
  }, [user, storageKey, fallbackUsername, fallbackDisplayName, clerkAvatar]);

  useEffect(() => {
    if (!user) return;

    const data = {
      username,
      displayName,
      bio,
      avatarUrl,
      backgroundType,
      backgroundUrl,
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
      discordStatus,
      discordTag,
      songTitle,
      songArtist,
      location,
      ageLabel,
      customViews,
      statusText,
      badges,
      links,
    };

    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [
    user,
    storageKey,
    username,
    displayName,
    bio,
    avatarUrl,
    backgroundType,
    backgroundUrl,
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
    discordStatus,
    discordTag,
    songTitle,
    songArtist,
    location,
    ageLabel,
    customViews,
    statusText,
    badges,
    links,
  ]);

  return (
    <DashboardContext.Provider
      value={{
        username,
        displayName,
        bio,
        avatarUrl,
        backgroundType,
        backgroundUrl,
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
        discordStatus,
        discordTag,
        songTitle,
        songArtist,
        location,
        ageLabel,
        customViews,
        statusText,
        badges,
        links,
        clerkEmail,
        clerkFullName,
        clerkAvatar,
        setUsername,
        setDisplayName,
        setBio,
        setAvatarUrl,
        setBackgroundType,
        setBackgroundUrl,
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
        setDiscordStatus,
        setDiscordTag,
        setSongTitle,
        setSongArtist,
        setLocation,
        setAgeLabel,
        setCustomViews,
        setStatusText,
        setBadges,
        setLinks,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }

  return context;
}