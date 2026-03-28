import {
  BarChart3,
  Brush,
  Link2,
  Music4,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Brush,
    title: "Personalización avanzada",
    description:
      "Edita colores, tipografía, fondos, estilo visual y construye una identidad que realmente se vea tuya.",
  },
  {
    icon: Link2,
    title: "Links y redes en un solo lugar",
    description:
      "Agrupa Instagram, TikTok, YouTube, Discord, Twitch y cualquier enlace importante en una sola página.",
  },
  {
    icon: Music4,
    title: "Música y ambiente",
    description:
      "Añade una vibra única a tu perfil con música destacada, secciones dinámicas y una presencia más inmersiva.",
  },
  {
    icon: BarChart3,
    title: "Stats y rendimiento",
    description:
      "Mide visitas, clics e interacción para entender qué contenido llama más la atención de tu audiencia.",
  },
  {
    icon: Smartphone,
    title: "Responsive y rápido",
    description:
      "Tu perfil se adapta perfecto a móvil, tablet y escritorio con una experiencia fluida y moderna.",
  },
  {
    icon: ShieldCheck,
    title: "Experiencia sólida",
    description:
      "Diseñado para ser limpio, estable y escalable, preparado para crecer con nuevas funciones y personalización.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/10 bg-black py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_35%)]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-fuchsia-400/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-fuchsia-300/80">
            Features
          </p>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white md:text-5xl">
            Todo lo que necesitas para
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              destacar online
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Keef está pensado para que cualquier usuario pueda crear una página
            visualmente potente, moderna y lista para compartir en segundos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/20 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(217,70,239,0.14)]"
              >
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/15 to-violet-500/15 text-fuchsia-300 shadow-[0_0_25px_rgba(217,70,239,0.10)]">
                    <Icon size={24} strokeWidth={2.1} />
                  </div>

                  <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-fuchsia-200">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-fuchsia-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    Diseño premium
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-2xl font-black text-white">Diseño</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Interfaces modernas con identidad visual fuerte y estilo propio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-2xl font-black text-white">Impacto</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Crea una presencia digital que destaque desde el primer vistazo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="text-2xl font-black text-white">Experiencia</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Rápido, visual y preparado para futuros módulos de personalización.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}