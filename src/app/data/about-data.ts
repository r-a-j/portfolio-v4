export interface AboutCredential {
    eyebrow: string;
    title: string;
    organization: string;
    detail: string;
    icon: string;
}

export interface AboutReferenceLink {
    label: string;
    url: string;
    modalTitle: string;
}

export const ABOUT_CONTENT = {
    heading: 'About',
    tldr: 'Machine Learning, Computer Vision, and Full-Stack Applied AI Engineer based in Dortmund, Germany. M.Sc. Data Science student at TU Dortmund and former core engineer at PartikelART Solution GmbH (Oct 2024 – Nov 2026; 1st place, TU Start-up Award 2025). Currently open to my next engineering or applied ML role.',
    paragraphs: [
        'My background combines full-stack software engineering (.NET Core, Angular, Spring Boot, NestJS, Capacitor) with applied machine learning (PyTorch, OpenCV, U²-Net, SAM 2.1, Bayesian statistics). I focus on shipping reliable systems where accuracy, speed, and usability matter.',
        'At PartikelART (Oct 2024 – Nov 2026), I turned slow laboratory microscopy into automated on-site quality inspection: training PyTorch U²-Net segmentation models, building a Label Studio + SAM 2.1 active-learning backend that sped up dataset creation by ~10×, and shipping production features across the Ionic/Angular mobile app, web portal, and NestJS API.',
        'Alongside industry work, my Master\'s research at TU Dortmund covers Bayesian hierarchical modeling (Stan/brms), simulation-based inference (BayesFlow), and Markov Chain Monte Carlo methods. I care about clean code, practical math, and software that holds up in production.'
    ],
    credentials: [
        {
            eyebrow: 'Education',
            title: 'M.Sc. Data Science',
            organization: 'TU Dortmund University',
            detail: 'Focus on Bayesian hierarchical modeling, simulation-based inference (SBI), MCMC, and industrial computer vision.',
            icon: 'fa-solid fa-graduation-cap',
        },
        {
            eyebrow: 'Guest Lecture',
            title: 'Invited Guest Lecturer',
            organization: 'Industrial Data Science 1 (M.Sc.), TU Dortmund',
            detail: 'Co-delivered a graduate guest lecture on taking computer vision models from notebooks into industrial production.',
            icon: 'fa-solid fa-chalkboard-user',
        },
        {
            eyebrow: 'Award & Industry Impact',
            title: '1st Place, TU Start-up Award 2025',
            organization: 'PartikelART Solution GmbH',
            detail: 'Core ML and software engineer behind an automated visual inspection platform deployed in automotive manufacturing, including with lead OEM client BMW.',
            icon: 'fa-solid fa-trophy',
        },
    ] as AboutCredential[],
    references: [
        {
            label: 'PartikelART Reference (EN)',
            url: 'docs/Arbeitszeugnis_PartikelART_EN.pdf',
            modalTitle: 'Recommendation Letter: PartikelART Solution GmbH (EN)',
        },
        {
            label: 'PartikelART Arbeitszeugnis (DE)',
            url: 'docs/Arbeitszeugnis_PartikelART_DE.pdf',
            modalTitle: 'Arbeitszeugnis: PartikelART Solution GmbH (DE)',
        },
    ] as AboutReferenceLink[],
    buttonText: 'View CV',
    modalTitle: 'Curriculum Vitae',
    pdfPath: 'docs/Raj_Pawar_CV.pdf'
};
