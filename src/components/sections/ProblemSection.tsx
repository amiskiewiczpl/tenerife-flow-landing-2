import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ProblemSection: React.FC = () => {
  return (
    <section className="section section-alt">
      <Container>
        <SectionTitle
          title="Dlaczego samodzielne planowanie to problem?"
          subtitle="Większość osób traci tygodnie na organizację wyjazdu, popełniając kosztowne błędy."
          centered={false}
        />
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <article className="problem-card p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-sm">
            <h3 className="problem-title text-xl font-bold text-slate-900 mb-4">Kluczowe wyzwania</h3>
            <ul className="problem-list space-y-4 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                <span className="text-base">Planowanie pochłania czas i angażuje energię.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                <span className="text-base">Wybór hoteli i atrakcji bywa ryzykowny.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                <span className="text-base">Trudno unikać przepłacania za niesprawdzone opcje.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg mt-0.5">✗</span>
                <span className="text-base">Logistyka oraz transport wymagają wielu godzin koordynacji.</span>
              </li>
            </ul>
          </article>

          <article className="problem-card p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-sm">
            <h3 className="problem-title text-xl font-bold text-emerald-700 mb-4">Jak to rozwiązujemy</h3>
            <ul className="problem-list space-y-4 text-slate-700 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-base">Przejmujemy wszystkie elementy planowania.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-base">Używamy lokalnej wiedzy, by uniknąć pułapek.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-base">Minimalizujemy koszty dzięki ramkom konfiguracji.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Gwarantujemy spokój przez cały pobyt.</span>
              </li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;
