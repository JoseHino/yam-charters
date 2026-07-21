import { BOAT, BRAND, STATS, SHARED, eur, img } from "../data"

const COORDS = "36°29′06″N · 4°57′04″O"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[94vh] items-end overflow-hidden text-sand"
    >
      {/* Foto real navegando, con zoom lento */}
      <img
        src={img("hero-navegando.jpg")}
        alt="Navegando a bordo del Sun Odyssey 42 CC por la Costa del Sol"
        fetchPriority="high"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      {/* Graduado a crepúsculo: tinte de atardecer arriba + tinta de mar abajo */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose/25 via-navy/45 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-tr from-navy/70 via-transparent to-transparent" />

      {/* El sol de coral ascendiendo sobre el horizonte (elemento firma) */}
      <div
        aria-hidden
        className="animate-sunrise pointer-events-none absolute right-[8%] top-[22%] h-40 w-40 rounded-full sm:h-56 sm:w-56"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #ffd9a0 0%, #f4a15c 38%, #e8663b 62%, rgba(232,102,59,0) 72%)",
        }}
      />

      {/* Marca de bitácora, arriba */}
      <p className="logmark absolute left-4 top-24 text-sand/80 sm:left-8">
        <span className="text-dawn">✶ Bitácora</span> · {COORDS}
      </p>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 sm:px-8 sm:pb-20">
        <p className="logmark text-dawn">
          {BRAND.name} — {BOAT.location}
        </p>

        <h1 className="mt-4 max-w-3xl text-[3rem] leading-[0.94] sm:text-7xl md:text-[5.2rem]">
          {BRAND.claim}
        </h1>

        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-sand/85">
          {BOAT.tagline}
        </p>

        {/* Datos de salida en clave de instrumento */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sand/85">
          <span className="coords text-sm">
            <span className="text-dawn">◐</span> Compartida {eur(SHARED.pricePerPerson).replace(",00", "")}/pax
          </span>
          <span className="coords text-sm"><span className="text-dawn">⚓</span> Patrón incluido</span>
          <span className="coords text-sm"><span className="text-dawn">🅿</span> Parking gratis</span>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#reservar"
            className="dusk-gradient rounded-full px-8 py-3.5 font-semibold text-ink shadow-lg shadow-gold/25 transition hover:brightness-105"
          >
            Reservar travesía
          </a>
          <a
            href="#experiencias"
            className="rounded-full border border-sand/40 px-8 py-3.5 font-medium text-sand backdrop-blur-sm transition hover:bg-sand/10"
          >
            Ver la travesía
          </a>
        </div>

        {/* Regla de horizonte + lecturas del cuaderno */}
        <div className="horizon mt-12 text-sand/30" />
        <dl className="mt-6 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl text-dawn">{s.value}</dt>
              <dd className="logmark mt-1 text-sand/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#experiencias"
        aria-label="Desplázate para ver más"
        className="animate-bobbing absolute bottom-5 left-1/2 -translate-x-1/2 text-sand/60 hover:text-sand"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
