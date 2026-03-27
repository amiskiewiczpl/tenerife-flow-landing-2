import { SectionHeading } from '../components/SectionHeading'
import { getLocale } from '../locale'

const copy = {
  pl: {
    eyebrow: 'Jak to działa',
    title: 'Krótki proces, który prowadzi od briefu do dopracowanego pobytu',
    description:
      'Bez długiego tłumaczenia. Najpierw poznajemy Twoje priorytety, potem porządkujemy decyzje i przechodzimy do realizacji.',
    steps: [
      {
        title: 'Pierwszy kontakt',
        text: 'Krótki brief o terminie, stylu pobytu i poziomie wsparcia, którego potrzebujesz.',
      },
      {
        title: 'Dobór zakresu',
        text: 'Dobieramy najlepszy model współpracy i od razu zawężamy zakres decyzji.',
      },
      {
        title: 'Projekt pobytu',
        text: 'Układamy pobyt wokół właściwych miejsc, rytmu dnia i logistyki.',
      },
      {
        title: 'Wsparcie na miejscu',
        text: 'Pozostajemy dostępni tam, gdzie wsparcie realnie podnosi komfort wyjazdu.',
      },
    ],
  },
  en: {
    eyebrow: 'How it works',
    title: 'A short process that moves from brief to a refined stay',
    description:
      'No long explanations. First we understand your priorities, then we simplify decisions and move into delivery.',
    steps: [
      {
        title: 'First contact',
        text: 'A short brief about your dates, travel style and the level of support you need.',
      },
      {
        title: 'Scope selection',
        text: 'We choose the right cooperation model and narrow the key decisions immediately.',
      },
      {
        title: 'Stay design',
        text: 'We shape the stay around the right places, daily rhythm and logistics.',
      },
      {
        title: 'On-site support',
        text: 'We stay available where support genuinely improves the comfort of your trip.',
      },
    ],
  },
  es: {
    eyebrow: 'Cómo funciona',
    title: 'Un proceso corto que va del brief a una estancia cuidada',
    description:
      'Sin explicaciones largas. Primero entendemos tus prioridades, luego simplificamos las decisiones y pasamos a la ejecución.',
    steps: [
      {
        title: 'Primer contacto',
        text: 'Un brief breve sobre fechas, estilo de viaje y el nivel de apoyo que necesitas.',
      },
      {
        title: 'Definición del alcance',
        text: 'Elegimos el modelo adecuado de colaboración y reducimos las decisiones clave desde el inicio.',
      },
      {
        title: 'Diseño de la estancia',
        text: 'Construimos la estancia alrededor de los lugares correctos, el ritmo del día y la logística.',
      },
      {
        title: 'Apoyo en destino',
        text: 'Seguimos disponibles allí donde el apoyo realmente mejora la comodidad del viaje.',
      },
    ],
  },
} as const

export function ProcessSection() {
  const content = copy[getLocale()]

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="process-grid">
          {content.steps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
