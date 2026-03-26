import { SectionHeading } from '../components/SectionHeading'
import { aboutComparison, aboutHighlights } from '../data/content'

export function AboutSection() {
  return (
    <section className="section about-section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="O nas"
            title="Projektujemy pobyty jak prywatny concierge, a nie jak gotowy pakiet sprzedażowy."
            description="Jesteśmy po to, żeby uporządkować decyzje, skrócić drogę do dobrych wyborów i przeprowadzić klienta przez cały pobyt z większym spokojem."
          />

          <div className="about-comparison">
            {aboutComparison.map((item) => (
              <article className="about-comparison-card" key={item.label}>
                <span className="eyebrow">{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="about-highlights">
          {aboutHighlights.map((item, index) => (
            <article className="about-highlight-card" key={item.title}>
              <span className="about-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
