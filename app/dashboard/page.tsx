"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import PrimaryButton from "@/components/dashboard/PrimaryButton";
import PublicProfileButton from "@/components/dashboard/PublicProfileButton";
import SectionHeader from "@/components/dashboard/SectionHeader";
import { useDashboard } from "@/components/dashboard/DashboardContext";
import { Eye, Link2, Save, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const {
    username,
    displayName,
    bio,
    theme,
    links,
    clerkEmail,
    clerkFullName,
  } = useDashboard();

  return (
    <>
      <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            Bienvenido{clerkFullName ? `, ${clerkFullName}` : " de nuevo"}
          </p>
          <h2 className="mt-1 text-3xl font-black tracking-tight text-white">
            Tu dashboard creativo
          </h2>
          {clerkEmail ? (
            <p className="mt-2 text-sm text-zinc-500">{clerkEmail}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <PublicProfileButton />
          <PrimaryButton className="inline-flex items-center gap-2">
            <Save size={16} />
            Guardar cambios
          </PrimaryButton>
        </div>
      </header>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <DashboardCard>
            <SectionHeader
              eyebrow="Overview"
              title="Tu perfil está listo para crecer"
            />

            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
              Ya tienes autenticación real. Ahora cada sesión puede tener su propio
              perfil y sus propios cambios.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-zinc-500">Usuario</p>
                <p className="mt-2 text-lg font-bold text-white">
                  @{username || "keef"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-zinc-500">Tema</p>
                <p className="mt-2 text-lg font-bold text-white">{theme}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-zinc-500">Links activos</p>
                <p className="mt-2 text-lg font-bold text-white">
                  {links.filter((item) => item.active).length}
                </p>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard>
            <SectionHeader
              eyebrow="Perfil"
              title="Información principal"
              action={
                <Link
                  href="/dashboard/profile"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Editar
                </Link>
              }
            />

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-zinc-500">Username</p>
                <p className="mt-2 font-semibold text-white">
                  @{username || "keef"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm text-zinc-500">Nombre visible</p>
                <p className="mt-2 font-semibold text-white">
                  {displayName || "Keef"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 md:col-span-2">
                <p className="text-sm text-zinc-500">Bio</p>
                <p className="mt-2 text-white">{bio}</p>
              </div>
            </div>
          </DashboardCard>

          <DashboardCard>
            <SectionHeader
              eyebrow="Links"
              title="Tus enlaces activos"
              action={
                <Link
                  href="/dashboard/links"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
                >
                  Editar links
                </Link>
              }
            />

            <div className="mt-6 space-y-3">
              {links
                .filter((item) => item.active)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300">
                        <Link2 size={18} />
                      </div>

                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-zinc-500">{item.url}</p>
                      </div>
                    </div>

                    <Link
                      href="/dashboard/links"
                      className="text-sm text-zinc-400 transition hover:text-white"
                    >
                      Editar
                    </Link>
                  </div>
                ))}
            </div>
          </DashboardCard>
        </div>

        <div className="space-y-6">
          <DashboardCard>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/70">
                  Estado
                </p>
                <h3 className="text-xl font-black text-white">
                  Sesión autenticada
                </h3>
              </div>
            </div>

            <p className="mt-4 leading-7 text-zinc-400">
              Tu cuenta ya entra con Clerk. El siguiente paso será guardar cada
              perfil en una base de datos real por usuario.
            </p>

            <div className="mt-5">
              <PublicProfileButton fullWidth>
                Abrir perfil público
              </PublicProfileButton>
            </div>
          </DashboardCard>

          <DashboardCard>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                <Eye size={20} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/70">
                  Clerk
                </p>
                <h3 className="text-xl font-black text-white">
                  Datos de cuenta
                </h3>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-zinc-500">Nombre</p>
                <p className="mt-1 text-white">{clerkFullName || "Sin nombre"}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-zinc-500">Email</p>
                <p className="mt-1 text-white">{clerkEmail || "Sin email"}</p>
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </>
  );
}