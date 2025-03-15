import { Experience } from "../shared/types/experience-details";

export const EXPERIENCES: Experience[] = [
  {
    id: 5,
    role: 'Data Science - Working Student',
    company: 'PartikelART Solution GmbH',
    company_url: 'https://partikelart.com/',
    description: [
      {
        category: '',
        items: [
          { text: 'Focus areas include machine learning, computer vision, and mobile app development' },
          { text: 'Expertise includes PyTorch, NumPy, OpenCV, Ionic, and Angular' }
        ]
      },
    ],
    duration: 'Oct 2024 - Present',
    location: 'Dortmund, North Rhine-Westphalia, Germany · Remote',
    media: []
  },
  {
    id: 4,
    role: 'Software Engineer',
    company: 'ADVISORI FTC GmbH',
    company_url: 'https://www.advisori.de/',
    description: [
      {
        category: 'AI Hackathon',
        items: [
          { text: 'Competed in the AI Use Case Challenge during the ADVISORI FTC GmbH Hackathon, focusing on creating an innovative AI solution for the Validation and Improvement of Test Cases' },
          { text: 'Used ZephyrScala API to extract relevant test data, enabling automated analysis and feedback' },
          { text: 'Utilized AWS Bedrock and Claude 3 for AI-driven prompt engineering to process and analyze the extracted data, generating actionable insights for improving test cases' },
          { text: 'Developed and deployed a custom Chrome extension to present AI-generated suggestions directly in the browser, streamlining user interaction and decision-making' },
          { text: 'Gained hands-on experience with AI integration into practical software development tools, working within a tight 2-day hackathon timeline' }
        ]
      },
      {
        category: 'Retool (Internal office management web app)',
        items: [
          { text: 'Coworker management by improving the handling of user roles, hierarchies, and permissions across departments' },
          { text: 'Addressed challenges in managing hierarchical roles by using dynamic queries, multi-select filters, and deep linking to ensure seamless role-based access control' },
          { text: 'Enhanced hierarchy management, integrated filtering techniques' },
          { text: 'Enabled state persistence through URL parameters, allowing custom views and filters to be shared, improving decision-making' },
        ]
      },
      {
        category: 'Onboarding Project',
        items: [
          { text: 'Designed and implemented the Room Reservation System (Roomify), preventing double bookings and improving room utilization' },
          { text: 'Developed the front-end using Angular. Integrated Spring Boot back-end services and reduce boilerplate code. Used PostgreSQL for an open-source, cost-effective database solution. Implemented RESTful APIs' },
          { text: 'Overcame challenge implementing CORS policies and JWT-based authentication to secure cross-origin requests and user sessions' },
          { text: 'Managed repository using Azure DevOps. Adopted Agile SCRUM methodology with regular sprints and reviews' },
          { text: 'Demonstrated increased efficiency, reduced booking conflicts, and better office space utilization through live product demo' }
        ]
      }
    ],
    duration: 'Feb 2024 - Sep 2024',
    location: 'Frankfurt am Main, Hesse, Germany · Remote',
    media: [
      { url: 'experience/ADV1.jpeg' },
      { url: 'experience/ADV2.jpeg' },
    ]
  },
  {
    id: 3,
    role: 'Freelance Web Developer',
    company: 'Freelance',
    company_url: '#',
    description: [
      {
        category: '',
        items: [
          { text: 'Developed the CLASSBOOK web application, an online portal connecting students, teachers, career experts, and channel partners' },
          { text: 'Utilized .NET Core 3.1 for back-end development, ensuring a robust and scalable solution' },
          { text: 'Integrated Razorpay for seamless online payments, facilitating financial transactions within the platform' },
          { text: 'Implemented FCM notifications to enhance user engagement through real-time updates' },
          { text: 'Managed and optimized databases using MSSQL, improving data integrity and performance' },
          { text: 'Used JavaScript and jQuery for dynamic front-end functionality and enhanced user interaction' },
          { text: 'Integrated templates to create a customizable and user-friendly interface' },
          { text: 'Developed APIs to support Android application integration, enabling mobile access to platform features' }
        ]
      },
    ],
    duration: 'Jan 2021 - Mar 2021',
    location: 'Surat, Gujarat, India',
    media: []
  },
  {
    id: 2,
    role: 'Jr. .NET Developer',
    company: 'Xcellence-IT',
    company_url: 'https://www.xcellence-it.com/',
    description: [
      {
        category: '',
        items: [
          { text: 'Developed and maintained ASP.NET Core web applications, with a focus on E-Commerce platforms, SVG manipulation, and custom logo generation' },
          { text: 'Designed and implemented RESTful APIs to ensure smooth data flow and communication between services' },
          { text: 'Created and integrated plugin architecture, enabling modular functionality across projects' },
          { text: 'Conducted performance optimization to enhance application speed and efficiency, improving user experience' },
          { text: 'Performed source code analysis to ensure code quality, maintainability, and adherence to best practices' },
          { text: 'Automated the API source code documentation process using SWAGGER, reducing manual effort and ensuring accurate and up-to-date documentation' },
          { text: 'Project requirement analysis sessions, ensuring that solutions were tailored to meet client specifications and business needs' },
        ]
      },
    ],
    duration: 'Jul 2019 - Dec 2020',
    location: 'Surat, Gujarat, India',
    media: [
      { url: 'experience/XIT1.jpeg' },
    ]
  },
  {
    id: 1,
    role: 'Trainee',
    company: 'Xcellence-IT',
    company_url: 'https://www.xcellence-it.com/',
    description: [
      {
        category: '',
        items: [
          { text: 'Learn ASP.NET Core & Coding Standards' },
          { text: 'Learn nopCommerce' },
          { text: 'Learn creating plugins' }
        ]
      },
    ],
    duration: 'Jan 2019 - Jun 2019',
    location: 'Surat, Gujarat, India',
    media: []
  }
];
