import type { FormEvent } from 'react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
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
    statusInitial: 'Po wysłaniu otworzy się gotowy draft maila z Twoim briefem.',
    statusReady:
      'Draft maila został przygotowany. Jeśli nic się nie otworzyło, napisz bezpośrednio na hello@tenerife-flow.com.',
    submit: 'Przygotuj wiadomość',
    labels: {
      travelDate: 'Termin wyjazdu',
      guests: 'Liczba osób',
      tripType: 'Typ wyjazdu',
      budget: 'Budżet orientacyjny',
      expectations: 'Czego oczekujesz',
      priorities: 'Co jest dla Ciebie najważniejsze',
      contact: 'Kontakt',
      selectPlaceholder: 'Wybierz opcję',
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
    statusInitial: 'After submitting, a ready email draft with your brief will open.',
    statusReady:
      'The email draft has been prepared. If nothing opened, write directly to hello@tenerife-flow.com.',
    submit: 'Prepare message',
    labels: {
      travelDate: 'Travel date',
      guests: 'Number of guests',
      tripType: 'Trip type',
      budget: 'Approximate budget',
      expectations: 'What do you expect',
      priorities: 'What matters most to you',
      contact: 'Contact',
      selectPlaceholder: 'Choose an option',
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
    statusInitial: 'Después de enviar, se abrirá un borrador de email con tu brief.',
    statusReady:
      'El borrador del email está listo. Si no se abrió nada, escribe directamente a hello@tenerife-flow.com.',
    submit: 'Preparar mensaje',
    labels: {
      travelDate: 'Fecha del viaje',
      guests: 'Número de personas',
      tripType: 'Tipo de viaje',
      budget: 'Presupuesto aproximado',
      expectations: 'Qué esperas',
      priorities: 'Qué es lo más importante para ti',
      contact: 'Contacto',
      selectPlaceholder: 'Elige una opción',
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
  const [statusMessage, setStatusMessage] = useState<string>(content.statusInitial)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const labels = content.labels

    const travelDate = String(formData.get('travelDate') ?? '').trim()
    const guests = String(formData.get('guests') ?? '').trim()
    const tripType = String(formData.get('tripType') ?? '').trim()
    const budget = String(formData.get('budget') ?? '').trim()
    const expectations = String(formData.get('expectations') ?? '').trim()
    const priorities = String(formData.get('priorities') ?? '').trim()
    const contact = String(formData.get('contact') ?? '').trim()

    const subject = encodeURIComponent(labels.mailSubject)
    const body = encodeURIComponent(
      [
        labels.greeting,
        '',
        labels.intro,
        '',
        `${labels.travelDate}: ${travelDate}`,
        `${labels.guests}: ${guests}`,
        `${labels.tripType}: ${tripType}`,
        `${labels.budget}: ${budget}`,
        '',
        labels.expectationsTitle,
        expectations,
        '',
        labels.prioritiesTitle,
        priorities,
        '',
        `${labels.replyContact}: ${contact}`,
      ].join('\n'),
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setStatusMessage(content.statusReady)
    form.reset()
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
            <a className="button button-primary" href="#form">
              {content.primaryCta}
            </a>
            <a className="button button-secondary" href={`mailto:${contactEmail}`}>
              {content.secondaryCta}
            </a>
          </div>
        </div>

        <form className="contact-form" id="form" onSubmit={handleSubmit}>
          <div className="contact-form-head">
            <span className="contact-form-kicker">{content.formKicker}</span>
            <h3>{content.formTitle}</h3>
            <p>{content.formDescription}</p>
          </div>

          <div className="contact-form-grid">
            <label>
              {content.labels.travelDate}
              <input
                type="text"
                name="travelDate"
                placeholder={content.labels.travelDatePlaceholder}
                required
              />
            </label>
            <label>
              {content.labels.guests}
              <input type="text" name="guests" placeholder={content.labels.guestsPlaceholder} required />
            </label>
            <label>
              {content.labels.tripType}
              <select name="tripType" defaultValue="" required>
                <option value="" disabled>
                  {content.labels.selectPlaceholder}
                </option>
                {content.labels.tripTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
            <label>
              {content.labels.budget}
              <input type="text" name="budget" placeholder={content.labels.budgetPlaceholder} />
            </label>
            <label className="contact-field-wide">
              {content.labels.expectations}
              <textarea
                name="expectations"
                rows={4}
                placeholder={content.labels.expectationsPlaceholder}
                required
              />
            </label>
            <label className="contact-field-wide">
              {content.labels.priorities}
              <textarea
                name="priorities"
                rows={4}
                placeholder={content.labels.prioritiesPlaceholder}
                required
              />
            </label>
            <label className="contact-field-wide">
              {content.labels.contact}
              <input
                type="text"
                name="contact"
                placeholder={content.labels.contactPlaceholder}
                required
              />
            </label>
          </div>

          <div className="contact-submit-row">
            <p>{statusMessage}</p>
            <button type="submit" className="button button-primary button-submit">
              {content.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
