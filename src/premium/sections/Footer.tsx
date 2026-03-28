import { getLocale, withLocale } from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    navTitle: 'Nawigacja',
    contactTitle: 'Kontakt',
    inquiryLabel: 'Private inquiries',
    brandCopy:
      'Butikowy concierge travel service dla klientów, którzy chcą spokojniejszej organizacji, wyższego standardu pobytu i lepszej selekcji na Teneryfie.',
    contactCopy:
      'Jeśli chcesz sprawdzić, jaki zakres concierge będzie najlepszy dla Twojego pobytu, zacznij od krótkiej konsultacji.',
    directEmail: 'hello@tenerife-flow.com',
    directNote: 'Odpowiadamy osobiście, bez automatycznej obsługi sprzedażowej.',
    cta: 'Umów rozmowę',
    rights: 'Tenerife Flow. Premium concierge travel for Tenerife.',
    nav: [
      { label: 'Start', href: baseUrl },
      { label: 'Doświadczenia', href: `${baseUrl}experiences.html` },
      { label: 'Partnerzy', href: `${baseUrl}partners.html` },
      { label: 'Artykuły', href: `${baseUrl}articles.html` },
      { label: 'Kontakt', href: `${baseUrl}contact.html` },
    ],
  },
  en: {
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    inquiryLabel: 'Private inquiries',
    brandCopy:
      'Boutique concierge travel service for clients who want a higher standard stay, calmer planning, and a more refined Tenerife experience.',
    contactCopy:
      'If you want to check which concierge scope fits your stay best, start with a short consultation.',
    directEmail: 'hello@tenerife-flow.com',
    directNote: 'You hear back from a human, not an automated sales sequence.',
    cta: 'Book a call',
    rights: 'Tenerife Flow. Premium concierge travel for Tenerife.',
    nav: [
      { label: 'Home', href: baseUrl },
      { label: 'Experiences', href: `${baseUrl}experiences.html` },
      { label: 'Partners', href: `${baseUrl}partners.html` },
      { label: 'Articles', href: `${baseUrl}articles.html` },
      { label: 'Contact', href: `${baseUrl}contact.html` },
    ],
  },
  es: {
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    inquiryLabel: 'Private inquiries',
    brandCopy:
      'Servicio boutique de concierge travel para clientes que buscan una estancia de mayor nivel, una organización más tranquila y una experiencia más cuidada en Tenerife.',
    contactCopy:
      'Si quieres comprobar qué nivel de concierge encaja mejor con tu estancia, empieza con una breve consulta.',
    directEmail: 'hello@tenerife-flow.com',
    directNote: 'Respondemos personalmente, sin secuencias de venta automáticas.',
    cta: 'Reservar llamada',
    rights: 'Tenerife Flow. Premium concierge travel for Tenerife.',
    nav: [
      { label: 'Inicio', href: baseUrl },
      { label: 'Experiencias', href: `${baseUrl}experiences.html` },
      { label: 'Partners', href: `${baseUrl}partners.html` },
      { label: 'Artículos', href: `${baseUrl}articles.html` },
      { label: 'Contacto', href: `${baseUrl}contact.html` },
    ],
  },
} as const

function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function isHomePath(pathname: string) {
  return pathname === '/' || pathname.endsWith('/index.html')
}

export function Footer() {
  const locale = getLocale()
  const content = copy[locale]
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
          <p className="footer-label">{content.inquiryLabel}</p>
          <p className="footer-brand-name">Tenerife Flow</p>
          <p className="footer-brand-copy">{content.brandCopy}</p>
        </div>

        <div className="footer-nav-block">
          <p className="footer-label">{content.navTitle}</p>
          <div className="footer-links">
            {content.nav.map((item) => {
              const localizedHref = withLocale(item.href, locale)

              return (
                <a
                  key={item.href}
                  href={localizedHref}
                  className={isActiveLink(localizedHref) ? 'footer-link-active' : ''}
                  aria-current={isActiveLink(localizedHref) ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>

        <div className="footer-cta-block">
          <p className="footer-label">{content.contactTitle}</p>
          <p>{content.contactCopy}</p>
          <a className="footer-email" href={`mailto:${content.directEmail}`}>
            {content.directEmail}
          </a>
          <p className="footer-note">{content.directNote}</p>
          <a
            className="button button-secondary footer-button"
            href={withLocale(`${baseUrl}contact.html`, locale)}
          >
            {content.cta}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{content.rights}</p>
      </div>
    </footer>
  )
}
