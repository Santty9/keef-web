import { ArrowUpRight, Sparkles } from "lucide-react";

const templates = [
  {
    name: "Neon Pulse",
    tag: "Popular",
    description:
      "Un perfil vibrante con glow, contraste fuerte y estética gaming moderna.",
    accent: "from-fuchsia-500/30 via-purple-500/20 to-violet-500/30",
    username: "@keefpulse",
    links: ["Instagram", "TikTok", "YouTube"],
    song: "Nightdrive FM",
  },
  {
    name: "Minimal Mono",
    tag: "Clean",
    description:
      "Diseño sobrio, elegante y limpio para creadores que quieren verse premium.",
    accent: "from-white/10 via-zinc-500/10 to-white/5",
    username: "@keefmono",
    links: ["Portfolio", "X / Twitter", "Behance"],
    song: "Ambient Focus",
  },
  {
    name: "Creator Mode",
    tag: "Dynamic",
    description:
      "Perfecto para streamers, músicos y creadores con mucho contenido y presencia visual.",
    accent: "from-sky-500/20 via-cyan-500/20 to-fuchsia-500/20",
    username: "@keefcreator",
    links: ["Twitch", "Discord", "Spotify"],
    song: "Late Night Session",
  },
];

export default function Templates() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-fuchsia-400/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-300/80">
            Templates
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Inspírate con estilos
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              listos para destacar
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Elige una base visual, personalízala a tu manera y crea un perfil
            que se vea único desde el primer segundo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {templates.map((template) => (
            <article
              key={template.name}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/20 hover:bg-white/[0.07] hover:shadow-[0_0_45px_rgba(217,70,239,0.16)]"
            >
              <div
                className={`absolute inset-x-6 top-6 h-28 rounded-3xl bg-gradient-to-r ${template.accent} blur-2xl`}
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-300">
                    {template.tag}
                  </span>

                  <Sparkles className="text-fuchsia-300" size={18} />
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6">
                  <div className="mx-auto h-20 w-20 rounded-full border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(217,70,239,0.15)]" />

                  <h3 className="mt-4 text-center text-2xl font-black text-white">
                    {template.username}
                  </h3>

                  <p className="mt-2 text-center text-sm text-zinc-400">
                    {template.name}
                  </p>

                  <div className="mt-6 space-y-3">
                    {template.links.map((link) => (
                      <div
                        key={link}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-medium text-white transition hover:bg-white/10"
                      >
                        {link}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Now playing
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      {template.song}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-black text-white">
                    {template.name}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {template.description}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-300 transition hover:text-fuchsia-200">
                    Explorar estilo
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}