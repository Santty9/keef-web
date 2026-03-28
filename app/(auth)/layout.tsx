import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.20),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(217,70,239,0.10),transparent_25%)]" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <header className="relative z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-white/5 shadow-[0_0_30px_rgba(192,38,211,0.16)]">
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
              <span className="bg-gradient-to-r from-white via-fuchsia-100 to-violet-200 bg-clip-text text-2xl font-black tracking-tight text-transparent">
                Keef
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-fuchsia-300/70">
                Personal Brand
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-81px)] items-center justify-center px-6 py-12">
        {children}
      </main>
    </div>
  );
}