import { ResponsiveImage } from '../components/ResponsiveImage'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Partnerzy',
    title: 'Sprawdzona sieć lokalnych partnerów, którym można zaufać',
    description:
      'Współpracujemy z partnerami, którzy wspierają jakość pobytu, a nie obniżają jej przypadkową obsługą. To sieć budowana pod concierge, nie pod masową sprzedaż.',
    sectionTitle: 'Partnerzy dobrani pod wygodę, estetykę i realne zaufanie',
    sectionCopy:
      'Dzięki lokalnym relacjom możemy składać pobyty z usług, miejsc i ludzi, którzy rozumieją standard obsługi premium. To ważne przy aktywnościach, transporcie, relokacji i opiece na miejscu.',
    cta: 'Zapytaj o ten obszar wsparcia',
    partnerTypes: ['lokalni operatorzy', 'fizjoterapia i wellness', 'gastronomia', 'transport', 'aktywności premium', 'relokacja i long stay support'],
    logos: ['Ocean Circle', 'Villa Norte', 'Move Well Studio', 'Casa del Mar', 'Road Ritual', 'Island Transfer', 'Teide Paths', 'Relocate Tenerife'],
    featured: [
      ['Ocean Circle', 'Rejsy i doświadczenia na oceanie', 'Partner dla klientów, którzy chcą jakościowego czasu na wodzie, spokojnej organizacji i bardziej prywatnego charakteru doświadczenia.', 'sunset.svg'],
      ['Move Well Studio', 'Wellness i fizjoterapia', 'Wsparcie dla osób stawiających na regenerację, mobilność i dobre samopoczucie jako część luksusowego pobytu.', 'rest.svg'],
      ['Relocate Tenerife', 'Relokacja i long stay support', 'Sprawdzone wsparcie dla klientów planujących dłuższy pobyt, zmianę rytmu życia lub bardziej uporządkowany start na miejscu.', 'roadtrip.svg'],
    ],
  },
  en: {
    eyebrow: 'Partners',
    title: 'A trusted network of local partners',
    description:
      'We work with partners who support the quality of the stay instead of lowering it with random service. This network is built for concierge, not for mass sales.',
    sectionTitle: 'Partners selected for comfort, aesthetics and real trust',
    sectionCopy:
      'Thanks to local relationships, we can build stays from services, places and people who understand premium standards. This matters in activities, transport, relocation and on-site care.',
    cta: 'Ask about this support area',
    partnerTypes: ['local operators', 'physiotherapy and wellness', 'gastronomy', 'transport', 'premium activities', 'relocation and long-stay support'],
    logos: ['Ocean Circle', 'Villa Norte', 'Move Well Studio', 'Casa del Mar', 'Road Ritual', 'Island Transfer', 'Teide Paths', 'Relocate Tenerife'],
    featured: [
      ['Ocean Circle', 'Sailing and ocean experiences', 'A partner for clients who want high-quality time on the water, calm organisation and a more private experience.', 'sunset.svg'],
      ['Move Well Studio', 'Wellness and physiotherapy', 'Support for people who value recovery, mobility and wellbeing as part of a premium stay.', 'rest.svg'],
      ['Relocate Tenerife', 'Relocation and long-stay support', 'Trusted support for clients planning a longer stay, a life-rhythm change or a more organised start on the island.', 'roadtrip.svg'],
    ],
  },
  es: {
    eyebrow: 'Partners',
    title: 'Una red fiable de partners locales',
    description:
      'Trabajamos con partners que elevan la calidad de la estancia en lugar de reducirla con un servicio aleatorio. Es una red creada para concierge, no para venta masiva.',
    sectionTitle: 'Partners elegidos por comodidad, estética y confianza real',
    sectionCopy:
      'Gracias a relaciones locales podemos construir estancias con servicios, lugares y personas que entienden el estándar premium. Eso importa en actividades, transporte, relocalización y apoyo en destino.',
    cta: 'Preguntar por esta área de apoyo',
    partnerTypes: ['operadores locales', 'fisioterapia y wellness', 'gastronomía', 'transporte', 'actividades premium', 'relocalización y apoyo long stay'],
    logos: ['Ocean Circle', 'Villa Norte', 'Move Well Studio', 'Casa del Mar', 'Road Ritual', 'Island Transfer', 'Teide Paths', 'Relocate Tenerife'],
    featured: [
      ['Ocean Circle', 'Salidas y experiencias en el océano', 'Partner para clientes que quieren tiempo de calidad en el agua, una organización tranquila y una experiencia más privada.', 'sunset.svg'],
      ['Move Well Studio', 'Wellness y fisioterapia', 'Apoyo para personas que valoran recuperación, movilidad y bienestar como parte de una estancia premium.', 'rest.svg'],
      ['Relocate Tenerife', 'Relocalización y apoyo long stay', 'Apoyo fiable para clientes que planean una estancia más larga, un cambio de ritmo de vida o un inicio más ordenado en la isla.', 'roadtrip.svg'],
    ],
  },
} as const

export function PartnersPage() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
          </div>
        </section>

        <section className="section partners-page">
          <div className="container partners-intro-grid">
            <div>
              <h2>{content.sectionTitle}</h2>
            </div>
            <div>
              <p>{content.sectionCopy}</p>
              <ul className="pill-list">
                {content.partnerTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container partners-logo-grid">
            {content.logos.map((logo) => (
              <div className="partner-logo-card" key={logo}>
                <span>{logo}</span>
              </div>
            ))}
          </div>

          <div className="container featured-partners-stack">
            {content.featured.map(([name, type, description, image]) => (
              <article className="featured-partner" key={name}>
                <div className="featured-partner-visual">
                  <ResponsiveImage
                    src={`${baseUrl}images/${image}`}
                    alt={name}
                    loading="lazy"
                    sizes="(max-width: 979px) 100vw, 46vw"
                    objectPosition="center center"
                  />
                </div>
                <div className="featured-partner-copy">
                  <span className="eyebrow">{type}</span>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a className="button button-secondary" href={withLocale(`${baseUrl}contact.html`, locale)}>
                    {content.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
