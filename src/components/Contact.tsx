import { CONTACT } from "../data"

export default function Contact() {
  const wa = `https://wa.me/${CONTACT.whatsapp}`
  return (
    <section id="contacto" className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Contacto</p>
          <h2 className="mt-1 text-3xl font-bold sm:text-4xl">¿Hablamos?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Resolvemos tus dudas y organizamos tu salida perfecta por la Costa del Sol.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition hover:bg-white/10"
          >
            <div className="text-3xl">💬</div>
            <div className="mt-2 font-semibold">WhatsApp</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.phone}</div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center transition hover:bg-white/10"
          >
            <div className="text-3xl">✉️</div>
            <div className="mt-2 font-semibold">Email</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.email}</div>
          </a>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
            <div className="text-3xl">📍</div>
            <div className="mt-2 font-semibold">Dónde estamos</div>
            <div className="mt-1 text-sm text-white/70">{CONTACT.address}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
