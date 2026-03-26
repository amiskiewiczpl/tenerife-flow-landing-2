type AccordionItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button
        type="button"
        className="faq-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-panel" hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  )
}
