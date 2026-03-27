import type { FormEvent } from 'react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'

const contactEmail = 'hello@tenerife-flow.com'

export function ContactSection() {
  const [statusMessage, setStatusMessage] = useState(
    'Po wysłaniu otworzy się gotowy draft maila z Twoim briefem.',
  )

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const travelDate = String(formData.get('travelDate') ?? '').trim()
    const guests = String(formData.get('guests') ?? '').trim()
    const tripType = String(formData.get('tripType') ?? '').trim()
    const budget = String(formData.get('budget') ?? '').trim()
    const expectations = String(formData.get('expectations') ?? '').trim()
    const priorities = String(formData.get('priorities') ?? '').trim()
    const contact = String(formData.get('contact') ?? '').trim()

    const subject = encodeURIComponent('Zapytanie concierge Tenerife Flow')
    const body = encodeURIComponent(
      [
        'Dzień dobry,',
        '',
        'przesyłam brief dotyczący pobytu na Teneryfie:',
        '',
        `Termin wyjazdu: ${travelDate}`,
        `Liczba osób: ${guests}`,
        `Typ wyjazdu: ${tripType}`,
        `Budżet orientacyjny: ${budget}`,
        '',
        'Czego oczekuję:',
        expectations,
        '',
        'Co jest dla mnie najważniejsze:',
        priorities,
        '',
        `Kontakt zwrotny: ${contact}`,
      ].join('\n'),
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    setStatusMessage(
      'Draft maila został przygotowany. Jeśli nic się nie otworzyło, napisz bezpośrednio na hello@tenerife-flow.com.',
    )
    form.reset()
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Final CTA"
            title="Jeśli chcesz lepszego pobytu na Teneryfie, zacznij od krótkiego briefu."
            description="To wystarczy, żeby ocenić zakres, pakiet i kierunek organizacji. Bez długich formularzy i bez zbędnego tłumaczenia."
          />

          <div className="contact-intro-card">
            <span className="contact-intro-label">Co dalej</span>
            <p>
              Po briefie wracamy z propozycją najlepszego modelu współpracy i dalszych
              kroków. Jeśli jest dopasowanie, przechodzimy do projektu pobytu.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="#form">
              Wypełnij brief
            </a>
            <a className="button button-secondary" href={`mailto:${contactEmail}`}>
              Napisz bezpośrednio
            </a>
          </div>
        </div>

        <form className="contact-form" id="form" onSubmit={handleSubmit}>
          <div className="contact-form-head">
            <span className="contact-form-kicker">Private inquiry</span>
            <h3>Opowiedz nam o pobycie, który chcesz stworzyć</h3>
            <p>
              Im lepiej poznamy Twój styl i oczekiwania, tym szybciej dobierzemy plan,
              rekomendacje i odpowiedni poziom concierge.
            </p>
          </div>

          <div className="contact-form-grid">
            <label>
              Termin wyjazdu
              <input
                type="text"
                name="travelDate"
                placeholder="np. listopad 2026"
                required
              />
            </label>
            <label>
              Liczba osób
              <input type="text" name="guests" placeholder="np. 2 osoby" required />
            </label>
            <label>
              Typ wyjazdu
              <select name="tripType" defaultValue="" required>
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Romantyczny pobyt</option>
                <option>Relaks premium</option>
                <option>Dłuższy pobyt lub relokacja</option>
                <option>Celebracja lub specjalna okazja</option>
              </select>
            </label>
            <label>
              Budżet orientacyjny
              <input type="text" name="budget" placeholder="np. wycena indywidualna" />
            </label>
            <label className="contact-field-wide">
              Czego oczekujesz
              <textarea
                name="expectations"
                rows={4}
                placeholder="Opisz, jaki klimat pobytu chcesz osiągnąć."
                required
              />
            </label>
            <label className="contact-field-wide">
              Co jest dla Ciebie najważniejsze
              <textarea
                name="priorities"
                rows={4}
                placeholder="Spokój, estetyka, brak chaosu, aktywności, wsparcie na miejscu..."
                required
              />
            </label>
            <label className="contact-field-wide">
              Kontakt
              <input
                type="text"
                name="contact"
                placeholder="adres e-mail lub numer telefonu"
                required
              />
            </label>
          </div>

          <div className="contact-submit-row">
            <p>{statusMessage}</p>
            <button type="submit" className="button button-primary button-submit">
              Przygotuj wiadomość
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
