import { BOAT, BRAND, CONTACT } from "../data"

const LINKS = [
  ["#galeria", "Galería"],
  ["#barco", "El barco"],
  ["#servicios", "Servicios"],
  ["#opiniones", "Opiniones"],
  ["#reservar", "Reservar"],
  ["#contacto", "Contacto"],
]

export default function Footer() {
  return (
    <footer className="bg-navy-700 py-10 text-sm text-white/60">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="font-display text-2xl font-semibold text-white">⛵ {BRAND.name}</p>
        <p className="mt-1 text-white/70">
          {BOAT.model} · {BOAT.location}
        </p>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <p className="mt-5">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-white">
            {CONTACT.phone}
          </a>
        </p>

        <p className="mt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {BRAND.name} · Precios IVA incluido · Salidas privadas y compartidas desde Puerto Banús.
        </p>
      </div>
    </footer>
  )
}
