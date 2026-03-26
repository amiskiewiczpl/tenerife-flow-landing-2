const baseUrl = import.meta.env.BASE_URL
const image = (file: string) => `${baseUrl}images/${file}`

export const navigation = [
  { label: 'Start', href: baseUrl },
  { label: 'Doświadczenia', href: `${baseUrl}experiences.html` },
  { label: 'Partnerzy', href: `${baseUrl}partners.html` },
  { label: 'Kontakt', href: `${baseUrl}#contact` },
]

export const heroPoints = [
  'Indywidualny plan pobytu',
  'Lokalne wsparcie na miejscu',
  'Spokój i oszczędność czasu',
]

export const heroEditorialNotes = [
  'private villa rhythm',
  'curated local access',
  'quiet luxury support',
]

export const trustBarItems = [
  'Prywatny travel concierge',
  'Lokalna znajomość Teneryfy',
  'Wsparcie przed wyjazdem i na miejscu',
  'Doświadczenie szyte pod styl klienta',
]

export const lifestyleIntro = [
  'sunset dinners',
  'slow mornings',
  'hidden addresses',
]

export const audienceCards = [
  {
    title: 'Dla par, które chcą wyjątkowego wyjazdu',
    text: 'Tworzymy pobyty z rytmem, estetyką i dobrymi adresami zamiast przypadkowych atrakcji.',
    accent: '01',
  },
  {
    title: 'Dla osób ceniących wygodę i dobry gust',
    text: 'Dobieramy rekomendacje tak, by cały pobyt był spójny z Twoim stylem podróżowania.',
    accent: '02',
  },
  {
    title: 'Dla tych, którzy nie chcą tracić czasu na research',
    text: 'Zamiast dziesiątek kart w przeglądarce dostajesz gotowy kierunek, plan i wsparcie.',
    accent: '03',
  },
  {
    title: 'Dla osób planujących relokację lub dłuższy pobyt',
    text: 'Pomagamy uporządkować pobyt długoterminowy, pierwsze kroki i lokalne decyzje.',
    accent: '04',
  },
  {
    title: 'Dla klientów, którzy chcą lokalnego wsparcia',
    text: 'Nie zostajesz sam z logistyką, zmianami planów czy pytaniami po przylocie.',
    accent: '05',
  },
]

export const aboutHighlights = [
  {
    title: 'Pracujemy jak concierge, nie jak katalog ofert',
    text: 'Zaczynamy od rozmowy o stylu pobytu, priorytetach i poziomie wygody, a dopiero potem dobieramy konkretne rozwiązania.',
  },
  {
    title: 'Działamy selektywnie i spokojnie',
    text: 'Nie zasypujemy klienta setką opcji. Filtrujemy wybory, porządkujemy decyzje i prowadzimy cały proces w czytelny sposób.',
  },
  {
    title: 'Budujemy zaufanie przez jakość obsługi',
    text: 'Łączymy lokalną orientację, estetykę rekomendacji i realne wsparcie człowieka zamiast anonimowej infolinii.',
  },
]

export const aboutComparison = [
  {
    label: 'Zwykłe biuro podróży',
    text: 'Sprzedaje gotowy pakiet i uniwersalny scenariusz pobytu.',
  },
  {
    label: 'Tenerife Flow',
    text: 'Projektuje pobyt pod rytm klienta, jego potrzeby i oczekiwany standard doświadczenia.',
  },
]

export const serviceCards = [
  {
    title: 'Plan podróży szyty na miarę',
    text: 'Budujemy pobyt wokół Twojego tempa, standardu i celu wyjazdu.',
    items: ['noclegi', 'restauracje', 'aktywności', 'transport'],
  },
  {
    title: 'Koordynacja i wsparcie przed przyjazdem',
    text: 'Pomagamy dopiąć szczegóły przed wyjazdem i ograniczyć chaos organizacyjny.',
    items: ['rekomendacje lokalne', 'pobyty specjalne', 'romantyczne wyjazdy', 'plan dnia'],
  },
  {
    title: 'Concierge na miejscu',
    text: 'Dajemy kontakt, wskazówki i wsparcie wtedy, gdy naprawdę ich potrzebujesz.',
    items: ['lokalne wsparcie', 'zmiany planu', 'rezerwacje', 'relokacja'],
  },
]

export const processSteps = [
  'Rozmowa i poznanie potrzeb',
  'Przygotowanie propozycji pobytu',
  'Dopracowanie szczegółów i rezerwacje',
  'Wsparcie przed wyjazdem i na miejscu',
]

export const socialProofEntries = [
  {
    name: 'Miejsce na opinię klienta',
    meta: 'romantyczny pobyt, 6 dni',
    quote:
      'Tu możesz wstawić finalną opinię klienta. Układ jest gotowy na krótką, konkretną rekomendację z naciskiem na spokój organizacji i jakość pobytu.',
    image: image('sunset.svg'),
  },
  {
    name: 'Miejsce na opinię klienta',
    meta: 'long stay / relokacja',
    quote:
      'Sekcja jest przygotowana pod prawdziwy social proof: krótka historia, efekt końcowy i estetyczne zdjęcie z pobytu albo doświadczenia.',
    image: image('rest.svg'),
  },
  {
    name: 'Miejsce na opinię klienta',
    meta: 'signature concierge',
    quote:
      'Ten placeholder można później podmienić na realne słowa klienta bez zmiany layoutu. Zachowuje premium feel i nie wygląda jak przypadkowy slider.',
    image: image('dining.svg'),
  },
]

export const packageCards = [
  {
    name: 'Essential',
    label: 'Start spokojnego planowania',
    forWho:
      'Dla klientów, którzy chcą dobrego planu i klarownych rekomendacji bez pełnej obsługi concierge.',
    description:
      'Porządkujemy wyjazd, wybieramy najlepszy kierunek organizacji i dajemy Ci konkretny plan pobytu.',
    price: 'od X PLN',
    benefits: [
      'spersonalizowany plan wyjazdu',
      'wyselekcjonowane noclegi i adresy',
      'propozycje restauracji i aktywności',
      'klarowny plan dnia i logistyki',
    ],
    cta: 'Wybierz Essential',
    featured: false,
  },
  {
    name: 'Signature',
    label: 'Najczęściej wybierany',
    forWho:
      'Dla osób, które chcą mieć plan, koordynację i spokojne wsparcie bez wchodzenia w pełny concierge.',
    description:
      'Najlepszy balans między wygodą, jakością i opieką. To pakiet dla osób, które chcą realnie odciążyć organizację wyjazdu.',
    price: 'wycena indywidualna',
    benefits: [
      'plan pobytu szyty na miarę',
      'koordynacja przed przyjazdem',
      'lokalne wskazówki i soft concierge',
      'dopasowanie do stylu klienta',
      'oszczędność czasu na każdym etapie',
    ],
    cta: 'Zarezerwuj konsultację Signature',
    featured: true,
  },
  {
    name: 'Private Concierge',
    label: 'Obsługa premium end-to-end',
    forWho:
      'Dla klientów oczekujących maksymalnej wygody, wysokiego standardu i pełniejszej opieki na każdym etapie pobytu.',
    description:
      'Kompleksowa organizacja oraz wsparcie premium dla pobytów specjalnych, dłuższych lub wymagających większej opieki.',
    price: 'wycena indywidualna',
    benefits: [
      'pełna organizacja pobytu',
      'priorytetowe wsparcie',
      'koordynacja rezerwacji i logistyki',
      'opieka przy pobytach specjalnych',
      'doświadczenie premium od startu do powrotu',
    ],
    cta: 'Umów Private Concierge',
    featured: false,
  },
]

export const specialServices = [
  'relokacja czasowa',
  'pobyt dla par',
  'wyjątkowe okazje i celebracje',
]

export const reasonCards = [
  'Lokalna znajomość Teneryfy i realnych miejsc wartych polecenia.',
  'Indywidualne podejście zamiast gotowych pakietów dla każdego.',
  'Oszczędność czasu dzięki selekcji, planowi i koordynacji.',
  'Estetyka i jakość rekomendacji dopasowana do Twojego stylu.',
  'Kontakt z człowiekiem zamiast masowej infolinii i szablonu.',
  'Pobyt projektowany pod Ciebie, nie pod uniwersalny scenariusz.',
]

export const lifestyleCards = [
  {
    title: 'Poranki w prywatnej willi, gdzie wszystko zwalnia do właściwego tempa',
    copy:
      'Światło, cisza, dobra architektura i plan dnia, który nie zaczyna się od szukania opcji, tylko od gotowego spokoju.',
    image: image('rest.svg'),
  },
  {
    title: 'Wieczory, które mają atmosferę, a nie tylko rezerwację w kalendarzu',
    copy:
      'Zachód słońca, odpowiedni stolik, dobrze dobrane miejsce i poczucie, że ktoś wcześniej zadbał o każdy detal.',
    image: image('sunset.svg'),
  },
  {
    title: 'Lokalne doświadczenia wybrane z wyczuciem, a nie z listy "must see"',
    copy:
      'Ukryte adresy, spokojne roadtripy i rekomendacje, które pasują do Twojego stylu zamiast kopiować internetowe schematy.',
    image: image('hidden-spots.svg'),
  },
]

export const visualStories = [
  {
    eyebrow: 'Ocean view',
    title: 'Pobyt, w którym ocean i prywatność stają się częścią codziennego rytmu.',
    text:
      'Zamiast przeładowanego planu dostajesz przestrzeń, selekcję i spokojny scenariusz dnia. To styl wypoczynku, który czuć od pierwszego poranka.',
    image: image('roadtrip.svg'),
    align: 'left',
  },
  {
    eyebrow: 'Private villa',
    title: 'Miejsca z klasą, które nie potrzebują głośnej oprawy, żeby robić wrażenie.',
    text:
      'Dobieramy noclegi, kolacje i aktywności tak, by cały pobyt był estetycznie spójny, wygodny i naprawdę dopasowany do Ciebie.',
    image: image('dining.svg'),
    align: 'right',
  },
  {
    eyebrow: 'Local moments',
    title: 'Lokalne doświadczenia, które wyglądają naturalnie, a nie jak odhaczanie atrakcji.',
    text:
      'Roadtrip, spokojny lunch, zachód słońca w dobrym miejscu i aktywność premium bez pośpiechu. Kupujesz klimat życia, nie listę punktów.',
    image: image('premium-activity.svg'),
    align: 'left',
  },
]

export const curatedCategories = [
  {
    title: 'Ocean i rejsy',
    text: 'Prywatne lub kameralne doświadczenia na wodzie, dobrane pod tempo i styl pobytu.',
  },
  {
    title: 'Sport i aktywność',
    text: 'Padel, tenis, trening, mobilność i aktywność premium bez przypadkowej organizacji.',
  },
  {
    title: 'Teide i natura',
    text: 'Widoki, trasy i wyprawy dobierane tak, by zachować komfort, estetykę i właściwe tempo.',
  },
  {
    title: 'Smaki wyspy',
    text: 'Restauracje, lokale i lokalne adresy, które budują atmosferę wyjazdu, a nie tylko listę miejsc.',
  },
  {
    title: 'Wellness i regeneracja',
    text: 'Spa, fizjoterapia, relaks i odzyskiwanie energii w wersji dopasowanej do Twoich potrzeb.',
  },
  {
    title: 'Dla par',
    text: 'Wyjazdy z klimatem, prywatnością i oprawą, która nie wygląda jak gotowy pakiet z internetu.',
  },
  {
    title: 'Relokacja i long stay',
    text: 'Wsparcie dla osób planujących dłuższy pobyt, spokojny start i lepszą orientację na miejscu.',
  },
  {
    title: 'Transport i wygoda',
    text: 'Przejazdy, logistyka i komfort przemieszczania się bez chaosu i niepotrzebnych decyzji.',
  },
]

export const curatedSpotlights = [
  {
    title: 'Ocean, światło i spokojny rytm dnia',
    copy:
      'Katamaran, whale watching i wyjścia na wodę dobieramy tak, by były częścią dopracowanego pobytu, a nie osobną atrakcją bez kontekstu.',
    image: image('sunset.svg'),
    tag: 'Ocean i rejsy',
  },
  {
    title: 'Teide, natura i trasy z wyczuciem komfortu',
    copy:
      'Curated days around Teide budujemy z myślą o widoku, tempie i energii klienta, bez przypadkowej logistyki i przeciążenia planem.',
    image: image('roadtrip.svg'),
    tag: 'Teide i natura',
  },
  {
    title: 'Smaki wyspy i lokalne adresy z charakterem',
    copy:
      'Guachinche, spokojne lunche i kolacje dobieramy tak, żeby wzmacniały klimat pobytu i budowały prawdziwe poczucie miejsca.',
    image: image('dining.svg'),
    tag: 'Smaki wyspy',
  },
]

export const curatedExperienceExamples = [
  'katamaran o spokojniejszym, bardziej prywatnym charakterze',
  'dzień wokół Teide z dopracowaną trasą i tempem',
  'wybrane guachinche i lokalne stoły warte zaufania',
  'tenis i padel wpisane w rytm pobytu',
  'wellness i regeneracja bez przypadkowych adresów',
  'fizjoterapia i mobility support na miejscu',
  'gokarty i aktywności z lepszą logistyką',
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
    title: 'Teide i curated nature days',
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
    tag: 'Roadtripy',
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
    link: 'https://example.com/ocean-circle',
    image: image('sunset.svg'),
  },
  {
    name: 'Move Well Studio',
    type: 'Wellness i fizjoterapia',
    description:
      'Wsparcie dla osób stawiających na regenerację, mobilność i dobre samopoczucie jako część luksusowego pobytu.',
    link: 'https://example.com/move-well',
    image: image('rest.svg'),
  },
  {
    name: 'Relocate Tenerife',
    type: 'Relokacja i long stay support',
    description:
      'Sprawdzone wsparcie dla klientów planujących dłuższy pobyt, zmianę rytmu życia lub bardziej uporządkowany start na miejscu.',
    link: 'https://example.com/relocate-tenerife',
    image: image('roadtrip.svg'),
  },
]

export const partnerTypes = [
  'biura i operatorzy lokalni',
  'fizjoterapeuci',
  'gastronomia',
  'transport',
  'aktywności',
  'relokacja support',
]

export const scenarios = [
  {
    title: 'Od przeciążenia planowaniem do gotowego pobytu dla dwojga',
    text:
      'Klient przychodzi z ogólnym pomysłem na kilka dni jakościowego odpoczynku. My zamieniamy to w spójny plan z noclegiem, kolacjami, trasą i spokojnym rytmem pobytu.',
  },
  {
    title: 'Od relokacyjnego chaosu do uporządkowanego startu na wyspie',
    text:
      'Dłuższy pobyt wymaga więcej niż listy atrakcji. Pomagamy ogarnąć lokalny kontekst, logistykę i pierwsze decyzje bez rozproszenia.',
  },
  {
    title: 'Od specjalnej okazji do dopracowanego doświadczenia',
    text:
      'Rocznica, celebracja albo wyjątkowy wyjazd dostaje oprawę dopasowaną do stylu klienta, a nie gotowy scenariusz skopiowany z internetu.',
  },
]

export const faqs = [
  {
    question: 'Czym różnicie się od biura podróży?',
    answer:
      'Nie sprzedajemy masowych wycieczek. Projektujemy pobyt wokół Twoich potrzeb, stylu i oczekiwanego poziomu wygody.',
  },
  {
    question: 'Czy rezerwujecie wszystko za klienta?',
    answer:
      'Zakres zależy od pakietu. Możemy przygotować sam plan albo wesprzeć Cię szerzej w koordynacji i concierge.',
  },
  {
    question: 'Czy działacie tylko na Teneryfie?',
    answer:
      'Tak. Teneryfa jest naszym głównym kierunkiem i to tutaj skupiamy lokalną wiedzę, kontakty i styl usługi.',
  },
  {
    question: 'Czy pomagacie przy dłuższym pobycie?',
    answer:
      'Tak. Wspieramy także klientów planujących relokację czasową lub pobyt na dłużej.',
  },
  {
    question: 'Ile kosztuje usługa?',
    answer:
      'Każdy pobyt ma inny zakres, dlatego ceny ustalamy po krótkiej rozmowie. Część pakietów może startować od określonego progu.',
  },
  {
    question: 'Czy można zamówić tylko plan bez pełnej obsługi?',
    answer:
      'Tak. Pakiet Essential jest przygotowany właśnie dla klientów, którzy chcą dobrego planu i konkretnych rekomendacji.',
  },
]
