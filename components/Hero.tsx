import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.22),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,70,239,0.10),transparent_25%)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-fuchsia-400/20 bg-white/5 shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <Image
                src="/logo-keef.png"
                alt="Keef logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            <p className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-300">
              Personal brand redefined
            </p>
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Construye tu espacio
            <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              digital con estilo.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Diseña un perfil único con tus redes, links, música, estética visual
            y una identidad que realmente se sienta tuya.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(217,70,239,0.35)] transition duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(217,70,239,0.5)]">
              Crear mi perfil
            </button>

            <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-white/10">
              Ver ejemplos
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
            <div>
              <span className="text-lg font-bold text-white">100%</span>
              <p>personalizable</p>
            </div>
            <div>
              <span className="text-lg font-bold text-white">Links</span>
              <p>redes y contenido</p>
            </div>
            <div>
              <span className="text-lg font-bold text-white">Visual</span>
              <p>moderno y único</p>
            </div>
          </div>
        </div>

        <div id="preview" className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-purple-500/20 blur-2xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-fuchsia-400/20 bg-zinc-800 shadow-[0_0_30px_rgba(217,70,239,0.18)]">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src="/logo-keef.png"
                      alt="Keef avatar"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="mt-4 text-center text-3xl font-black text-white">
                  @keef
                </h3>

                <p className="mt-2 text-center text-sm text-zinc-400">
                  diseñador digital • links • música • vibes
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-medium text-white transition hover:bg-white/10">
                    Instagram
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-medium text-white transition hover:bg-white/10">
                    TikTok
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-medium text-white transition hover:bg-white/10">
                    YouTube
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-fuchsia-400/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Now playing
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Midnight City - Synthwave Mix
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}