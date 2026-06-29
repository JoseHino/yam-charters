import { SERVICES } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Services() {
  return (
    <section id="servicios" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Todo incluido" title="Servicios a bordo" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div
                className={
                  "group relative h-full rounded-3xl border p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-lg " +
                  (s.highlight
                    ? "border-gold bg-gradient-to-br from-white to-gold/10 ring-2 ring-gold/40"
                    : "border-slate-200 bg-white")
                }
              >
                {s.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-navy shadow">
                    Incluido gratis
                  </span>
                )}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sea/10 text-4xl transition group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
