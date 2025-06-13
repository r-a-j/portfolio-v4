export interface SkillCategory {
  name: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  link: string;
  image: string;
}