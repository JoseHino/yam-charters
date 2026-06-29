import { CONTACT } from "../data"
import Reveal from "./Reveal"

export default function Contact() {
  const wa = `https://wa.me/${CONTACT.whatsapp}`
  const { lat, lng, parkingLat, parkingLng, parkingName, parkingWalk } = CONTACT
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const parkingMapsUrl = `https://www.google.com/maps/search/?api=1&query=${parkingLat},${parkingLng}`
  const walkUrl =
    `https://www.google.com/maps/dir/?api=1&origin=${parkingLat},${parkingLng}` +
    `&destination=${lat},${lng}&travelmode=walking`
  // Encuadre que incluye barco y parking, con un marcador en cada punto
  const minLat = Math.min(lat, parkingLat) - 0.0015
  const maxLat = Math.max(lat, parkingLat) + 0.0015
  const minLng = Math.min(lng, parkingLng) - 0.003
  const maxLng = Math.max(lng, parkingLng) + 0.003
  const embedUrl =
    `https://www.openstreetmap.org/export/embed.html?bbox=` +
    `${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}` +
    `&layer=mapnik&marker=${lat}%2C${lng}`

  return (
    <section id="contacto" className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contacto y ubicación</p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">¿Hablamos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Reserva tu salida o resuelve tus dudas. Te respondemos al momento por WhatsApp.
          </p>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition hover:bg-white/10"
          >
            <div className="text-3xl">💬</div>
            <div className="mt-2 font-semibold">WhatsApp</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.phone}</div>
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition hover:bg-white/10"
          >
            <div className="text-3xl">📞</div>
            <div className="mt-2 font-semibold">Teléfono</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.phone}</div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition hover:bg-white/10"
          >
            <div className="text-3xl">✉️</div>
            <div className="mt-2 font-semibold">Email</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.email}</div>
          </a>
        </div>

        {/* ---- Mapa de ubicación ---- */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-white/5">
          <div className="flex flex-col items-start justify-between gap-2 px-5 py-4 sm:flex-row sm:items-center">
            <div>
              <div className="font-semibold">📍 Dónde embarcas</div>
              <div className="text-sm text-white/70">{CONTACT.address}</div>
            </div>
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
              🅿️ {parkingName} gratis · a {parkingWalk}
            </span>
          </div>
          <iframe
            title="Ubicación del barco y del parking en Puerto Banús"
            src={embedUrl}
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Info del parking gratuito */}
          <div className="border-t border-white/10 bg-white/5 px-5 py-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">
                <span className="font-semibold text-gold">🅿️ Parking gratuito:</span>{" "}
                {parkingName} — a <b>{parkingWalk}</b> del barco.
              </div>
              <div className="flex gap-4 text-sm font-semibold">
                <a href={parkingMapsUrl} target="_blank" rel="noopener" className="text-gold hover:underline">
                  Ver parking →
                </a>
                <a href={walkUrl} target="_blank" rel="noopener" className="text-gold hover:underline">
                  Ruta a pie al barco →
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-gold hover:underline"
            >
              Cómo llegar al barco (Google Maps) →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
