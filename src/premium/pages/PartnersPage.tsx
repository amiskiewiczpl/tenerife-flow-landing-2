import { featuredPartners, partnerTypes, partnersLogos } from '../data/content'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

export function PartnersPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">Partnerzy</span>
            <h1>Sprawdzona sieć lokalnych partnerów, którym można zaufać</h1>
            <p>
              Współpracujemy z partnerami, którzy wspierają jakość pobytu, a nie
              obniżają jej przypadkową obsługą. To sieć budowana pod concierge, nie
              pod masową sprzedaż.
            </p>
          </div>
        </section>

        <section className="section partners-page">
          <div className="container partners-intro-grid">
            <div>
              <h2>Partnerzy dobrani pod wygodę, estetykę i realne zaufanie</h2>
            </div>
            <div>
              <p>
                Dzięki lokalnym relacjom możemy składać pobyty z usług, miejsc i
                ludzi, którzy rozumieją standard obsługi premium. To ważne przy
                aktywnościach, transporcie, relokacji i opiece na miejscu.
              </p>
              <ul className="pill-list">
                {partnerTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container partners-logo-grid">
            {partnersLogos.map((logo) => (
              <div className="partner-logo-card" key={logo}>
                <span>{logo}</span>
              </div>
            ))}
          </div>

          <div className="container featured-partners-stack">
            {featuredPartners.map((partner) => (
              <article className="featured-partner" key={partner.name}>
                <div className="featured-partner-visual">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <div className="featured-partner-copy">
                  <span className="eyebrow">{partner.type}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                  <a
                    className="button button-secondary"
                    href={partner.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Zobacz partnera
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
