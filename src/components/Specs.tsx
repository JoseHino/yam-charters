import { BOAT, SPECS, GALLERY } from "../data"
import { SectionTitle } from "./Gallery"

export default function Specs() {
  return (
    <section id="barco" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="El barco" title="Características y especificaciones" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={GALLERY[2].src}
              alt={GALLERY[2].alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-slate-700">{BOAT.intro}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <dt className="text-xs uppercase tracking-wide text-slate-500">{s.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
