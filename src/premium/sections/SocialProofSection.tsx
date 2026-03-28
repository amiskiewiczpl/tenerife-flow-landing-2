import { ResponsiveImage } from '../components/ResponsiveImage'
import { SectionHeading } from '../components/SectionHeading'
import { getLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Historie i opinie',
    title: 'Trzy krótkie historie, które pokazują efekt dobrze poprowadzonego pobytu',
    description:
      'To świadomy skrót. Pełne case studies nie są potrzebne na homepage, jeśli decyzję o kontakcie da się podjąć szybciej.',
    quoteLabel: 'Opinia klienta',
    resultLabel: 'Efekt',
    stories: [
      {
        title: 'Para premium leisure',
        client: '5 dni na Teneryfie',
        image: `${baseUrl}images/sunset.svg`,
        summary:
          'Para chciała jakościowego wyjazdu dla dwojga bez samodzielnego składania wszystkiego od zera.',
        result: 'spójny, lekki wyjazd z właściwym rytmem od pierwszego dnia.',
        quote:
          'Weszliśmy w wyjazd bez stresu i bez potrzeby dopinania wszystkiego samemu.',
      },
      {
        title: 'Aktywny pobyt z klasą',
        client: 'sport, wellness i slow leisure',
        image: `${baseUrl}images/rest.svg`,
        summary:
          'Klient szukał pobytu łączącego aktywność, regenerację i dobre adresy bez przeładowania planu.',
        result: 'aktywny pobyt premium, w którym wszystko miało sens jako całość.',
        quote: 'Nic nie było przypadkowe. Całość oszczędziła nam czas i energię.',
      },
      {
        title: 'Relokacja i dłuższy pobyt',
        client: 'long stay i spokojny start na wyspie',
        image: `${baseUrl}images/dining.svg`,
        summary:
          'Klient potrzebował spokojnego wejścia w dłuższy pobyt i lokalnego wsparcia od pierwszych decyzji.',
        result: 'prostszy start na wyspie i mniej nietrafionych decyzji.',
        quote:
          'Dostaliśmy dokładnie to, czego potrzebowaliśmy: spokój, selekcję i lokalne wsparcie.',
      },
    ],
  },
  en: {
    eyebrow: 'Stories and testimonials',
    title: 'Three short stories that show the result of a well-managed stay',
    description:
      'This is a deliberate shortcut. Full case studies are not necessary on the homepage if the contact decision can happen faster.',
    quoteLabel: 'Client opinion',
    resultLabel: 'Effect',
    stories: [
      {
        title: 'Premium leisure couple',
        client: '5 days in Tenerife',
        image: `${baseUrl}images/sunset.svg`,
        summary:
          'The couple wanted a high-quality getaway for two without building everything by themselves.',
        result: 'a coherent and light trip with the right rhythm from day one.',
        quote:
          'We stepped into the trip without stress and without having to tie everything together ourselves.',
      },
      {
        title: 'Active stay with class',
        client: 'sport, wellness and slow leisure',
        image: `${baseUrl}images/rest.svg`,
        summary:
          'The client wanted a stay combining activity, regeneration and strong places without an overloaded plan.',
        result: 'an active premium stay in which everything made sense as a whole.',
        quote: 'Nothing felt random. The whole thing saved us time and energy.',
      },
      {
        title: 'Relocation and longer stay',
        client: 'long stay and a calmer island start',
        image: `${baseUrl}images/dining.svg`,
        summary:
          'The client needed a calmer entry into a longer stay and local support from the first decisions.',
        result: 'an easier start on the island and fewer poor choices.',
        quote: 'We got exactly what we needed: calm, selection and local support.',
      },
    ],
  },
  es: {
    eyebrow: 'Historias y opiniones',
    title: 'Tres historias cortas que muestran el efecto de una estancia bien gestionada',
    description:
      'Es un atajo deliberado. No hacen falta case studies largos en la home si la decisión de contacto puede ocurrir más rápido.',
    quoteLabel: 'Opinión del cliente',
    resultLabel: 'Resultado',
    stories: [
      {
        title: 'Pareja premium leisure',
        client: '5 días en Tenerife',
        image: `${baseUrl}images/sunset.svg`,
        summary:
          'La pareja quería una escapada de calidad para dos sin montar todo por su cuenta.',
        result: 'un viaje coherente y ligero con el ritmo adecuado desde el primer día.',
        quote: 'Entramos en el viaje sin estrés y sin tener que coordinarlo todo nosotros.',
      },
      {
        title: 'Estancia activa con estilo',
        client: 'deporte, wellness y slow leisure',
        image: `${baseUrl}images/rest.svg`,
        summary:
          'El cliente buscaba una estancia que uniera actividad, recuperación y buenos lugares sin sobrecargar el plan.',
        result: 'una estancia premium activa en la que todo tenía sentido como conjunto.',
        quote: 'Nada parecía aleatorio. Todo el conjunto nos ahorró tiempo y energía.',
      },
      {
        title: 'Relocalización y estancia larga',
        client: 'long stay y un inicio más tranquilo en la isla',
        image: `${baseUrl}images/dining.svg`,
        summary:
          'El cliente necesitaba una entrada más tranquila a una estancia larga y apoyo local desde las primeras decisiones.',
        result: 'un inicio más fácil en la isla y menos decisiones equivocadas.',
        quote: 'Recibimos exactamente lo que necesitábamos: calma, selección y apoyo local.',
      },
    ],
  },
} as const

const imagePositions = ['center center', 'center 38%', 'center center'] as const

export function SocialProofSection() {
  const content = copy[getLocale()]

  return (
    <section className="section social-proof-section" id="social-proof">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="social-proof-grid">
          {content.stories.map((entry, index) => (
            <article
              className={`social-proof-card social-proof-card-${index + 1}`}
              key={entry.title}
            >
              <div className="social-proof-media">
                <ResponsiveImage
                  src={entry.image}
                  alt={entry.client}
                  loading="lazy"
                  sizes="(max-width: 719px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  objectPosition={imagePositions[index] ?? 'center center'}
                />
              </div>
              <div className="social-proof-copy">
                <span className="social-proof-meta">{entry.client}</span>
                <h3>{entry.title}</h3>
                <p className="social-proof-detail">{entry.summary}</p>
                <p className="social-proof-name">
                  <strong>{content.resultLabel}:</strong> {entry.result}
                </p>
                <div className="social-proof-quote-box">
                  <span className="social-proof-quote-label">{content.quoteLabel}</span>
                  <p className="social-proof-quote">{entry.quote}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
