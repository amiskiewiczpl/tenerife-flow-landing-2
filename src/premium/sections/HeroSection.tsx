import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    eyebrow: 'Concierge travel for Tenerife',
    title: 'Premium pobyt na Teneryfie, bez chaosu organizacyjnego.',
    lead:
      'Projektujemy krótszy, lepszy proces dla osób, które chcą przyjechać na gotowe i mieć wszystko dobrze poprowadzone.',
    description:
      'Zamiast przeszukiwać dziesiątki opcji, dostajesz selekcję właściwych miejsc, dopasowany plan pobytu i wsparcie, które prowadzi do decyzji, nie do kolejnych pytań.',
    primaryCta: 'Umów konsultację',
    secondaryCta: 'Zobacz pakiety',
    points: [
      'Pobyt zaprojektowany pod Twój styl',
      'Sprawdzone miejsca i lokalne wsparcie',
      'Mniej decyzji, wyższa jakość wyjazdu',
    ],
    visualEyebrow: 'Selected, not crowded',
    visualCopy:
      'Home pokazuje tylko kierunek: premium plan, sprawdzona selekcja i jasny następny krok do rozmowy.',
  },
  en: {
    eyebrow: 'Concierge travel for Tenerife',
    title: 'A premium Tenerife stay, without planning chaos.',
    lead:
      'We design a shorter, better process for people who want to arrive with everything already well handled.',
    description:
      'Instead of browsing dozens of options, you get the right selection of places, a tailored stay plan, and support that leads to decisions rather than more questions.',
    primaryCta: 'Book a consultation',
    secondaryCta: 'See packages',
    points: [
      'A stay designed around your style',
      'Tested places and local support',
      'Fewer decisions, better travel quality',
    ],
    visualEyebrow: 'Selected, not crowded',
    visualCopy:
      'The homepage shows only the direction: premium planning, curated selection, and a clear next step to talk.',
  },
  es: {
    eyebrow: 'Concierge travel for Tenerife',
    title: 'Una estancia premium en Tenerife, sin caos de organización.',
    lead:
      'Diseñamos un proceso más corto y mejor para quienes quieren llegar con todo bien resuelto.',
    description:
      'En lugar de revisar decenas de opciones, recibes una selección correcta de lugares, un plan de estancia a medida y apoyo que lleva a decisiones, no a más dudas.',
    primaryCta: 'Reservar consulta',
    secondaryCta: 'Ver paquetes',
    points: [
      'Estancia diseñada según tu estilo',
      'Lugares probados y apoyo local',
      'Menos decisiones, mejor calidad del viaje',
    ],
    visualEyebrow: 'Selected, not crowded',
    visualCopy:
      'La home muestra solo la dirección: planificación premium, selección cuidada y un siguiente paso claro para hablar.',
  },
} as const

export function HeroSection() {
  const locale = getLocale()
  const content = copy[locale]

  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p className="hero-lead">{content.lead}</p>
          <p className="hero-description">{content.description}</p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={withLocale(`${baseUrl}contact.html`, locale)}
            >
              {content.primaryCta}
            </a>
            <a className="button button-secondary" href="#packages">
              {content.secondaryCta}
            </a>
          </div>

          <div className="hero-trust-row" aria-label="Hero benefits">
            {content.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <img
              src={`${baseUrl}images/hero-premium.svg`}
              alt="Premium Tenerife stay"
            />
            <div className="hero-visual-overlay">
              <span className="eyebrow">{content.visualEyebrow}</span>
              <p>{content.visualCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
