import { CONTACT } from "../data"

export default function Contact() {
  const wa = `https://wa.me/${CONTACT.whatsapp}`
  const { lat, lng } = CONTACT
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const d = 0.008
  const embedUrl =
    `https://www.openstreetmap.org/export/embed.html?bbox=` +
    `${lng - d}%2C${lat - d / 2}%2C${lng + d}%2C${lat + d / 2}` +
    `&layer=mapnik&marker=${lat}%2C${lng}`

  return (
    <section id="contacto" className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contacto y ubicación</p>
          <h2 className="mt-1 text-3xl font-bold sm:text-4xl">¿Hablamos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Reserva tu salida o resuelve tus dudas. Te respondemos al momento por WhatsApp.
          </p>
        </div>

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
              🅿️ Parking GRATUITO junto al barco
            </span>
          </div>
          <iframe
            title="Ubicación del barco en Puerto Banús"
            src={embedUrl}
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="px-5 py-3 text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-gold hover:underline"
            >
              Cómo llegar (Google Maps) →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
