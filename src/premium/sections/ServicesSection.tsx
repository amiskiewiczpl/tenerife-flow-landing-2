import { SectionHeading } from '../components/SectionHeading'
import { serviceCards } from '../data/content'

export function ServicesSection() {
  return (
    <section className="section section-soft" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="Zakres usługi"
          title="Co dokładnie robimy"
          description="Pokazujemy konkretny zakres wsparcia bez mgły, bez ogólników i bez ściany tekstu."
        />

        <div className="service-stack">
          {serviceCards.map((card, index) => (
            <article
              className={`service-feature ${index % 2 === 1 ? 'service-feature-reverse' : ''}`}
              key={card.title}
            >
              <div className="service-feature-copy">
                <span className="service-index">0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              <ul className="service-feature-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
