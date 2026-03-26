import { SectionHeading } from '../components/SectionHeading'
import { lifestyleCards, lifestyleIntro } from '../data/content'

export function LifestyleSection() {
  return (
    <section className="lifestyle-band" id="lifestyle">
      <div className="container lifestyle-band-intro">
        <SectionHeading
          eyebrow="Doświadczenie"
          title="Styl pobytu, który czuć, zanim jeszcze zaczniesz pakować walizkę"
          description="Klient kupuje nie listę punktów, tylko rytm dnia, atmosferę i poziom wygody, który wprowadza spokój od pierwszego momentu."
        />
        <div className="lifestyle-intro-copy">
          <p>
            To nie jest wyjazd oparty na liście punktów do zaliczenia. To dopracowany
            pobyt z odpowiednim tempem, spokojem i detalami, które budują wrażenie
            jakości od pierwszego dnia.
          </p>
          <ul className="lifestyle-intro-list">
            {lifestyleIntro.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lifestyle-editorial-grid">
        {lifestyleCards.map((card, index) => (
          <article
            className={`lifestyle-story-card lifestyle-story-card-${index + 1}`}
            key={card.title}
          >
            <div className="lifestyle-story-media">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="lifestyle-story-overlay">
              <p className="lifestyle-story-title">{card.title}</p>
              <p className="lifestyle-story-copy">{card.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
