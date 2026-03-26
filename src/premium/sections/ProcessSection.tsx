import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/content'

export function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Proces"
          title="Jak to działa"
          description="Lekko, jasno i bez zbędnych etapów."
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step}>
              <span className="process-number">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
