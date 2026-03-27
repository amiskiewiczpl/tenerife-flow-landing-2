import { articleCategories, articles, featuredArticle } from '../data/content'
import { Footer } from '../sections/Footer'
import { Header } from '../sections/Header'

const contactHref = `${import.meta.env.BASE_URL}contact.html`

export function ArticlesPage() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <section className="subpage-hero">
          <div className="container subpage-hero-inner">
            <span className="eyebrow">Artykuły i przewodniki</span>
            <h1>Przewodniki, inspiracje i praktyczne treści o Teneryfie</h1>
            <p>
              Ta sekcja jest przygotowana pod SEO i przyszłą rozbudowę contentową.
              Łączy curated wiedzę o wyspie z tematami, które realnie pomagają klientom
              lepiej zaplanować pobyt.
            </p>
          </div>
        </section>

        <section className="section articles-page">
          <div className="container articles-featured">
            <div className="articles-featured-media">
              <img src={featuredArticle.image} alt={featuredArticle.title} />
            </div>
            <div className="articles-featured-copy">
              <span className="curated-tag">{featuredArticle.category}</span>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="articles-meta-row">
                <span>{featuredArticle.readTime}</span>
                <span>Featured article</span>
              </div>
            </div>
          </div>

          <div className="container articles-toolbar">
            <div className="articles-toolbar-copy">
              <h2>Tematy, które realnie pomagają lepiej zaplanować pobyt</h2>
              <p>
                Od atrakcji i noclegów po long stay, Teide i lokalne doświadczenia.
                Układ jest gotowy pod dalszą rozbudowę bloga i przewodników.
              </p>
            </div>
            <ul className="pill-list">
              {articleCategories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="container articles-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <div className="article-card-media">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-card-copy">
                  <span className="curated-tag">{article.category}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="articles-meta-row">
                    <span>{article.readTime}</span>
                    <span>Przewodnik</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="container subpage-cta">
            <div className="subpage-cta-box">
              <span className="eyebrow">Konsultacja</span>
              <h2>Chcesz dopasować pobyt do swojego stylu, zamiast składać go samodzielnie?</h2>
              <p>
                Jeśli po lekturze wiesz już więcej o Teneryfie, następnym krokiem może
                być spokojna konsultacja i dobranie najlepszego modelu concierge.
              </p>
              <a className="button button-primary" href={contactHref}>
                Przejdź do kontaktu
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
