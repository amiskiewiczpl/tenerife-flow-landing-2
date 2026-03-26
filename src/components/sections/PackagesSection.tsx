import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { packages } from '../../data/packages';

const PackagesSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="section">
      <Container>
        <SectionTitle
          title="Nasze pakiety uslug"
          subtitle="Wybierz spersonalizowana oferte, ktora daje Ci luksusowy start bez pracy organizacyjnej."
        />
        <div className="package-grid grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const isRecommended = pkg.name === 'Full concierge premium';

            return (
              <article
                key={index}
                className={`package-card package-card--premium relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isRecommended ? 'package-card--recommended' : ''
                }`}
              >
                {isRecommended && <div className="package-card__glow" aria-hidden="true" />}

                <div className="package-content package-content--premium px-5 md:px-6 py-5 md:py-6">
                  <div className="package-head">
                    <div className="package-head__meta">
                      <p className="package-audience text-xs uppercase tracking-widest font-semibold text-slate-500 mb-2">
                        {pkg.forWhom}
                      </p>
                      {isRecommended && (
                        <div className="package-badge package-badge--recommended inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                          Polecane
                        </div>
                      )}
                    </div>

                    <div className="package-heading">
                      <h3 className="package-title text-base sm:text-lg font-bold text-slate-900 mb-1">
                        {pkg.name}
                      </h3>
                      <p className="package-description text-xs text-slate-700 leading-relaxed mb-3">
                        {pkg.description}
                      </p>

                      <div
                        className={`package-pricing ${
                          pkg.pricingType === 'custom' ? 'package-pricing--custom' : ''
                        }`}
                      >
                        <span className="package-pricing__label">{pkg.pricingLabel}</span>
                        <span className="package-pricing__value">{pkg.pricingValue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="package-body">
                    <p className="package-list-label">W pakiecie</p>
                    <ul className="package-feature-list package-feature-list--premium space-y-1.5 mb-4">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="package-feature-item package-feature-item--premium flex items-start gap-2 text-xs text-slate-700"
                        >
                          <span className={`package-feature-dot ${isRecommended ? 'is-recommended' : ''}`} />
                          <span className="package-feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="package-footer">
                    <Button
                      onClick={() => scrollToSection('contact')}
                      size="lg"
                      variant={isRecommended ? 'primary' : 'secondary'}
                      className={`package-cta w-full rounded-lg font-semibold text-sm ${
                        isRecommended ? 'package-cta--recommended' : ''
                      }`}
                    >
                      {pkg.cta}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;
