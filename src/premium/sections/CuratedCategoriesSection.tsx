import { curatedCategories, curatedExperienceExamples } from '../data/content'

export function CuratedCategoriesSection() {
  return (
    <section className="section curated-section" id="offer" aria-labelledby="curated-title">
      <div className="container">
        <div className="curated-heading">
          <span className="eyebrow">Co organizujemy</span>
          <h2 id="curated-title">
            Organizujemy to, co naprawdę wpływa na jakość całego pobytu
          </h2>
          <p>
            Noclegi, plan pobytu, wybrane doświadczenia i wsparcie na miejscu. Resztę
            rozwijamy na podstronach, żeby homepage pozostał krótki i sprzedażowy.
          </p>
        </div>

        <div className="curated-grid curated-grid-compact">
          {curatedCategories.map((category) => (
            <article className="curated-card" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>

        <ul className="curated-example-list curated-example-list-inline">
          {curatedExperienceExamples.slice(0, 6).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="curated-cta">
          <a
            className="button button-secondary"
            href={`${import.meta.env.BASE_URL}experiences.html`}
          >
            Zobacz pełną podstronę doświadczeń
          </a>
        </div>
      </div>
    </section>
  )
}
