export interface ProjectActionLink {
    label: string;
    url: string;
    icon?: string;
    style?: 'primary' | 'secondary';
}

export interface ProjectShowcaseMetric {
    value: string;
    label: string;
    detail: string;
    icon: string;
}

export interface ProjectShowcaseHighlight {
    title: string;
    description: string;
    icon: string;
    tags: string[];
}

export interface ProjectShowcaseScreenshot {
    src: string;
    title: string;
    caption: string;
    badge?: string;
}

export interface ProjectShowcaseSpotlight {
    src: string;
    eyebrow: string;
    title: string;
    description: string;
}

export interface ProjectShowcaseArchitectureLayer {
    layer: string;
    title: string;
    description: string;
    technologies: string[];
}

export interface ProjectShowcase {
    tagline: string;
    versionBadge?: string;
    accentColor?: 'crimson' | 'indigo' | 'amber';
    distributionBadge?: string;
    distributionIcon?: string;
    brandIcon?: string;
    wordmark?: string;
    wordmarkSuffix?: string;
    heroBanner: string;
    heroPreviewScreenshot?: string;
    liveDemoUrl?: string;
    liveDemoTitle?: string;
    liveDemoDescription?: string;
    liveDemoPrompts?: string[];
    overview: string;
    metrics: ProjectShowcaseMetric[];
    screenshotsHeading?: string;
    screenshotsIntro?: string;
    screenshots: ProjectShowcaseScreenshot[];
    spotlightHeading?: string;
    spotlightIntro?: string;
    spotlights?: ProjectShowcaseSpotlight[];
    highlightsHeading?: string;
    highlightsIntro?: string;
    highlights: ProjectShowcaseHighlight[];
    architectureIntro?: string;
    architecture: ProjectShowcaseArchitectureLayer[];
    availabilityHeading?: string;
    availabilityIcon?: string;
    availabilityNote?: string;
}

export interface ProjectCaseStudyMetric {
    value: string;
    label: string;
    detail: string;
}

export interface ProjectCaseStudyStep {
    label: string;
    title: string;
    description: string;
}

export interface ProjectCaseStudyTableRow {
    cells: string[];
    highlight?: boolean;
}

export interface ProjectCaseStudyTable {
    title: string;
    subtitle?: string;
    columns: string[];
    rows: ProjectCaseStudyTableRow[];
    footnote?: string;
}

export interface ProjectCaseStudyFigure {
    src: string;
    title: string;
    caption: string;
    badge?: string;
    surface?: 'dark' | 'light';
    wide?: boolean;
}

export interface ProjectCaseStudySectionItem {
    title: string;
    description: string;
    tags?: string[];
}

export interface ProjectCaseStudySection {
    eyebrow?: string;
    title: string;
    intro?: string;
    items: ProjectCaseStudySectionItem[];
}

export interface ProjectCaseStudy {
    context: string;
    role?: string;
    subtitle: string;
    metrics: ProjectCaseStudyMetric[];
    problem: string;
    ownership: string;
    approachHeading?: string;
    approach?: ProjectCaseStudyStep[];
    resultsTable?: ProjectCaseStudyTable;
    figuresHeading?: string;
    figuresIntro?: string;
    figures?: ProjectCaseStudyFigure[];
    followUp?: ProjectCaseStudySection;
    takeaways?: string[];
    pdfReport?: {
        label: string;
        url: string;
    };
}

export interface ProjectDetails {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    githubLink?: string;
    githubReadmeUrl?: string;
    externalLinks?: ProjectActionLink[];
    statusBadge?: string;
    showcase?: ProjectShowcase;
    caseStudy?: ProjectCaseStudy;
    techStack: string[];
    rating: number;
    category: string;
    year: number;
    language: string;
}
