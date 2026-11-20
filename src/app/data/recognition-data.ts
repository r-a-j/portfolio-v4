export type PressCategory =
  | 'Official & Awards'
  | 'Press & Industry'
  | 'Ecosystem'
  | 'Video & Photos';

export interface PressItem {
  source: string;
  title: string;
  url: string;
  category: PressCategory;
  highlight?: string;
}

export interface RecognitionPhoto {
  src: string;
  badge: string;
  title: string;
  caption: string;
}

export interface ReferenceDocument {
  label: string;
  language: string;
  pdfUrl: string;
  modalTitle: string;
}

export const OFFICIAL_REFERENCE = {
  company: 'PartikelART Solution GmbH',
  author: 'Dr.-Ing. R. Zwinkau',
  authorRole: 'Managing Director',
  date: 'November 2026',
  period: '1 Oct 2024 – 15 Nov 2026',
  gradeSummary: 'German Arbeitszeugnis Grade 1.0 ("stets zu unserer vollsten Zufriedenheit")',
  quote:
    'Through his outstanding technical contributions, Mr. Pawar played a key role in advancing our core AI technology. His model optimizations were instrumental in supporting our goal of automated on-site particle analysis in under 60 seconds. His work on active learning and automated annotation accelerated the generation of training data by approximately a factor of ten.',
  closingQuote:
    'We recommend him without reservation for further roles in artificial intelligence, computer vision, machine learning and software engineering.',
  documents: [
    {
      label: 'Read Reference Letter (EN)',
      language: 'English PDF',
      pdfUrl: 'docs/Arbeitszeugnis_PartikelART_EN.pdf',
      modalTitle: 'Recommendation Letter — PartikelART Solution GmbH (EN)',
    },
    {
      label: 'Arbeitszeugnis ansehen (DE)',
      language: 'German PDF',
      pdfUrl: 'docs/Arbeitszeugnis_PartikelART_DE.pdf',
      modalTitle: 'Arbeitszeugnis — PartikelART Solution GmbH (DE)',
    },
  ] as ReferenceDocument[],
};

export const RECOGNITION_PHOTOS: RecognitionPhoto[] = [
  {
    src: 'recognition/tu-award-team.webp',
    badge: '1st Place • Oct 2025',
    title: 'TU Start-up Award 2025 Winners',
    caption:
      'PartikelART team on award night: Raj Pawar (left), Dr. Ronny Zwinkau, Roman Möhle, Simon Brylla, and Friedrich Müller with the 1st Place trophy and TU capital Urkunde.',
  },
  {
    src: 'recognition/partikelart-lightbox-app.webp',
    badge: 'Hardware + CV App',
    title: 'PartikelART LightBox Running Live Inspection',
    caption:
      'Live mobile particle inspection displaying real-time segmentation, metal vs. non-metal classification, Feret max/min calipers, and MaxInkreis measurement.',
  },
  {
    src: 'recognition/tu-award-trophy.webp',
    badge: 'Wilo-Foundation • €6,000',
    title: 'TU Start-up Award 2025 — 1st Place Trophy',
    caption:
      'Awarded by CET (Centrum für Entrepreneurship & Transfer) and the Wilo-Foundation at TU Dortmund University.',
  },
  {
    src: 'recognition/tu-capital-certificate.webp',
    badge: 'TU capital • €50,000',
    title: 'TU capital Special Prize Certificate',
    caption:
      'Official Urkunde granting the €50,000 convertible note option (Wandelschuldverschreibung) from TU Dortmund\'s venture seed fund.',
  },
  {
    src: 'recognition/tu-award-stage.webp',
    badge: 'Award Ceremony',
    title: 'TU Start-up Award 2025 Stage & Finalists',
    caption:
      'All finalists, jury members, and winners on stage following the live pitches at TU Dortmund.',
  },
];

export const PRESS_COVERAGE: PressItem[] = [
  // Official Press Releases & University News
  {
    source: 'TU Dortmund University',
    title: 'TU Dortmund prämiert drei innovative Ausgründungen',
    url: 'https://www.tu-dortmund.de/campus/detail/tu-dortmund-praemiert-drei-innovative-ausgruendungen-2-58461/',
    category: 'Official & Awards',
    highlight: 'Official university press release naming the winning team',
  },
  {
    source: 'Wilo-Foundation',
    title: 'Start-Up Award-Vergabe an der TU Dortmund 2025',
    url: 'https://www.wilo-foundation.de/aktuelles/artikel/start-up-award-vergabe-an-der-tu-dortmund-2025',
    category: 'Official & Awards',
    highlight: '1st Place (€6,000) & TU capital Special Prize announcement',
  },
  {
    source: 'TechnologieZentrumDortmund (TZDO)',
    title: 'TU Start-up Award 2025 – Ein Abend voller Innovation',
    url: 'https://www.tzdo.de/tu-start-up-award-2025-ein-abend-voller-innovation/',
    category: 'Official & Awards',
  },
  {
    source: 'CET — TU Dortmund',
    title: 'TU Start-up Award Event Site',
    url: 'https://startup.tu-dortmund.de/',
    category: 'Official & Awards',
  },

  // Journalism & Business Media
  {
    source: 'brand eins (2026)',
    title: 'Partikelart: Entdeck den Dreck',
    url: 'https://www.brandeins.de/magazine/brand-eins-wirtschaftsmagazin/2026/arbeit-neu/partikelart-entdeck-den-dreck',
    category: 'Press & Industry',
    highlight: 'Feature in Germany\'s leading business magazine',
  },
  {
    source: 'TechnologieZentrumDortmund (TZDO)',
    title: 'Innovative Unternehmen aus dem TZDO: PartikelART – Partikelanalyse in Sekunden',
    url: 'https://www.tzdo.de/innovative-unternehmen-aus-dem-tzdo-partikelart-partikelanalyse-in-sekunden/',
    category: 'Press & Industry',
  },
  {
    source: 'TechnologieZentrumDortmund (TZDO)',
    title: 'Rückblick auf den 111. 3rd Wednesday in der MST Factory Dortmund (Feb 2026)',
    url: 'https://www.tzdo.de/rund-60-teilnehmende-aus-unternehmen-start-ups-forschung-und-netzwerk-kamen-am-18-februar-2026-zum-3rd-wednesday-zusammen-erstmals-in-der-mst-factory-dortmund-auf-phoenix-west/',
    category: 'Press & Industry',
  },
  {
    source: 'Home of Welding (DVS Media)',
    title: 'Innovationspreis „FiT2clean Award 2024“ verliehen',
    url: 'https://www.home-of-welding.com/news/innovationspreis-fit2clean-award-2024-verliehen-4579',
    category: 'Press & Industry',
  },

  // Ecosystem Profiles & Interviews
  {
    source: 'Campus Start-ups NRW',
    title: 'Interview mit Dr.-Ing. Ronny Zwinkau, Co-Founder der PartikelART GmbH',
    url: 'https://www.campus-start-ups.nrw/start-ups/start-up-talk/interview-mit-dr-ing-ronny-zwinkau-co-founder-der-partikelart-gmbh',
    category: 'Ecosystem',
  },
  {
    source: 'Campus Start-ups NRW',
    title: 'PartikelART Solution GmbH — Startup Profile',
    url: 'https://www.campus-start-ups.nrw/startupprofile/partikel_art_',
    category: 'Ecosystem',
  },
  {
    source: 'Salon des Créateurs (Wirtschaftsförderung Dortmund)',
    title: 'Salon des Créateurs Showcase',
    url: 'https://www.salondescreateurs.de/',
    category: 'Ecosystem',
  },

  // Video & Photographic Coverage
  {
    source: 'Fabrik der Zukunft (YouTube Podcast #259)',
    title: 'Technische Sauberkeit in der Produktion – mit Dr. Ronny Zwinkau',
    url: 'https://www.youtube.com/watch?v=ykjkRG4bmtc',
    category: 'Video & Photos',
    highlight: 'Video podcast',
  },
  {
    source: 'FiT e.V. (YouTube)',
    title: 'FiT2clean Award 2024 – PartikelART Solution GmbH',
    url: 'https://www.youtube.com/watch?v=vt8lGaoC3j0',
    category: 'Video & Photos',
    highlight: 'Award video showcase',
  },
  {
    source: 'Nordstadtblogger',
    title: 'Fotostrecke „Wissenschaft Kompakt“',
    url: 'https://www.nordstadtblogger.de/fotostrecke-wissenschaft-kompakt-12/',
    category: 'Video & Photos',
  },
];
