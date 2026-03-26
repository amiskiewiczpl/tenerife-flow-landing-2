import { heroPoints } from '../data/content'

export function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-status">
            <span className="hero-status-dot" />
            <span>Konsultacje startowe dostępne</span>
          </div>

          <span className="eyebrow">Premium concierge travel na Teneryfie</span>
          <h1>Wyjazd na Teneryfę zaprojektowany prywatnie. Bez chaosu. Bez straty czasu.</h1>
          <p className="hero-lead">
            Dla osób, które chcą wypocząć lepiej: z klasą, spokojem i lokalnym
            wsparciem, zamiast samodzielnie składać wszystko z przypadkowych rekomendacji.
          </p>
          <p className="hero-description">
            Projektujemy pobyt wokół Twojego stylu podróżowania, potrzeb i poziomu
            wygody. Ty wchodzisz w gotowe doświadczenie, a nie w kolejny projekt do
            ogarnięcia po godzinach.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Umów bezpłatną konsultację
            </a>
            <a className="button button-secondary" href="#packages">
              Zobacz pakiety usług
            </a>
          </div>

          <ul className="hero-points" aria-label="Najważniejsze korzyści">
            {heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual hero-visual-sales">
          <div className="hero-visual-frame hero-visual-frame-large">
            <img
              src="/tenerife-flow-landing-2/images/hero-premium.svg"
              alt="Premium klimat pobytu na Teneryfie"
            />
            <div className="hero-visual-overlay">
              <span className="eyebrow">Private concierge</span>
              <p>
                Od shortlisty miejsc po rytm całego pobytu. Selekcja, plan i wsparcie
                w jednym spokojnym procesie.
              </p>
            </div>
          </div>

          <div className="hero-trust-card">
            <span className="hero-trust-label">Dla kogo to działa najlepiej</span>
            <p>
              Dla klientów, którzy cenią jakość, estetykę i chcą mieć mniej decyzji po
              swojej stronie.
            </p>
          </div>

          <div className="hero-aside hero-aside-sales">
            <p>Private planning</p>
            <p>Local support</p>
            <p>Premium rhythm</p>
          </div>
        </div>
      </div>
    </section>
  )
}
