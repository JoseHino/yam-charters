import { useMemo, useState } from "react"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import {
  PRICES,
  DURATIONS,
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
  const [date, setDate] = useState(tomorrowISO())
  const [time, setTime] = useState("10:00")
  const [duration, setDuration] = useState<Duration>(4)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [paid, setPaid] = useState(false)

  const season = useMemo(() => seasonForDate(parseLocal(date)), [date])
  const total = PRICES[season][duration]

  const prettyDate = parseLocal(date).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const resumen =
    `Reserva ${BOAT.model} (${BOAT.location})\n` +
    `Fecha: ${prettyDate}\n` +
    `Hora de inicio: ${time}\n` +
    `Duración: ${duration} horas (${SEASON_LABEL[season]})\n` +
    `Total: ${eur(total)}` +
    (name ? `\nNombre: ${name}` : "") +
    (phone ? `\nTeléfono: ${phone}` : "")

  const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(resumen)}`
  const mailUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    "Reserva " + BOAT.model,
  )}&body=${encodeURIComponent(resumen)}`

  return (
    <section id="reservar" className="bg-sand py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-sea">Reserva</p>
          <h2 className="mt-1 text-3xl font-bold text-navy sm:text-4xl">
            Configura tu salida
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            El precio se calcula automáticamente según la temporada y la duración.
          </p>
        </div>

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
              <Field label="Hora de inicio">
                <select value={time} onChange={(e) => setTime(e.target.value)} className="input">
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t} h
                    </option>
                  ))}
                </select>
              </Field>
            </div>

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
                <Row k="Fecha" v={prettyDate} />
                <Row k="Hora" v={`${time} h`} />
                <Row k="Duración" v={`${duration} horas`} />
                <Row
                  k="Temporada"
                  v={
                    <span
                      className={
                        "rounded-full px-2 py-0.5 text-xs font-semibold " +
                        (season === "alta"
                          ? "bg-gold text-navy"
                          : "bg-white/15 text-white")
                      }
                    >
                      {SEASON_LABEL[season]}
                    </span>
                  }
                />
              </dl>

              <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-4">
                <span className="text-white/70">Total (IVA incl.)</span>
                <span className="text-3xl font-bold text-gold">{eur(total)}</span>
              </div>

              {paid ? (
                <div className="mt-5 rounded-xl bg-emerald-500/20 p-4 text-center text-emerald-100">
                  ✅ ¡Pago recibido! Te contactaremos para confirmar los detalles.
                </div>
              ) : (
                <div className="mt-5">
                  {IS_DEMO && (
                    <p className="mb-3 rounded-lg bg-white/10 p-2 text-center text-[11px] text-white/70">
                      Modo demo: configura tu <code>VITE_PAYPAL_CLIENT_ID</code> para
                      activar el cobro real.
                    </p>
                  )}
                  <div className="rounded-xl bg-white p-2">
                    <PayPalScriptProvider
                      options={{ clientId: PAYPAL_CLIENT_ID, currency: "EUR" }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical", color: "gold", shape: "pill", label: "pay" }}
                        forceReRender={[total]}
                        createOrder={(_data, actions) =>
                          actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                description: `${BOAT.model} · ${duration}h · ${prettyDate}`,
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
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
