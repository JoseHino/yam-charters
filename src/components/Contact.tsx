import { CONTACT } from "../data"
import Reveal from "./Reveal"
import Icon, { type IconName } from "./Icon"

export default function Contact() {
  const wa = `https://wa.me/${CONTACT.whatsapp}`
  const { lat, lng, parkingLat, parkingLng, parkingName, parkingWalk } = CONTACT
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  const parkingMapsUrl = `https://www.google.com/maps/search/?api=1&query=${parkingLat},${parkingLng}`
  const walkUrl =
    `https://www.google.com/maps/dir/?api=1&origin=${parkingLat},${parkingLng}` +
    `&destination=${lat},${lng}&travelmode=walking`
  const minLat = Math.min(lat, parkingLat) - 0.0015
  const maxLat = Math.max(lat, parkingLat) + 0.0015
  const minLng = Math.min(lng, parkingLng) - 0.003
  const maxLng = Math.max(lng, parkingLng) + 0.003
  const embedUrl =
    `https://www.openstreetmap.org/export/embed.html?bbox=` +
    `${minLng}%2C${minLat}%2C${maxLng}%2C${maxLat}` +
    `&layer=mapnik&marker=${lat}%2C${lng}`

  const cards: { icon: IconName; label: string; value: string; href: string; target?: boolean }[] = [
    { icon: "chat", label: "WhatsApp", value: CONTACT.phone, href: wa, target: true },
    { icon: "phone", label: "Teléfono", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: "mail", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]

  return (
    <section id="contacto" className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-sky">Contacto y ubicación</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">¿Hablamos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Reserva tu salida o resuelve tus dudas. Te respondemos al momento por WhatsApp.
          </p>
          <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-sky" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.target ? { target: "_blank", rel: "noopener" } : {})}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-white/25 hover:bg-white/10"
            >
              <Icon name={c.icon} className="h-7 w-7 text-sky" />
              <div className="mt-3 font-semibold">{c.label}</div>
              <div className="mt-1 text-sm text-white/70">{c.value}</div>
            </a>
          ))}
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="flex flex-col items-start justify-between gap-2 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <Icon name="pin" className="h-6 w-6 text-sky" />
              <div>
                <div className="font-semibold">Dónde embarcas</div>
                <div className="text-sm text-white/70">{CONTACT.address}</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sea px-3 py-1.5 text-xs font-semibold text-white">
              <Icon name="parking" className="h-4 w-4" /> {parkingName} gratis · a {parkingWalk}
            </span>
          </div>
          <iframe
            title="Ubicación del barco y del parking en Puerto Banús"
            src={embedUrl}
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="border-t border-white/10 bg-white/5 px-5 py-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-white/85">
                <span className="font-semibold text-sky">Parking gratuito:</span>{" "}
                {parkingName} — a <b>{parkingWalk}</b> del barco.
              </div>
              <div className="flex gap-4 text-sm font-semibold">
                <a href={parkingMapsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sky hover:underline">
                  Ver parking <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
                </a>
                <a href={walkUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-sky hover:underline">
                  Ruta a pie <Icon name="route" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-3 text-center">
            <a href={mapsUrl} target="_blank" rel="noopener" className="text-sm font-semibold text-sky hover:underline">
              Cómo llegar al barco (Google Maps) →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
