import { BOAT, SPECS, img } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Specs() {
  return (
    <section id="barco" className="bg-sand py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="El barco" title="Jeanneau Sun Odyssey 42 CC" index="03" />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-sm shadow-xl ring-1 ring-navy/10">
              <img
                src={img("proa-teca.jpg")}
                alt="Cubierta de teca y proa del Sun Odyssey 42 CC"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Chapa de latón con el modelo */}
            <div className="absolute -bottom-5 left-5 rounded-sm border border-brass/50 bg-ink px-5 py-3 text-sand shadow-lg">
              <p className="logmark text-brass">Velero · bandera 🇫🇷</p>
              <p className="mt-0.5 font-display text-xl">P'tit Mousse</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-navy/80">{BOAT.intro}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy/15 bg-navy/15">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-sand p-4 transition hover:bg-white">
                  <dt className="logmark text-navy/45">{s.label}</dt>
                  <dd className="coords mt-1 text-xl font-bold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
