import { SectionHeading } from '../components/SectionHeading'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'O nas',
    title: 'Butikowo, lokalnie i z naciskiem na jakość całego doświadczenia.',
    description:
      'Na homepage zostawiamy tylko najważniejszy kontekst. Szersze zaplecze, partnerów i pełniejsze story rozwijamy na podstronach.',
    noteEyebrow: 'Short version',
    note:
      'Jesteśmy zespołem, który łączy znajomość wyspy, wyczucie jakości i concierge mindset. To wystarczy, żeby wiedzieć, czy chcemy dalej rozmawiać o Twoim pobycie.',
    cta: 'Zobacz partnerów i zaplecze',
    highlights: [
      {
        title: 'Kim jesteśmy',
        text: 'Tworzymy butikowy concierge travel service dla klientów, którzy cenią wygodę i dobrą selekcję.',
      },
      {
        title: 'Dlaczego Teneryfa',
        text: 'Teneryfa daje ocean, klimat i jakość życia, ale tylko dobrze wybrana potrafi naprawdę zachwycić.',
      },
      {
        title: 'Jak pracujemy',
        text: 'Najpierw porządkujemy potrzeby, potem projektujemy pobyt i przechodzimy do realizacji.',
      },
    ],
  },
  en: {
    eyebrow: 'About us',
    title: 'Boutique, local and focused on the quality of the whole experience.',
    description:
      'On the homepage we keep only the key context. The wider background, partners and fuller story live on subpages.',
    noteEyebrow: 'Short version',
    note:
      'We are a team that combines island knowledge, taste and a concierge mindset. That is enough to know whether we should continue the conversation about your stay.',
    cta: 'See partners and network',
    highlights: [
      {
        title: 'Who we are',
        text: 'We run a boutique concierge travel service for clients who value comfort and strong curation.',
      },
      {
        title: 'Why Tenerife',
        text: 'Tenerife offers ocean, climate and lifestyle, but only when chosen well does it truly impress.',
      },
      {
        title: 'How we work',
        text: 'First we organise needs, then we design the stay and move into delivery.',
      },
    ],
  },
  es: {
    eyebrow: 'Sobre nosotros',
    title: 'Boutique, local y centrado en la calidad de toda la experiencia.',
    description:
      'En la home dejamos solo el contexto clave. La red completa, los partners y la historia ampliada viven en las subpáginas.',
    noteEyebrow: 'Short version',
    note:
      'Somos un equipo que combina conocimiento de la isla, criterio estético y mentalidad concierge. Eso basta para saber si merece la pena seguir hablando de tu estancia.',
    cta: 'Ver partners y red local',
    highlights: [
      {
        title: 'Quiénes somos',
        text: 'Llevamos un servicio boutique de concierge travel para clientes que valoran comodidad y buena selección.',
      },
      {
        title: 'Por qué Tenerife',
        text: 'Tenerife ofrece océano, clima y estilo de vida, pero solo cuando se elige bien impresiona de verdad.',
      },
      {
        title: 'Cómo trabajamos',
        text: 'Primero ordenamos necesidades, después diseñamos la estancia y pasamos a la ejecución.',
      },
    ],
  },
} as const

export function AboutSection() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <section className="section about-section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="about-signature">
            <span className="eyebrow">{content.noteEyebrow}</span>
            <p>{content.note}</p>
          </div>

          <div className="about-cta">
            <a
              className="button button-secondary"
              href={withLocale(`${baseUrl}partners.html`, locale)}
            >
              {content.cta}
            </a>
          </div>
        </div>

        <div className="about-highlights">
          {content.highlights.map((item, index) => (
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
