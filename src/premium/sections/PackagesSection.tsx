import { SectionHeading } from '../components/SectionHeading'
import { packageCards } from '../data/content'

export function PackagesSection() {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow="Pakiety"
          title="Trzy poziomy wsparcia. Jeden cel: lepszy pobyt i mniej decyzji po Twojej stronie."
          description="Na homepage pokazujemy tylko zakres. Szczegóły dopasowujemy już w rozmowie, bo każdy pobyt wymaga innego poziomu concierge."
        />

        <div className="package-grid package-grid-sales">
          {packageCards.map((item) => (
            <article
              className={`package-card package-card-sales ${item.featured ? 'package-card-featured' : ''}`}
              key={item.name}
            >
              {item.featured ? <span className="package-recommended">Rekomendowany</span> : null}

              <div className="package-header">
                <div className="package-heading-block">
                  <span className="package-label">{item.label}</span>
                  <h3>{item.name}</h3>
                </div>
                <span className="package-price">{item.price}</span>
              </div>

              <div className="package-copy-block">
                <p className="package-forwho">{item.forWho}</p>
                <p className="package-description">{item.description}</p>

                <ul className="package-benefits package-benefits-list">
                  {item.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <a
                className={`button package-cta ${item.featured ? 'button-primary' : 'button-secondary'}`}
                href={`${import.meta.env.BASE_URL}contact.html`}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="contact-submit-row">
          <p>
            Nie wiesz, który pakiet wybrać? Wystarczy krótki brief, a dobierzemy
            właściwy model współpracy.
          </p>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}contact.html`}>
            Przejdź do kontaktu
          </a>
        </div>
      </div>
    </section>
  )
}
