import { SectionHeading } from '../components/SectionHeading'
import { comparisonRows } from '../data/content'

export function ServicesSection() {
  return (
    <section className="section section-soft" id="comparison">
      <div className="container">
        <SectionHeading
          eyebrow="Czym różnimy się od biura podróży"
          title="Nie jesteśmy katalogiem gotowych ofert. Działamy jak concierge z lokalnym zapleczem."
          description="To jedna z kluczowych różnic sprzedażowych tej usługi: mniej przypadkowych opcji, więcej jakościowej selekcji, elastyczności i realnego wsparcia."
        />

        <div className="comparison-table">
          <div className="comparison-table-head comparison-table-row">
            <div className="comparison-table-cell comparison-table-topic">Obszar</div>
            <div className="comparison-table-cell comparison-table-side comparison-table-side-muted">
              Biuro podróży
            </div>
            <div className="comparison-table-cell comparison-table-side comparison-table-side-featured">
              Tenerife Flow
            </div>
          </div>

          {comparisonRows.map((row) => (
            <article className="comparison-table-row" key={row.title}>
              <div className="comparison-table-cell comparison-table-topic">
                <h3>{row.title}</h3>
              </div>
              <div className="comparison-table-cell comparison-table-side comparison-table-side-muted">
                <p>{row.left}</p>
              </div>
              <div className="comparison-table-cell comparison-table-side comparison-table-side-featured">
                <p>{row.right}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
