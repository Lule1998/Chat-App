export interface MockResponse {
    question: string;
    answer: string;
  }
  
  export const mockResponses: MockResponse[] = [
    {
      question: "zdravo",
      answer: "Zdravo! Kako mogu da vam pomognem danas?"
    },
    {
      question: "kako si",
      answer: "Dobro sam, hvala na pitanju! Kako vam mogu pomoći?"
    },
    {
      question: "šta radiš",
      answer: "Trenutno sam tu da vam pomognem. Kako vam mogu biti od koristi?"
    },
    {
      question: "ćao",
      answer: "Ćao! Drago mi je što smo u kontaktu. Kako vam mogu pomoći?"
    },
    {
      question: "doviđenja",
      answer: "Doviđenja! Bilo mi je zadovoljstvo razgovarati sa vama. Javite se opet!"
    },
    {
      question: "hvala",
      answer: "Nema na čemu! Drago mi je što sam mogao/la da pomognem."
    },
    {
      question: "koji je glavni grad srbije",
      answer: "Glavni grad Srbije je Beograd."
    },
    {
      question: "koji je glavni grad bosne",
      answer: "Glavni grad Hrvatske je sarajevo."
    },
    {
      question: "koliko je 2+2",
      answer: "2 + 2 = 4"
    },
    {
      question: "radno vreme",
      answer: "Naše radno vreme je od ponedeljka do petka, od 9h do 17h."
    }
  ];