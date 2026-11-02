import { Experience } from "../shared/types/experience-details";

export const EXPERIENCES: Experience[] = [
  {
    id: 5,
    role: 'Software Engineer & ML Lead',
    company: 'PartikelART Solution GmbH',
    company_url: 'https://partikel-art.de/',
    company_logo_url: 'experience/partikelart/partikel-art_logo.png',
    description: [
      {
        category: 'TU Start-up Award 2025',
        items: [
          { text: 'Won 1st Place (€6,000, Wilo-Foundation) and the TU capital VC Seed Sonderpreis for our mobile cleanliness inspection system.' },
        ]
      },
      {
        category: 'Computer Vision & Sub-10μm Metrology',
        items: [
          { text: 'Built real-time VDA 19.1 / ISO 16232 inspection pipeline in OpenCV/TypeScript computing Feret Max/Min calipers, incircle diameter, and cross-polarization gloss for metal vs. non-metal classification.' },
          { text: 'Implemented Zhang-Suen topological thinning with precomputed 256-entry static LUTs to extract true unrolled centerline lengths of curved fibers.' },
          { text: 'Engineered post-inference HSV saturation and inverted value channel injection to recover faint translucent fibers and dark carbon dust missed by neural networks.' }
        ]
      },
      {
        category: 'Active Learning & Data Pipeline',
        items: [
          { text: 'Built custom Label Studio ML backend (ParSeGNet2 U-Net) with Douglas-Peucker polygon simplification and SAM 2.1 integration, cutting annotation time by ~10x.' },
          { text: 'Automated continuous data synchronization between Azure Blob Storage, Label Studio, and training pipelines for human-in-the-loop retraining.' }
        ]
      },
      {
        category: 'Full-Stack Architecture & Performance',
        items: [
          { text: 'Maintained Nx monorepo unifying the Ionic/Angular cross-platform mobile app, customer web portal, and NestJS API.' },
          { text: 'Eliminated redundant sorting and re-evaluations in the particle inspection view, resolving UI lag on images with 3,000+ particles.' }
        ]
      },
      {
        category: 'Consulting & University Teaching',
        items: [
          { text: 'Authored automated Keyence microscope inspection proposal and technical requirements for Tier-1 automotive supplier Stoneridge.' },
          { text: 'Delivered invited guest lecture for the Industrial Data Science 1 Master\'s course at TU Dortmund on deploying CV models in production.' }
        ]
      }
    ],
    duration: 'Oct 2024 - Present',
    location: 'Dortmund, Germany • Hybrid',
    media: []
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'ADVISORI FTC GmbH',
    company_url: 'https://www.advisori.de/',
    company_logo_url: 'experience/advisori/advisori_icon.png',
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
    duration: 'Feb 2024 - Sep 2024',
    location: 'Frankfurt am Main, Germany • Remote',
    media: [
      { url: 'experience/advisori/ADV1.jpeg' },
      { url: 'experience/advisori/ADV2.jpeg' },
    ]
  },
  {
    id: 3,
    role: 'Freelance Web Developer',
    company: 'Freelance',
    company_url: '#',
    company_logo_url: 'experience/freelance/freelance_icon.png',
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
    duration: 'Jan 2021 - Mar 2021',
    location: 'Surat, India',
    media: []
  },
  {
    id: 2,
    role: 'Junior .NET Developer',
    company: 'Xcellence-IT',
    company_url: 'https://www.xcellence-it.com/',
    company_logo_url: 'experience/xcellenceit/xcellence-it_logo.png',
    description: [
      {
        category: '',
        items: [
          { text: 'Developed and maintained ASP.NET Core e-commerce applications, SVG manipulation services, and modular plugin architectures.' },
          { text: 'Automated REST API documentation using Swagger and optimized SQL Server database queries.' },
          { text: 'Participated in client requirement analysis and code quality reviews.' }
        ]
      },
    ],
    duration: 'Jul 2019 - Dec 2020',
    location: 'Surat, India',
    media: [
      { url: 'experience/xcellenceit/XIT1.jpeg' },
    ]
  },
  {
    id: 1,
    role: 'Trainee',
    company: 'Xcellence-IT',
    company_url: 'https://www.xcellence-it.com/',
    company_logo_url: 'experience/xcellenceit/xcellence-it_logo.png',
    description: [
      {
        category: '',
        items: [
          { text: 'Trained in ASP.NET Core, C# coding standards, and nopCommerce plugin development.' }
        ]
      },
    ],
    duration: 'Jan 2019 - Jun 2019',
    location: 'Surat, India',
    media: []
  }
];
