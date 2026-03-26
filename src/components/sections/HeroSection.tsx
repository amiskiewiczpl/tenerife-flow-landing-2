import React, { useState } from 'react';
import Button from '../ui/Button';

const heroPoints = [
  'Indywidualny plan pobytu',
  'Lokalna wiedza i sprawdzone rekomendacje',
  'Spokój, wygoda i oszczędność czasu',
];

const trustPoints = [
  'Konsultacja 1:1 przed planowaniem',
  'Selektywne rekomendacje zamiast przypadkowych list',
  'Wsparcie po polsku od pierwszej rozmowy',
];

const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImageUrl = new URL('../../assets/hero-tenerife.jpg', import.meta.url).href;

  const HeroPlaceholder = () => (
    <div className="hero-visual hero-visual--placeholder">
      <div className="hero-visual__glow hero-visual__glow--one" />
      <div className="hero-visual__glow hero-visual__glow--two" />
    </div>
  );

  return (
    <section id="hero" className="hero-bg section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="hero-label">Concierge &amp; travel planning</span>

            <h1 className="hero-title">
              Tenerife Flow to pobyt na Teneryfie zaplanowany tak, jak powinien wyglądać luksus.
            </h1>

            <p className="hero-description">
              Zamiast przeszukiwać dziesiątki opcji, dostajesz przemyślany plan pobytu,
              sprawdzone adresy i spokojną organizację od pierwszej rozmowy do przyjazdu.
            </p>

            <div className="hero-actions">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="hero-action hero-action--primary"
              >
                Umów konsultację
              </Button>
              <Button
                onClick={() => scrollToSection('packages')}
                variant="secondary"
                size="lg"
                className="hero-action hero-action--secondary"
              >
                Zobacz pakiety
              </Button>
            </div>

            <div className="hero-points" aria-label="Najważniejsze korzyści">
              {heroPoints.map((point) => (
                <div key={point} className="hero-point">
                  <span className="hero-point__marker" aria-hidden="true" />
                  <p className="hero-point__text">{point}</p>
                </div>
              ))}
            </div>

            <div className="hero-trust-strip" aria-label="Wiarygodność oferty">
              {trustPoints.map((item) => (
                <div key={item} className="hero-trust-item">
                  <span className="hero-trust-item__label">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-media-frame">
              {!imageError ? (
                <img
                  src={heroImageUrl}
                  alt="Elegancki pobyt na Teneryfie"
                  className="hero-media-image"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              ) : (
                <HeroPlaceholder />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
