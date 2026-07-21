import { useEffect, useState } from "react"
import { BRAND } from "../data"

const LINKS = [
  ["#experiencias", "Experiencias"],
  ["#galeria", "Galería"],
  ["#barco", "El barco"],
  ["#servicios", "Incluido"],
  ["#opiniones", "Opiniones"],
  ["#contacto", "Contacto"],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={
        "fixed top-0 z-50 w-full transition-all duration-300 " +
        (solid ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <a
          href="#inicio"
          className={"font-display text-xl font-extrabold tracking-tight " + (solid ? "text-navy" : "text-white")}
        >
          {BRAND.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={
                "text-sm font-medium transition hover:text-sea " +
                (solid ? "text-navy/80" : "text-white/90")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            className="rounded-lg bg-sea px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky"
          >
            Reservar
          </a>
        </nav>

        <button
          className={"text-2xl md:hidden " + (solid ? "text-navy" : "text-white")}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 font-medium text-navy/85"
            >
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-sea px-4 py-2 text-center font-semibold text-white"
          >
            Reservar
          </a>
        </nav>
      )}
    </header>
  )
}
