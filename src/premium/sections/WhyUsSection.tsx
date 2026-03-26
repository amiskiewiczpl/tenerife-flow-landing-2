import { SectionHeading } from '../components/SectionHeading'
import { reasonCards } from '../data/content'

export function WhyUsSection() {
  return (
    <section className="section section-soft" id="why-us">
      <div className="container split-section">
        <SectionHeading
          eyebrow="Dlaczego my"
          title="Nie sprzedajemy przypadkowych wakacji. Projektujemy pobyt tak, żeby naprawdę pasował do Ciebie."
          description="To bardziej prywatna organizacja doświadczenia niż zwykła sprzedaż wyjazdu."
        />

        <div className="reason-grid editorial-grid">
          {reasonCards.map((reason, index) => (
            <article className="reason-card" key={reason}>
              <span className="reason-index">0{index + 1}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
