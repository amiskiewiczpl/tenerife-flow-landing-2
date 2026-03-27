import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Co organizujemy',
    title: 'Organizujemy to, co naprawdę wpływa na jakość całego pobytu',
    description:
      'Noclegi, plan pobytu, wybrane doświadczenia i wsparcie na miejscu. Resztę rozwijamy na podstronach, żeby homepage pozostał krótki i sprzedażowy.',
    categories: [
      {
        title: 'Pobyty leisure i romantic stay',
        text: 'Wyjazdy dla par i klientów premium leisure, którzy oczekują spokojnego rytmu, dobrych adresów i większej wygody od pierwszego dnia.',
      },
      {
        title: 'Curated experiences',
        text: 'Ocean, Teide, lokalne smaki, aktywność i wellness dobieramy jako część spójnego pobytu, a nie osobny katalog atrakcji.',
      },
      {
        title: 'Long stay i relokacja',
        text: 'Wspieramy również osoby planujące dłuższy pobyt, spokojny start na wyspie lub relokację czasową.',
      },
    ],
    examples: [
      'katamaran i ocean w spokojniejszym wydaniu',
      'dzień wokół Teide z dopracowaną trasą',
      'wybrane guachinche i lokalne stoły',
      'tenis, padel i aktywność wpisane w rytm pobytu',
      'wellness, fizjoterapia i regeneracja',
      'roadtripy i spokojnie poprowadzone long stay',
    ],
    cta: 'Zobacz pełną podstronę doświadczeń',
  },
  en: {
    eyebrow: 'What we organise',
    title: 'We organise what truly shapes the quality of the whole stay',
    description:
      'Accommodation, stay planning, selected experiences and on-site support. The rest is expanded on subpages so the homepage stays short and sales-focused.',
    categories: [
      {
        title: 'Leisure stays and romantic escapes',
        text: 'Trips for couples and premium leisure clients who expect a calmer rhythm, strong addresses and more comfort from day one.',
      },
      {
        title: 'Curated experiences',
        text: 'Ocean, Teide, local food, activity and wellness are selected as part of one coherent stay, not a separate catalogue of attractions.',
      },
      {
        title: 'Long stay and relocation',
        text: 'We also support clients planning a longer stay, a calmer start on the island or a temporary relocation.',
      },
    ],
    examples: [
      'catamaran and a calmer ocean experience',
      'a Teide day with a refined route',
      'selected guachinche and local tables',
      'tennis, padel and activity built into the stay rhythm',
      'wellness, physiotherapy and regeneration',
      'road trips and calmly guided long stays',
    ],
    cta: 'See the full experiences page',
  },
  es: {
    eyebrow: 'Qué organizamos',
    title: 'Organizamos lo que realmente define la calidad de toda la estancia',
    description:
      'Alojamiento, planificación de la estancia, experiencias seleccionadas y apoyo en destino. El resto se desarrolla en subpáginas para que la home siga siendo breve y comercial.',
    categories: [
      {
        title: 'Estancias leisure y escapadas románticas',
        text: 'Viajes para parejas y clientes premium leisure que esperan un ritmo más tranquilo, buenas direcciones y más comodidad desde el primer día.',
      },
      {
        title: 'Experiencias curadas',
        text: 'Océano, Teide, gastronomía local, actividad y wellness se seleccionan como parte de una estancia coherente, no como un catálogo separado.',
      },
      {
        title: 'Long stay y relocalización',
        text: 'También apoyamos a clientes que planean una estancia más larga, un inicio más tranquilo en la isla o una relocalización temporal.',
      },
    ],
    examples: [
      'catamarán y una experiencia de océano más tranquila',
      'un día en Teide con ruta cuidada',
      'guachinches seleccionados y mesas locales',
      'tenis, pádel y actividad integrados en el ritmo de la estancia',
      'wellness, fisioterapia y recuperación',
      'road trips y long stays guiados con calma',
    ],
    cta: 'Ver la página completa de experiencias',
  },
} as const

export function CuratedCategoriesSection() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <section className="section curated-section" id="offer" aria-labelledby="curated-title">
      <div className="container">
        <div className="curated-heading">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 id="curated-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="curated-grid curated-grid-compact">
          {content.categories.map((category) => (
            <article className="curated-card" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>

        <ul className="curated-example-list curated-example-list-inline">
          {content.examples.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="curated-cta">
          <a
            className="button button-secondary"
            href={withLocale(`${baseUrl}experiences.html`, locale)}
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
