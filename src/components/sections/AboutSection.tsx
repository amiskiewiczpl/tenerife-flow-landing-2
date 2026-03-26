import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section className="section">
      <Container>
        <SectionTitle title="O nas" />
        <div className="max-w-5xl mx-auto">
          <div className="about-card bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-12">
            <div className="about-intro text-center mb-8">
              <h3 className="about-title text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Butikowa agencja concierge dla wymagających podróżnych
              </h3>
              <p className="about-description text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Tworzymy pobyty od A do Z: indywidualny plan, rezerwacje i wsparcie na miejscu. Wyłącznie selektywne miejsca i pełna opieka.
              </p>
            </div>

            <div className="about-feature-grid grid md:grid-cols-3 gap-8 mt-10">
              <div className="about-feature text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-full mb-4">
                  <span className="text-emerald-600 font-bold text-xl">✓</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Personalizacja</h4>
                <p className="about-feature__text text-base text-slate-600">Bez kompromisów</p>
              </div>

              <div className="about-feature text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-600 font-bold text-xl">★</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Elitarne doświadczenia</h4>
                <p className="about-feature__text text-base text-slate-600">Sprawdzeni partnerzy</p>
              </div>

              <div className="about-feature text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-full mb-4">
                  <span className="text-purple-600 font-bold text-xl">🛡️</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Całkowity spokój</h4>
                <p className="about-feature__text text-base text-slate-600">W trakcie wyjazdu</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
