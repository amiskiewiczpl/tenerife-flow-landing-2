export interface Audience {
  title: string;
  description: string;
  benefit: string;
}

export const audiences: Audience[] = [
  {
    title: "Pary",
    description: "Romantyczne pobyty bez stresu organizacyjnego — skupcie się na sobie.",
    benefit: "Więcej czasu na wspólną relaksację i przygody."
  },
  {
    title: "Rodziny z dziećmi",
    description: "Bezpieczne i dopasowane do potrzeb rodziny wyjazdy na Teneryfę.",
    benefit: "Spokój rodziców i radość dzieci z idealnie zorganizowanego pobytu."
  },
  {
    title: "Relokacja czasowa",
    description: "Pomoc w dłuższym pobycie — od mieszkania po codzienne sprawy.",
    benefit: "Łatwa adaptacja i skupienie na pracy lub odpoczynku."
  },
  {
    title: "Klienci premium",
    description: "Ekskluzywne usługi concierge dla wymagających gości.",
    benefit: "Luksus i wygoda na najwyższym poziomie."
  }
];