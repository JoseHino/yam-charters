import { BOAT, GALLERY } from "../data"

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[88vh] items-center justify-center overflow-hidden text-white"
    >
      <img
        src={GALLERY[0].src}
        alt={GALLERY[0].alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/85" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-widest">
          {BOAT.location}
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          {BOAT.model}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{BOAT.tagline}</p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
          Parking · comida · bebida incluidos
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#reservar"
            className="rounded-full bg-gold px-7 py-3 font-semibold text-navy shadow-lg transition hover:brightness-110"
          >
            Reservar ahora
          </a>
          <a
            href="#galeria"
            className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Ver el barco
          </a>
        </div>
      </div>
    </section>
  )
}
