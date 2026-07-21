import { TESTIMONIALS } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"
import Icon from "./Icon"

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="opiniones" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="Opiniones" title="Lo que dicen nuestros clientes" />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <Stars />
                <blockquote className="mt-4 flex-1">
                  <p className="leading-relaxed text-slate-700">“{t.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sea font-display font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{t.name}</span>
                    <span className="block text-xs text-slate-500">{t.origin}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-400">
          Reseñas de muestra · se reemplazarán por opiniones reales de Google / TripAdvisor
        </p>
      </div>
    </section>
  )
}
