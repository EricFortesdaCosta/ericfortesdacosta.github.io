import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { Education, Experience, Project, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ericcostaw/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/EricFortesdaCosta/", label: "GitHub" },
  { icon: Mail, href: "mailto:ericcostaf.w@gmail.com", label: "Email" },
  { icon: Terminal, href: "https://replit.com/@EricFortesdaCos", label: "Replit" },
];

export const PROJECTS: Project[] = [
  {
    title: "Debug Me",
    description: "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Arquitetura offline-first para automação de suporte Nível 1.",
    image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug+Me+AI",
    tags: ["React", "Llama AI", "Offline-first"]
  },
  {
    title: "Mercato API & Mobile",
    description: "API para centralização de dados de múltiplos sistemas e aplicação unificada para gestão de polos (EUA/BR).",
    image: "https://placehold.co/600x400/1e1e1e/ce9178?text=Mercato+API",
    tags: ["Java", "API REST", "Integração"]
  },
  {
    title: "Automação Tintas Killing",
    description: "Aplicação desktop (Tkinter/Pandas) para controle de estoque com leitura de código de barras. Redução de 4h no inventário.",
    image: "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Python+Auto",
    tags: ["Python", "Pandas", "Tkinter"]
  },
  {
    title: "OptimusTech",
    description: "Site desenvolvido durante o desafio 7DaysOfCode da escola Alura, utilizando CSS e HTML.",
    image: "https://placehold.co/600x400/1e1e1e/ce9178?text=OptimusTech",
    tags: ["HTML", "CSS", "Frontend"]
  },
  {
    title: "Réplica Spotify",
    description: "Desenvolvimento do site 'Spotify' no projeto Imersão Front-End, utilizando HTML, CSS, JavaScript e Angular.",
    image: "https://placehold.co/600x400/1e1e1e/1db954?text=Spotify",
    tags: ["Angular", "Clone", "UI/UX"]
  },
  {
    title: "+PraTI | Trilha FullStack",
    description: "Imersão nos elementos essenciais do desenvolvimento web, cobrindo front-end e back-end.",
    image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
    tags: ["FullStack", "Web", "Training"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    date: "04/2024 - Atual",
    role: "Desenvolvedor",
    company: "Mercato Automação",
    location: "Porto Alegre - RS",
    description: "Desenvolvimento de API para centralizar dados, eliminando gargalos. Criação de app mobile/web para gestão de polos (Nashville/Canoas)."
  },
  {
    date: "01/2023 - 03/2024",
    role: "Desenvolvedor Python (Freelancer)",
    company: "Tintas Killing",
    location: "Novo Hamburgo - RS",
    description: "Automação de controle de estoque com Python (Tkinter/Pandas). Implementação de leitura de código de barras, reduzindo tempo de inventário em 4h."
  }
];

export const EDUCATIONS: Education[] = [
  {
    date: "Em andamento (6º Semestre)",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Unisinos",
    description: "Foco em gestão de projetos, desenvolvimento Java e alta performance.",
    type: "graduation"
  },
  {
    date: "2023",
    title: "Java | POO + Projetos",
    institution: "Udemy",
    description: "Curso completo de Java abrangendo POO, arrays, exceções e desenvolvimento desktop/web.",
    type: "course"
  },
  {
    date: "2023",
    title: "Curso de JavaScript",
    institution: "Curso em Video",
    description: "Conteúdo completo sobre ECMAScript e lógica de programação.",
    type: "course"
  }
];

export const SOFT_SKILLS = [
  "Trabalho em Equipe",
  "Resolução de Problemas",
  "Pensamento Crítico",
  "Gestão de Tempo",
  "Aprendizado Contínuo",
  "Adaptabilidade"
];

export const HARD_SKILLS = [
  "Java", "SpringBoot", "JAX-RS", "API RESTful",
  "Python", "Pandas",
  "JavaScript", "React", "Tailwind",
  "Docker", "Kubernetes", "Git",
  "MySQL", "MariaDB", "Supabase"
];