import { BOAT, BRAND, GALLERY, STATS } from "../data"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden text-white"
    >
      {/* Imagen de fondo con zoom lento */}
      <img
        src={GALLERY[0].src}
        alt={GALLERY[0].alt}
        fetchPriority="high"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/55 to-navy/95" />
      {/* Viñeteado sutil para dar profundidad */}
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_180px_60px_rgba(7,20,33,0.55)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {BRAND.name} · {BOAT.location}
        </p>

        <h1 className="text-4xl font-semibold leading-[1.05] drop-shadow-sm sm:text-5xl md:text-[3.75rem]">
          {BRAND.claim}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg font-light text-white/90">
          A bordo del {BOAT.model}. Cócteles, comida y bebida incluidos, con patrón
          profesional y parking gratuito.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="rounded-full bg-gold px-3.5 py-1.5 font-semibold text-navy shadow-sm">
            🅿️ Parking gratis (Cristamar)
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            🍸 Cócteles a bordo
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 backdrop-blur-sm">
            ⚓ Patrón incluido
          </span>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#reservar"
            className="rounded-full bg-gold px-8 py-3.5 font-semibold text-navy shadow-lg shadow-gold/20 transition hover:scale-[1.03] hover:brightness-110"
          >
            Reservar ahora
          </a>
          <a
            href="#galeria"
            className="rounded-full border border-white/40 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
          >
            Ver el barco
          </a>
        </div>

        {/* Barra de confianza */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-4">
              <div className="font-display text-2xl font-semibold text-gold">{s.value}</div>
              <div className="mt-0.5 text-[11px] uppercase tracking-wide text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#galeria"
        aria-label="Desplázate para ver más"
        className="animate-bobbing absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
