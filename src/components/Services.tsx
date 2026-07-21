import { SERVICES } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Services() {
  return (
    <section id="servicios" className="bg-ink py-24 text-sand sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="Manifiesto de a bordo" title="Todo incluido. Tú solo trae bañador." index="04" onDark />
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <div
                className={
                  "group relative flex h-full flex-col rounded-sm p-6 transition duration-300 " +
                  (s.highlight
                    ? "bg-navy-700 ring-1 ring-gold/50"
                    : "bg-navy-700/50 ring-1 ring-sand/10 hover:ring-sand/25")
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="logmark text-sand/35">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {s.highlight && (
                  <span className="logmark mt-3 w-fit rounded-full bg-gold px-2.5 py-0.5 text-ink">
                    Gratis
                  </span>
                )}
                <h3 className="mt-3 font-display text-2xl text-sand">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sand/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
