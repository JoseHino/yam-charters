import { BOAT, BRAND, CONTACT } from "../data"

export default function Footer() {
  return (
    <footer className="bg-navy-700 py-8 text-center text-sm text-white/60">
      <p className="text-lg font-bold text-white">⛵ {BRAND.name}</p>
      <p className="mt-1 text-white/70">
        {BOAT.model} · {BOAT.location}
      </p>
      <p className="mt-1">{CONTACT.phone}</p>
      <p className="mt-3 text-xs text-white/40">
        © {new Date().getFullYear()} {BRAND.name} · Precios IVA incluido.
        Imágenes de muestra.
      </p>
    </footer>
  )
}
