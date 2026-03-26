import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-bg section py-16 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="contact-copy text-center mb-12">
            <h2 className="contact-title text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Gotowy na luksusowy pobyt?
            </h2>
            <p className="contact-description text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Skontaktuj się z nami, aby zaplanować swój idealny wyjazd bez stresu i organizacyjnych problemów.
            </p>
          </div>

          <div className="contact-actions flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              href="mailto:kontakt@twojadomena.pl"
              size="lg"
              className="contact-button contact-button--light bg-white text-slate-900 font-bold hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
            >
              Napisz email
            </Button>
            <Button
              href="https://wa.me/48123123123"
              size="lg"
              className="contact-button contact-button--whatsapp bg-green-500 text-white font-bold hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
            >
              WhatsApp
            </Button>
          </div>

          <div className="text-center">
            <div className="contact-note inline-flex flex-col items-center gap-4 text-sm bg-white/20 px-8 py-6 rounded-2xl border border-white/30 backdrop-blur-md shadow-lg">
              <div className="contact-note__headline flex items-center gap-3">
                <span className="contact-note__icon text-emerald-300 text-2xl">✓</span>
                <p className="contact-note__title font-bold text-white text-lg">Konsultacja bezpłatna</p>
              </div>
              <p className="contact-note__text text-white/85 text-base">
                <span>Odpowiadamy w ciągu 24 godzin</span>
                <span className="contact-note__separator" aria-hidden="true">•</span>
                <span>Wsparcie w języku polskim</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
