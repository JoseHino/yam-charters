import { lazy, Suspense } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Specs from "./components/Specs"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppFab from "./components/WhatsAppFab"

// La sección de reserva carga el SDK de PayPal; la diferimos para no
// penalizar la carga inicial de la página.
const Booking = lazy(() => import("./components/Booking"))

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Specs />
        <Services />
        <Testimonials />
        <Suspense
          fallback={
            <div className="bg-sand py-24 text-center text-slate-500">Cargando reserva…</div>
          }
        >
          <Booking />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
