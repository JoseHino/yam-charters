import { BOAT, CONTACT } from "../data"

export default function Footer() {
  return (
    <footer className="bg-navy-700 py-8 text-center text-sm text-white/60">
      <p className="font-semibold text-white/80">
        {BOAT.model} · {BOAT.location}
      </p>
      <p className="mt-1">{CONTACT.business}</p>
      <p className="mt-3 text-xs text-white/40">
        © {new Date().getFullYear()} · Web de demostración. Precios IVA incluido.
        Imágenes y datos de contacto de muestra.
      </p>
    </footer>
  )
}
