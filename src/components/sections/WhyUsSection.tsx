import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { advantages } from '../../data/advantages';

const WhyUsSection: React.FC = () => {
  return (
    <section className="section whyus-section">
      <Container>
        <SectionTitle
          title="Dlaczego Tenerife Flow?"
          subtitle="Łączymy selekcję, lokalną orientację i spokojny proces, żeby wyjazd był od początku odczuwalnie łatwiejszy."
        />

        <div className="whyus-intro">
          <p className="whyus-intro__text">
            Największy luksus w podróży to nie nadmiar atrakcji, tylko pewność, że wszystko jest
            dobrze dobrane. Właśnie to porządkujemy.
          </p>
        </div>

        <div className="whyus-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <article
              key={index}
              className="whyus-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="whyus-card__index">0{index + 1}</span>
              <h3 className="whyus-title text-lg font-bold text-slate-900 mb-3">{advantage.title}</h3>
              <p className="whyus-description text-base text-slate-700 leading-relaxed">
                {advantage.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
