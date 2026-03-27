import { SectionHeading } from '../components/SectionHeading'
import { packageCards } from '../data/content'

export function PackagesSection() {
  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow="Pakiety"
          title="Wybierz poziom wsparcia, który najlepiej pasuje do Twojego pobytu"
          description="Trzy klarowne pakiety, równo zbudowane i łatwe do porównania. Różnią się zakresem opieki, ale każdy prowadzi do spokojniejszego wyjazdu."
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
                  {item.benefits.map((benefit) => (
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
      </div>
    </section>
  )
}
