import { trustBarItems } from '../data/content'

export function TrustBarSection() {
  return (
    <section className="trust-bar" aria-label="Najważniejsze wyróżniki marki">
      <div className="container trust-bar-inner">
        {trustBarItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  )
}
