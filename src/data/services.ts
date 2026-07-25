export type Service = {
  id: string;
  name: string;
  tagline: string;
  forWhom: string;
  description: string;
  includes: string[];
  outcomes: string[];
  duration: string;
  format: string;
};

export const services: Service[] = [
  {
    id: "business-coaching",
    name: "Business Coaching",
    tagline: "Heldere keuzes, stevig leiderschap",
    forWhom: "Ondernemers, leidinggevenden en professionals die vastlopen of willen groeien",
    description:
      "Samen brengen we visie, doelen en potentieel in lijn. Geen standaardadvies, maar scherpe vragen en concrete stappen die bij jóu passen — strategisch én intuïtief.",
    includes: [
      "Persoonlijke intake en heldere doelen",
      "1-op-1 coachsessies (online of op locatie)",
      "Focus op patronen, keuzes en leiderschap",
      "Praktische actiepunten tussen sessies",
      "Ruimte voor zowel business als persoonlijke groei",
    ],
    outcomes: [
      "Meer helderheid over richting en prioriteiten",
      "Steviger zelfvertrouwen in beslissingen",
      "Doorbreken van belemmerende patronen",
      "Concrete stappen die tot resultaat leiden",
    ],
    duration: "Traject van 3–6 maanden",
    format: "Individueel · online of face-to-face",
  },
  {
    id: "organisatie-training",
    name: "Trainingen voor organisaties",
    tagline: "Groei die blijft hangen in teams",
    forWhom: "Bedrijven en organisaties die mensen en teams willen ontwikkelen",
    description:
      "Interactieve trainingen die raken en blijven. Gericht op communicatie, zelfvertrouwen, intercultureel werken en het versterken van menselijk potentieel binnen de organisatie.",
    includes: [
      "Maatwerkprogramma afgestemd op jullie doelen",
      "Workshops en trainingen op locatie of online",
      "Combinatie van inzichten en oefening",
      "Ruimte voor dialoog en praktische toepassing",
      "Nazorg of follow-up op verzoek",
    ],
    outcomes: [
      "Sterkere samenwerking en open communicatie",
      "Medewerkers die vanuit vertrouwen handelen",
      "Betere omgang met diversiteit en cultuur",
      "Inzichten die in de dagelijkse praktijk landen",
    ],
    duration: "Halve dag tot meerdaags traject",
    format: "Incompany · maatwerk",
  },
  {
    id: "startende-ondernemers",
    name: "Startende ondernemers",
    tagline: "Van idee naar stevige basis",
    forWhom: "Mensen die starten of net zijn gestart met ondernemen",
    description:
      "Als voormalig onderneemster weet ik hoe het is om kansen te grijpen én uitdagingen te doorstaan. Ik help je bouwen aan een stevige basis — niet alleen in strategie, maar in zelfvertrouwen en focus.",
    includes: [
      "Helder krijgen van jouw visie en positionering",
      "Praktische coaching op keuzes en prioriteiten",
      "Werken aan mindset en doorzettingsvermogen",
      "Structuur in doelen en eerstvolgende stappen",
      "Ondersteuning bij lastige momenten",
    ],
    outcomes: [
      "Een duidelijke koers voor jouw onderneming",
      "Meer rust en vertrouwen in het proces",
      "Betere keuzes onder druk",
      "Een fundament om duurzaam te groeien",
    ],
    duration: "Flexibel traject · vanaf 4 sessies",
    format: "Individueel of klein groepsverband",
  },
  {
    id: "studenten",
    name: "Studenten & jonge professionals",
    tagline: "Zelfvertrouwen voor de volgende stap",
    forWhom: "Studenten en starters die grip willen op hun pad en potentieel",
    description:
      "De overstap naar de arbeidsmarkt of een vervolgstudie vraagt meer dan CV’s en netwerken. Ik help je ontdekken wat écht bij je past en hoe je daar met vertrouwen naartoe beweegt.",
    includes: [
      "Ontdekken van talenten, waarden en richting",
      "Coaching op zelfvertrouwen en presentatie",
      "Praktische tools voor keuzes en gesprekken",
      "Oefenen met lastige situaties",
      "Persoonlijke aandacht en eerlijke feedback",
    ],
    outcomes: [
      "Meer inzicht in wat bij jou past",
      "Sterker zelfbeeld en stevigere houding",
      "Betere voorbereiding op sollicitaties en keuzes",
      "Vertrouwen om de volgende stap te zetten",
    ],
    duration: "Kort traject of losse sessies",
    format: "Individueel · studentvriendelijk",
  },
  {
    id: "integratie-arbeidsmarkt",
    name: "Terugkeer naar de arbeidsmarkt",
    tagline: "Talent, vertrouwen en een nieuwe start",
    forWhom: "Vrouwen met een integratieachtergrond die de stap terug naar werk willen zetten",
    description:
      "Iedereen heeft talenten. Met de juiste begeleiding en het juiste vertrouwen kun je doelen bereiken. Deze begeleiding is warm, respectvol en gericht op jouw unieke situatie en kracht.",
    includes: [
      "Persoonlijke begeleiding op jouw tempo",
      "Werken aan zelfvertrouwen en eigenwaarde",
      "Praktische voorbereiding op de arbeidsmarkt",
      "Cultuursensitieve, respectvolle aanpak",
      "Ruimte voor verhalen, twijfels en ambities",
    ],
    outcomes: [
      "Sterker geloof in eigen mogelijkheden",
      "Duidelijkheid over richting en stappen",
      "Betere aansluiting op de Nederlandse arbeidsmarkt",
      "Een stevige, waardige nieuwe start",
    ],
    duration: "Begeleidingstraject op maat",
    format: "Individueel of in kleine groepen",
  },
];
