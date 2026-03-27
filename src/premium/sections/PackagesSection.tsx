import { SectionHeading } from '../components/SectionHeading'
import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Pakiety',
    title: 'Trzy poziomy wsparcia. Jeden cel: lepszy pobyt i mniej decyzji po Twojej stronie.',
    description:
      'Na homepage pokazujemy tylko zakres. Szczegóły dopasowujemy już w rozmowie, bo każdy pobyt wymaga innego poziomu concierge.',
    helper:
      'Nie wiesz, który pakiet wybrać? Wystarczy krótki brief, a dobierzemy właściwy model współpracy.',
    helperCta: 'Przejdź do kontaktu',
    featuredLabel: 'Rekomendowany',
    cards: [
      {
        name: 'Essential',
        label: 'Dla spokojnego startu',
        forWho:
          'Dla osób, które chcą dobrego planu i selekcji miejsc bez pełnej obsługi concierge.',
        description:
          'Dobry wybór, jeśli chcesz uporządkować wyjazd i dostać klarowny kierunek bez chaosu.',
        price: 'od indywidualnej wyceny',
        benefits: [
          'koncepcja pobytu dopasowana do stylu klienta',
          'selekcja noclegów i sprawdzonych adresów',
          'propozycje restauracji i doświadczeń',
        ],
        cta: 'Wybierz Essential',
        featured: false,
      },
      {
        name: 'Signature',
        label: 'Najczęściej wybierany',
        forWho:
          'Dla klientów, którzy chcą mieć plan, koordynację i spokojne wsparcie na każdym etapie.',
        description:
          'Najlepszy balans między wygodą, estetyką i realnym odciążeniem organizacji wyjazdu.',
        price: 'wycena indywidualna',
        benefits: [
          'indywidualny plan pobytu szyty na miarę',
          'koordynacja przygotowań przed wyjazdem',
          'dobór doświadczeń i miejsc z wyczuciem jakości',
        ],
        cta: 'Umów konsultację Signature',
        featured: true,
      },
      {
        name: 'Private Concierge',
        label: 'Obsługa end-to-end',
        forWho:
          'Dla osób oczekujących maksymalnej wygody, prywatności i szerszego wsparcia concierge.',
        description:
          'Kompleksowa organizacja pobytu premium dla klientów, którzy chcą mieć wszystko dopięte w jednym procesie.',
        price: 'wycena indywidualna',
        benefits: [
          'pełna opieka nad organizacją pobytu',
          'priorytetowe wsparcie i koordynacja',
          'opieka przy pobytach specjalnych i dłuższych',
        ],
        cta: 'Umów Private Concierge',
        featured: false,
      },
    ],
  },
  en: {
    eyebrow: 'Packages',
    title: 'Three support levels. One goal: a better stay with fewer decisions on your side.',
    description:
      'On the homepage we show only the scope. Details are matched in conversation, because every stay requires a different concierge level.',
    helper:
      'Not sure which package fits? A short brief is enough and we will recommend the right model.',
    helperCta: 'Go to contact',
    featuredLabel: 'Recommended',
    cards: [
      {
        name: 'Essential',
        label: 'For a calm start',
        forWho:
          'For people who want a strong plan and curated places without full concierge coverage.',
        description:
          'A strong choice if you want to structure the trip and get a clear direction without chaos.',
        price: 'from custom pricing',
        benefits: [
          'stay concept tailored to the client style',
          'selection of stays and trusted addresses',
          'restaurant and experience recommendations',
        ],
        cta: 'Choose Essential',
        featured: false,
      },
      {
        name: 'Signature',
        label: 'Most chosen',
        forWho:
          'For clients who want a plan, coordination and calm support at every step.',
        description:
          'The best balance between comfort, aesthetics and real relief from trip organisation.',
        price: 'custom pricing',
        benefits: [
          'tailor-made stay plan',
          'coordination before departure',
          'curated experiences and places with quality judgment',
        ],
        cta: 'Book Signature consultation',
        featured: true,
      },
      {
        name: 'Private Concierge',
        label: 'End-to-end service',
        forWho:
          'For people expecting maximum comfort, privacy and a broader concierge scope.',
        description:
          'Comprehensive premium stay planning for clients who want everything handled in one process.',
        price: 'custom pricing',
        benefits: [
          'full care over stay organisation',
          'priority support and coordination',
          'support for special and longer stays',
        ],
        cta: 'Book Private Concierge',
        featured: false,
      },
    ],
  },
  es: {
    eyebrow: 'Paquetes',
    title: 'Tres niveles de apoyo. Un objetivo: una estancia mejor y menos decisiones por tu parte.',
    description:
      'En la home mostramos solo el alcance. Los detalles se ajustan en la conversación, porque cada estancia requiere un nivel distinto de concierge.',
    helper:
      '¿No sabes qué paquete encaja mejor? Un brief corto basta y te recomendaremos el modelo adecuado.',
    helperCta: 'Ir al contacto',
    featuredLabel: 'Recomendado',
    cards: [
      {
        name: 'Essential',
        label: 'Para empezar con calma',
        forWho:
          'Para personas que quieren un buen plan y una selección cuidada de lugares sin concierge completo.',
        description:
          'Una buena opción si quieres ordenar el viaje y tener una dirección clara sin caos.',
        price: 'desde presupuesto personalizado',
        benefits: [
          'concepto de estancia adaptado al estilo del cliente',
          'selección de alojamientos y direcciones fiables',
          'recomendaciones de restaurantes y experiencias',
        ],
        cta: 'Elegir Essential',
        featured: false,
      },
      {
        name: 'Signature',
        label: 'El más elegido',
        forWho:
          'Para clientes que quieren plan, coordinación y apoyo tranquilo en cada etapa.',
        description:
          'El mejor equilibrio entre comodidad, estética y verdadero alivio en la organización del viaje.',
        price: 'presupuesto personalizado',
        benefits: [
          'plan de estancia a medida',
          'coordinación antes del viaje',
          'selección de experiencias y lugares con criterio de calidad',
        ],
        cta: 'Reservar consulta Signature',
        featured: true,
      },
      {
        name: 'Private Concierge',
        label: 'Servicio end-to-end',
        forWho:
          'Para quienes esperan máxima comodidad, privacidad y un alcance más amplio de concierge.',
        description:
          'Organización integral de una estancia premium para clientes que quieren todo resuelto en un solo proceso.',
        price: 'presupuesto personalizado',
        benefits: [
          'gestión completa de la estancia',
          'apoyo prioritario y coordinación',
          'acompañamiento en estancias especiales y largas',
        ],
        cta: 'Reservar Private Concierge',
        featured: false,
      },
    ],
  },
} as const

export function PackagesSection() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <section className="section packages-section" id="packages">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="package-grid package-grid-sales">
          {content.cards.map((item) => (
            <article
              className={`package-card package-card-sales ${item.featured ? 'package-card-featured' : ''}`}
              key={item.name}
            >
              {item.featured ? <span className="package-recommended">{content.featuredLabel}</span> : null}

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
                href={withLocale(`${baseUrl}contact.html`, locale)}
              >
                {item.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="contact-submit-row">
          <p>{content.helper}</p>
          <a
            className="button button-secondary"
            href={withLocale(`${baseUrl}contact.html`, locale)}
          >
            {content.helperCta}
          </a>
        </div>
      </div>
    </section>
  )
}
