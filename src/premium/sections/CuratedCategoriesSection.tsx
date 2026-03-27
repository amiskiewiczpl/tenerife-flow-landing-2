import {
  curatedCategories,
  curatedExperienceExamples,
  curatedSpotlights,
} from '../data/content'

export function CuratedCategoriesSection() {
  return (
    <section className="section curated-section" id="offer" aria-labelledby="curated-title">
      <div className="container">
        <div className="curated-heading">
          <span className="eyebrow">Oferta i obszary wsparcia</span>
          <h2 id="curated-title">
            Kategorie usług i doświadczeń, które składają się na lepszy pobyt
          </h2>
          <p>
            Nie budujemy marketplace&apos;u z atrakcjami. Selekcjonujemy obszary, które
            realnie wpływają na jakość całego wyjazdu i układamy je w spójną całość.
          </p>
        </div>

        <div className="curated-visual-grid">
          {curatedSpotlights.map((item, index) => (
            <article
              className={`curated-spotlight curated-spotlight-${index + 1}`}
              key={item.title}
            >
              <div className="curated-spotlight-media">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="curated-spotlight-copy">
                <span className="curated-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="curated-grid">
          {curatedCategories.map((category) => (
            <article className="curated-card" key={category.title}>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>

        <div className="curated-examples">
          <div className="curated-examples-copy">
            <span className="eyebrow">Zajawka doświadczeń</span>
            <h3>Od oceanu po wellness, ale zawsze w curated premium feel</h3>
            <p>
              To tylko przykłady tego, co możemy zorganizować. Każde doświadczenie ma
              sens dopiero wtedy, gdy wzmacnia rytm całego pobytu.
            </p>
          </div>

          <ul className="curated-example-list">
            {curatedExperienceExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="curated-cta">
          <a
            className="button button-primary"
            href={`${import.meta.env.BASE_URL}experiences.html`}
          >
            Zobacz podstronę Doświadczenia
          </a>
        </div>
      </div>
    </section>
  )
}
