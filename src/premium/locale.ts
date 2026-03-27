export type Locale = 'pl' | 'en' | 'es'

export const localeOptions: Array<{ code: Locale; label: string; flag: string }> = [
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

export function getLocale(search = window.location.search): Locale {
  const lang = new URLSearchParams(search).get('lang')

  if (lang === 'en' || lang === 'es') {
    return lang
  }

  return 'pl'
}

export function withLocale(path: string, locale: Locale): string {
  const url = new URL(path, window.location.origin)

  if (locale === 'pl') {
    url.searchParams.delete('lang')
  } else {
    url.searchParams.set('lang', locale)
  }

  return `${url.pathname}${url.search}${url.hash}`
}

export function currentPageLocaleHref(locale: Locale): string {
  return withLocale(window.location.href, locale)
}
