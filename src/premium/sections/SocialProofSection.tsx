import { SectionHeading } from '../components/SectionHeading'
import { caseStudies } from '../data/content'

export function SocialProofSection() {
  return (
    <section className="section social-proof-section" id="social-proof">
      <div className="container">
        <SectionHeading
          eyebrow="Historie klientów i opinie"
          title="Trzy krótkie historie pokazujące, jak wygląda dobrze poprowadzony pobyt"
          description="To nie są tylko cytaty. Każda historia pokazuje sytuację wyjściową, nasze podejście i efekt końcowy, który klient realnie odczuwa."
        />

        <div className="social-proof-grid">
          {caseStudies.map((entry, index) => (
            <article
              className={`social-proof-card social-proof-card-${index + 1}`}
              key={entry.title}
            >
              <div className="social-proof-media">
                <img src={entry.image} alt={entry.client} />
              </div>
              <div className="social-proof-copy">
                <span className="social-proof-meta">{entry.client}</span>
                <h3>{entry.title}</h3>
                <p className="social-proof-detail">
                  <strong>Sytuacja:</strong> {entry.challenge}
                </p>
                <p className="social-proof-detail">
                  <strong>Nasze podejście:</strong> {entry.solution}
                </p>
                <p className="social-proof-name">
                  <strong>Efekt:</strong> {entry.result}
                </p>
                <div className="social-proof-quote-box">
                  <span className="social-proof-quote-label">Opinia klienta</span>
                  <p className="social-proof-quote">„{entry.quote}”</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
