import { SectionHeading } from '../components/SectionHeading'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Dlaczego my',
    title: 'Nie sprzedajemy listy atrakcji. Projektujemy spójny pobyt premium.',
    description:
      'Dlatego filtrujemy wybory, skracamy proces i pokazujemy tylko te opcje, które naprawdę pasują do klienta.',
    noteEyebrow: 'Premium, but practical',
    note:
      'Premium oznacza dla nas mniej przypadkowych decyzji, lepszą selekcję i większy spokój od pierwszej rozmowy do pobytu na wyspie.',
    cta: 'Porozmawiajmy o Twoim pobycie',
    points: [
      {
        title: 'Indywidualne podejście',
        text: 'Zaczynamy od klienta i jego stylu pobytu, nie od gotowego szablonu sprzedażowego.',
      },
      {
        title: 'Sprawdzone miejsca i kontakty',
        text: 'Polecamy tylko te miejsca i partnerów, które utrzymują właściwy standard obsługi.',
      },
      {
        title: 'Lokalna znajomość Teneryfy',
        text: 'Znamy Teneryfę praktycznie, więc oszczędzamy czas i eliminujemy nietrafione wybory.',
      },
    ],
  },
  en: {
    eyebrow: 'Why us',
    title: 'We do not sell a list of attractions. We design a coherent premium stay.',
    description:
      'That is why we filter choices, shorten the process and show only options that genuinely fit the client.',
    noteEyebrow: 'Premium, but practical',
    note:
      'For us, premium means fewer random decisions, better selection and more calm from the first conversation to the stay itself.',
    cta: 'Let’s talk about your stay',
    points: [
      {
        title: 'Personal approach',
        text: 'We start with the client and their travel style, not with a ready-made sales template.',
      },
      {
        title: 'Tested places and contacts',
        text: 'We recommend only the places and partners that keep the right service standard.',
      },
      {
        title: 'Local Tenerife knowledge',
        text: 'We know Tenerife in practice, so we save time and remove poor choices.',
      },
    ],
  },
  es: {
    eyebrow: 'Por qué nosotros',
    title: 'No vendemos una lista de atracciones. Diseñamos una estancia premium coherente.',
    description:
      'Por eso filtramos opciones, acortamos el proceso y mostramos solo las alternativas que realmente encajan con el cliente.',
    noteEyebrow: 'Premium, but practical',
    note:
      'Para nosotros, premium significa menos decisiones aleatorias, mejor selección y más calma desde la primera conversación hasta la estancia.',
    cta: 'Hablemos de tu estancia',
    points: [
      {
        title: 'Enfoque personal',
        text: 'Empezamos con el cliente y su estilo de viaje, no con una plantilla comercial prefabricada.',
      },
      {
        title: 'Lugares y contactos probados',
        text: 'Recomendamos solo lugares y partners que mantienen el nivel correcto de servicio.',
      },
      {
        title: 'Conocimiento local de Tenerife',
        text: 'Conocemos Tenerife en la práctica, así que ahorramos tiempo y evitamos malas decisiones.',
      },
    ],
  },
} as const

export function WhyUsSection() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <section className="section" id="why-us">
      <div className="container split-section">
        <div className="why-us-intro">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="why-us-note">
            <span className="eyebrow">{content.noteEyebrow}</span>
            <p>{content.note}</p>
          </div>
          <div className="why-us-cta">
            <a className="button button-secondary" href={withLocale(`${baseUrl}contact.html`, locale)}>
              {content.cta}
            </a>
          </div>
        </div>

        <div className="reason-grid editorial-grid">
          {content.points.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-index">0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
