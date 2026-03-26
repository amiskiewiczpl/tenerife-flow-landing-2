import { SectionHeading } from '../components/SectionHeading'
import { socialProofEntries } from '../data/content'

export function SocialProofSection() {
  return (
    <section className="section social-proof-section" id="social-proof">
      <div className="container">
        <SectionHeading
          eyebrow="Opinie / social proof"
          title="Miejsce na prawdziwe historie klientów i obraz dopracowanych pobytów"
          description="Układ jest przygotowany na realne rekomendacje, zdjęcia i krótkie podsumowania doświadczeń. Bez slidera, bez krzykliwego efektu, bez utraty wiarygodności."
        />

        <div className="social-proof-grid">
          {socialProofEntries.map((entry, index) => (
            <article
              className={`social-proof-card social-proof-card-${index + 1}`}
              key={`${entry.name}-${index}`}
            >
              <div className="social-proof-media">
                <img src={entry.image} alt={entry.meta} />
              </div>
              <div className="social-proof-copy">
                <span className="social-proof-meta">{entry.meta}</span>
                <p className="social-proof-quote">"{entry.quote}"</p>
                <p className="social-proof-name">{entry.name}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
