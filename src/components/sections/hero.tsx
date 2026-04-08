import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8">
      {/* Badge */}
      <div className="w-fit flex items-center gap-2 px-3 py-1.5 bg-emerald-950 border border-emerald-800 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs text-emerald-400 font-medium">
          Disponible para trabajar
        </span>
      </div>

      {/* Nombre y título */}
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Salvador Di Sabatto
        </h1>
        <p className="text-xl text-zinc-400">
          Desarrollador Fullstack —{" "}
          <span className="text-zinc-200">Next.js · TypeScript · Node.js</span>
        </p>
      </div>

      {/* Bajada */}
      <p className="text-zinc-400 leading-relaxed max-w-lg text-base">
        Construyo aplicaciones web completas, desde la interfaz hasta el
        servidor. Me enfoco en código mantenible y productos que funcionen de
        verdad. Me adapto rápido, aprendo en el camino y entrego productos que
        funcionan.
      </p>

      {/* CTAs */}
      <div className="flex gap-3">
        <Link
          href="#proyectos"
          className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
        >
          Ver proyectos
        </Link>
        <Link
          href="#contacto"
          className="px-5 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-semibold rounded-lg hover:border-zinc-500 hover:text-white transition-colors"
        >
          Contacto
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="/cv-salvador-di-sabatto-es.pdf"
          download
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <Download size={14} />
          CV · ES
        </a>
        <span className="text-zinc-700">·</span>
        <a
          href="/cv-salvador-di-sabatto-en.pdf"
          download
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          <Download size={14} />
          CV . EN
        </a>
      </div>
    </section>
  );
}
