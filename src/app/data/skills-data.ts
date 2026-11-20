import { CoreLanguage, SkillGroup } from '../shared/types/skill-category';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Machine Learning & Computer Vision',
    summary:
      'Production segmentation, object detection, active-learning annotation pipelines, and applied multimodal LLM features.',
    groupIcon: 'fa-solid fa-eye',
    skills: [
      { name: 'PyTorch', icon: 'technologies/pytorch.svg' },
      { name: 'OpenCV', icon: 'technologies/opencv.svg' },
      { name: 'YOLOv8', icon: 'technologies/ultralytics.svg' },
      { name: 'U²-Net', faIcon: 'fa-solid fa-diagram-project' },
      { name: 'SAM 2.1', icon: 'technologies/meta.svg' },
      { name: 'Label Studio', faIcon: 'fa-solid fa-tags' },
      { name: 'Google Gemini', icon: 'technologies/gemini.svg' },
      { name: 'AWS Bedrock', faIcon: 'fa-brands fa-aws' },
      { name: 'scikit-learn', icon: 'technologies/scikitlearn.svg' },
      { name: 'TensorFlow', icon: 'technologies/tensorflow.svg' },
    ],
    usedIn:
      'PartikelART VDA 19.1 inspection (< 60s on-site analysis, ~10× faster dataset labeling), CineScope Gemini search & inbox capture, ADVISORI Bedrock hackathon.',
  },
  {
    title: 'Statistics & Bayesian Modeling',
    summary:
      'Hierarchical spatio-temporal modeling, likelihood-free amortized posterior estimation, and custom MCMC samplers.',
    groupIcon: 'fa-solid fa-chart-line',
    skills: [
      { name: 'R', icon: 'technologies/r.svg' },
      { name: 'Stan', faIcon: 'fa-solid fa-wave-square' },
      { name: 'brms', faIcon: 'fa-solid fa-chart-area' },
      { name: 'BayesFlow', faIcon: 'fa-solid fa-bezier-curve' },
      { name: 'MCMC', faIcon: 'fa-solid fa-shuffle' },
      { name: 'LOO-CV', faIcon: 'fa-solid fa-check-double' },
      { name: 'SciPy', icon: 'technologies/scipy.svg' },
      { name: 'NumPy', icon: 'technologies/numpy.svg' },
      { name: 'pandas', icon: 'technologies/pandas.svg' },
      { name: 'lme4', faIcon: 'fa-solid fa-sliders' },
    ],
    usedIn:
      'TU Dortmund M.Sc. Data Science: 44-year Arctic sea ice AR(1) models, LIF neuron Simulation-Based Inference, and Metropolis-Hastings in pure R.',
  },
  {
    title: 'Web, Mobile & Backend',
    summary:
      'Cross-platform web and Android apps, high-density UI performance tuning, local browser storage, and REST APIs.',
    groupIcon: 'fa-solid fa-layer-group',
    skills: [
      { name: 'TypeScript', icon: 'technologies/typescript.svg' },
      { name: 'Angular', icon: 'technologies/angular.svg' },
      { name: 'Ionic', icon: 'technologies/ionic.svg' },
      { name: 'Capacitor', icon: 'technologies/capacitor.svg' },
      { name: 'NestJS', icon: 'technologies/nestjs.svg' },
      { name: '.NET Core', icon: 'technologies/dotnetcore.svg' },
      { name: 'Spring Boot', icon: 'technologies/spring.svg' },
      { name: 'RxDB', icon: 'technologies/rxdb.svg' },
      { name: 'PostgreSQL', icon: 'technologies/postgresql.svg' },
      { name: 'SQL Server', icon: 'technologies/microsoftsqlserver.svg' },
      { name: 'Kotlin', icon: 'technologies/kotlin.svg' },
      { name: 'Tailwind CSS', icon: 'technologies/tailwindcss.svg' },
    ],
    usedIn:
      'PartikelART Nx monorepo (3,000+ particles/frame UI), CineScope (Live Web & Google Play Beta), ADVISORI Roomify, and Xcellence-IT.',
  },
  {
    title: 'Cloud, Data & DevOps',
    summary:
      'Automated human-in-the-loop data sync, CI/CD checks, serverless API proxies, and signed Android releases.',
    groupIcon: 'fa-solid fa-gears',
    skills: [
      { name: 'Microsoft Azure', icon: 'technologies/azure.svg' },
      { name: 'Nx Monorepo', icon: 'technologies/nx.svg' },
      { name: 'GitHub Actions', icon: 'technologies/githubactions.svg' },
      { name: 'Git', icon: 'technologies/git.svg' },
      { name: 'GitHub', icon: 'technologies/github.svg', invert: true },
      { name: 'Vercel', icon: 'technologies/vercel.svg' },
      { name: 'Google Play Core', icon: 'technologies/googleplay.svg' },
      { name: 'Swagger / OpenAPI', icon: 'technologies/swagger.svg' },
      { name: 'pnpm', icon: 'technologies/pnpm.svg' },
    ],
    usedIn:
      'PartikelART Azure-to-Label-Studio retraining pipeline, CineScope Play App Signing & authenticated proxy, and automated CI/CD deploys.',
  },
];

export const CORE_LANGUAGES: CoreLanguage[] = [
  { name: 'Python', context: 'PyTorch, OpenCV, ML & Data Pipelines', icon: 'technologies/python.svg' },
  { name: 'TypeScript', context: 'Angular, Ionic, NestJS, OpenCV.js', icon: 'technologies/typescript.svg' },
  { name: 'R', context: 'Stan, brms, Bayesian Statistics & MCMC', icon: 'technologies/r.svg' },
  { name: 'C#', context: 'ASP.NET Core APIs & Plugin Systems', icon: 'technologies/csharp.svg' },
  { name: 'Java', context: 'Spring Boot Services & Android Bridge', icon: 'technologies/java.svg' },
  { name: 'SQL', context: 'PostgreSQL & Microsoft SQL Server', icon: 'technologies/postgresql.svg' },
  { name: 'Kotlin', context: 'Jetpack Compose & Android LiteRT', icon: 'technologies/kotlin.svg' },
];
