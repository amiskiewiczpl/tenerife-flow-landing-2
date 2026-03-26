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

          <div className="contact-actions">
            <a className="button button-primary" href="#form">
              Wypełnij formularz
            </a>
            <a className="button button-secondary" href="mailto:hello@tenerife2.example">
              Umów rozmowę
            </a>
          </div>
        </div>

        <form className="contact-form" id="form">
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
          <label>
            Czego oczekujesz
            <textarea
              name="expectations"
              rows={4}
              placeholder="Opisz, jaki klimat pobytu chcesz osiągnąć."
            />
          </label>
          <label>
            Co jest dla Ciebie najważniejsze
            <textarea
              name="priorities"
              rows={4}
              placeholder="Spokój, estetyka, brak chaosu, aktywności, wsparcie na miejscu..."
            />
          </label>
          <label>
            Kontakt
            <input type="text" name="contact" placeholder="email lub telefon" />
          </label>
          <button type="submit" className="button button-primary button-submit">
            Wyślij zapytanie
          </button>
        </form>
      </div>
    </section>
  )
}
