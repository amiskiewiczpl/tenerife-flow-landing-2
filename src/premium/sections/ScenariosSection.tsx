import { SectionHeading } from '../components/SectionHeading'
import { scenarios } from '../data/content'

export function ScenariosSection() {
  return (
    <section className="section" id="scenarios">
      <div className="container">
        <SectionHeading
          eyebrow="Scenariusze"
          title="Przykładowe doświadczenia, które projektujemy"
          description="Zamiast udawanych testimoniali pokazujemy, jak wygląda zmiana od chaosu do gotowego planu."
        />

        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <article className="scenario-card" key={scenario.title}>
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
