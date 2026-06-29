import { useState } from "react"
import { GALLERY } from "../data"

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Galería" title="Descubre el Sun Odyssey 42 CC" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {GALLERY.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy/0 transition group-hover:bg-navy/15" />
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-slate-500">
        Imágenes de muestra · se reemplazarán por fotos reales del barco
      </p>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <img
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[88vh] max-w-full rounded-lg"
          />
          <button
            className="absolute right-5 top-5 text-3xl text-white/80 hover:text-white"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}

export function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-sea">{kicker}</p>
      <h2 className="mt-1 text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
    </div>
  )
}
