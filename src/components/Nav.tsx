import { useEffect, useState } from "react"
import { BRAND, BOAT } from "../data"

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

  return (
    <header
      className={
        "fixed top-0 z-50 w-full text-white transition-all duration-300 " +
        (scrolled || open
          ? "bg-navy/95 shadow-lg backdrop-blur"
          : "bg-gradient-to-b from-navy/60 to-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2 tracking-tight">
          <span className="text-xl">⛵</span>
          <span className="leading-tight">
            <span className="font-display text-lg font-semibold">{BRAND.name}</span>
            <span className="block text-[11px] font-normal text-white/60">
              {BOAT.model} · {BOAT.location}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-white/80 transition hover:text-white">
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:scale-105 hover:brightness-110"
          >
            Reservar
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-4 py-3 md:hidden">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-white/85"
            >
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-4 py-2 text-center font-semibold text-navy"
          >
            Reservar
          </a>
        </nav>
      )}
    </header>
  )
}
