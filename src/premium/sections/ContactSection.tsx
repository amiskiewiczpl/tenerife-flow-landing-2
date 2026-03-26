import { SectionHeading } from '../components/SectionHeading'

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Kontakt"
            title="Opowiedz nam, jak chcesz przeżyć Teneryfę. My zamienimy to w dopracowany plan i spokojny wyjazd."
            description="Formularz jest gotowy wizualnie i może zostać podpięty pod backend lub automatyzację w kolejnym kroku."
          />

          <div className="contact-intro-card">
            <span className="contact-intro-label">Jak pracujemy</span>
            <p>
              Zaczynamy od krótkiej rozmowy o Twoim stylu pobytu, priorytetach i
              oczekiwanym standardzie. Potem przygotowujemy kierunek działania,
              zamiast zostawiać Cię z listą przypadkowych opcji.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="#form">
              Wypełnij formularz
            </a>
            <a className="button button-secondary" href="#form">
              Umów rozmowę
            </a>
          </div>
        </div>

        <form className="contact-form" id="form">
          <div className="contact-form-head">
            <span className="contact-form-kicker">Private inquiry</span>
            <h3>Opowiedz nam o pobycie, który chcesz stworzyć</h3>
            <p>
              Im lepiej poznamy Twój styl i oczekiwania, tym precyzyjniej dobierzemy
              plan, rekomendacje i zakres concierge.
            </p>
          </div>

          <div className="contact-form-grid">
            <label>
              Termin wyjazdu
              <input type="text" name="travelDate" placeholder="np. listopad 2026" />
            </label>
            <label>
              Liczba osób
              <input type="text" name="guests" placeholder="np. 2 osoby" />
            </label>
            <label>
              Typ wyjazdu
              <select name="tripType" defaultValue="">
                <option value="" disabled>
                  Wybierz opcję
                </option>
                <option>Romantyczny pobyt</option>
                <option>Relaks premium</option>
                <option>Dłuższy pobyt / relokacja</option>
                <option>Celebracja / specjalna okazja</option>
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
              />
            </label>
            <label className="contact-field-wide">
              Co jest dla Ciebie najważniejsze
              <textarea
                name="priorities"
                rows={4}
                placeholder="Spokój, estetyka, brak chaosu, aktywności, wsparcie na miejscu..."
              />
            </label>
            <label className="contact-field-wide">
              Kontakt
              <input type="text" name="contact" placeholder="email lub telefon" />
            </label>
          </div>

          <div className="contact-submit-row">
            <p>
              Odpowiadamy spokojnie i konkretnie, z propozycją najlepszego kierunku
              działania dla Twojego pobytu.
            </p>
            <button type="submit" className="button button-primary button-submit">
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
