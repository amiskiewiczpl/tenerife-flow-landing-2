import { ContactSection } from '../sections/ContactSection'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function ContactPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">Kontakt</span>
            <h1>Porozmawiajmy o pobycie, który chcesz naprawdę dobrze zaplanować.</h1>
            <p>
              Ta rozmowa nie zaczyna się od sprzedaży gotowego pakietu. Zaczyna się od
              zrozumienia Twoich potrzeb, rytmu podróżowania i poziomu wsparcia,
              którego szukasz na Teneryfie.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
