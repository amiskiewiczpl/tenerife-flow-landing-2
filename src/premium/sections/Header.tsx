import { useEffect, useState } from 'react'
import {
  currentPageLocaleHref,
  getLocale,
  localeOptions,
  withLocale,
} from '../locale'

const baseUrl = import.meta.env.BASE_URL

const copy = {
  pl: {
    tagline: 'private island concierge',
    navLabel: 'Główna nawigacja',
    mobileNavLabel: 'Główna nawigacja mobilna',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    cta: 'Umów rozmowę',
    languageLabel: 'Wersje językowe',
    nav: [
      { label: 'Start', href: baseUrl },
      { label: 'Doświadczenia', href: `${baseUrl}experiences.html` },
      { label: 'Partnerzy', href: `${baseUrl}partners.html` },
      { label: 'Artykuły', href: `${baseUrl}articles.html` },
      { label: 'Kontakt', href: `${baseUrl}contact.html` },
    ],
  },
  en: {
    tagline: 'private island concierge',
    navLabel: 'Main navigation',
    mobileNavLabel: 'Mobile main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    cta: 'Book a call',
    languageLabel: 'Language versions',
    nav: [
      { label: 'Home', href: baseUrl },
      { label: 'Experiences', href: `${baseUrl}experiences.html` },
      { label: 'Partners', href: `${baseUrl}partners.html` },
      { label: 'Articles', href: `${baseUrl}articles.html` },
      { label: 'Contact', href: `${baseUrl}contact.html` },
    ],
  },
  es: {
    tagline: 'private island concierge',
    navLabel: 'Navegación principal',
    mobileNavLabel: 'Navegación móvil principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    cta: 'Reservar llamada',
    languageLabel: 'Versiones de idioma',
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

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = getLocale()
  const content = copy[locale]
  const contactHref = withLocale(`${baseUrl}contact.html`, locale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('resize', closeMenu)

    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.body.style.overflow = menuOpen ? 'hidden' : ''
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  const currentPath = normalizePathname(window.location.pathname)

  const isActiveLink = (href: string) => {
    const hrefPath = normalizePathname(new URL(href, window.location.origin).pathname)

    if (isHomePath(currentPath) && isHomePath(hrefPath)) {
      return true
    }

    return currentPath === hrefPath
  }

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href={withLocale(baseUrl, locale)} aria-label="Tenerife Flow">
          <span className="brand-mark">TF</span>
          <span className="brand-copy">
            <strong>Tenerife Flow</strong>
            <span>{content.tagline}</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={content.navLabel}>
          {content.nav.map((item) => {
            const localizedHref = withLocale(item.href, locale)
            const active = isActiveLink(localizedHref)

            return (
              <a
                key={item.href}
                href={localizedHref}
                className={active ? 'nav-link-active' : ''}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <div className="locale-switcher" aria-label={content.languageLabel}>
            {localeOptions.map((option) => (
              <a
                key={option.code}
                className={`locale-flag ${locale === option.code ? 'locale-flag-active' : ''}`}
                href={currentPageLocaleHref(option.code)}
                aria-label={option.label}
                title={option.label}
              >
                <span>{option.flag}</span>
              </a>
            ))}
          </div>

          <a className="button button-primary header-cta" href={contactHref}>
            {content.cta}
          </a>

          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? 'mobile-menu-button-open' : ''}`}
            aria-label={menuOpen ? content.closeMenu : content.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu-backdrop ${menuOpen ? 'mobile-menu-backdrop-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <div
        id="mobile-menu-panel"
        className={`container mobile-menu-panel ${menuOpen ? 'mobile-menu-panel-open' : ''}`}
      >
        <nav className="mobile-menu-nav" aria-label={content.mobileNavLabel}>
          {content.nav.map((item) => {
            const localizedHref = withLocale(item.href, locale)
            const active = isActiveLink(localizedHref)

            return (
              <a
                key={item.href}
                href={localizedHref}
                className={active ? 'nav-link-active' : ''}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="locale-switcher locale-switcher-mobile" aria-label={content.languageLabel}>
          {localeOptions.map((option) => (
            <a
              key={option.code}
              className={`locale-flag ${locale === option.code ? 'locale-flag-active' : ''}`}
              href={currentPageLocaleHref(option.code)}
              aria-label={option.label}
              title={option.label}
            >
              <span>{option.flag}</span>
            </a>
          ))}
        </div>

        <a className="button button-primary mobile-menu-cta" href={contactHref}>
          {content.cta}
        </a>
      </div>
    </header>
  )
}
