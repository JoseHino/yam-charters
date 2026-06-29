import { useState } from "react"
import { BRAND, BOAT } from "../data"

const LINKS = [
  ["#galeria", "Galería"],
  ["#barco", "El barco"],
  ["#servicios", "Servicios"],
  ["#contacto", "Contacto"],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="text-xl">⛵</span>
          <span className="leading-tight">
            {BRAND.name}
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
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:brightness-110"
          >
            Reservar
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label="Abrir menú"
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
