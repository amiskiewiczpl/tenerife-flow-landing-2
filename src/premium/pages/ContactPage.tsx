import { ContactSection } from '../sections/ContactSection'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { getLocale } from '../locale'

const copy = {
  pl: {
    eyebrow: 'Kontakt',
    title: 'Porozmawiajmy o pobycie, który chcesz naprawdę dobrze zaplanować.',
    description:
      'Ta rozmowa nie zaczyna się od sprzedaży gotowego pakietu. Zaczyna się od zrozumienia Twoich potrzeb, rytmu podróżowania i poziomu wsparcia, którego szukasz na Teneryfie.',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Let’s talk about the stay you want to plan properly.',
    description:
      'This conversation does not start with selling a ready-made package. It starts with understanding your needs, travel rhythm and the level of support you want in Tenerife.',
  },
  es: {
    eyebrow: 'Contacto',
    title: 'Hablemos de la estancia que quieres planificar de verdad.',
    description:
      'Esta conversación no empieza vendiendo un paquete cerrado. Empieza entendiendo tus necesidades, tu ritmo de viaje y el nivel de apoyo que buscas en Tenerife.',
  },
} as const

export function ContactPage() {
  const content = copy[getLocale()]

  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
