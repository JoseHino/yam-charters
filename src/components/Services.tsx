import { SERVICES } from "../data"
import { SectionTitle } from "./Gallery"

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <SectionTitle kicker="Todo incluido" title="Servicios a bordo" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className={
              "relative rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md " +
              (s.highlight
                ? "border-gold bg-gradient-to-br from-white to-gold/10 ring-2 ring-gold/40"
                : "border-slate-200 bg-white")
            }
          >
            {s.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-navy">
                Incluido gratis
              </span>
            )}
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-3 text-lg font-semibold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
