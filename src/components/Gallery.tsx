import { useCallback, useEffect, useState } from "react"
import { GALLERY } from "../data"
import Reveal from "./Reveal"

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const go = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  )

  // Teclado (Esc / flechas) y bloqueo del scroll de fondo con el lightbox abierto.
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      else if (e.key === "ArrowRight") go(1)
      else if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [active, close, go])

  return (
    <section id="galeria" className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
      <SectionTitle kicker="Cuaderno de a bordo" title="Así se vive la travesía" index="02" />

      {/* Rejilla tipo bento: la primera imagen ocupa el doble */}
      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {GALLERY.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 4) * 70}
            className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
          >
            <button
              onClick={() => setActive(i)}
              className={
                "group relative w-full cursor-pointer overflow-hidden rounded-sm " +
                (i === 0 ? "aspect-square md:h-full" : "aspect-[4/3]")
              }
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="logmark absolute bottom-3 left-3 translate-y-1 text-sand opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")} · ampliar
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* ---- Lightbox ---- */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            ‹
          </button>

          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              className="max-h-[82vh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/70">
              {GALLERY[active].alt} · {active + 1}/{GALLERY.length}
            </figcaption>
          </figure>

          <button
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-2xl text-white/80 transition hover:bg-white/20 hover:text-white"
          >
            ›
          </button>

          <button
            onClick={close}
            aria-label="Cerrar"
            className="absolute right-5 top-5 text-3xl text-white/80 transition hover:text-white"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}

export function SectionTitle({
  kicker,
  title,
  index,
  onDark = false,
}: {
  kicker: string
  title: string
  index?: string
  onDark?: boolean
}) {
  return (
    <Reveal className="mb-12">
      <p className={"logmark " + (onDark ? "text-dawn" : "text-gold")}>
        {index && <span className="opacity-60">{index} — </span>}
        {kicker}
      </p>
      <h2
        className={
          "mt-3 max-w-2xl text-[2.4rem] leading-[0.98] sm:text-5xl " +
          (onDark ? "text-sand" : "text-navy")
        }
      >
        {title}
      </h2>
      <div className={"horizon mt-6 " + (onDark ? "text-sand/40" : "text-navy/30")} />
    </Reveal>
  )
}
