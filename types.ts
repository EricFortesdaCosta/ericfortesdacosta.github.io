import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  date: string;
  title: string;
  institution: string;
  description: string;
  type: 'graduation' | 'course';
}

export interface Skill {
  name: string;
  icon?: string;
}