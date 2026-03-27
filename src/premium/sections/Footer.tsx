const baseUrl = import.meta.env.BASE_URL

function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function isHomePath(pathname: string) {
  return pathname === '/' || pathname.endsWith('/index.html')
}

export function Footer() {
  const currentPath = normalizePathname(window.location.pathname)

  const isActiveLink = (href: string) => {
    const hrefPath = normalizePathname(new URL(href, window.location.origin).pathname)

    if (isHomePath(currentPath) && isHomePath(hrefPath)) {
      return true
    }

    return currentPath === hrefPath
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <p className="footer-brand-name">Tenerife Flow</p>
          <p className="footer-brand-copy">
            Butikowy concierge travel service dla klientów, którzy chcą wyższego
            standardu pobytu, spokojniejszej organizacji i bardziej dopracowanego
            doświadczenia na Teneryfie.
          </p>
        </div>

        <div className="footer-nav-block">
          <p className="footer-label">Nawigacja</p>
          <div className="footer-links">
            {[
              { label: 'Start', href: baseUrl },
              { label: 'Doświadczenia', href: `${baseUrl}experiences.html` },
              { label: 'Partnerzy', href: `${baseUrl}partners.html` },
              { label: 'Artykuły', href: `${baseUrl}articles.html` },
              { label: 'Kontakt', href: `${baseUrl}contact.html` },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={isActiveLink(item.href) ? 'footer-link-active' : ''}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-cta-block">
          <p className="footer-label">Kontakt</p>
          <p>
            Jeśli chcesz sprawdzić, jaki zakres concierge będzie najlepszy dla Twojego
            pobytu, zacznij od krótkiej konsultacji.
          </p>
          <a className="button button-secondary footer-button" href={`${baseUrl}contact.html`}>
            Umów rozmowę
          </a>
        </div>
      </div>
    </footer>
  )
}
