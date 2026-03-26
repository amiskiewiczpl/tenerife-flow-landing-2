import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { faqs } from '../../data/faq';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="faq" className="section section-alt">
      <Container>
        <SectionTitle
          title="Najczęściej zadawane pytania"
          subtitle="Szybkie odpowiedzi na pytania, które często słyszymy od naszych klientów."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${isOpen ? 'is-open' : ''}`}
                  hidden={!isOpen}
                >
                  <p className="faq-answer__text">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
