import { curatedCategories } from '../data/content'

export function CuratedCategoriesSection() {
  return (
    <section className="section curated-section" aria-labelledby="curated-title">
      <div className="container">
        <div className="curated-heading">
          <span className="eyebrow">Co możemy zorganizować</span>
          <h2 id="curated-title">Curated experiences dobrane do stylu Twojego pobytu</h2>
          <p>
            Nie tworzymy marketplace&apos;u z atrakcjami. Selekcjonujemy doświadczenia,
            które pasują do rytmu wyjazdu, poziomu wygody i charakteru klienta.
          </p>
        </div>

        <div className="curated-grid">
          {curatedCategories.map((category) => (
            <article className="curated-card" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>

        <div className="curated-cta">
          <a className="button button-primary" href="./experiences.html">
            Zobacz podstronę Doświadczenia
          </a>
        </div>
      </div>
    </section>
  )
}
