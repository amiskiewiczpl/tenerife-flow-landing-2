import { ResponsiveImage } from '../components/ResponsiveImage'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Artykuły i przewodniki',
    title: 'Przewodniki, inspiracje i praktyczne treści o Teneryfie',
    description:
      'Ta sekcja jest przygotowana pod SEO i przyszłą rozbudowę contentową. Łączy curated wiedzę o wyspie z tematami, które realnie pomagają klientom lepiej zaplanować pobyt.',
    featuredBadge: 'Featured article',
    sectionTitle: 'Tematy, które realnie pomagają lepiej zaplanować pobyt',
    sectionCopy:
      'Od atrakcji i noclegów po long stay, Teide i lokalne doświadczenia. Układ jest gotowy pod dalszą rozbudowę bloga i przewodników.',
    articleLabel: 'Przewodnik',
    ctaEyebrow: 'Konsultacja',
    ctaTitle: 'Chcesz dopasować pobyt do swojego stylu, zamiast składać go samodzielnie?',
    ctaDescription:
      'Jeśli po lekturze wiesz już więcej o Teneryfie, następnym krokiem może być spokojna konsultacja i dobranie najlepszego modelu concierge.',
    cta: 'Przejdź do kontaktu',
    categories: ['Atrakcje', 'Noclegi', 'Planowanie pobytu', 'Pary', 'Aktywnie', 'Long stay'],
    featured: ['Top 10 atrakcji na Teneryfie, które naprawdę warto wpisać do dobrze zaplanowanego pobytu', 'Nie każda atrakcja na Teneryfie daje ten sam poziom doświadczenia. Pokazujemy, co naprawdę warto wybrać, jeśli zależy Ci na jakości, rytmie i sensownie ułożonym planie.', 'Atrakcje', '8 min czytania', 'sunset.svg'],
    articles: [
      ['Top 10 atrakcji na Teneryfie', 'Miejsca i doświadczenia, które warto wybrać, jeśli chcesz zobaczyć wyspę w bardziej jakościowy sposób.', 'Atrakcje', '7 min', 'sunset.svg'],
      ['Top 10 lokalizacji na pobyt', 'Które części Teneryfy najlepiej pasują do slow leisure, relaksu, aktywności albo dłuższego pobytu.', 'Noclegi', '6 min', 'roadtrip.svg'],
      ['Must do na Teneryfie', 'Subiektywna selekcja doświadczeń, które naprawdę zostają w pamięci i dobrze wpisują się w pobyt premium.', 'Atrakcje', '5 min', 'dining.svg'],
      ['Gdzie spać na Teneryfie w zależności od stylu pobytu', 'Północ, południe, quiet villas czy miejsca bliżej życia wyspy. Przewodnik po wyborze lokalizacji.', 'Noclegi', '8 min', 'rest.svg'],
      ['Teide: jak zaplanować wyjazd', 'Jak zaplanować dzień wokół Teide tak, żeby był wygodny, estetyczny i dobrze wpisany w cały pobyt.', 'Planowanie pobytu', '6 min', 'roadtrip.svg'],
      ['Katamaran, guachinche, wellness i lokalne doświadczenia', 'Jak połączyć ocean, smaki wyspy i regenerację w jednym sensownie zaprojektowanym pobycie.', 'Planowanie pobytu', '7 min', 'dining.svg'],
    ],
  },
  en: {
    eyebrow: 'Articles and guides',
    title: 'Guides, inspiration and practical Tenerife content',
    description:
      'This section is prepared for SEO and future content expansion. It combines curated island knowledge with topics that genuinely help clients plan a better stay.',
    featuredBadge: 'Featured article',
    sectionTitle: 'Topics that genuinely help you plan a better stay',
    sectionCopy:
      'From attractions and accommodation to long stay, Teide and local experiences. The layout is ready for future blog and guide expansion.',
    articleLabel: 'Guide',
    ctaEyebrow: 'Consultation',
    ctaTitle: 'Want to shape the stay around your style instead of building it alone?',
    ctaDescription:
      'If the reading already helped you understand Tenerife better, the next step can be a calm consultation and the right concierge model.',
    cta: 'Go to contact',
    categories: ['Attractions', 'Accommodation', 'Stay planning', 'Couples', 'Active', 'Long stay'],
    featured: ['Top 10 Tenerife attractions that truly deserve a place in a well-planned stay', 'Not every attraction in Tenerife delivers the same quality of experience. We show what is genuinely worth choosing when rhythm, quality and a coherent plan matter.', 'Attractions', '8 min read', 'sunset.svg'],
    articles: [
      ['Top 10 attractions in Tenerife', 'Places and experiences worth choosing if you want to see the island in a more refined way.', 'Attractions', '7 min', 'sunset.svg'],
      ['Top 10 areas to stay in', 'Which parts of Tenerife best fit slow leisure, relaxation, activity or a longer stay.', 'Accommodation', '6 min', 'roadtrip.svg'],
      ['Must-do experiences in Tenerife', 'A subjective selection of experiences that truly stay with you and fit a premium stay.', 'Attractions', '5 min', 'dining.svg'],
      ['Where to stay in Tenerife depending on your travel style', 'North, south, quiet villas or places closer to local life. A guide to choosing the right area.', 'Accommodation', '8 min', 'rest.svg'],
      ['Teide: how to plan the day', 'How to plan a Teide day so it feels comfortable, aesthetic and well integrated into the whole stay.', 'Stay planning', '6 min', 'roadtrip.svg'],
      ['Catamaran, guachinche, wellness and local experiences', 'How to combine ocean, island flavours and recovery into one well-designed stay.', 'Stay planning', '7 min', 'dining.svg'],
    ],
  },
  es: {
    eyebrow: 'Artículos y guías',
    title: 'Guías, inspiración y contenido práctico sobre Tenerife',
    description:
      'Esta sección está preparada para SEO y una futura expansión de contenido. Combina conocimiento curado de la isla con temas que realmente ayudan a planificar mejor la estancia.',
    featuredBadge: 'Artículo destacado',
    sectionTitle: 'Temas que realmente ayudan a planificar una mejor estancia',
    sectionCopy:
      'Desde atracciones y alojamiento hasta long stay, Teide y experiencias locales. La estructura está lista para ampliar blog y guías.',
    articleLabel: 'Guía',
    ctaEyebrow: 'Consulta',
    ctaTitle: '¿Quieres adaptar la estancia a tu estilo en lugar de montarla tú solo?',
    ctaDescription:
      'Si la lectura ya te ayudó a entender mejor Tenerife, el siguiente paso puede ser una consulta tranquila y el modelo de concierge adecuado.',
    cta: 'Ir al contacto',
    categories: ['Atracciones', 'Alojamiento', 'Planificación', 'Parejas', 'Activo', 'Long stay'],
    featured: ['Top 10 atracciones de Tenerife que realmente merecen estar en una estancia bien planificada', 'No todas las atracciones de Tenerife ofrecen la misma calidad de experiencia. Mostramos qué vale realmente la pena elegir cuando importan el ritmo, la calidad y un plan coherente.', 'Atracciones', '8 min de lectura', 'sunset.svg'],
    articles: [
      ['Top 10 atracciones en Tenerife', 'Lugares y experiencias que merece la pena elegir si quieres ver la isla de una forma más cuidada.', 'Atracciones', '7 min', 'sunset.svg'],
      ['Top 10 zonas donde alojarse', 'Qué partes de Tenerife encajan mejor con slow leisure, relax, actividad o una estancia más larga.', 'Alojamiento', '6 min', 'roadtrip.svg'],
      ['Must do en Tenerife', 'Una selección subjetiva de experiencias que realmente dejan huella y encajan bien en una estancia premium.', 'Atracciones', '5 min', 'dining.svg'],
      ['Dónde dormir en Tenerife según tu estilo de estancia', 'Norte, sur, quiet villas o zonas más cercanas a la vida local. Guía para elegir la ubicación adecuada.', 'Alojamiento', '8 min', 'rest.svg'],
      ['Teide: cómo planificar la jornada', 'Cómo planificar un día en Teide para que sea cómodo, estético y esté bien integrado en toda la estancia.', 'Planificación', '6 min', 'roadtrip.svg'],
      ['Catamarán, guachinche, wellness y experiencias locales', 'Cómo unir océano, sabores de la isla y recuperación en una estancia bien diseñada.', 'Planificación', '7 min', 'dining.svg'],
    ],
  },
} as const

export function ArticlesPage() {
  const locale = getLocale()
  const content = copy[locale]
  const [featuredTitle, featuredExcerpt, featuredCategory, featuredReadTime, featuredImage] =
    content.featured

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

        <section className="section articles-page">
          <div className="container articles-featured">
            <div className="articles-featured-media">
              <ResponsiveImage
                src={`${baseUrl}images/${featuredImage}`}
                alt={featuredTitle}
                loading="lazy"
                sizes="(max-width: 979px) 100vw, 46vw"
                objectPosition="center center"
              />
            </div>
            <div className="articles-featured-copy">
              <span className="curated-tag">{featuredCategory}</span>
              <h2>{featuredTitle}</h2>
              <p>{featuredExcerpt}</p>
              <div className="articles-meta-row">
                <span>{featuredReadTime}</span>
                <span>{content.featuredBadge}</span>
              </div>
            </div>
          </div>

          <div className="container articles-toolbar">
            <div className="articles-toolbar-copy">
              <h2>{content.sectionTitle}</h2>
              <p>{content.sectionCopy}</p>
            </div>
            <ul className="pill-list">
              {content.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="container articles-grid">
            {content.articles.map(([title, excerpt, category, readTime, image]) => (
              <article className="article-card" key={title}>
                <div className="article-card-media">
                  <ResponsiveImage
                    src={`${baseUrl}images/${image}`}
                    alt={title}
                    loading="lazy"
                    sizes="(max-width: 719px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    objectPosition="center center"
                  />
                </div>
                <div className="article-card-copy">
                  <span className="curated-tag">{category}</span>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <div className="articles-meta-row">
                    <span>{readTime}</span>
                    <span>{content.articleLabel}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="container subpage-cta">
            <div className="subpage-cta-box">
              <span className="eyebrow">{content.ctaEyebrow}</span>
              <h2>{content.ctaTitle}</h2>
              <p>{content.ctaDescription}</p>
              <a className="button button-primary" href={withLocale(`${baseUrl}contact.html`, locale)}>
                {content.cta}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
