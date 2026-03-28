"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-white/5 shadow-[0_0_35px_rgba(192,38,211,0.18)] transition duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_45px_rgba(217,70,239,0.28)]">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-violet-500/10" />
            <Image
              src="/logo-keef.png"
              alt="Keef logo"
              fill
              priority
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text text-2xl font-black tracking-tight text-transparent md:text-3xl">
              Keef
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-fuchsia-300/70 md:text-[11px]">
              Personal Brand
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-zinc-300 transition duration-200 hover:text-white"
          >
            Features
          </a>
          <a
            href="#preview"
            className="text-sm font-medium text-zinc-300 transition duration-200 hover:text-white"
          >
            Preview
          </a>
          <a
            href="#templates"
            className="text-sm font-medium text-zinc-300 transition duration-200 hover:text-white"
          >
            Templates
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
              <button className="rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:border-white/20 hover:bg-white/10">
                Login
              </button>
            </SignInButton>

            <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
              <button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.35)] transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(217,70,239,0.5)]">
                Crear perfil
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:border-white/20 hover:bg-white/10"
            >
              Dashboard
            </Link>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-5 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#features"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
            >
              Features
            </a>

            <a
              href="#preview"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
            >
              Preview
            </a>

            <a
              href="#templates"
              onClick={() => setOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
            >
              Templates
            </a>

            <SignedOut>
              <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
                <button className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10">
                  Login
                </button>
              </SignInButton>

              <SignUpButton mode="redirect" forceRedirectUrl="/dashboard">
                <button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.28)] transition hover:opacity-95">
                  Crear perfil
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
              >
                Dashboard
              </Link>

              <div className="flex justify-center pt-2">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}