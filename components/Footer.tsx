import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-fuchsia-400/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-300/80">
                Start now
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl">
                Crea tu perfil, comparte tu estilo
                <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
                  y haz que tu presencia destaque.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                Diseña una página visual, moderna y totalmente personalizable
                para mostrar tus redes, links, música y contenido en un solo lugar.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.35)] transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(217,70,239,0.5)]">
                Crear mi perfil
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-white/10">
                Ver plantillas
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-white">Keef</h3>
              <p className="mt-3 max-w-sm leading-7 text-zinc-400">
                Una nueva forma de crear tu identidad digital con estilo,
                personalidad y presencia visual real.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Navegación
              </p>

              <div className="mt-4 flex flex-col gap-3 text-zinc-300">
                <a href="#features" className="transition hover:text-white">
                  Features
                </a>
                <a href="#preview" className="transition hover:text-white">
                  Preview
                </a>
                <Link href="/" className="transition hover:text-white">
                  Inicio
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Social
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-fuchsia-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.18)]"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-fuchsia-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.18)]"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-fuchsia-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.18)]"
                >
                  <FaDiscord size={18} />
                </a>

                <a
                  href="mailto:contacto@keef.com"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-fuchsia-400/20 hover:text-white hover:shadow-[0_0_20px_rgba(217,70,239,0.18)]"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
            © 2026 Keef. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}