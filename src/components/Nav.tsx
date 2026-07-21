import { useEffect, useState } from "react"
import { BRAND } from "../data"

const COORDS = "36°29′N · 4°57′O"

const LINKS = [
  ["#experiencias", "La travesía"],
  ["#galeria", "Cuaderno"],
  ["#barco", "El barco"],
  ["#servicios", "A bordo"],
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
        "fixed top-0 z-50 w-full text-sand transition-all duration-300 " +
        (scrolled || open
          ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-gradient-to-b from-ink/70 to-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-8">
        <a href="#inicio" className="flex items-baseline gap-2.5">
          <span className="font-display text-2xl leading-none">{BRAND.name}</span>
          <span className="logmark hidden text-sand/50 sm:block">{COORDS}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-sand/75 transition hover:text-dawn"
            >
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition hover:bg-dawn"
          >
            Reservar
          </a>
        </nav>

        <button
          className="text-2xl md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand/10 bg-ink px-4 py-3 md:hidden">
          {LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sand/85"
            >
              {label}
            </a>
          ))}
          <a
            href="#reservar"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-4 py-2 text-center font-semibold text-ink"
          >
            Reservar
          </a>
        </nav>
      )}
    </header>
  )
}
