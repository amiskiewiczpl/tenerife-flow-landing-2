import { SectionHeading } from '../components/SectionHeading'
import { whyUsPoints } from '../data/content'

const shortReasonCopy = [
  'Zaczynamy od klienta i jego stylu pobytu, nie od gotowego szablonu sprzedażowego.',
  'Polecamy tylko te miejsca i partnerów, które utrzymują właściwy standard obsługi.',
  'Znamy Teneryfę praktycznie, więc oszczędzamy czas i eliminujemy nietrafione wybory.',
]

export function WhyUsSection() {
  const featuredReasons = whyUsPoints.slice(0, 3)

  return (
    <section className="section" id="why-us">
      <div className="container split-section">
        <div className="why-us-intro">
          <SectionHeading
            eyebrow="Dlaczego my"
            title="Nie sprzedajemy listy atrakcji. Projektujemy spójny pobyt premium."
            description="Dlatego filtrujemy wybory, skracamy proces i pokazujemy tylko te opcje, które naprawdę pasują do klienta."
          />
          <div className="why-us-note">
            <span className="eyebrow">Premium, but practical</span>
            <p>
              Premium oznacza dla nas mniej przypadkowych decyzji, lepszą selekcję i
              większy spokój od pierwszej rozmowy do pobytu na wyspie.
            </p>
          </div>
          <div className="why-us-cta">
            <a className="button button-secondary" href={`${import.meta.env.BASE_URL}contact.html`}>
              Porozmawiajmy o Twoim pobycie
            </a>
          </div>
        </div>

        <div className="reason-grid editorial-grid">
          {featuredReasons.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-index">0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{shortReasonCopy[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
