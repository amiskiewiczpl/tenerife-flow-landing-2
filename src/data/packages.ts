export interface Package {
  name: string;
  forWhom: string;
  description: string;
  features: string[];
  pricingLabel: string;
  pricingValue: string;
  pricingType: 'from' | 'custom';
  cta: 'Zapytaj o pakiet' | 'Umow konsultacje';
}

export const packages: Package[] = [
  {
    name: 'Plan wyjazdu',
    forWhom: 'Dla wszystkich',
    description: 'Szczegolowy plan pobytu dopasowany do Twoich potrzeb.',
    features: [
      'Analiza preferencji i budzetu',
      'Rekomendacje lokalizacji i atrakcji',
      'Harmonogram dnia po dniu',
      'Lista sprawdzonych miejsc',
    ],
    // TODO: Replace placeholder with final starting price.
    pricingLabel: 'Od',
    pricingValue: 'X XXX PLN',
    pricingType: 'from',
    cta: 'Zapytaj o pakiet',
  },
  {
    name: 'Plan + koordynacja',
    forWhom: 'Dla par i rodzin',
    description: 'Plan plus pomoc w rezerwacjach i organizacji.',
    features: [
      'Wszystko z planu wyjazdu',
      'Rezerwacja noclegow i transportu',
      'Koordynacja atrakcji',
      'Wsparcie podczas pobytu',
    ],
    // TODO: Replace placeholder with final starting price.
    pricingLabel: 'Od',
    pricingValue: 'X XXX PLN',
    pricingType: 'from',
    cta: 'Zapytaj o pakiet',
  },
  {
    name: 'Full concierge premium',
    forWhom: 'Dla klientow premium',
    description: 'Kompletna obsluga concierge na najwyzszym poziomie.',
    features: [
      'Wszystko z koordynacji',
      'Osobisty asystent na miejscu',
      'Ekskluzywne doswiadczenia',
      '24/7 wsparcie',
    ],
    pricingLabel: 'Forma',
    pricingValue: 'Wycena indywidualna',
    pricingType: 'custom',
    cta: 'Umow konsultacje',
  },
  {
    name: 'Relokacja czasowa',
    forWhom: 'Dla dluzszych pobytow',
    description: 'Pomoc w miesiecznych lub dluzszych wyjazdach.',
    features: [
      'Znajdowanie mieszkania na dluzszy termin',
      'Organizacja codziennych spraw',
      'Integracja z lokalna spolecznoscia',
      'Wsparcie logistyczne',
    ],
    pricingLabel: 'Forma',
    pricingValue: 'Wycena indywidualna',
    pricingType: 'custom',
    cta: 'Zapytaj o pakiet',
  },
  {
    name: 'Pobyt dla pary z dziecmi',
    forWhom: 'Dla rodzin',
    description: 'Specjalistyczna opieka nad wyjazdem rodzinnym.',
    features: [
      'Bezpieczne atrakcje dla dzieci',
      'Rodzinne noclegi i transport',
      'Opieka nad najmlodszymi',
      'Spokojny czas dla rodzicow',
    ],
    // TODO: Replace placeholder with final starting price.
    pricingLabel: 'Od',
    pricingValue: 'X XXX PLN',
    pricingType: 'from',
    cta: 'Zapytaj o pakiet',
  },
];
