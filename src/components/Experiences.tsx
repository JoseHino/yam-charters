import { EXPERIENCES, SHARED, eur } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Experiences() {
  return (
    <section id="experiencias" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="Experiencias" title="Mucho más que una salida en barco" />
        <Reveal className="mx-auto -mt-6 mb-12 max-w-2xl text-center leading-relaxed text-slate-600">
          <p>
            Cada travesía es una experiencia completa: coctelería, sabores
            mediterráneos, baños en el mar y atardeceres desde el barco. Elige
            salida privada para tu grupo o únete a una compartida desde{" "}
            <span className="font-semibold text-sea">{eur(SHARED.pricePerPerson).replace(",00", "")}/pax</span>.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {e.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-sea px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      {e.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{e.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{e.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-xl font-bold sm:text-2xl">
                Todas las experiencias, en cualquier salida
              </p>
              <p className="mt-1 text-sm text-white/75">
                Barco completo desde 2 horas o compartida por{" "}
                {eur(SHARED.pricePerPerson).replace(",00", "")} por persona.
              </p>
            </div>
            <a
              href="#reservar"
              className="shrink-0 rounded-lg bg-sea px-7 py-3 font-semibold text-white transition hover:bg-sky"
            >
              Elegir mi experiencia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
