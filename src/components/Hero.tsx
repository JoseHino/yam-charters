import { BOAT, BRAND, SHARED, eur, img } from "../data"
import Icon, { type IconName } from "./Icon"

const TRUST: { icon: IconName; label: string }[] = [
  { icon: "star", label: "4,9/5 · +500 a bordo" },
  { icon: "anchor", label: "Patrón profesional incluido" },
  { icon: "parking", label: "Parking gratuito" },
  { icon: "users", label: `Compartida ${eur(SHARED.pricePerPerson).replace(",00", "")}/pax` },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden text-white"
    >
      <img
        src={img("hero-navegando.jpg")}
        alt="Navegando a vela por la Costa del Sol a bordo del Sun Odyssey 42 CC"
        fetchPriority="high"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 sm:px-8">
        <p className="eyebrow text-sky">{BRAND.name} · {BOAT.location}</p>

        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl">
          {BRAND.claim}
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          {BOAT.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#reservar"
            className="rounded-lg bg-sea px-7 py-3.5 font-semibold text-white shadow-lg shadow-sea/30 transition hover:bg-sky"
          >
            Reservar ahora
          </a>
          <a
            href="#experiencias"
            className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Ver experiencias
            <Icon name="arrow" className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* Barra de confianza con iconos de línea */}
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6">
          {TRUST.map((t) => (
            <li key={t.label} className="flex items-center gap-2.5 text-sm font-medium text-white/90">
              <Icon name={t.icon} className="h-5 w-5 text-sky" />
              {t.label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#experiencias"
        aria-label="Desplázate para ver más"
        className="animate-bobbing absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
