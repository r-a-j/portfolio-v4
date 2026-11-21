import { Experience } from "../shared/types/experience-details";

export const EXPERIENCES: Experience[] = [
  {
    id: 5,
    role: 'Machine Learning & Software Engineer',
    company: 'PartikelART Solution GmbH',
    company_url: 'https://partikel-art.de/',
    company_logo_url: 'experience/partikelart/PartikelART-Logo.svg',
    logoStyle: 'wide-light',
    summary:
      'Core ML and software engineer turning slow lab microscopy into automated on-site visual inspection in under 60 seconds: built PyTorch segmentation models (U²-Net), a SAM 2.1 active-learning data platform (~10× faster dataset creation), and full-stack mobile/web apps in an Nx monorepo (Ionic/Angular + NestJS).',
    description: [
      {
        category: 'Computer Vision & Production ML',
        items: [
          { text: 'Developed, adapted, and optimized PyTorch U²-Net segmentation models for detecting, classifying (metallic, non-metallic, fibers), and measuring microscopic contamination directly on production-floor images, supporting automated on-site analysis in under 60 seconds.' },
          { text: 'Engineered a real-time OpenCV/TypeScript image-analysis pipeline measuring object size, shape, and surface reflectivity (Feret max/min calipers, maximum inscribed circle, and cross-polarization gloss) to automate industrial cleanliness compliance (VDA 19.1 / ISO 16232) without manual lab review.' },
          { text: 'Solved hard visual edge cases: extracted true unrolled lengths of curved fibers via Zhang-Suen skeleton thinning (accelerated with precomputed 256-entry lookup tables) and added HSV/value-channel post-processing to recover faint translucent fibers and dark carbon particles missed by neural models.' },
          { text: 'Built repeatable model evaluation, error-analysis, and documentation workflows to verify precision, recall, and measurement accuracy across releases.' }
        ]
      },
      {
        category: 'Active Learning, Data Engine & MLOps',
        items: [
          { text: 'Independently designed and built an active-learning annotation backend in Label Studio integrating U²-Net pre-labeling, Meta\'s Segment Anything Model (SAM 2.1), and Douglas-Peucker polygon simplification, accelerating training dataset creation by roughly 10×.' },
          { text: 'Automated data synchronization between Azure Blob Storage, Label Studio, and PyTorch training pipelines so newly reviewed edge cases flowed directly into human-in-the-loop retraining.' },
          { text: 'Built structured GPU training and side-by-side benchmarking workflows across segmentation architectures (U²-Net and FPN-style models) for reproducible experimentation.' }
        ]
      },
      {
        category: 'Full-Stack Product & Performance',
        items: [
          { text: 'Developed and maintained production features across a shared Nx monorepo unifying the Ionic/Angular cross-platform mobile inspection app, customer web portal, and NestJS backend API.' },
          { text: 'Profiled and eliminated redundant sorting and change-detection work in the interactive inspection view, removing UI lag when rendering and filtering scenes with 3,000+ detected objects.' },
          { text: 'Contributed to mobile camera/hardware capture integration (Capacitor) and end-to-end data flows connecting on-site imaging devices to cloud storage and inspection reporting.' }
        ]
      },
      {
        category: 'Impact, Startup Growth & Teaching',
        items: [
          { text: 'Hired directly after presenting my TU Dortmund Industrial Data Science 2 proof of concept to the founder; went on to serve as a core AI and software contributor as PartikelART won 1st Place (Wilo-Foundation) and the TU capital VC Seed Special Prize at the TU Start-up Award 2025.' },
          { text: 'Delivered core ML, computer vision, and full-stack software capabilities for an industrial visual quality-inspection platform used in real automotive manufacturing, including by lead OEM client BMW.' },
          { text: 'Co-delivered an invited guest lecture for the M.Sc. Industrial Data Science 1 course at TU Dortmund on moving computer vision models from research notebooks into production software.' }
        ]
      }
    ],
    duration: 'Oct 2024 – Nov 2026',
    location: 'Dortmund, Germany · On-site',
    documents: [
      {
        label: 'Reference Letter (EN)',
        url: 'docs/Arbeitszeugnis_PartikelART_EN.pdf',
        lang: 'EN',
      },
      {
        label: 'Arbeitszeugnis (DE)',
        url: 'docs/Arbeitszeugnis_PartikelART_DE.pdf',
        lang: 'DE',
      },
    ],
    media: [
      {
        url: 'recognition/tu-award-team.webp',
        caption: 'PartikelART team winning 1st Place & TU capital Special Prize at TU Start-up Award 2025',
      },
      {
        url: 'recognition/partikelart-lightbox-app.webp',
        caption: 'PartikelART LightBox hardware running live mobile inspection (automated object sizing and shape metrics)',
      },
      {
        url: 'recognition/tu-award-trophy.webp',
        caption: '1st Place Trophy, TU Start-up Award 2025 (CET & Wilo-Foundation)',
      },
      {
        url: 'recognition/tu-capital-certificate.webp',
        caption: 'TU capital Special Prize certificate (Sonderpreis Urkunde)',
      },
      {
        url: 'recognition/tu-award-stage.webp',
        caption: 'Finalists and award winners on stage at TU Start-up Award 2025',
      },
    ]
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'ADVISORI FTC GmbH',
    company_url: 'https://www.advisori.de/',
    company_logo_url: 'experience/advisori/Advisori-Logo.svg',
    logoStyle: 'wide-light',
    summary:
      'Built an AWS Bedrock / Claude 3 test-validation tool, restructured internal Retool RBAC workflows, and delivered a full-stack Angular + Spring Boot booking platform.',
    description: [
      {
        category: 'AI Hackathon',
        items: [
          { text: 'Built automated test-case validation tool using Zephyr API, AWS Bedrock, Claude 3 prompt engineering, and a custom Chrome extension.' },
          { text: 'Delivered working AI integration within a 2-day company hackathon timeline.' }
        ]
      },
      {
        category: 'Retool (Internal Operations App)',
        items: [
          { text: 'Restructured user role hierarchies and permissions across departments using dynamic queries and multi-select filters.' },
          { text: 'Enabled state persistence through URL parameters, allowing custom views and filters to be shared across teams.' }
        ]
      },
      {
        category: 'Room Reservation System (Roomify)',
        items: [
          { text: 'Designed and built full-stack room booking system using Angular, Spring Boot, PostgreSQL, and RESTful APIs.' },
          { text: 'Implemented CORS policies and JWT authentication to secure cross-origin requests and user sessions.' },
          { text: 'Delivered via Agile SCRUM sprints managed on Azure DevOps.' }
        ]
      }
    ],
    duration: 'Feb 2024 – Sep 2024',
    location: 'Frankfurt am Main, Germany · Remote',
    media: [
      { url: 'experience/advisori/ADV1.jpeg', caption: 'ADVISORI FTC GmbH team and engineering workspace' },
      { url: 'experience/advisori/ADV2.jpeg', caption: 'ADVISORI FTC GmbH project work' },
    ]
  },
  {
    id: 3,
    role: 'Freelance Web Developer',
    company: 'Freelance',
    company_url: '#',
    company_logo_url: 'experience/freelance/freelance_icon.png',
    logoStyle: 'icon',
    summary:
      'Delivered CLASSBOOK, an online education portal with .NET Core, MSSQL, Razorpay payments, and Firebase Cloud Messaging.',
    description: [
      {
        category: '',
        items: [
          { text: 'Developed CLASSBOOK, an online educational portal connecting students, instructors, and partners.' },
          { text: 'Built backend in .NET Core with MSSQL, integrating Razorpay payments and Firebase Cloud Messaging (FCM).' },
          { text: 'Exposed REST APIs to support mobile app client integration.' }
        ]
      },
    ],
    duration: 'Jan 2021 – Mar 2021',
    location: 'Surat, India',
    media: []
  },
  {
    id: 2,
    role: 'Junior .NET Developer (Promoted from Trainee)',
    company: 'Xcellence-IT',
    company_url: 'https://www.xcellence-it.com/',
    company_logo_url: 'experience/xcellenceit/Xcellence-IT-Logo.webp',
    logoStyle: 'wide-light',
    summary:
      'Joined in 7th semester as a Software Developer Trainee and converted full-time to Junior .NET Developer. Earned nopCommerce Certified Developer status while shipping ASP.NET Core / .NET Framework plugins, SVG-to-logo REST APIs, automated multi-source Power BI reports, and Dockerized web apps.',
    description: [
      {
        category: 'Full-Stack .NET, nopCommerce & APIs',
        items: [
          { text: 'Developed and upgraded modular e-commerce plugins on nopCommerce using Microsoft .NET Framework, .NET Core, C#, LINQ, JavaScript, and jQuery, earning official nopCommerce Certified Developer certification.' },
          { text: 'Built a REST API service generating logos from SVGs, documented endpoints with Swagger/OpenAPI, and optimized Microsoft SQL Server database queries for production workloads.' },
          { text: 'Configured, customized, and maintained client web applications and production systems across releases.' }
        ]
      },
      {
        category: 'BI Reporting, Containerization & Progression',
        items: [
          { text: 'Built automated Microsoft Power BI reports integrating multiple data sources for operational and business reporting.' },
          { text: 'Implemented Docker containerization for web applications to standardize build and deployment environments.' },
          { text: 'Joined as a Software Developer Trainee (Jan – Jun 2019), earned promotion to Junior Software Developer (Jul 2019 – Dec 2020), and contributed across requirement analysis, effort estimation, and code reviews.' }
        ]
      }
    ],
    duration: 'Jan 2019 – Dec 2020',
    location: 'Surat, India · On-site',
    documents: [
      {
        label: 'CEO Letter of Recommendation',
        url: 'docs/LOR_XcellenceIT_CEO.pdf',
        lang: 'EN',
      },
      {
        label: 'Experience & Relieving Certificate',
        url: 'docs/Experience_Certificate_XcellenceIT.pdf',
        lang: 'EN',
      },
    ],
    media: [
      {
        url: 'experience/xcellenceit/nopCommerceDays.webp',
        caption: 'Xcellence-IT team with the nopCommerce core team at #nopCommerceDays (Raj Pawar, far left)',
      },
    ]
  }
];
