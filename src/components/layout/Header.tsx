import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const navItems = [
    { id: 'audience', label: 'Dla kogo' },
    { id: 'packages', label: 'Pakiety' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-brand">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Tenerife Flow"
            className="brand-logo header-brand__logo"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="header-brand__copy">
            <span className="header-brand__name">Tenerife Flow</span>
            <span className="header-brand__tag">Concierge travel design</span>
          </div>
        </div>

        <nav className="header-nav hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="header-nav__link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button onClick={() => scrollToSection('contact')} size="sm" className="header-cta">Umów konsultację</Button>
      </div>
    </header>
  );
};

export default Header;
