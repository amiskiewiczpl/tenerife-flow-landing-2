import { SectionHeading } from '../components/SectionHeading'
import { aboutHighlights } from '../data/content'

const shortAboutCopy = [
  'Tworzymy butikowy concierge travel service dla klientów, którzy cenią wygodę i dobrą selekcję.',
  'Teneryfa daje ocean, klimat i jakość życia, ale tylko dobrze wybrana potrafi naprawdę zachwycić.',
  'Najpierw porządkujemy potrzeby, potem projektujemy pobyt i przechodzimy do realizacji.',
]

export function AboutSection() {
  const featuredHighlights = aboutHighlights.slice(0, 3)

  return (
    <section className="section about-section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="O nas"
            title="Butikowo, lokalnie i z naciskiem na jakość całego doświadczenia."
            description="Na homepage zostawiamy tylko najważniejszy kontekst. Szersze zaplecze, partnerów i pełniejsze story rozwijamy na podstronach."
          />

          <div className="about-signature">
            <span className="eyebrow">Short version</span>
            <p>
              Jesteśmy zespołem, który łączy znajomość wyspy, wyczucie jakości i
              concierge mindset. To wystarczy, żeby wiedzieć, czy chcemy dalej
              rozmawiać o Twoim pobycie.
            </p>
          </div>

          <div className="about-cta">
            <a className="button button-secondary" href={`${import.meta.env.BASE_URL}partners.html`}>
              Zobacz partnerów i zaplecze
            </a>
          </div>
        </div>

        <div className="about-highlights">
          {featuredHighlights.map((item, index) => (
            <article className="about-highlight-card" key={item.title}>
              <span className="about-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{shortAboutCopy[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
