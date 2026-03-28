import type { FocusEvent, FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { trackEvent } from '../lib/analytics'
import { buildLeadSegment, submitContactLead } from '../lib/leadAutomation'
import { getLocale } from '../locale'

const contactEmail = 'hello@tenerife-flow.com'

const copy = {
  pl: {
    eyebrow: 'Final CTA',
    title: 'Jeśli chcesz lepszego pobytu na Teneryfie, zacznij od krótkiego briefu.',
    description:
      'To wystarczy, żeby ocenić zakres, pakiet i kierunek organizacji. Bez długich formularzy i bez zbędnego tłumaczenia.',
    introLabel: 'Co dalej',
    introCopy:
      'Po briefie wracamy z propozycją najlepszego modelu współpracy i dalszych kroków. Jeśli jest dopasowanie, przechodzimy do projektu pobytu.',
    primaryCta: 'Wypełnij brief',
    secondaryCta: 'Napisz bezpośrednio',
    formKicker: 'Private inquiry',
    formTitle: 'Opowiedz nam o pobycie, który chcesz stworzyć',
    formDescription:
      'Im lepiej poznamy Twój styl i oczekiwania, tym szybciej dobierzemy plan, rekomendacje i odpowiedni poziom concierge.',
    statusInitial: 'Po wysłaniu brief trafi do naszego workflow i wrócimy z następnym krokiem.',
    statusSubmitting: 'Wysyłamy brief do workflow concierge.',
    statusReady:
      'Brief został wysłany. Jeśli jest dopasowanie, przejdziesz teraz do umawiania rozmowy lub otrzymasz kontakt zwrotny.',
    statusFallback:
      'Webhook nie jest skonfigurowany, więc przygotowaliśmy fallback mailowy. Jeśli nic się nie otworzyło, napisz na hello@tenerife-flow.com.',
    statusError:
      'Nie udało się wysłać briefu do workflow. Spróbuj ponownie albo napisz bezpośrednio na hello@tenerife-flow.com.',
    submit: 'Wyślij brief',
    bookingCta: 'Przejdź do kalendarza rozmowy',
    labels: {
      travelDate: 'Termin wyjazdu',
      guests: 'Liczba osób',
      tripType: 'Typ wyjazdu',
      budget: 'Budżet orientacyjny',
      standard: 'Oczekiwany standard',
      expectations: 'Czego oczekujesz',
      priorities: 'Co jest dla Ciebie najważniejsze',
      contact: 'Kontakt',
      selectPlaceholder: 'Wybierz opcję',
      standardPlaceholder: 'Wybierz poziom',
      travelDatePlaceholder: 'np. listopad 2026',
      guestsPlaceholder: 'np. 2 osoby',
      budgetPlaceholder: 'np. wycena indywidualna',
      expectationsPlaceholder: 'Opisz, jaki klimat pobytu chcesz osiągnąć.',
      prioritiesPlaceholder:
        'Spokój, estetyka, brak chaosu, aktywności, wsparcie na miejscu...',
      contactPlaceholder: 'adres e-mail lub numer telefonu',
      tripTypes: [
        'Romantyczny pobyt',
        'Relaks premium',
        'Dłuższy pobyt lub relokacja',
        'Celebracja lub specjalna okazja',
      ],
      standards: [
        'Elevated comfort',
        'Premium curated',
        'Private concierge / high-touch',
      ],
      mailSubject: 'Zapytanie concierge Tenerife Flow',
      greeting: 'Dzień dobry,',
      intro: 'przesyłam brief dotyczący pobytu na Teneryfie:',
      expectationsTitle: 'Czego oczekuję:',
      prioritiesTitle: 'Co jest dla mnie najważniejsze:',
      replyContact: 'Kontakt zwrotny',
    },
  },
  en: {
    eyebrow: 'Final CTA',
    title: 'If you want a better Tenerife stay, start with a short brief.',
    description:
      'That is enough to assess the scope, package and planning direction. No long forms and no unnecessary explanation.',
    introLabel: 'What happens next',
    introCopy:
      'After the brief, we come back with the best cooperation model and next steps. If there is a fit, we move into stay design.',
    primaryCta: 'Fill in the brief',
    secondaryCta: 'Write directly',
    formKicker: 'Private inquiry',
    formTitle: 'Tell us about the stay you want to create',
    formDescription:
      'The better we understand your style and expectations, the faster we can match the plan, recommendations and the right concierge level.',
    statusInitial: 'After submitting, the brief will enter our concierge workflow.',
    statusSubmitting: 'Sending your brief to the concierge workflow.',
    statusReady:
      'Your brief has been sent. If there is a fit, you will now move to booking a call or receive a direct follow-up.',
    statusFallback:
      'The webhook is not configured, so we prepared an email fallback. If nothing opened, write to hello@tenerife-flow.com.',
    statusError:
      'We could not send the brief to the workflow. Try again or write directly to hello@tenerife-flow.com.',
    submit: 'Send brief',
    bookingCta: 'Go to call calendar',
    labels: {
      travelDate: 'Travel date',
      guests: 'Number of guests',
      tripType: 'Trip type',
      budget: 'Approximate budget',
      standard: 'Expected standard',
      expectations: 'What do you expect',
      priorities: 'What matters most to you',
      contact: 'Contact',
      selectPlaceholder: 'Choose an option',
      standardPlaceholder: 'Choose the level',
      travelDatePlaceholder: 'e.g. November 2026',
      guestsPlaceholder: 'e.g. 2 guests',
      budgetPlaceholder: 'e.g. custom pricing',
      expectationsPlaceholder: 'Describe the atmosphere you want to create.',
      prioritiesPlaceholder: 'Calm, aesthetics, no chaos, activities, on-site support...',
      contactPlaceholder: 'email address or phone number',
      tripTypes: [
        'Romantic stay',
        'Premium relaxation',
        'Longer stay or relocation',
        'Celebration or special occasion',
      ],
      standards: [
        'Elevated comfort',
        'Premium curated',
        'Private concierge / high-touch',
      ],
      mailSubject: 'Tenerife Flow concierge inquiry',
      greeting: 'Hello,',
      intro: 'here is my brief regarding a stay in Tenerife:',
      expectationsTitle: 'What I expect:',
      prioritiesTitle: 'What matters most to me:',
      replyContact: 'Reply contact',
    },
  },
  es: {
    eyebrow: 'Final CTA',
    title: 'Si quieres una mejor estancia en Tenerife, empieza con un brief corto.',
    description:
      'Eso basta para evaluar el alcance, el paquete y la dirección de la organización. Sin formularios largos ni explicaciones innecesarias.',
    introLabel: 'Qué pasa después',
    introCopy:
      'Después del brief volvemos con el mejor modelo de colaboración y los siguientes pasos. Si hay encaje, pasamos al diseño de la estancia.',
    primaryCta: 'Completar brief',
    secondaryCta: 'Escribir directamente',
    formKicker: 'Private inquiry',
    formTitle: 'Cuéntanos qué estancia quieres crear',
    formDescription:
      'Cuanto mejor entendamos tu estilo y expectativas, más rápido podremos ajustar el plan, las recomendaciones y el nivel adecuado de concierge.',
    statusInitial: 'Después de enviar, el brief entrará en nuestro workflow concierge.',
    statusSubmitting: 'Enviando tu brief al workflow concierge.',
    statusReady:
      'Tu brief ha sido enviado. Si hay encaje, pasarás ahora a reservar una llamada o recibirás seguimiento directo.',
    statusFallback:
      'El webhook no está configurado, así que preparamos un fallback por email. Si no se abrió nada, escribe a hello@tenerife-flow.com.',
    statusError:
      'No hemos podido enviar el brief al workflow. Inténtalo de nuevo o escribe directamente a hello@tenerife-flow.com.',
    submit: 'Enviar brief',
    bookingCta: 'Ir al calendario',
    labels: {
      travelDate: 'Fecha del viaje',
      guests: 'Número de personas',
      tripType: 'Tipo de viaje',
      budget: 'Presupuesto aproximado',
      standard: 'Nivel esperado',
      expectations: 'Qué esperas',
      priorities: 'Qué es lo más importante para ti',
      contact: 'Contacto',
      selectPlaceholder: 'Elige una opción',
      standardPlaceholder: 'Elige el nivel',
      travelDatePlaceholder: 'p. ej. noviembre 2026',
      guestsPlaceholder: 'p. ej. 2 personas',
      budgetPlaceholder: 'p. ej. presupuesto personalizado',
      expectationsPlaceholder: 'Describe el ambiente que quieres conseguir.',
      prioritiesPlaceholder: 'Calma, estética, sin caos, actividades, apoyo en destino...',
      contactPlaceholder: 'correo electrónico o número de teléfono',
      tripTypes: [
        'Estancia romántica',
        'Relax premium',
        'Estancia larga o relocalización',
        'Celebración u ocasión especial',
      ],
      standards: [
        'Elevated comfort',
        'Premium curated',
        'Private concierge / high-touch',
      ],
      mailSubject: 'Consulta de concierge Tenerife Flow',
      greeting: 'Hola,',
      intro: 'comparto mi brief sobre una estancia en Tenerife:',
      expectationsTitle: 'Qué espero:',
      prioritiesTitle: 'Qué es lo más importante para mí:',
      replyContact: 'Contacto de respuesta',
    },
  },
} as const

export function ContactSection() {
  const locale = getLocale()
  const content = copy[locale]
  const labels = content.labels
  const [statusMessage, setStatusMessage] = useState<string>(content.statusInitial)
  const [bookingUrl, setBookingUrl] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasStartedForm, setHasStartedForm] = useState(false)

  const mailtoFallback = useMemo(() => {
    return (payload: {
      travelDate: string
      guests: string
      tripType: string
      budget: string
      standard: string
      expectations: string
      priorities: string
      contact: string
    }) => {
      const subject = encodeURIComponent(labels.mailSubject)
      const body = encodeURIComponent(
        [
          labels.greeting,
          '',
          labels.intro,
          '',
          `${labels.travelDate}: ${payload.travelDate}`,
          `${labels.guests}: ${payload.guests}`,
          `${labels.tripType}: ${payload.tripType}`,
          `${labels.budget}: ${payload.budget}`,
          `${labels.standard}: ${payload.standard}`,
          '',
          labels.expectationsTitle,
          payload.expectations,
          '',
          labels.prioritiesTitle,
          payload.priorities,
          '',
          `${labels.replyContact}: ${payload.contact}`,
        ].join('\n'),
      )

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    }
  }, [labels])

  const handleFormStart = (_event: FocusEvent<HTMLFormElement>) => {
    if (hasStartedForm) {
      return
    }

    setHasStartedForm(true)
    trackEvent('form_start', {
      form_name: 'contact_brief',
      page_path: window.location.pathname,
      locale,
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const travelDate = String(formData.get('travelDate') ?? '').trim()
    const guests = String(formData.get('guests') ?? '').trim()
    const tripType = String(formData.get('tripType') ?? '').trim()
    const budget = String(formData.get('budget') ?? '').trim()
    const standard = String(formData.get('standard') ?? '').trim()
    const expectations = String(formData.get('expectations') ?? '').trim()
    const priorities = String(formData.get('priorities') ?? '').trim()
    const contact = String(formData.get('contact') ?? '').trim()

    const basePayload = {
      travelDate,
      guests,
      tripType,
      budget,
      standard,
      expectations,
      priorities,
      contact,
    }

    const leadPayload = {
      locale,
      pagePath: window.location.pathname,
      source: 'website_contact_form',
      submittedAt: new Date().toISOString(),
      ...basePayload,
      segment: buildLeadSegment(basePayload),
    }

    setIsSubmitting(true)
    setBookingUrl(null)
    setStatusMessage(content.statusSubmitting)

    trackEvent('form_submit_attempt', {
      form_name: 'contact_brief',
      page_path: window.location.pathname,
      locale,
      trip_type: tripType,
      budget_band: leadPayload.segment.budgetBand,
      guest_band: leadPayload.segment.guestBand,
      planning_window: leadPayload.segment.planningWindow,
      service_level: leadPayload.segment.serviceLevel,
    })

    try {
      const result = await submitContactLead(leadPayload)

      if (!result.ok && result.fallback === 'mailto') {
        mailtoFallback(basePayload)
        setStatusMessage(content.statusFallback)
        trackEvent('form_submit_fallback', {
          form_name: 'contact_brief',
          page_path: window.location.pathname,
          locale,
        })
        form.reset()
        return
      }

      const nextBookingUrl = result.bookingUrl ?? null

      setBookingUrl(nextBookingUrl)
      setStatusMessage(result.message ?? content.statusReady)

      trackEvent('form_submit_success', {
        form_name: 'contact_brief',
        page_path: window.location.pathname,
        locale,
        trip_type: tripType,
        budget_band: leadPayload.segment.budgetBand,
        guest_band: leadPayload.segment.guestBand,
        planning_window: leadPayload.segment.planningWindow,
        service_level: leadPayload.segment.serviceLevel,
        booking_step_ready: Boolean(nextBookingUrl),
      })

      form.reset()

      if (nextBookingUrl) {
        window.setTimeout(() => {
          window.location.href = nextBookingUrl
        }, 1200)
      }
    } catch (_error) {
      setStatusMessage(content.statusError)
      setBookingUrl(null)
      trackEvent('form_submit_error', {
        form_name: 'contact_brief',
        page_path: window.location.pathname,
        locale,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="contact-intro-card">
            <span className="contact-intro-label">{content.introLabel}</span>
            <p>{content.introCopy}</p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="#form" data-track="cta_contact_start">
              {content.primaryCta}
            </a>
            <a
              className="button button-secondary"
              href={`mailto:${contactEmail}`}
              data-track="cta_direct_email"
            >
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          id="form"
          onSubmit={handleSubmit}
          onFocusCapture={handleFormStart}
        >
          <div className="contact-form-head">
            <span className="contact-form-kicker">{content.formKicker}</span>
            <h3>{content.formTitle}</h3>
            <p>{content.formDescription}</p>
          </div>

          <div className="contact-form-grid">
            <label>
              {labels.travelDate}
              <input
                type="text"
                name="travelDate"
                placeholder={labels.travelDatePlaceholder}
                required
              />
            </label>
            <label>
              {labels.guests}
              <input type="text" name="guests" placeholder={labels.guestsPlaceholder} required />
            </label>
            <label>
              {labels.tripType}
              <select name="tripType" defaultValue="" required>
                <option value="" disabled>
                  {labels.selectPlaceholder}
                </option>
                {labels.tripTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              {labels.budget}
              <input type="text" name="budget" placeholder={labels.budgetPlaceholder} />
            </label>
            <label>
              {labels.standard}
              <select name="standard" defaultValue="" required>
                <option value="" disabled>
                  {labels.standardPlaceholder}
                </option>
                {labels.standards.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="contact-field-wide">
              {labels.expectations}
              <textarea
                name="expectations"
                rows={4}
                placeholder={labels.expectationsPlaceholder}
                required
              />
            </label>
            <label className="contact-field-wide">
              {labels.priorities}
              <textarea
                name="priorities"
                rows={4}
                placeholder={labels.prioritiesPlaceholder}
                required
              />
            </label>
            <label className="contact-field-wide">
              {labels.contact}
              <input
                type="text"
                name="contact"
                placeholder={labels.contactPlaceholder}
                required
              />
            </label>
          </div>

          <div className="contact-submit-row">
            <p>{statusMessage}</p>
            <button type="submit" className="button button-primary button-submit" disabled={isSubmitting}>
              {content.submit}
            </button>
          </div>
          {bookingUrl ? (
            <div className="contact-status-actions">
              <a
                className="button button-secondary"
                href={bookingUrl}
                data-track="cta_booking_redirect"
              >
                {content.bookingCta}
              </a>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  )
}
