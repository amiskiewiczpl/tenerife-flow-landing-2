export interface Scenario {
  title: string;
  description: string;
}

export const scenarios: Scenario[] = [
  {
    title: "Aktywna para na 6 dni",
    description: "Wypoczynek pełen przygód: trekking w Teide, nurkowanie w Masku, romantyczne kolacje w lokalnych restauracjach. Wszystko zorganizowane, byście mogli cieszyć się czasem razem."
  },
  {
    title: "Rodzina z dzieckiem na 10 dni",
    description: "Bezpieczne plaże, rodzinne atrakcje jak Loro Parque, wypożyczone rowery i samochody. Rodzice mają czas na relaks, dzieci na zabawę — bez stresu organizacyjnego."
  },
  {
    title: "Miesięczna relokacja",
    description: "Apartament w spokojnej okolicy, zorganizowany transport, rekomendacje miejsc pracy i zakupów. Skupienie na produktywności lub odpoczynku bez codziennych zmartwień."
  }
];