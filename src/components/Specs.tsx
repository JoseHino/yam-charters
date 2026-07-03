import { BOAT, SPECS, img } from "../data"
import { SectionTitle } from "./Gallery"
import Reveal from "./Reveal"

export default function Specs() {
  return (
    <section id="barco" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="El barco" title="Características y especificaciones" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={img("proa-teca.jpg")}
                alt="Cubierta de teca y proa del Sun Odyssey 42 CC"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Tarjeta flotante con el modelo */}
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-navy px-5 py-3 text-white shadow-lg">
              <p className="text-[11px] uppercase tracking-wide text-gold">Velero</p>
              <p className="font-display text-lg font-semibold">Jeanneau Sun Odyssey 42 CC</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-slate-700">{BOAT.intro}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-white p-4 transition hover:bg-sand">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">{s.label}</dt>
                  <dd className="mt-1 font-display text-lg font-semibold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
