import { SectionHeading } from '../components/SectionHeading'
import { processSteps } from '../data/content'

const shortStepCopy = [
  'Krótki brief o terminie, stylu pobytu i poziomie wsparcia, którego potrzebujesz.',
  'Dobieramy najlepszy model współpracy i od razu zawężamy zakres decyzji.',
  'Układamy pobyt wokół właściwych miejsc, rytmu dnia i logistyki.',
  'Pozostajemy dostępni tam, gdzie wsparcie realnie podnosi komfort wyjazdu.',
]

export function ProcessSection() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionHeading
          eyebrow="Jak to działa"
          title="Krótki proces, który prowadzi od briefu do dopracowanego pobytu"
          description="Bez długiego tłumaczenia. Najpierw poznajemy Twoje priorytety, potem porządkujemy decyzje i przechodzimy do realizacji."
        />

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{shortStepCopy[index]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
