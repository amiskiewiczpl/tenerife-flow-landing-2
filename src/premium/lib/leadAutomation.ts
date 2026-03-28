export type LeadSegment = {
  tripType: string
  budgetBand: string
  guestBand: string
  planningWindow: string
  serviceLevel: string
}

export type ContactLeadPayload = {
  locale: string
  pagePath: string
  source: string
  submittedAt: string
  travelDate: string
  guests: string
  tripType: string
  budget: string
  expectations: string
  priorities: string
  contact: string
  standard: string
  segment: LeadSegment
}

type LeadWebhookResponse = {
  ok?: boolean
  message?: string
  bookingUrl?: string
}

export const webhookConfig = {
  contactLead: import.meta.env.VITE_CONTACT_WEBHOOK_URL,
  partnerLead: import.meta.env.VITE_PARTNER_WEBHOOK_URL,
  articleSignup: import.meta.env.VITE_ARTICLE_SIGNUP_WEBHOOK_URL,
  defaultBookingUrl: import.meta.env.VITE_DEFAULT_BOOKING_URL,
} as const

function normalizeGuests(guests: string) {
  const parsed = Number.parseInt(guests.replace(/[^\d]/g, ''), 10)

  if (Number.isNaN(parsed)) {
    return 'unknown'
  }

  if (parsed <= 2) {
    return 'solo_or_couple'
  }

  if (parsed <= 4) {
    return 'small_group'
  }

  return 'larger_group'
}

function normalizeBudget(budget: string) {
  const normalized = budget.toLowerCase()
  const numeric = Number.parseInt(normalized.replace(/[^\d]/g, ''), 10)

  if (normalized.includes('indy') || normalized.includes('custom')) {
    return 'custom'
  }

  if (Number.isNaN(numeric)) {
    return 'undisclosed'
  }

  if (numeric < 3000) {
    return 'entry_premium'
  }

  if (numeric < 7000) {
    return 'core_premium'
  }

  return 'high_touch'
}

function inferPlanningWindow(travelDate: string) {
  const normalized = travelDate.toLowerCase()

  if (
    normalized.includes('last minute') ||
    normalized.includes('this month') ||
    normalized.includes('ten miesiąc')
  ) {
    return 'immediate'
  }

  if (
    normalized.includes('week') ||
    normalized.includes('tydzie') ||
    normalized.includes('month') ||
    normalized.includes('mies')
  ) {
    return 'near_term'
  }

  return 'planned_ahead'
}

function inferServiceLevel({
  expectations,
  priorities,
  standard,
  budgetBand,
}: {
  expectations: string
  priorities: string
  standard: string
  budgetBand: string
}) {
  const combined = `${expectations} ${priorities} ${standard}`.toLowerCase()

  if (
    combined.includes('private') ||
    combined.includes('prywat') ||
    combined.includes('high-touch') ||
    combined.includes('concierge') ||
    budgetBand === 'high_touch'
  ) {
    return 'high_touch'
  }

  if (
    combined.includes('premium') ||
    combined.includes('quiet luxury') ||
    combined.includes('komfort') ||
    combined.includes('comfort')
  ) {
    return 'premium_curated'
  }

  return 'elevated_comfort'
}

export function buildLeadSegment(
  payload: Omit<ContactLeadPayload, 'segment' | 'submittedAt' | 'locale' | 'pagePath' | 'source'>,
): LeadSegment {
  const budgetBand = normalizeBudget(payload.budget)

  return {
    tripType: payload.tripType || 'unknown',
    budgetBand,
    guestBand: normalizeGuests(payload.guests),
    planningWindow: inferPlanningWindow(payload.travelDate),
    serviceLevel: inferServiceLevel({
      expectations: payload.expectations,
      priorities: payload.priorities,
      standard: payload.standard,
      budgetBand,
    }),
  }
}

export async function submitContactLead(payload: ContactLeadPayload) {
  const endpoint = webhookConfig.contactLead

  if (!endpoint) {
    return {
      ok: false,
      fallback: 'mailto' as const,
      bookingUrl: webhookConfig.defaultBookingUrl,
    }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Webhook responded with ${response.status}`)
  }

  const data = (await response.json().catch(() => ({}))) as LeadWebhookResponse

  return {
    ok: data.ok ?? true,
    message: data.message,
    bookingUrl: data.bookingUrl ?? webhookConfig.defaultBookingUrl,
  }
}
