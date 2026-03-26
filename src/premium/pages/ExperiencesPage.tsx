import { curatedExperiences } from '../data/content'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

const contactHref = `${import.meta.env.BASE_URL}#contact`

export function ExperiencesPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">Doświadczenia</span>
            <h1>Curated premium experiences na Teneryfie</h1>
            <p>
              Nie pokazujemy katalogu atrakcji. Pokazujemy doświadczenia, które mogą
              stać się częścią dopracowanego pobytu: estetycznie, logistycznie i
              jakościowo.
            </p>
          </div>
        </section>

        <section className="section experiences-page">
          <div className="container experiences-grid">
            {curatedExperiences.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <div className="experience-card-image">
                  <img src={experience.image} alt={experience.title} />
                  <span className="experience-tag">{experience.tag}</span>
                </div>
                <div className="experience-card-copy">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="container subpage-cta">
            <div className="subpage-cta-box">
              <span className="eyebrow">Konsultacja</span>
              <h2>Powiedz nam, jaki klimat pobytu chcesz zbudować.</h2>
              <p>
                Dobierzemy doświadczenia tak, żeby wspierały cały pobyt, zamiast
                rozbijać go na przypadkowe punkty.
              </p>
              <a className="button button-primary" href={contactHref}>
                Umów konsultację
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
