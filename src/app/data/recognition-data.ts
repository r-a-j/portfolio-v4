export type PressCategory = 'Awards & Official' | 'Product Press';

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

export interface EmployerReference {
  id: string;
  tabLabel: string;
  tabYear: string;
  badgeLabel: string;
  signedMeta: string;
  company: string;
  author: string;
  authorRole: string;
  date: string;
  period: string;
  quote: string;
  closingQuote: string;
  documents: ReferenceDocument[];
}

export const EMPLOYER_REFERENCES: EmployerReference[] = [
  {
    id: 'partikelart',
    tabLabel: 'PartikelART',
    tabYear: '2026',
    badgeLabel: 'Official Arbeitszeugnis',
    signedMeta: 'Signed PDF (EN & DE)',
    company: 'PartikelART Solution GmbH',
    author: 'Dr.-Ing. R. Zwinkau',
    authorRole: 'Managing Director',
    date: 'November 2026',
    period: '1 Oct 2024 – 15 Nov 2026',
    quote:
      'Through his outstanding technical contributions, Mr. Pawar played a key role in advancing our core AI technology. His model optimizations were instrumental in supporting our goal of automated on-site particle analysis in under 60 seconds. His work on active learning and automated annotation accelerated the generation of training data by approximately a factor of ten.',
    closingQuote:
      'We recommend him without reservation for further roles in artificial intelligence, computer vision, machine learning and software engineering.',
    documents: [
      {
        label: 'Read Reference Letter (EN)',
        language: 'English PDF',
        pdfUrl: 'docs/Arbeitszeugnis_PartikelART_EN.pdf',
        modalTitle: 'Recommendation Letter: PartikelART Solution GmbH (EN)',
      },
      {
        label: 'Arbeitszeugnis ansehen (DE)',
        language: 'German PDF',
        pdfUrl: 'docs/Arbeitszeugnis_PartikelART_DE.pdf',
        modalTitle: 'Arbeitszeugnis: PartikelART Solution GmbH (DE)',
      },
    ],
  },
  {
    id: 'xcellence-it',
    tabLabel: 'Xcellence-IT',
    tabYear: '2020',
    badgeLabel: 'CEO Reference & Certificate',
    signedMeta: 'Signed & Stamped PDFs',
    company: 'Xcellence-IT',
    author: 'Krunal J. Jariwala',
    authorRole: 'Chief Executive Officer',
    date: 'Sep & Dec 2020',
    period: '3 Jan 2019 – 15 Dec 2020',
    quote:
      'Raj is extremely organized. He is able to work independently as well as in a team and is able to follow through to ensure that job gets done. He is flexible and willing to work on any project that is assigned to him.',
    closingQuote:
      'I found that hiring Raj was perfect decision taken by the company... Raj would be tremendous asset for your company and has my highest recommendation.',
    documents: [
      {
        label: 'CEO Recommendation Letter',
        language: 'English PDF',
        pdfUrl: 'docs/LOR_XcellenceIT_CEO.pdf',
        modalTitle: 'Letter of Recommendation: Xcellence-IT (CEO)',
      },
      {
        label: 'Experience & Relieving Certificate',
        language: 'English PDF',
        pdfUrl: 'docs/Experience_Certificate_XcellenceIT.pdf',
        modalTitle: 'Experience & Relieving Certificate: Xcellence-IT',
      },
    ],
  },
];

export const OFFICIAL_REFERENCE = EMPLOYER_REFERENCES[0];

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
    badge: 'Wilo-Foundation',
    title: 'TU Start-up Award 2025: 1st Place Trophy',
    caption:
      'Awarded by CET (Centrum für Entrepreneurship & Transfer) and the Wilo-Foundation at TU Dortmund University.',
  },
  {
    src: 'recognition/tu-capital-certificate.webp',
    badge: 'TU capital Special Prize',
    title: 'TU capital Special Prize Certificate',
    caption:
      'Official Sonderpreis Urkunde awarded by TU Dortmund\'s venture seed fund.',
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
  // Official Award Releases & Ceremony Coverage (TU Start-up Award 2025)
  {
    source: 'TU Dortmund University',
    title: 'TU Dortmund prämiert drei innovative Ausgründungen',
    url: 'https://www.tu-dortmund.de/campus/detail/tu-dortmund-praemiert-drei-innovative-ausgruendungen-2-58461/',
    category: 'Awards & Official',
    highlight: 'Official university press release naming Raj Pawar and the winning team',
  },
  {
    source: 'Wilo-Foundation',
    title: 'Start-Up Award-Vergabe an der TU Dortmund 2025',
    url: 'https://www.wilo-foundation.de/aktuelles/artikel/start-up-award-vergabe-an-der-tu-dortmund-2025',
    category: 'Awards & Official',
    highlight: '1st Place & TU capital Special Prize announcement with team photo',
  },
  {
    source: 'TechnologieZentrumDortmund (TZDO)',
    title: 'TU Start-up Award 2025: Ein Abend voller Innovation',
    url: 'https://www.tzdo.de/tu-start-up-award-2025-ein-abend-voller-innovation/',
    category: 'Awards & Official',
    highlight: 'Ceremony recap highlighting 1st Place PartikelART',
  },
  {
    source: 'Nordstadtblogger',
    title: 'Fotostrecke „Wissenschaft Kompakt“ (TU Start-up Award 2025)',
    url: 'https://www.nordstadtblogger.de/fotostrecke-wissenschaft-kompakt-12/',
    category: 'Awards & Official',
    highlight: 'Local Dortmund press coverage of the 1st Place & TU capital win',
  },

  // Product & Startup Features (Built During Oct 2024 – Nov 2026 Tenure)
  {
    source: 'brand eins (2026)',
    title: 'Partikelart: Entdeck den Dreck',
    url: 'https://www.brandeins.de/magazine/brand-eins-wirtschaftsmagazin/2026/arbeit-neu/partikelart-entdeck-den-dreck',
    category: 'Product Press',
    highlight: 'Feature in Germany\'s business magazine on the industrial particle inspection system',
  },
  {
    source: 'TechnologieZentrumDortmund (TZDO)',
    title: 'Innovative Unternehmen aus dem TZDO: PartikelART (Partikelanalyse in Sekunden)',
    url: 'https://www.tzdo.de/innovative-unternehmen-aus-dem-tzdo-partikelart-partikelanalyse-in-sekunden/',
    category: 'Product Press',
    highlight: 'Dec 2025 profile covering the sub-60-second particle analysis workflow',
  },
  {
    source: 'Campus Start-ups NRW',
    title: 'PartikelART Solution GmbH Startup Profile',
    url: 'https://www.campus-start-ups.nrw/startupprofile/partikel_art_',
    category: 'Product Press',
    highlight: 'Startup profile with the TU Start-up Award team photo and 60-second monitoring tool',
  },
];
