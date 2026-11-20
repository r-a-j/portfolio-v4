interface ExperienceItem {
    text: string;
}

interface ExperienceCategory {
    category: string;
    items: ExperienceItem[];
}

export interface ExperienceMedia {
    url: string;
    caption?: string;
}

export interface ExperienceDocument {
    label: string;
    url: string;
    lang: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    company_url: string;
    company_logo_url: string;
    description: ExperienceCategory[];
    duration: string;
    location: string;
    media: ExperienceMedia[];
    documents?: ExperienceDocument[];
}
