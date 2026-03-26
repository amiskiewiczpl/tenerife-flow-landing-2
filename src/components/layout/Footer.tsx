import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-slate-950 text-slate-100">
      <div className="container footer-main py-12 md:py-16">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="footer-column md:col-span-1">
            <div className="footer-brand flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Tenerife Flow"
                className="brand-logo h-8"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h3 className="text-lg font-bold text-white">Tenerife Flow</h3>
            </div>
            <p className="footer-description text-sm text-slate-400 leading-relaxed max-w-sm">
              Luksusowa obsluga podrozy na Teneryfie. Planowanie, concierge i relokacje w jednym miejscu.
            </p>
          </div>

          <div className="footer-column md:col-span-1">
            <h4 className="footer-heading text-sm font-semibold text-white uppercase tracking-wide mb-6">Nawigacja</h4>
            <nav className="footer-nav space-y-3">
              <a
                onClick={() => scrollToSection('audience')}
                className="footer-link block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Dla kogo
              </a>
              <a
                onClick={() => scrollToSection('packages')}
                className="footer-link block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Pakiety uslug
              </a>
              <a
                onClick={() => scrollToSection('how-it-works')}
                className="footer-link block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Proces
              </a>
              <a
                onClick={() => scrollToSection('faq')}
                className="footer-link block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>
          </div>

          <div className="footer-column md:col-span-1">
            <h4 className="footer-heading text-sm font-semibold text-white uppercase tracking-wide mb-6">Kontakt</h4>
            <div className="footer-contact space-y-4">
              <div className="footer-contact-item">
                <a
                  href="mailto:kontakt@twojadomena.pl"
                  className="footer-link footer-contact-link block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  kontakt@twojadomena.pl
                </a>
              </div>
              <div className="footer-contact-item">
                <a
                  href="https://wa.me/48123123123"
                  className="footer-link footer-contact-link block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +48 123 123 123
                </a>
                <p className="footer-meta text-xs text-slate-500 mt-1">Odpowiedz do 24h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container footer-bottom py-6">
          <p className="footer-copyright text-xs text-slate-500 text-center">
            &copy; 2024 Tenerife Flow. Wszystkie prawa zastrzezone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
