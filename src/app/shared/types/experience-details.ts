interface ExperienceItem {
    text: string;
}

interface ExperienceCategory {
    category: string;
    items: ExperienceItem[];
}

interface ExperienceMedia {
    url: string;
}

export interface Experience {
    id: number;
    role: string;
    company: string;
    company_url: string;
    description: ExperienceCategory[];
    duration: string;
    location: string;
    media: ExperienceMedia[];
}