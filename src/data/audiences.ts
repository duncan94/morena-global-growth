export type Audience = {
  id: string;
  title: string;
  description: string;
  points: string[];
  serviceHref: string;
};

export const audiences: Audience[] = [
  {
    id: "bedrijven",
    title: "Bedrijven & organisaties",
    description:
      "Teams en leidinggevenden die willen groeien in communicatie, zelfvertrouwen en intercultureel samenwerken. Training die raakt — en blijft hangen.",
    points: [
      "Maatwerktrainingen op locatie of online",
      "Focus op menselijk potentieel en resultaat",
      "Internationale en interculturele ervaring",
    ],
    serviceHref: "/diensten#organisatie-training",
  },
  {
    id: "ondernemers",
    title: "Startende ondernemers",
    description:
      "Je grijpt kansen, maar voelt ook de druk van uitdagingen. Samen bouwen we aan helderheid, stevigheid en keuzes die bij jou en je onderneming passen.",
    points: [
      "Vanuit ondernemerservaring begeleid",
      "Strategie én mindset",
      "Concrete stappen zonder druk",
    ],
    serviceHref: "/diensten#startende-ondernemers",
  },
  {
    id: "studenten",
    title: "Studenten",
    description:
      "Je staat aan het begin van iets groots — en wilt weten wat écht bij je past. Coaching die je zelfvertrouwen versterkt en richting geeft.",
    points: [
      "Ontdekken van talenten en waarden",
      "Voorbereiding op de arbeidsmarkt",
      "Warm, eerlijk en doelgericht",
    ],
    serviceHref: "/diensten#studenten",
  },
  {
    id: "integratie",
    title: "Vrouwen met integratieachtergrond",
    description:
      "Je wilt de stap terug naar de arbeidsmarkt zetten. Met respect, geduld en oprechte betrokkenheid help ik je jouw talenten en vertrouwen te activeren.",
    points: [
      "Cultuursensitieve begeleiding",
      "Focus op talent en eigenwaarde",
      "Praktische stappen naar werk",
    ],
    serviceHref: "/diensten#integratie-arbeidsmarkt",
  },
];
