import { useState } from 'react'
import { AccordionItem } from '../components/AccordionItem'
import { SectionHeading } from '../components/SectionHeading'
import { getLocale } from '../locale'

const copy = {
  pl: {
    eyebrow: 'FAQ',
    title: 'Najczęstsze pytania',
    description:
      'Krótkie odpowiedzi na rzeczy, które klienci chcą wiedzieć przed pierwszą rozmową.',
    items: [
      {
        question: 'Czym różnicie się od biura podróży?',
        answer:
          'Nie sprzedajemy masowych wycieczek. Projektujemy pobyt wokół potrzeb klienta, jego stylu i oczekiwanego poziomu wygody.',
      },
      {
        question: 'Czy rezerwujecie wszystko za klienta?',
        answer:
          'Zakres zależy od pakietu. Możemy przygotować sam plan albo wesprzeć szerzej w koordynacji i concierge.',
      },
      {
        question: 'Czy działacie tylko na Teneryfie?',
        answer:
          'Tak. Teneryfa jest naszym głównym kierunkiem i to tutaj skupiamy lokalną wiedzę, kontakty oraz styl usługi.',
      },
      {
        question: 'Czy pomagacie przy dłuższym pobycie?',
        answer:
          'Tak. Wspieramy również klientów planujących relokację czasową lub pobyt na dłużej.',
      },
      {
        question: 'Ile kosztuje usługa?',
        answer:
          'Każdy pobyt ma inny zakres, dlatego ceny ustalamy po krótkiej rozmowie i dopasowaniu modelu współpracy.',
      },
      {
        question: 'Czy można zamówić tylko plan bez pełnej obsługi?',
        answer:
          'Tak. Pakiet Essential jest dla osób, które chcą dobrego planu i konkretnych rekomendacji bez pełnej obsługi concierge.',
      },
    ],
  },
  en: {
    eyebrow: 'FAQ',
    title: 'Most common questions',
    description:
      'Short answers to the things clients usually want to know before the first conversation.',
    items: [
      {
        question: 'How are you different from a travel agency?',
        answer:
          'We do not sell mass trips. We design the stay around the client’s needs, style and expected comfort level.',
      },
      {
        question: 'Do you book everything for the client?',
        answer:
          'It depends on the package. We can prepare just the plan or support more broadly with coordination and concierge.',
      },
      {
        question: 'Do you work only in Tenerife?',
        answer:
          'Yes. Tenerife is our main destination and where we focus our local knowledge, contacts and service style.',
      },
      {
        question: 'Can you help with a longer stay?',
        answer:
          'Yes. We also support clients planning a temporary relocation or a longer stay.',
      },
      {
        question: 'How much does the service cost?',
        answer:
          'Each stay has a different scope, so pricing is set after a short conversation and scope matching.',
      },
      {
        question: 'Can I order only a plan without full service?',
        answer:
          'Yes. The Essential package is for people who want a strong plan and concrete recommendations without full concierge coverage.',
      },
    ],
  },
  es: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
    description:
      'Respuestas breves a lo que los clientes suelen querer saber antes de la primera conversación.',
    items: [
      {
        question: '¿En qué os diferenciáis de una agencia de viajes?',
        answer:
          'No vendemos viajes masivos. Diseñamos la estancia alrededor de las necesidades del cliente, su estilo y el nivel de comodidad esperado.',
      },
      {
        question: '¿Reserváis todo para el cliente?',
        answer:
          'Depende del paquete. Podemos preparar solo el plan o apoyar de forma más amplia con coordinación y concierge.',
      },
      {
        question: '¿Trabajáis solo en Tenerife?',
        answer:
          'Sí. Tenerife es nuestro destino principal y donde concentramos el conocimiento local, los contactos y el estilo de servicio.',
      },
      {
        question: '¿Podéis ayudar con una estancia larga?',
        answer:
          'Sí. También apoyamos a clientes que planean una relocalización temporal o una estancia más larga.',
      },
      {
        question: '¿Cuánto cuesta el servicio?',
        answer:
          'Cada estancia tiene un alcance distinto, por eso el precio se define tras una breve conversación y el ajuste del servicio.',
      },
      {
        question: '¿Se puede contratar solo el plan sin servicio completo?',
        answer:
          'Sí. El paquete Essential es para personas que quieren un buen plan y recomendaciones concretas sin concierge completo.',
      },
    ],
  },
} as const

export function FaqSection() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const content = copy[getLocale()]

  return (
    <section className="section section-soft" id="faq">
      <div className="container faq-layout">
        <div>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="faq-list">
          {content.items.map((item, index) => (
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
