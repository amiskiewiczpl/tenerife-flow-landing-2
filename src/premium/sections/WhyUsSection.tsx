import { SectionHeading } from '../components/SectionHeading'
import { whyUsPoints } from '../data/content'

export function WhyUsSection() {
  return (
    <section className="section" id="why-us">
      <div className="container split-section">
        <div className="why-us-intro">
          <SectionHeading
            eyebrow="Dlaczego my"
            title="Przewagą nie jest liczba opcji. Przewagą jest jakość selekcji i sposób prowadzenia klienta."
            description="Ta usługa ma działać spokojnie, selektywnie i bez nadmiaru. Dlatego stawiamy na lokalne rozeznanie, dopasowanie i concierge mindset."
          />
          <div className="why-us-note">
            <span className="eyebrow">Quiet luxury service</span>
            <p>
              Dla nas premium nie oznacza przesady. Oznacza lepsze decyzje,
              spokojniejszy proces i pobyt, który od początku jest bardziej
              dopracowany.
            </p>
          </div>
        </div>

        <div className="reason-grid editorial-grid">
          {whyUsPoints.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-index">0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
