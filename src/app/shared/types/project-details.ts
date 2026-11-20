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
    brandIcon?: string;
    wordmark?: string;
    heroBanner: string;
    heroPreviewScreenshot?: string;
    overview: string;
    metrics: ProjectShowcaseMetric[];
    screenshots: ProjectShowcaseScreenshot[];
    spotlightHeading?: string;
    spotlightIntro?: string;
    spotlights?: ProjectShowcaseSpotlight[];
    highlights: ProjectShowcaseHighlight[];
    architectureIntro?: string;
    architecture: ProjectShowcaseArchitectureLayer[];
    availabilityNote?: string;
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
    techStack: string[];
    rating: number;
    category: string;
    year: number;
    language: string;
}
