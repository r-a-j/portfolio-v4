export interface ProjectDetails {
    id: string;
    title: string;
    description: string;
    thumbnail?: string;
    githubLink?: string;
    githubReadmeUrl?: string;
    techStack: string[];
    rating: number;
    category: string;
    year: number;
    language: string;
}