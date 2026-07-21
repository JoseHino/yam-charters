import { TESTIMONIALS } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Testimonials() {
  return (
    <section id="opiniones" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 sm:py-28">
      <SectionTitle kicker="Diario de la tripulación" title="Lo que se llevaron a tierra" index="05" />
      <div className="grid gap-2.5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 90}>
            <figure className="flex h-full flex-col rounded-sm bg-white p-7 ring-1 ring-navy/10">
              <div className="coords text-gold" aria-label="5 de 5 estrellas">
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1">
                <p className="font-display text-xl leading-snug text-navy">“{t.text}”</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-lg text-sand">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="logmark block text-navy/45">{t.origin}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="logmark mt-8 text-navy/40">
        Reseñas de muestra · se reemplazarán por opiniones reales de Google / TripAdvisor
      </p>
    </section>
  )
}
