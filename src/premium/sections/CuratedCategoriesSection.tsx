import {
  curatedCategories,
  curatedExperienceExamples,
  curatedSpotlights,
} from '../data/content'

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
            <span className="eyebrow">Przykładowe doświadczenia</span>
            <h3>Curated, selekcyjne i wpisane w charakter pobytu</h3>
            <p>
              Katamaran, Teide, guachinche, tenis, padel, wellness czy fizjoterapia
              nie są tu osobnymi produktami. To elementy większego, dopracowanego
              doświadczenia.
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
