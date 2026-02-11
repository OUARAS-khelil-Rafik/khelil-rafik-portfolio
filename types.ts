export type Language = 'en' | 'fr';

export interface NavItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export interface ContentData {
  nav: {
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    subrole: string;
    description: string;
    cta: string;
    downloadCv: string;
  };
  about: {
    title: string;
    content: string;
  };
  experience: {
    title: string;
    workTitle: string;
    eduTitle: string;
    items: Experience[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    subtitle: string;
    loading: string;
    error: string;
    viewAll: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    location: string;
    email: string;
    phone: string;
  };
  footer: {
    rights: string;
  };
}