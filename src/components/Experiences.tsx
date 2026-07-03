import { EXPERIENCES, SHARED, eur } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Experiences() {
  return (
    <section id="experiencias" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle
          kicker="Experiencias"
          title="Mucho más que una salida en barco"
        />
        <Reveal className="mx-auto -mt-6 mb-10 max-w-2xl text-center text-slate-600">
          <p>
            Cada travesía es una experiencia completa: coctelería, sabores
            mediterráneos, calas de agua tranquila y atardeceres desde el mar.
            Elige salida privada para tu grupo o únete a una salida compartida
            desde {eur(SHARED.pricePerPerson).replace(",00", "")} por persona.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-navy shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                  {e.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy shadow">
                      {e.tag}
                    </span>
                  )}
                  <h3 className="absolute bottom-3 left-4 right-4 font-display text-2xl font-semibold text-white drop-shadow">
                    {e.title}
                  </h3>
                </div>
                <p className="p-5 pt-4 text-sm leading-relaxed text-white/80">
                  {e.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-navy to-navy-700 p-7 text-white sm:flex-row sm:p-8">
            <div>
              <p className="font-display text-xl font-semibold sm:text-2xl">
                Todas las experiencias, en cualquier salida
              </p>
              <p className="mt-1 text-sm text-white/70">
                Privada desde 2 horas (ahora con un 10% de descuento) o
                compartida por {eur(SHARED.pricePerPerson).replace(",00", "")}{" "}
                por persona.
              </p>
            </div>
            <a
              href="#reservar"
              className="shrink-0 rounded-full bg-gold px-7 py-3 font-semibold text-navy shadow-lg shadow-gold/20 transition hover:scale-[1.03] hover:brightness-110"
            >
              Elegir mi experiencia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
