import { SectionHeading } from '../components/SectionHeading'
import { aboutHighlights } from '../data/content'

export function AboutSection() {
  return (
    <section className="section about-section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading
            eyebrow="O nas"
            title="Tworzymy concierge travel service skupiony na Teneryfie i jakości całego pobytu."
            description="Nie działamy jak anonimowe biuro podróży. Pracujemy bliżej klienta, bardziej selektywnie i z większym wyczuciem tego, jak ma wyglądać cały rytm wyjazdu."
          />

          <div className="about-signature">
            <span className="eyebrow">Jak nas odróżnić</span>
            <p>
              Zamiast sprzedawać gotową ofertę, najpierw rozumiemy klienta. Potem
              selekcjonujemy miejsca, ludzi i doświadczenia tak, by całość była
              spójna, jakościowa i naprawdę godna zaufania.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          {aboutHighlights.map((item, index) => (
            <article className="about-highlight-card" key={item.title}>
              <span className="about-index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
