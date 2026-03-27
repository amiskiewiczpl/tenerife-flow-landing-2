import { navigation } from '../data/content'

const homeHref = import.meta.env.BASE_URL
const contactHref = `${import.meta.env.BASE_URL}contact.html`

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href={homeHref}>
          <span className="brand-mark">TF</span>
          <span className="brand-copy">
            <strong>Tenerife Flow</strong>
            <span>premium stay planning</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Główna nawigacja">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href={contactHref}>
          Umów rozmowę
        </a>
      </div>

      <div className="container mobile-nav-shell">
        <nav className="mobile-nav" aria-label="Główna nawigacja mobilna">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
