import { SectionHeading } from '../components/SectionHeading'
import { caseStudies } from '../data/content'

const storySummaries = [
  'Para chciała jakościowego wyjazdu dla dwojga bez samodzielnego składania wszystkiego od zera.',
  'Klient szukał pobytu łączącego aktywność, regenerację i dobre adresy bez przeładowania planu.',
  'Klient potrzebował spokojnego wejścia w dłuższy pobyt i lokalnego wsparcia od pierwszych decyzji.',
]

const storyResults = [
  'spójny, lekki wyjazd z właściwym rytmem od pierwszego dnia.',
  'aktywny pobyt premium, w którym wszystko miało sens jako całość.',
  'prostszy start na wyspie i mniej nietrafionych decyzji.',
]

const storyQuotes = [
  'Weszliśmy w wyjazd bez stresu i bez potrzeby dopinania wszystkiego samemu.',
  'Nic nie było przypadkowe. Całość oszczędziła nam czas i energię.',
  'Dostaliśmy dokładnie to, czego potrzebowaliśmy: spokój, selekcję i lokalne wsparcie.',
]

export function SocialProofSection() {
  return (
    <section className="section social-proof-section" id="social-proof">
      <div className="container">
        <SectionHeading
          eyebrow="Historie i opinie"
          title="Trzy krótkie historie, które pokazują efekt dobrze poprowadzonego pobytu"
          description="To świadomy skrót. Pełne case studies nie są potrzebne na homepage, jeśli decyzję o kontakcie da się podjąć szybciej."
        />

        <div className="social-proof-grid">
          {caseStudies.map((entry, index) => (
            <article
              className={`social-proof-card social-proof-card-${index + 1}`}
              key={entry.title}
            >
              <div className="social-proof-media">
                <img src={entry.image} alt={entry.client} />
              </div>
              <div className="social-proof-copy">
                <span className="social-proof-meta">{entry.client}</span>
                <h3>{entry.title}</h3>
                <p className="social-proof-detail">{storySummaries[index]}</p>
                <p className="social-proof-name">
                  <strong>Efekt:</strong> {storyResults[index]}
                </p>
                <div className="social-proof-quote-box">
                  <span className="social-proof-quote-label">Opinia klienta</span>
                  <p className="social-proof-quote">{storyQuotes[index]}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
