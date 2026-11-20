import { CapabilityPillar, CoreLanguage } from '../shared/types/skill-category';

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    index: '01',
    title: 'Computer Vision & Applied ML',
    summary:
      'Production segmentation, object detection, active-learning annotation pipelines, and applied multimodal LLM integrations.',
    icon: 'fa-solid fa-eye',
    technologies: [
      'PyTorch',
      'OpenCV',
      'YOLOv8',
      'U²-Net',
      'SAM 2.1',
      'Label Studio',
      'Google Gemini',
      'AWS Bedrock',
      'scikit-learn',
      'TensorFlow',
    ],
    appliedIn:
      'PartikelART VDA 19.1 inspection (< 60s analysis, ~10× faster dataset labeling), CineScope Gemini search & capture, ADVISORI Bedrock hackathon.',
  },
  {
    index: '02',
    title: 'Bayesian & Statistical Modeling',
    summary:
      'Hierarchical spatio-temporal modeling, likelihood-free amortized posterior estimation, and custom MCMC inference.',
    icon: 'fa-solid fa-chart-line',
    technologies: [
      'R',
      'Stan',
      'brms',
      'BayesFlow',
      'MCMC',
      'LOO-CV',
      'SciPy',
      'NumPy',
      'pandas',
      'lme4',
    ],
    appliedIn:
      'TU Dortmund M.Sc. Data Science — 44-year Arctic sea ice AR(1) models, LIF neuron Simulation-Based Inference, and Metropolis-Hastings in pure R.',
  },
  {
    index: '03',
    title: 'Full-Stack & Mobile Engineering',
    summary:
      'Cross-platform web and Android apps, high-density UI performance tuning, local browser persistence, and modular REST APIs.',
    icon: 'fa-solid fa-layer-group',
    technologies: [
      'TypeScript',
      'Angular',
      'Ionic',
      'Capacitor',
      'NestJS',
      '.NET Core',
      'Spring Boot',
      'RxDB',
      'PostgreSQL',
      'SQL Server',
      'Kotlin',
      'Tailwind CSS',
    ],
    appliedIn:
      'PartikelART Nx monorepo (3,000+ particles/frame UI), CineScope (Live Web & Google Play Beta), ADVISORI Roomify, and Xcellence-IT.',
  },
  {
    index: '04',
    title: 'Cloud, MLOps & Delivery',
    summary:
      'Automated human-in-the-loop data synchronization, CI/CD quality gates, serverless gateways, and signed mobile distribution.',
    icon: 'fa-solid fa-gears',
    technologies: [
      'Microsoft Azure',
      'Azure Blob Storage',
      'Nx Monorepo',
      'GitHub Actions',
      'Git',
      'Vercel',
      'Google Play Core',
      'OpenAPI / Swagger',
      'pnpm',
    ],
    appliedIn:
      'PartikelART Azure-to-Label-Studio retraining pipeline, CineScope Play App Signing & authenticated proxy, and automated CI/CD releases.',
  },
];

export const CORE_LANGUAGES: CoreLanguage[] = [
  { name: 'Python', context: 'PyTorch, OpenCV, ML & Data Pipelines' },
  { name: 'TypeScript', context: 'Angular, Ionic, NestJS, OpenCV.js' },
  { name: 'R', context: 'Stan, brms, Bayesian Statistics & MCMC' },
  { name: 'C#', context: 'ASP.NET Core APIs & Plugin Systems' },
  { name: 'Java', context: 'Spring Boot Services & Android Bridge' },
  { name: 'SQL', context: 'PostgreSQL & Microsoft SQL Server' },
  { name: 'Kotlin', context: 'Jetpack Compose & Android LiteRT' },
];
