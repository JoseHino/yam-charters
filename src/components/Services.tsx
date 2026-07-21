import { SERVICES } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"
import Icon, { type IconName } from "./Icon"

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="Todo incluido" title="Servicios a bordo" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div
                className={
                  "relative flex h-full flex-col rounded-2xl p-7 transition duration-300 hover:-translate-y-1 " +
                  (s.highlight
                    ? "bg-sea/5 ring-2 ring-sea/40"
                    : "bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-lg")
                }
              >
                {s.highlight && (
                  <span className="absolute right-5 top-5 rounded-full bg-sea px-3 py-1 text-xs font-semibold text-white">
                    Gratis
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sea/10 text-sea">
                  <Icon name={s.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
