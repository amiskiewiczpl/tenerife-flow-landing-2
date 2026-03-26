import { navigation } from '../data/content'

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="./index.html">
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

        <a className="button button-primary header-cta" href="./index.html#contact">
          Umów rozmowę
        </a>
      </div>
    </header>
  )
}
