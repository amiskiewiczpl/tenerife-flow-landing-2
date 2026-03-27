import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/content'

export function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Jak to działa"
          title="Prosty proces od pierwszego kontaktu do wsparcia na miejscu"
          description="Cała współpraca ma być czytelna, spokojna i łatwa do zrozumienia już przy pierwszym wejściu na stronę."
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
