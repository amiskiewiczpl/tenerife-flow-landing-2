import { heroPoints } from '../data/content'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Boutique concierge travel service</span>
          <h1>Spokojnie zaplanowany pobyt na Teneryfie.</h1>
          <p className="hero-lead">
            Projektujemy pobyty premium dla osób, które chcą lepszej selekcji miejsc i
            mniejszego chaosu przed wyjazdem.
          </p>
          <p className="hero-description">
            Łączymy concierge, lokalną znajomość wyspy i spokojny proces organizacji.
            Zamiast dziesiątek decyzji dostajesz klarowny kierunek, sprawdzone miejsca
            i wsparcie wtedy, kiedy naprawdę go potrzebujesz.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={`${import.meta.env.BASE_URL}contact.html`}>
              Umów konsultację
            </a>
            <a className="button button-secondary" href="#packages">
              Zobacz pakiety
            </a>
          </div>

          <div className="hero-trust-row" aria-label="Najważniejsze korzyści">
            {heroPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-premium.svg`}
              alt="Elegancki pobyt premium na Teneryfie"
            />
            <div className="hero-visual-overlay">
              <span className="eyebrow">Concierge-first</span>
              <p>
                Dobrze zaplanowany pobyt to nie lista atrakcji. To rytm, miejsca i
                decyzje, które od początku są lżejsze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
