const baseUrl = import.meta.env.BASE_URL
const image = (file: string) => `${baseUrl}images/${file}`

export const navigation = [
  { label: 'Start', href: baseUrl },
  { label: 'Doświadczenia', href: `${baseUrl}experiences.html` },
  { label: 'Partnerzy', href: `${baseUrl}partners.html` },
  { label: 'Artykuły', href: `${baseUrl}articles.html` },
  { label: 'Kontakt', href: `${baseUrl}contact.html` },
]

export const heroPoints = [
  'Pobyt zaprojektowany pod Twój styl',
  'Sprawdzone miejsca i lokalne wsparcie',
  'Mniej decyzji, wyższa jakość wyjazdu',
]

export const trustBarItems = [
  'Prywatny travel concierge',
  'Lokalna znajomość wyspy',
  'Wsparcie przed i podczas pobytu',
  'Selekcja jakości zamiast chaosu',
]

export const lifestyleIntro = [
  'ocean mornings',
  'slow lunches',
  'curated local addresses',
]

export const lifestyleCards = [
  {
    title: 'Spokojniejsze poranki i lepszy rytm dnia',
    copy:
      'Pobyt budujemy tak, by od początku był lżejszy logistycznie i bardziej jakościowy w odbiorze.',
    image: image('rest.svg'),
  },
  {
    title: 'Wieczory, które mają klimat i właściwe miejsca',
    copy:
      'Kolacje, widoki i tempo dnia dobieramy tak, by całość działała jako doświadczenie, a nie seria przypadkowych decyzji.',
    image: image('sunset.svg'),
  },
  {
    title: 'Lokalne doświadczenia z wyczuciem jakości',
    copy:
      'Rekomendacje są selekcją, nie katalogiem. Dzięki temu pobyt staje się spójniejszy i bardziej osobisty.',
    image: image('hidden-spots.svg'),
  },
]

export const visualStories = [
  {
    eyebrow: 'Ocean',
    title: 'Pobyt z większym spokojem i lepszą selekcją miejsc.',
    text:
      'Dobry concierge porządkuje decyzje i buduje rytm całego wyjazdu, zamiast dorzucać kolejne opcje do wyboru.',
    image: image('roadtrip.svg'),
    align: 'left',
  },
  {
    eyebrow: 'Estetyka',
    title: 'Miejsca i doświadczenia, które do siebie pasują.',
    text:
      'Chodzi o jakość całego pobytu, a nie o pojedyncze punkty na liście atrakcji.',
    image: image('dining.svg'),
    align: 'right',
  },
  {
    eyebrow: 'Wsparcie',
    title: 'Mniej chaosu, więcej dopracowanego flow.',
    text:
      'Od planu po pobyt na miejscu prowadzimy klienta tak, by proces był możliwie prosty i spokojny.',
    image: image('premium-activity.svg'),
    align: 'left',
  },
]

export const audienceCards = [
  {
    title: 'Dla par i klientów premium leisure',
    text: 'Dla osób, które chcą wypocząć w lepszym rytmie i z większą dbałością o jakość.',
    accent: '01',
  },
  {
    title: 'Dla osób ceniących wygodę',
    text: 'Dla klientów, którzy wolą dobrze poprowadzony proces niż samodzielne składanie wyjazdu od zera.',
    accent: '02',
  },
  {
    title: 'Dla klientów long stay',
    text: 'Dla osób planujących dłuższy pobyt lub spokojniejsze wejście w rytm życia na wyspie.',
    accent: '03',
  },
]

export const processSteps = [
  {
    title: 'Pierwszy kontakt',
    text: 'Poznajemy Twój styl podróżowania, oczekiwania i poziom wygody, którego szukasz na Teneryfie.',
  },
  {
    title: 'Dobór zakresu',
    text: 'Proponujemy najlepszy model współpracy i porządkujemy najważniejsze decyzje przed wyjazdem.',
  },
  {
    title: 'Projekt pobytu',
    text: 'Selekcjonujemy miejsca, doświadczenia i logistykę tak, żeby cały pobyt był spójny i lekki.',
  },
  {
    title: 'Wsparcie na miejscu',
    text: 'W zależności od pakietu wspieramy Cię dalej przed wyjazdem i podczas pobytu na wyspie.',
  },
]

export const packageCards = [
  {
    name: 'Essential',
    label: 'Dla spokojnego startu',
    forWho:
      'Dla osób, które chcą dobrego planu i selekcji miejsc bez pełnej obsługi concierge.',
    description:
      'Dobry wybór, jeśli chcesz uporządkować wyjazd i dostać klarowny kierunek bez chaosu.',
    price: 'od indywidualnej wyceny',
    benefits: [
      'koncepcja pobytu dopasowana do stylu klienta',
      'selekcja noclegów i sprawdzonych adresów',
      'propozycje restauracji i doświadczeń',
      'klarowny plan dnia i logistyki',
    ],
    cta: 'Wybierz Essential',
    featured: false,
  },
  {
    name: 'Signature',
    label: 'Najczęściej wybierany',
    forWho:
      'Dla klientów, którzy chcą mieć plan, koordynację i spokojne wsparcie na każdym etapie.',
    description:
      'Najlepszy balans między wygodą, estetyką i realnym odciążeniem organizacji wyjazdu.',
    price: 'wycena indywidualna',
    benefits: [
      'indywidualny plan pobytu szyty na miarę',
      'koordynacja przygotowań przed wyjazdem',
      'dobór doświadczeń i miejsc z wyczuciem jakości',
      'lokalne wsparcie i spokojniejszy proces',
    ],
    cta: 'Umów konsultację Signature',
    featured: true,
  },
  {
    name: 'Private Concierge',
    label: 'Obsługa end-to-end',
    forWho:
      'Dla osób oczekujących maksymalnej wygody, prywatności i szerszego wsparcia concierge.',
    description:
      'Kompleksowa organizacja pobytu premium dla klientów, którzy chcą mieć wszystko dopięte w jednym procesie.',
    price: 'wycena indywidualna',
    benefits: [
      'pełna opieka nad organizacją pobytu',
      'priorytetowe wsparcie i koordynacja',
      'opieka przy pobytach specjalnych i dłuższych',
      'spójny standard jakości od startu do powrotu',
    ],
    cta: 'Umów Private Concierge',
    featured: false,
  },
]

export const comparisonRows = [
  {
    title: 'Punkt wyjścia',
    left: 'Gotowy pakiet lub uniwersalna oferta dla szerokiej grupy klientów.',
    right: 'Pobyt budowany od rozmowy o Twoim stylu, potrzebach i oczekiwanym standardzie.',
  },
  {
    title: 'Sposób rekomendowania',
    left: 'Katalog ofert lub długa lista opcji, które trzeba samodzielnie porównać.',
    right: 'Selekcja jakościowych miejsc i doświadczeń dobranych do jednej wizji pobytu.',
  },
  {
    title: 'Indywidualizacja',
    left: 'Oferta jest budowana głównie pod szeroki segment klientów.',
    right: 'Każdy pobyt dopasowujemy do rytmu, potrzeb i oczekiwanego poziomu wygody.',
  },
  {
    title: 'Oszczędność czasu',
    left: 'Klient nadal musi poświęcić czas na research i podejmowanie wielu decyzji.',
    right: 'Skracamy drogę do dobrych wyborów i zdejmujemy z klienta dużą część organizacji.',
  },
  {
    title: 'Elastyczność i wsparcie',
    left: 'Proces bywa sztywny i kończy się na sprzedaży lub podstawowej obsłudze.',
    right: 'Możemy reagować elastycznie przed wyjazdem, w logistyce i podczas pobytu na miejscu.',
  },
  {
    title: 'Mindset usługi',
    left: 'Model transakcyjny: oferta ma zostać sprzedana i zamknięta.',
    right: 'Mindset concierge: najpierw projektujemy lepsze doświadczenie klienta, potem dobieramy rozwiązania.',
  },
]

export const whyUsPoints = [
  {
    title: 'Indywidualne podejście',
    text: 'Każdy pobyt zaczynamy od rozmowy o stylu klienta, potrzebach i oczekiwanym standardzie, zamiast dopasowywać go do gotowego schematu.',
  },
  {
    title: 'Sprawdzone miejsca i kontakty',
    text: 'Rekomendujemy tylko te adresy, partnerów i doświadczenia, które naprawdę pasują do poziomu usługi i jakości, jakiej oczekuje klient.',
  },
  {
    title: 'Lokalna znajomość Teneryfy',
    text: 'Znamy rytm wyspy, praktyczny kontekst pobytu i realne różnice między miejscami, które dobrze wyglądają online, a tymi, które naprawdę działają.',
  },
  {
    title: 'Szacunek do lokalnej kultury',
    text: 'Budujemy pobyty w taki sposób, by klient doświadczał wyspy świadomie, z klasą i bez nachalnego, turystycznego filtra.',
  },
  {
    title: 'Spokojny, selektywny sposób pracy',
    text: 'Nie zasypujemy klienta dziesiątkami propozycji. Filtrujemy wybory i prowadzimy proces tak, żeby był czytelny oraz lekki.',
  },
  {
    title: 'Jakość zamiast masowości',
    text: 'Nie działamy jak katalog ofert dla wszystkich. Stawiamy na jakość obsługi, dopasowanie i sensownie zaprojektowane doświadczenie.',
  },
]

export const aboutHighlights = [
  {
    title: 'Kim jesteśmy',
    text: 'Tworzymy butikowy concierge travel service dla klientów, którzy chcą lepiej zaplanowanego pobytu, większego spokoju i jakościowej selekcji miejsc.',
  },
  {
    title: 'Dlaczego Teneryfa',
    text: 'To wyspa, która łączy ocean, naturę, światło, dobre jedzenie i warunki do życia w rytmie, którego szukają klienci premium leisure i long stay.',
  },
  {
    title: 'Jak pracujemy',
    text: 'Najpierw porządkujemy potrzeby, potem selekcjonujemy opcje i projektujemy pobyt tak, by wszystko miało sens jako jedno spójne doświadczenie.',
  },
  {
    title: 'Dlaczego można nam zaufać',
    text: 'Łączymy wyczucie estetyki, lokalną orientację i spokojny proces pracy. Dzięki temu klient nie zostaje sam z decyzjami ani logistyką.',
  },
]

export const exampleExperienceCards = [
  {
    title: 'Katamaran i spokojne wyjście na ocean',
    text: 'Ocean w wersji bardziej prywatnej, spokojnej i dopasowanej do rytmu pobytu.',
    tag: 'Ocean',
    image: image('sunset.svg'),
  },
  {
    title: 'Hike na Teide i curated nature day',
    text: 'Widoki, natura i trasy planowane z wyczuciem komfortu, energii oraz tempa dnia.',
    tag: 'Natura',
    image: image('roadtrip.svg'),
  },
  {
    title: 'Guachinche i lokalne smaki',
    text: 'Adresy, które budują prawdziwe poczucie miejsca, a nie turystyczną checklistę.',
    tag: 'Smaki wyspy',
    image: image('dining.svg'),
  },
  {
    title: 'Tenis i padel',
    text: 'Aktywność wpisana w plan pobytu bez rozbijania jego spokojnego flow.',
    tag: 'Sport',
    image: image('premium-activity.svg'),
  },
  {
    title: 'Wellness i regeneracja',
    text: 'Dobrane usługi, które wspierają odpoczynek, energię i jakość codziennego rytmu.',
    tag: 'Wellness',
    image: image('rest.svg'),
  },
  {
    title: 'Fizjoterapia i mobility support',
    text: 'Wsparcie dla klientów, którzy chcą połączyć wyjazd z regeneracją i lepszym samopoczuciem.',
    tag: 'Recovery',
    image: image('rest.svg'),
  },
  {
    title: 'Roadtrip z widokiem i atmosferą',
    text: 'Dni w trasie budowane wokół światła, krajobrazu i dobrze dobranych przystanków.',
    tag: 'Roadtrip',
    image: image('hidden-spots.svg'),
  },
  {
    title: 'Relokacja i long stay support',
    text: 'Pomoc przy spokojniejszym wejściu w dłuższy pobyt, logistykę i pierwsze decyzje na miejscu.',
    tag: 'Long stay',
    image: image('roadtrip.svg'),
  },
]

export const curatedCategories = [
  {
    title: 'Ocean i rejsy',
    text: 'Rejsy, wyjścia na wodę i morskie doświadczenia dobierane pod rytm pobytu, nie pod masową turystykę.',
  },
  {
    title: 'Teide i natura',
    text: 'Trasy, widoki i dni w naturze projektowane z myślą o komforcie, energii i estetyce całego wyjazdu.',
  },
  {
    title: 'Smaki wyspy',
    text: 'Lokalne adresy, kolacje i stoły, które naprawdę wzmacniają charakter pobytu.',
  },
  {
    title: 'Sport i aktywność',
    text: 'Tenis, padel, trening lub aktywność wpisana w plan bez rozbijania spokojnego flow wyjazdu.',
  },
  {
    title: 'Wellness i regeneracja',
    text: 'Spa, fizjoterapia i odzyskiwanie energii organizowane z takim samym wyczuciem, jak reszta pobytu.',
  },
  {
    title: 'Transport i wygoda',
    text: 'Logistyka, przejazdy i komfort poruszania się, dzięki którym pobyt jest lżejszy od pierwszego dnia.',
  },
]

export const curatedSpotlights = [
  {
    title: 'Ocean i wyspa oglądane bez pośpiechu',
    copy:
      'Katamaran, whale watching i wyjścia na wodę dobieramy pod klimat pobytu, a nie pod listę atrakcji do zaliczenia.',
    image: image('sunset.svg'),
    tag: 'Ocean i rejsy',
  },
  {
    title: 'Teide i natura w lepszym rytmie',
    copy:
      'Wyprawy wokół Teide, punkty widokowe i trasy planujemy z wyczuciem tempa, komfortu i światła dnia.',
    image: image('roadtrip.svg'),
    tag: 'Teide i natura',
  },
  {
    title: 'Smaki wyspy i dobre lokalne adresy',
    copy:
      'Guachinche, spokojne lunche i kolacje są częścią dopracowanego pobytu, a nie przypadkowym dodatkiem.',
    image: image('dining.svg'),
    tag: 'Smaki wyspy',
  },
]

export const curatedExperienceExamples = [
  'katamaran o spokojniejszym, bardziej prywatnym charakterze',
  'dzień wokół Teide z dopracowaną trasą i tempem',
  'wybrane guachinche i stoły warte zaufania',
  'tenis i padel wpisane w rytm pobytu',
  'wellness i regeneracja bez przypadkowych adresów',
  'fizjoterapia i mobility support na miejscu',
  'roadtrip z lepszą logistyką i widokami',
]

export const caseStudies = [
  {
    title: 'Para premium leisure',
    client: '5 dni na Teneryfie',
    challenge:
      'Klienci chcieli jakościowego wypoczynku, dobrych miejsc i romantycznego klimatu, ale nie mieli czasu, żeby składać cały wyjazd samodzielnie.',
    solution:
      'Przygotowaliśmy spójny plan pobytu z rytmem dnia, dobranym noclegiem, restauracjami i spokojniejszym zestawem doświadczeń dla dwojga.',
    result:
      'Zamiast chaosu dostali gotowy kierunek, mniej decyzji i pobyt, który od początku czuł się lekko oraz elegancko.',
    quote:
      'Wszystko było dopięte z ogromnym wyczuciem. Mogliśmy po prostu wejść w wyjazd i cieszyć się nim od pierwszego dnia.',
    image: image('sunset.svg'),
  },
  {
    title: 'Aktywny pobyt z klasą',
    client: 'sport, wellness i slow leisure',
    challenge:
      'Klient szukał pobytu, który połączy aktywność, dobre miejsca i regenerację, ale bez przeciążenia planem i bez turystycznego chaosu.',
    solution:
      'Ułożyliśmy plan łączący padel, lekkie dni w naturze, wellness oraz sprawdzone adresy, zachowując spokojny rytm całego pobytu.',
    result:
      'Klient dostał aktywny, ale nieprzeładowany pobyt, w którym wszystko było dobrane do jego energii i stylu podróżowania.',
    quote:
      'Największa różnica była w tym, że nic nie było przypadkowe. Każdy element pasował do całości i naprawdę oszczędzał nam czas.',
    image: image('rest.svg'),
  },
  {
    title: 'Relokacja i dłuższy pobyt',
    client: 'long stay i spokojny start na wyspie',
    challenge:
      'Klient potrzebował uporządkowanego startu na wyspie i lokalnego kontekstu, ale nie chciał tonąć w przypadkowych rekomendacjach i szumie informacji.',
    solution:
      'Uporządkowaliśmy pierwsze decyzje, logistykę i dobór miejsc tak, żeby pobyt od początku miał sens praktyczny, jakościowy i spokojny.',
    result:
      'Proces stał się prostszy, a klient szybciej wszedł w rytm wyspy bez frustracji, przeciążenia i nietrafionych decyzji.',
    quote:
      'To było dokładnie to, czego potrzebowaliśmy: lokalne wsparcie, selekcja i poczucie, że ktoś naprawdę rozumie realia życia na Teneryfie.',
    image: image('dining.svg'),
  },
]

export const curatedExperiences = [
  {
    title: 'Katamaran i spokojne wyjście na ocean',
    description:
      'Doświadczenie dla osób, które szukają jakościowego czasu na wodzie, a nie zatłoczonej atrakcji.',
    tag: 'Ocean i rejsy',
    image: image('sunset.svg'),
  },
  {
    title: 'Padel, tenis i aktywność w dobrym rytmie',
    description:
      'Dobieramy miejsca i partnerów tak, by aktywność była częścią dobrze zaprojektowanego pobytu.',
    tag: 'Sport i aktywność',
    image: image('premium-activity.svg'),
  },
  {
    title: 'Teide i curated nature day',
    description:
      'Wyprawy planowane z wyczuciem komfortu, warunków i jakości doświadczenia zamiast przypadkowego researchu.',
    tag: 'Teide i natura',
    image: image('roadtrip.svg'),
  },
  {
    title: 'Guachinche i lokalne smaki wyspy',
    description:
      'Wybrane adresy, które dają prawdziwy klimat miejsca bez przepychania Cię przez przypadkowe listy.',
    tag: 'Smaki wyspy',
    image: image('dining.svg'),
  },
  {
    title: 'Fizjoterapia, wellness i regeneracja',
    description:
      'Wspieramy relaks, mobilność i powrót do energii przez sprawdzone usługi premium i spokojną organizację.',
    tag: 'Wellness i regeneracja',
    image: image('rest.svg'),
  },
  {
    title: 'Roadtripy prowadzone przez widok i atmosferę',
    description:
      'Trasy i postoje układamy tak, by dzień miał klimat, płynność i odpowiedni poziom estetyki.',
    tag: 'Roadtrip',
    image: image('hidden-spots.svg'),
  },
  {
    title: 'Whale watching bez turystycznego chaosu',
    description:
      'Pomagamy wybrać doświadczenia, które zostają w pamięci dzięki jakości i spokojowi, a nie przez tłok.',
    tag: 'Ocean i rejsy',
    image: image('sunset.svg'),
  },
  {
    title: 'Relocation support i long stay concierge',
    description:
      'Pomagamy przy dłuższym pobycie, logistyce i pierwszych decyzjach, jeśli Teneryfa ma być czymś więcej niż krótkim urlopem.',
    tag: 'Relokacja i long stay',
    image: image('rest.svg'),
  },
]

export const partnersLogos = [
  'Ocean Circle',
  'Villa Norte',
  'Move Well Studio',
  'Casa del Mar',
  'Road Ritual',
  'Island Transfer',
  'Teide Paths',
  'Relocate Tenerife',
]

export const featuredPartners = [
  {
    name: 'Ocean Circle',
    type: 'Rejsy i doświadczenia na oceanie',
    description:
      'Partner dla klientów, którzy chcą jakościowego czasu na wodzie, spokojnej organizacji i bardziej prywatnego charakteru doświadczenia.',
    image: image('sunset.svg'),
  },
  {
    name: 'Move Well Studio',
    type: 'Wellness i fizjoterapia',
    description:
      'Wsparcie dla osób stawiających na regenerację, mobilność i dobre samopoczucie jako część luksusowego pobytu.',
    image: image('rest.svg'),
  },
  {
    name: 'Relocate Tenerife',
    type: 'Relokacja i long stay support',
    description:
      'Sprawdzone wsparcie dla klientów planujących dłuższy pobyt, zmianę rytmu życia lub bardziej uporządkowany start na miejscu.',
    image: image('roadtrip.svg'),
  },
]

export const partnerTypes = [
  'lokalni operatorzy',
  'fizjoterapia i wellness',
  'gastronomia',
  'transport',
  'aktywności premium',
  'relokacja i long stay support',
]

export const faqs = [
  {
    question: 'Czym różnicie się od biura podróży?',
    answer:
      'Nie sprzedajemy masowych wycieczek. Projektujemy pobyt wokół potrzeb klienta, jego stylu i oczekiwanego poziomu wygody.',
  },
  {
    question: 'Czy rezerwujecie wszystko za klienta?',
    answer:
      'Zakres zależy od pakietu. Możemy przygotować sam plan albo wesprzeć szerzej w koordynacji i concierge.',
  },
  {
    question: 'Czy działacie tylko na Teneryfie?',
    answer:
      'Tak. Teneryfa jest naszym głównym kierunkiem i to tutaj skupiamy lokalną wiedzę, kontakty oraz styl usługi.',
  },
  {
    question: 'Czy pomagacie przy dłuższym pobycie?',
    answer:
      'Tak. Wspieramy również klientów planujących relokację czasową lub pobyt na dłużej.',
  },
  {
    question: 'Ile kosztuje usługa?',
    answer:
      'Każdy pobyt ma inny zakres, dlatego ceny ustalamy po krótkiej rozmowie i dopasowaniu modelu współpracy.',
  },
  {
    question: 'Czy można zamówić tylko plan bez pełnej obsługi?',
    answer:
      'Tak. Pakiet Essential jest dla osób, które chcą dobrego planu i konkretnych rekomendacji bez pełnej obsługi concierge.',
  },
]

export const articleCategories = [
  'Atrakcje',
  'Noclegi',
  'Planowanie pobytu',
  'Pary',
  'Aktywnie',
  'Long stay',
]

export const featuredArticle = {
  title: 'Top 10 atrakcji na Teneryfie, które naprawdę warto wpisać do dobrze zaplanowanego pobytu',
  excerpt:
    'Nie każda atrakcja na Teneryfie daje ten sam poziom doświadczenia. Pokazujemy, co naprawdę warto wybrać, jeśli zależy Ci na jakości, rytmie i sensownie ułożonym planie.',
  category: 'Atrakcje',
  readTime: '8 min czytania',
  image: image('sunset.svg'),
}

export const articles = [
  {
    title: 'Top 10 atrakcji na Teneryfie',
    excerpt:
      'Miejsca i doświadczenia, które warto wybrać, jeśli chcesz zobaczyć wyspę w bardziej jakościowy sposób.',
    category: 'Atrakcje',
    readTime: '7 min',
    image: image('sunset.svg'),
  },
  {
    title: 'Top 10 lokalizacji na pobyt',
    excerpt:
      'Które części Teneryfy najlepiej pasują do slow leisure, relaksu, aktywności albo dłuższego pobytu.',
    category: 'Noclegi',
    readTime: '6 min',
    image: image('roadtrip.svg'),
  },
  {
    title: 'Must do na Teneryfie',
    excerpt:
      'Subiektywna selekcja doświadczeń, które naprawdę zostają w pamięci i dobrze wpisują się w pobyt premium.',
    category: 'Atrakcje',
    readTime: '5 min',
    image: image('dining.svg'),
  },
  {
    title: 'Gdzie spać na Teneryfie w zależności od stylu pobytu',
    excerpt:
      'Północ, południe, quiet villas czy miejsca bliżej życia wyspy. Przewodnik po wyborze lokalizacji.',
    category: 'Noclegi',
    readTime: '8 min',
    image: image('rest.svg'),
  },
  {
    title: 'Teide: jak zaplanować wyjazd',
    excerpt:
      'Jak zaplanować dzień wokół Teide tak, żeby był wygodny, estetyczny i dobrze wpisany w cały pobyt.',
    category: 'Planowanie pobytu',
    readTime: '6 min',
    image: image('roadtrip.svg'),
  },
  {
    title: 'Katamaran, guachinche, wellness i lokalne doświadczenia',
    excerpt:
      'Jak połączyć ocean, smaki wyspy i regenerację w jednym sensownie zaprojektowanym pobycie.',
    category: 'Planowanie pobytu',
    readTime: '7 min',
    image: image('dining.svg'),
  },
  {
    title: 'Teneryfa dla par',
    excerpt:
      'Pomysły na wyjazd dla dwojga z lepszym rytmem, prywatnością i bardziej dopracowaną atmosferą.',
    category: 'Pary',
    readTime: '5 min',
    image: image('sunset.svg'),
  },
  {
    title: 'Teneryfa na aktywnie',
    excerpt:
      'Padel, hiking, ocean, roadtrip i regeneracja. Jak ułożyć aktywny pobyt bez przeładowania planem.',
    category: 'Aktywnie',
    readTime: '6 min',
    image: image('premium-activity.svg'),
  },
  {
    title: 'Teneryfa na dłuższy pobyt i relokację',
    excerpt:
      'Na co zwrócić uwagę przy long stay, jak zaplanować start i gdzie szukać większego spokoju na wyspie.',
    category: 'Long stay',
    readTime: '9 min',
    image: image('rest.svg'),
  },
]
