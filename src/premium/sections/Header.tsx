import { useEffect, useState } from 'react'
import { navigation } from '../data/content'

const homeHref = import.meta.env.BASE_URL
const contactHref = `${import.meta.env.BASE_URL}contact.html`

function normalizePathname(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

function isHomePath(pathname: string) {
  return pathname === '/' || pathname.endsWith('/index.html')
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
        <a className="brand" href={homeHref} aria-label="Tenerife Flow">
          <span className="brand-mark">TF</span>
          <span className="brand-copy">
            <strong>Tenerife Flow</strong>
            <span>premium stay planning</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Główna nawigacja">
          {navigation.map((item) => {
            const active = isActiveLink(item.href)

            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? 'nav-link-active' : ''}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="header-actions">
          <a className="button button-primary header-cta" href={contactHref}>
            Umów rozmowę
          </a>

          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? 'mobile-menu-button-open' : ''}`}
            aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
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
        <nav className="mobile-menu-nav" aria-label="Główna nawigacja mobilna">
          {navigation.map((item) => {
            const active = isActiveLink(item.href)

            return (
              <a
                key={item.href}
                href={item.href}
                className={active ? 'nav-link-active' : ''}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a className="button button-primary mobile-menu-cta" href={contactHref}>
          Umów rozmowę
        </a>
      </div>
    </header>
  )
}
