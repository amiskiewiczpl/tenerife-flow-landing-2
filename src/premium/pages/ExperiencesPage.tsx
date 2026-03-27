import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Doświadczenia',
    title: 'Curated premium experiences na Teneryfie',
    description:
      'Nie pokazujemy katalogu atrakcji. Pokazujemy doświadczenia, które mogą stać się częścią dopracowanego pobytu: estetycznie, logistycznie i jakościowo.',
    ctaEyebrow: 'Konsultacja',
    ctaTitle: 'Powiedz nam, jaki klimat pobytu chcesz zbudować.',
    ctaDescription:
      'Dobierzemy doświadczenia tak, żeby wspierały cały pobyt, zamiast rozbijać go na przypadkowe punkty.',
    cta: 'Umów konsultację',
    categories: [
      'Pobyty leisure i romantic stay',
      'Curated experiences',
      'Long stay i relokacja',
    ],
    cards: [
      ['Katamaran i spokojne wyjście na ocean', 'Doświadczenie dla osób, które szukają jakościowego czasu na wodzie, a nie zatłoczonej atrakcji.', 'Ocean i rejsy', 'sunset.svg'],
      ['Padel, tenis i aktywność w dobrym rytmie', 'Dobieramy miejsca i partnerów tak, by aktywność była częścią dobrze zaprojektowanego pobytu.', 'Sport i aktywność', 'premium-activity.svg'],
      ['Teide i curated nature day', 'Wyprawy planowane z wyczuciem komfortu, warunków i jakości doświadczenia zamiast przypadkowego researchu.', 'Teide i natura', 'roadtrip.svg'],
      ['Guachinche i lokalne smaki wyspy', 'Wybrane adresy, które dają prawdziwy klimat miejsca bez przepychania Cię przez przypadkowe listy.', 'Smaki wyspy', 'dining.svg'],
      ['Fizjoterapia, wellness i regeneracja', 'Wspieramy relaks, mobilność i powrót do energii przez sprawdzone usługi premium i spokojną organizację.', 'Wellness i regeneracja', 'rest.svg'],
      ['Roadtripy prowadzone przez widok i atmosferę', 'Trasy i postoje układamy tak, by dzień miał klimat, płynność i odpowiedni poziom estetyki.', 'Roadtrip', 'hidden-spots.svg'],
    ],
  },
  en: {
    eyebrow: 'Experiences',
    title: 'Curated premium experiences in Tenerife',
    description:
      'We do not show a catalogue of attractions. We show experiences that can become part of a refined stay in aesthetic, logistical and quality terms.',
    ctaEyebrow: 'Consultation',
    ctaTitle: 'Tell us what kind of stay atmosphere you want to build.',
    ctaDescription:
      'We will choose experiences so they support the whole stay instead of breaking it into random points.',
    cta: 'Book a consultation',
    categories: ['Leisure stays and romantic escapes', 'Curated experiences', 'Long stay and relocation'],
    cards: [
      ['Catamaran and a calmer ocean outing', 'An experience for people looking for quality time on the water, not a crowded attraction.', 'Ocean and sailing', 'sunset.svg'],
      ['Padel, tennis and activity in the right rhythm', 'We match places and partners so activity becomes part of a well-designed stay.', 'Sport and activity', 'premium-activity.svg'],
      ['Teide and a curated nature day', 'Trips planned with comfort, conditions and experience quality in mind instead of random research.', 'Teide and nature', 'roadtrip.svg'],
      ['Guachinche and local island flavours', 'Selected addresses that give a real sense of place without pushing you through random lists.', 'Island flavours', 'dining.svg'],
      ['Physiotherapy, wellness and regeneration', 'We support relaxation, mobility and energy recovery through trusted premium services and calm organisation.', 'Wellness and recovery', 'rest.svg'],
      ['Road trips guided by views and atmosphere', 'Routes and stops are arranged so the day has flow, atmosphere and the right visual quality.', 'Road trip', 'hidden-spots.svg'],
    ],
  },
  es: {
    eyebrow: 'Experiencias',
    title: 'Experiencias premium curadas en Tenerife',
    description:
      'No mostramos un catálogo de atracciones. Mostramos experiencias que pueden formar parte de una estancia cuidada en términos de estética, logística y calidad.',
    ctaEyebrow: 'Consulta',
    ctaTitle: 'Cuéntanos qué tipo de estancia quieres construir.',
    ctaDescription:
      'Elegiremos experiencias para que apoyen toda la estancia en lugar de romperla en puntos aleatorios.',
    cta: 'Reservar consulta',
    categories: ['Leisure y escapadas románticas', 'Experiencias curadas', 'Long stay y relocalización'],
    cards: [
      ['Catamarán y una salida más tranquila al océano', 'Una experiencia para quienes buscan tiempo de calidad en el agua y no una atracción masificada.', 'Océano y salidas', 'sunset.svg'],
      ['Pádel, tenis y actividad con el ritmo adecuado', 'Seleccionamos lugares y partners para que la actividad forme parte de una estancia bien diseñada.', 'Deporte y actividad', 'premium-activity.svg'],
      ['Teide y un curated nature day', 'Excursiones planificadas con criterio de confort, condiciones y calidad de experiencia, no con research aleatorio.', 'Teide y naturaleza', 'roadtrip.svg'],
      ['Guachinches y sabores locales de la isla', 'Direcciones seleccionadas que dan una sensación real de lugar sin empujarte por listas aleatorias.', 'Sabores de la isla', 'dining.svg'],
      ['Fisioterapia, wellness y recuperación', 'Apoyamos el descanso, la movilidad y la vuelta a la energía mediante servicios premium fiables y una organización tranquila.', 'Wellness y recuperación', 'rest.svg'],
      ['Road trips guiados por paisaje y atmósfera', 'Diseñamos rutas y paradas para que el día tenga fluidez, atmósfera y el nivel visual adecuado.', 'Road trip', 'hidden-spots.svg'],
    ],
  },
} as const

export function ExperiencesPage() {
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

        <section className="section experiences-page">
          <div className="container experiences-intro">
            <ul className="pill-list">
              {content.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="container experiences-grid">
            {content.cards.map(([title, description, tag, image]) => (
              <article className="experience-card" key={title}>
                <div className="experience-card-image">
                  <img src={`${baseUrl}images/${image}`} alt={title} />
                  <span className="experience-tag">{tag}</span>
                </div>
                <div className="experience-card-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
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
