import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"
import Specs from "./components/Specs"
import Services from "./components/Services"
import Booking from "./components/Booking"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <Specs />
        <Services />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
