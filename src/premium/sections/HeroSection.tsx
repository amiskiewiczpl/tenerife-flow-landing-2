import { heroEditorialNotes, heroPoints } from '../data/content'

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
          <h1>Teneryfa zaprojektowana prywatnie. Jak pobyt premium, nie jak kolejny projekt do ogarnięcia.</h1>
          <p className="hero-lead">
            Dla osób, które chcą podróżować z większym spokojem, lepszym gustem i
            lokalnym wsparciem, bez chaosu researchu i przypadkowych decyzji.
          </p>
          <p className="hero-description">
            Projektujemy cały rytm pobytu wokół Twojego stylu podróżowania, potrzeb i
            oczekiwanego standardu. Ty wchodzisz w dopracowane doświadczenie, a nie w
            dziesiątki kart otwartych po godzinach.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Umów prywatną konsultację
            </a>
            <a className="button button-secondary" href="#packages">
              Zobacz pakiety usług
            </a>
          </div>

          <div className="hero-editorial-notes" aria-label="Styl usługi">
            {heroEditorialNotes.map((item) => (
              <span key={item}>{item}</span>
            ))}
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
              src={`${import.meta.env.BASE_URL}images/hero-premium.svg`}
              alt="Premium klimat pobytu na Teneryfie"
            />
            <div className="hero-visual-overlay">
              <span className="eyebrow">Private concierge</span>
              <p>
                Od shortlisty miejsc po rytm całego pobytu. Selekcja, plan, estetyka i
                wsparcie w jednym spokojnym procesie.
              </p>
            </div>
          </div>

          <div className="hero-trust-card">
            <span className="hero-trust-label">Najlepszy fit</span>
            <p>
              Dla klientów, którzy cenią jakość, prywatność i chcą mieć mniej decyzji
              po swojej stronie, ale wyższy standard całego pobytu.
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
