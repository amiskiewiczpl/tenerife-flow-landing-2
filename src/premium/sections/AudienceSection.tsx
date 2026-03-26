import { SectionHeading } from '../components/SectionHeading'
import { audienceCards } from '../data/content'

export function AudienceSection() {
  return (
    <section className="section" id="audience">
      <div className="container split-section split-section-reverse">
        <SectionHeading
          eyebrow="Dla kogo"
          title="Dla kogo tworzymy takie pobyty?"
          description="Każdy scenariusz budujemy inaczej, ale zawsze wokół jakości, wygody i spokojnej organizacji."
        />

        <div className="editorial-list">
          {audienceCards.map((card) => (
            <article className="editorial-row" key={card.title}>
              <span className="card-accent">{card.accent}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
