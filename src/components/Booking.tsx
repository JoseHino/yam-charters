import { useMemo, useState } from "react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import Reveal from "./Reveal"
import Icon from "./Icon"
import {
  PRICES,
  DURATIONS,
  SHARED,
  seasonForDate,
  SEASON_LABEL,
  eur,
  BOAT,
  CONTACT,
  type Duration,
} from "../data"

// Client ID de PayPal. Defínelo en un fichero .env como:
//   VITE_PAYPAL_CLIENT_ID=tu_client_id
// Si no se define, se usa "test" (modo demo: el botón se muestra pero no cobra).
const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || "test"
const IS_DEMO = PAYPAL_CLIENT_ID === "test"

const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

type Mode = "privada" | "compartida"

function tomorrowISO() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

/** Convierte 'YYYY-MM-DD' en una fecha local (evita desfases por zona horaria). */
function parseLocal(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

export default function Booking() {
  const [mode, setMode] = useState<Mode>("privada")
  const [date, setDate] = useState(tomorrowISO())
  const [time, setTime] = useState("10:00")
  const [duration, setDuration] = useState<Duration>(4)
  const [slot, setSlot] = useState(SHARED.slots[1].id)
  const [pax, setPax] = useState(2)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paid, setPaid] = useState(false)

  const season = useMemo(() => seasonForDate(parseLocal(date)), [date])
  const isShared = mode === "compartida"
  const total = isShared ? SHARED.pricePerPerson * pax : PRICES[season][duration]

  const slotInfo = SHARED.slots.find((s) => s.id === slot) ?? SHARED.slots[0]

  // Hora de fin = hora de inicio + duración (solo salidas privadas).
  const endTime = useMemo(() => {
    const [h, m] = time.split(":").map(Number)
    const end = (h + duration) % 24
    return `${String(end).padStart(2, "0")}:${String(m).padStart(2, "0")}`
  }, [time, duration])

  // Datos de contacto obligatorios para poder reservar/pagar.
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const canBook = name.trim().length > 1 && phone.trim().length >= 6 && emailOk

  const prettyDate = parseLocal(date).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const detalle = isShared
    ? `Salida COMPARTIDA · ${slotInfo.label} (${slotInfo.time})\n` +
      `Personas: ${pax} × ${eur(SHARED.pricePerPerson)}\n` +
      `Duración: ${SHARED.duration}`
    : `Salida PRIVADA (barco completo)\n` +
      `Hora de inicio: ${time}\n` +
      `Duración: ${duration} horas (${SEASON_LABEL[season]})`

  const resumen =
    `Reserva ${BOAT.model} (${BOAT.location})\n` +
    `Fecha: ${prettyDate}\n` +
    `${detalle}\n` +
    `Total: ${eur(total)}` +
    (name ? `\nNombre: ${name}` : "") +
    (phone ? `\nTeléfono: ${phone}` : "")

  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(resumen)}`
  const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    "Reserva " + BOAT.model,
  )}&body=${encodeURIComponent(resumen)}`

  const paypalDescription = isShared
    ? `${BOAT.model} · Compartida · ${pax} pers. · ${prettyDate}`
    : `${BOAT.model} · Privada ${duration}h · ${prettyDate}`

  return (
    <section id="reservar" className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sea">Reserva</p>
          <h2 className="mt-2 text-3xl font-semibold text-navy sm:text-4xl">
            Configura tu experiencia
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Barco completo para tu grupo o por plazas en una salida compartida.
            Precio claro, sin sorpresas.
          </p>
          <span className="mx-auto mt-4 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </Reveal>

        {/* ---- Selector de modalidad ---- */}
        <Reveal className="mb-6">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            <ModeCard
              active={!isShared}
              onClick={() => setMode("privada")}
              title="Salida privada"
              subtitle="El barco entero para vosotros"
              badge="Hasta 10 pers."
              price={`desde ${eur(PRICES.baja[2]).replace(/,\d\d/, "")}`}
            />
            <ModeCard
              active={isShared}
              onClick={() => setMode("compartida")}
              title="Salida compartida"
              subtitle={`Por plazas · ${SHARED.duration}`}
              badge="Nuevo"
              price={`${eur(SHARED.pricePerPerson).replace(",00", "")}/persona`}
            />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-5">
          {/* ---- Formulario ---- */}
          <div className="md:col-span-3 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Fecha de la salida">
                <input
                  type="date"
                  value={date}
                  min={tomorrowISO()}
                  onChange={(e) => setDate(e.target.value)}
                  className="input"
                />
              </Field>
              {isShared ? (
                <Field label="Turno">
                  <select value={slot} onChange={(e) => setSlot(e.target.value)} className="input">
                    {SHARED.slots.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label} · {s.time}
                      </option>
                    ))}
                  </select>
                </Field>
              ) : (
                <Field label="Hora de inicio">
                  <select value={time} onChange={(e) => setTime(e.target.value)} className="input">
                    {TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t} h
                      </option>
                    ))}
                  </select>
                </Field>
              )}
            </div>

            {isShared ? (
              <div className="mt-5">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  ¿Cuántas plazas necesitas?
                </span>
                <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                  {Array.from({ length: SHARED.maxPax }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPax(n)}
                      className={
                        "rounded-xl border py-3 text-center text-lg font-bold transition " +
                        (pax === n
                          ? "border-sea bg-sea text-white shadow"
                          : "border-slate-200 bg-white text-navy hover:border-sea")
                      }
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <p className="mt-3 rounded-xl bg-sand p-3 text-xs leading-relaxed text-slate-600">
                  {SHARED.note}
                </p>
              </div>
            ) : (
              <div className="mt-5">
                <span className="mb-2 block text-sm font-medium text-slate-700">Duración</span>
                <div className="grid grid-cols-5 gap-2">
                  {DURATIONS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={
                        "rounded-xl border py-3 text-center transition " +
                        (duration === d
                          ? "border-sea bg-sea text-white shadow"
                          : "border-slate-200 bg-white text-navy hover:border-sea")
                      }
                    >
                      <span className="block text-lg font-bold">{d}h</span>
                      <span className="block text-[11px] opacity-80">
                        {eur(PRICES[season][d]).replace(",00", "")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label="Nombre">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="input"
                />
              </Field>
              <Field label="Teléfono">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="600 000 000"
                  className="input"
                />
              </Field>
              <Field label="Email" full>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tucorreo@ejemplo.com"
                  className="input"
                />
              </Field>
            </div>
          </div>

          {/* ---- Resumen + pago ---- */}
          <div className="md:col-span-2">
            <div className="sticky top-24 rounded-2xl bg-navy p-6 text-white shadow-lg">
              <h3 className="text-lg font-semibold">Resumen</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <Row
                  k="Modalidad"
                  v={
                    <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-navy">
                      {isShared ? "Compartida" : "Privada"}
                    </span>
                  }
                />
                <Row k="Fecha" v={prettyDate} />
                {isShared ? (
                  <>
                    <Row k="Turno" v={`${slotInfo.label} · ${slotInfo.time}`} />
                    <Row k="Duración" v={SHARED.duration} />
                    <Row k="Plazas" v={`${pax} × ${eur(SHARED.pricePerPerson)}`} />
                  </>
                ) : (
                  <>
                    <Row k="Horario" v={`${time} – ${endTime} h`} />
                    <Row k="Duración" v={`${duration} horas`} />
                    <Row
                      k="Temporada"
                      v={
                        <span
                          className={
                            "rounded-full px-2 py-0.5 text-xs font-semibold " +
                            (season === "alta" ? "bg-gold text-navy" : "bg-white/15 text-white")
                          }
                        >
                          {SEASON_LABEL[season]}
                        </span>
                      }
                    />
                  </>
                )}
              </dl>

              <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-4">
                <span className="text-white/70">Total (IVA incl.)</span>
                <span className="text-3xl font-bold text-gold">{eur(total)}</span>
              </div>

              {paid ? (
                <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 p-4 text-center text-emerald-100">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                  ¡Pago recibido! Te contactaremos para confirmar los detalles.
                </div>
              ) : (
                <div className="mt-5">
                  {IS_DEMO && (
                    <p className="mb-3 rounded-lg bg-white/10 p-2 text-center text-[11px] text-white/70">
                      Modo demo: configura tu <code>VITE_PAYPAL_CLIENT_ID</code> para
                      activar el cobro real.
                    </p>
                  )}
                  {!canBook && (
                    <p className="mb-3 rounded-lg bg-gold/20 p-2 text-center text-[12px] text-gold">
                      Completa tu nombre, email y teléfono para continuar.
                    </p>
                  )}
                  <div
                    className={
                      "transition " + (canBook ? "" : "pointer-events-none select-none opacity-40")
                    }
                    aria-disabled={!canBook}
                  >
                  <div className="rounded-xl bg-white p-2">
                    <PayPalScriptProvider
                      options={{ clientId: PAYPAL_CLIENT_ID, currency: "EUR" }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical", color: "gold", shape: "pill", label: "pay" }}
                        forceReRender={[total, paypalDescription]}
                        createOrder={(_data, actions) =>
                          actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                description: paypalDescription,
                                amount: { currency_code: "EUR", value: total.toFixed(2) },
                              },
                            ],
                          })
                        }
                        onApprove={(_data, actions) =>
                          actions.order!.capture().then(() => setPaid(true))
                        }
                      />
                    </PayPalScriptProvider>
                  </div>

                  <div className="mt-4 text-center text-xs text-white/60">o reserva sin pagar online</div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener"
                      className="rounded-full bg-emerald-500 px-3 py-2 text-center text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={mailUrl}
                      className="rounded-full border border-white/30 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Email
                    </a>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ModeCard({
  active,
  onClick,
  title,
  subtitle,
  badge,
  price,
}: {
  active: boolean
  onClick: () => void
  title: string
  subtitle: string
  badge: string
  price: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "relative rounded-2xl border-2 p-5 text-left transition " +
        (active
          ? "border-sea bg-white shadow-lg"
          : "border-transparent bg-white/60 hover:border-sea/40 hover:bg-white")
      }
    >
      <span
        className={
          "absolute -top-2.5 right-4 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide shadow " +
          (active ? "bg-gold text-navy" : "bg-slate-200 text-slate-600")
        }
      >
        {badge}
      </span>
      <span className="flex items-center justify-between gap-3">
        <span>
          <span className="block font-display text-lg font-semibold text-navy">{title}</span>
          <span className="mt-0.5 block text-sm text-slate-500">{subtitle}</span>
        </span>
        <span className="shrink-0 text-right font-display text-lg font-semibold text-sea">
          {price}
        </span>
      </span>
    </button>
  )
}

function Field({
  label,
  children,
  full,
}: {
  label: string
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <label className={"block" + (full ? " sm:col-span-2" : "")}>
      <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      {children}
    </label>
  )
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-white/60">{k}</dt>
      <dd className="text-right font-medium capitalize">{v}</dd>
    </div>
  )
}
