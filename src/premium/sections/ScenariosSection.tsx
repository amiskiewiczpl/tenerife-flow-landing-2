import { SectionHeading } from '../components/SectionHeading'
import { exampleExperienceCards } from '../data/content'

export function ScenariosSection() {
  return (
    <section className="section" id="experiences-preview">
      <div className="container">
        <SectionHeading
          eyebrow="Przykładowe doświadczenia"
          title="To zajawka możliwości, nie katalog przypadkowych atrakcji"
          description="Pokazujemy kierunek. Katamaran, Teide, guachinche, tenis, wellness czy relokacja support mają sens dopiero wtedy, gdy są częścią spójnego pobytu."
        />

        <div className="scenario-grid scenario-grid-visual scenario-grid-curated">
          {exampleExperienceCards.map((card) => (
            <article className="scenario-card scenario-card-visual" key={card.title}>
              <div className="scenario-media">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="scenario-copy">
                <span className="curated-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="scenario-section-cta">
          <a
            className="button button-secondary"
            href={`${import.meta.env.BASE_URL}experiences.html`}
          >
            Zobacz pełną podstronę doświadczeń
          </a>
        </div>
      </div>
    </section>
  )
}
