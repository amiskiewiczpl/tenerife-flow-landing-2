type Primitive = string | number | boolean | null | undefined
type TrackPayload = Record<string, Primitive>

type AnalyticsOptions = {
  pageType: string
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
    __tfAnalyticsInitialized?: boolean
    __tfScrollMilestones?: Set<number>
  }
}

const analyticsWebhookUrl = import.meta.env.VITE_ANALYTICS_WEBHOOK_URL
const scrollMilestones = [25, 50, 75, 100] as const

function getLocaleFromUrl() {
  const params = new URLSearchParams(window.location.search)
  return params.get('lang') ?? 'pl'
}

function getBasePayload(pageType: string): TrackPayload {
  return {
    page_type: pageType,
    page_path: window.location.pathname,
    page_url: window.location.href,
    page_title: document.title,
    locale: getLocaleFromUrl(),
  }
}

function sendToWebhook(payload: Record<string, unknown>) {
  if (!analyticsWebhookUrl) {
    return
  }

  const body = JSON.stringify(payload)

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' })
    navigator.sendBeacon(analyticsWebhookUrl, blob)
    return
  }

  void fetch(analyticsWebhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    keepalive: true,
  }).catch(() => undefined)
}

export function trackEvent(eventName: string, payload: TrackPayload = {}) {
  const eventPayload = {
    event: eventName,
    ...payload,
    timestamp: new Date().toISOString(),
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(eventPayload)

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload })
  }

  window.dispatchEvent(new CustomEvent('tf:track', { detail: eventPayload }))
  sendToWebhook(eventPayload)
}

function setupScrollTracking(pageType: string) {
  if (window.__tfScrollMilestones) {
    return
  }

  window.__tfScrollMilestones = new Set<number>()

  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

    if (scrollableHeight <= 0) {
      return
    }

    const currentDepth = Math.min(
      100,
      Math.round((window.scrollY / scrollableHeight) * 100),
    )

    scrollMilestones.forEach((milestone) => {
      if (
        currentDepth >= milestone &&
        !window.__tfScrollMilestones?.has(milestone)
      ) {
        window.__tfScrollMilestones?.add(milestone)
        trackEvent('scroll_depth', {
          ...getBasePayload(pageType),
          scroll_depth: milestone,
        })
      }
    })
  }

  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
}

function setupClickTracking(pageType: string) {
  document.addEventListener('click', (event) => {
    const target = event.target

    if (!(target instanceof HTMLElement)) {
      return
    }

    const tracked = target.closest<HTMLElement>('[data-track], .button, a[href]')

    if (!tracked) {
      return
    }

    const href = tracked instanceof HTMLAnchorElement ? tracked.href : tracked.getAttribute('href')
    const label =
      tracked.dataset.trackLabel ??
      tracked.getAttribute('aria-label') ??
      tracked.textContent?.trim() ??
      'unknown'

    const category =
      tracked.dataset.track ??
      (tracked.classList.contains('button') ? 'cta_click' : 'navigation_click')

    trackEvent(category, {
      ...getBasePayload(pageType),
      click_label: label,
      click_href: href ?? undefined,
      click_text: tracked.textContent?.trim() ?? undefined,
    })
  })
}

export function initializeAnalytics({ pageType }: AnalyticsOptions) {
  if (window.__tfAnalyticsInitialized) {
    return
  }

  window.__tfAnalyticsInitialized = true

  trackEvent('page_view', getBasePayload(pageType))
  setupScrollTracking(pageType)
  setupClickTracking(pageType)
}
