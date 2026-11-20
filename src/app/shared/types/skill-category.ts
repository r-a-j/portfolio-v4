export interface SkillItem {
  name: string;
  icon?: string;
  faIcon?: string;
  invert?: boolean;
}

export interface SkillGroup {
  title: string;
  summary: string;
  groupIcon: string;
  skills: SkillItem[];
  usedIn: string;
}

export interface CoreLanguage {
  name: string;
  context: string;
  icon?: string;
  faIcon?: string;
}
