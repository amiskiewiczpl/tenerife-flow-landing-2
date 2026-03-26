import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ScenariosSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const scenarios = [
    {
      title: 'Aktywna para',
      description: 'Ocean, punkt widokowy i zachód słońca. Aktywności + chill w najlepszym stylu Teneryfy na 6-7 dni.',
      asset: 'scenario-couple.jpg'
    },
    {
      title: 'Rodzina z dzieckiem',
      description: 'Spokojna plaża, basen i wygodny apartament. Plan dostosowany do wszystkich pokoleń na 10 dni.',
      asset: 'scenario-family.jpg'
    },
    {
      title: 'Relokacja czasowa',
      description: 'Apartament z widokiem, praca bez stresu. Miesiąc pełen możliwości w wygodnej codzienności.',
      asset: 'scenario-relocation.jpg'
    }
  ];

  const getImageUrl = (asset: string) => {
    return new URL(`../../assets/${asset}`, import.meta.url).href;
  };

  const ScenarioPlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-sky-100 via-blue-100 to-slate-100 relative overflow-hidden flex items-center justify-center">
      {/* Subtle gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-12 w-32 h-32 bg-blue-200 rounded-full opacity-15 blur-2xl" />
        <div className="absolute bottom-1/3 -left-12 w-40 h-40 bg-sky-200 rounded-full opacity-15 blur-2xl" />
      </div>
      {/* Premium placeholder accent */}
      <div className="relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 mb-2">
          <svg className="w-7 h-7 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-xs text-slate-500 font-medium">Załadowanie...</p>
      </div>
    </div>
  );

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Scenariusze pobytu"
          subtitle="Inspirujące sposoby na spędzenie czasu na Teneryfie"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scenarios.map((scenario, index) => (
            <article
              key={index}
              className="scenario-card rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container - Limited Height */}
              <div className="relative w-full aspect-video overflow-hidden bg-gradient-to-br from-sky-100 to-slate-100 flex-shrink-0">
                {!imageErrors[index] ? (
                  <img
                    src={getImageUrl(scenario.asset)}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    onError={() => setImageErrors({ ...imageErrors, [index]: true })}
                    alt={scenario.title}
                  />
                ) : (
                  <ScenarioPlaceholder />
                )}
              </div>

              {/* Content Container - Compact */}
              <div className="scenario-content flex-1 flex flex-col p-6">
                <h3 className="scenario-title text-lg font-bold text-slate-900 mb-3 leading-tight">
                  {scenario.title}
                </h3>
                <p className="scenario-description text-base text-slate-700 leading-relaxed flex-1">
                  {scenario.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;
