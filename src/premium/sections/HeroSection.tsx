import { heroPoints } from '../data/content'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Concierge travel for Tenerife</span>
          <h1>Premium pobyt na Teneryfie, bez chaosu organizacyjnego.</h1>
          <p className="hero-lead">
            Projektujemy krótszy, lepszy proces dla osób, które chcą przyjechać na
            gotowe i mieć wszystko dobrze poprowadzone.
          </p>
          <p className="hero-description">
            Zamiast przeszukiwać dziesiątki opcji, dostajesz selekcję właściwych miejsc,
            dopasowany plan pobytu i wsparcie, które prowadzi do decyzji, nie do
            kolejnych pytań.
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
              <span className="eyebrow">Selected, not crowded</span>
              <p>
                Home pokazuje tylko kierunek: premium plan, sprawdzona selekcja i jasny
                następny krok do rozmowy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
