import { EXPERIENCES, SHARED, eur } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Experiences() {
  return (
    <section id="experiencias" className="chartgrid bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="La travesía" title="No es una salida en barco. Es un día en el mar." index="01" />
        <Reveal className="-mt-6 mb-12 max-w-2xl text-navy/70">
          <p className="leading-relaxed">
            Cada travesía es una experiencia completa: coctelería, sabores
            mediterráneos, baños en el mar y atardeceres desde el barco. Elige
            salida privada para tu grupo o únete a una compartida desde{" "}
            <span className="coords text-gold">{eur(SHARED.pricePerPerson).replace(",00", "")}/pax</span>.
          </p>
        </Reveal>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-navy shadow-sm ring-1 ring-navy/10 transition duration-300 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                  <span className="logmark absolute left-3 top-3 text-dawn">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {e.tag && (
                    <span className="logmark absolute right-3 top-3 rounded-full border border-dawn/60 px-2.5 py-1 text-dawn">
                      {e.tag}
                    </span>
                  )}
                  <h3 className="absolute bottom-2 left-4 right-4 text-3xl text-sand drop-shadow">
                    {e.title}
                  </h3>
                </div>
                <p className="flex-1 p-5 text-sm leading-relaxed text-sand/75">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-sm bg-navy p-8 text-sand ring-1 ring-navy/10 sm:flex-row sm:items-center">
            <div>
              <p className="logmark text-dawn">Rumbo a tu día perfecto</p>
              <p className="mt-2 font-display text-2xl sm:text-3xl">
                Todas las experiencias, en cualquier salida
              </p>
              <p className="mt-1 text-sm text-sand/70">
                Barco completo desde 2 horas o compartida por{" "}
                {eur(SHARED.pricePerPerson).replace(",00", "")} por persona.
              </p>
            </div>
            <a
              href="#reservar"
              className="shrink-0 rounded-full bg-gold px-7 py-3 font-semibold text-ink transition hover:bg-dawn"
            >
              Elegir mi experiencia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
