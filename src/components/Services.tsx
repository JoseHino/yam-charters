import { SERVICES } from "../data"
import { SectionTitle } from "./Gallery"

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Todo incluido" title="Servicios a bordo" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
