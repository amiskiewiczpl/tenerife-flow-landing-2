import { useState } from 'react'
import { AccordionItem } from '../components/AccordionItem'
import { SectionHeading } from '../components/SectionHeading'
import { faqs } from '../data/content'

export function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <section className="section section-soft" id="faq">
      <div className="container faq-layout">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title="Najczęstsze pytania"
            description="Krótkie odpowiedzi na rzeczy, które klienci chcą wiedzieć przed pierwszą rozmową."
          />
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={activeQuestion === index}
              onToggle={() =>
                setActiveQuestion((current) => (current === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
