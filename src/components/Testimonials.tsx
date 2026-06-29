import { TESTIMONIALS } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Testimonials() {
  return (
    <section id="opiniones" className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
      <SectionTitle kicker="Opiniones" title="Lo que dicen nuestros clientes" />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 90}>
            <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-gold" aria-label="5 de 5 estrellas">
                ★★★★★
              </div>
              <blockquote className="mt-3 flex-1 text-slate-700">
                <p className="leading-relaxed">“{t.text}”</p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display font-semibold text-white">
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
      <p className="mt-6 text-center text-xs text-slate-500">
        Reseñas de muestra · se reemplazarán por opiniones reales de Google / TripAdvisor
      </p>
    </section>
  )
}
