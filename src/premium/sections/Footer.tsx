const baseUrl = import.meta.env.BASE_URL

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <p className="footer-brand-name">Tenerife Flow</p>
          <p className="footer-brand-copy">
            Boutique concierge travel service dla klientów, którzy chcą wyższego
            standardu pobytu, spokojniejszej organizacji i bardziej dopracowanego
            doświadczenia na Teneryfie.
          </p>
        </div>

        <div className="footer-nav-block">
          <p className="footer-label">Nawigacja</p>
          <div className="footer-links">
            <a href={baseUrl}>Start</a>
            <a href={`${baseUrl}experiences.html`}>Doświadczenia</a>
            <a href={`${baseUrl}partners.html`}>Partnerzy</a>
          </div>
        </div>

        <div className="footer-cta-block">
          <p className="footer-label">Kontakt</p>
          <p>
            Jeśli chcesz sprawdzić, jaki zakres concierge będzie najlepszy dla Twojego
            pobytu, zacznij od krótkiej konsultacji.
          </p>
          <a className="button button-secondary footer-button" href={`${baseUrl}#contact`}>
            Umów rozmowę
          </a>
        </div>
      </div>
    </footer>
  )
}
