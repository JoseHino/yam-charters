import { BOAT, SPECS, img } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Specs() {
  return (
    <section id="barco" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle kicker="El barco" title="Jeanneau Sun Odyssey 42 CC" />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img("proa-teca.jpg")}
                alt="Cubierta de teca y proa del Sun Odyssey 42 CC"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3 shadow-lg ring-1 ring-slate-200">
              <p className="eyebrow">Velero · bandera francesa</p>
              <p className="mt-0.5 font-display text-xl font-bold text-navy">P'tit Mousse</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-slate-700">{BOAT.intro}</p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {SPECS.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
