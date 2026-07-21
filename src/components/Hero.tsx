import { BOAT, BRAND, SHARED, eur, img } from "../data"

const COORDS = "36°29′06″N · 4°57′04″O"

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink text-sand">
      {/* Filete de carta náutica en el borde superior */}
      <div className="dusk-gradient absolute inset-x-0 top-0 h-[3px] opacity-80" />

      <div className="mx-auto grid min-h-[94vh] max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* --- Columna de texto (protagonista) --- */}
        <div>
          <p className="logmark text-dawn">Cuaderno de bitácora · desde 2024</p>
          <p className="coords mt-2 text-sm text-sand/45">{COORDS} — Puerto Banús</p>

          <h1 className="mt-7 text-[3.25rem] leading-[0.9] sm:text-7xl">
            No alquilamos un barco.
            <span className="mt-2 block italic text-dawn">Creamos tu mejor día en el mar.</span>
          </h1>

          <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-sand/80">
            {BOAT.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#reservar"
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:bg-dawn"
            >
              Reservar travesía
            </a>
            <a
              href="#experiencias"
              className="group inline-flex items-center gap-2 font-medium text-sand"
            >
              Ver la travesía
              <span className="text-dawn transition group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Regla de horizonte + una sola línea de confianza (mono, discreta) */}
          <div className="horizon mt-10 max-w-md text-sand/25" />
          <p className="coords mt-4 text-sm text-sand/55">
            4,9<span className="text-dawn">★</span> · +500 a bordo · patrón incluido · compartida{" "}
            {eur(SHARED.pricePerPerson).replace(",00", "")}/pax
          </p>
        </div>

        {/* --- Lámina fotográfica (como plancha de cuaderno) --- */}
        <figure className="relative">
          <div className="overflow-hidden rounded-sm border border-sand/15 shadow-2xl shadow-black/40">
            <img
              src={img("atardecer.jpg")}
              alt="Atardecer a vela frente a Marbella a bordo del Sun Odyssey 42 CC"
              fetchPriority="high"
              className="animate-kenburns aspect-[4/5] w-full object-cover"
            />
          </div>
          <figcaption className="logmark mt-3 flex items-center justify-between text-sand/50">
            <span>Lám. I · {BRAND.name}</span>
            <span>Sun Odyssey 42 CC</span>
          </figcaption>

          {/* Sello: sol crafteado sobre el horizonte (SVG, no un blob) */}
          <svg
            aria-hidden
            viewBox="0 0 80 80"
            className="animate-sunrise absolute -left-5 -top-5 h-20 w-20 text-dawn drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] sm:-left-7 sm:-top-7 sm:h-24 sm:w-24"
          >
            <circle cx="40" cy="40" r="38" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <circle cx="40" cy="44" r="11" fill="currentColor" />
            <line x1="14" y1="55" x2="66" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="40" y1="20" x2="40" y2="26" />
              <line x1="22" y1="27" x2="26" y2="31" />
              <line x1="58" y1="27" x2="54" y2="31" />
            </g>
          </svg>
        </figure>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#experiencias"
        aria-label="Desplázate para ver más"
        className="animate-bobbing absolute bottom-5 left-1/2 -translate-x-1/2 text-sand/50 hover:text-sand"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
