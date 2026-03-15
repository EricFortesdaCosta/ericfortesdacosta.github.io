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
    title: " Debug.Me - Assistente de Suporte Nível 1",
    description: "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Arquitetura offline-first para automação de suporte Nível 1.",
    image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug.Me",
    tags: ["React", "Llama AI", "Offline-first"],
    link: "https://github.com/EricFortesdaCosta/debugme-platChar"
  },
  {
    title: "Modelo de API Multifuncional",
    description: "API para centralização de dados de múltiplos sistemas e aplicação unificada para gestão de polos (EUA/BR).",
    image: "https://placehold.co/600x400/1e1e1e/ce9178?text=API+Multifuncional",
    tags: ["Java", "API REST", "Integração"],
    link: "https://github.com/EricFortesdaCosta/Api-Multifuncional-Modelo"
  },
  {
    title: "Orkestral - Plataforma de Criação e Automação de Fluxos de Serviços",
    description: "Plataforma de automação de fluxos de serviço com integração a múltiplos sistemas.",
    image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Orkestral",
    tags: ["React", "Node.js", "Integração", "Automação", "Api REST"],
    link: "https://ericfortesdacosta.github.io/Orkestral/"
  },
  {
    title: "Pro:M - Mercato Automação",
    description: "Aplicativo Mobile multi-plataforma para gestão de vendas e estoque, integrado a uma API centralizada.",
    image: "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Pro:M+-+Mercato+Automa%C3%A7%C3%A3o",
    tags: ["React Native", "TypeScript", "API REST"],
    android: "https://play.google.com/store/apps/details?id=br.com.mercatocloud.testemercato",
    ios: "https://apps.apple.com/us/app/pro-m-mercato-automa%C3%A7%C3%A3o/id6757434183"
  },
  {
    title: "+PraTI | Trilha FullStack",
    description: "(Curso) Imersão nos elementos essenciais do desenvolvimento web, cobrindo front-end e back-end.",
    image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
    tags: ["FullStack", "Web", "Training"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    date: "12/2025 - Atual Projeto",
    role: "UniFlow",
    company: "Projeto Pessoal",
    location: "Remoto",
    description: "Desenvolvimento de plataforma de automação de fluxos de trabalho com integração a múltiplos serviços (Notion, Asana, etc). Foco em alta performance e escalabilidade."
  },
  {
    date: "02/2025 - Atual",
    role: "Desenvolvedor",
    company: "Mercato Automação",
    location: "Porto Alegre - RS",
    description: "Desenvolvimento de API para centralizar dados, eliminando gargalos. Criação de app mobile/web para gestão de polos (Nashville/Canoas)."
  },
  {
    date: "01/2025",
    role: "Debug.Me",
    company: "Projeto Pessoal",
    location: "Remoto",
    description: "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Implementação de arquitetura offline-first, permitindo automação de suporte Nível 1 mesmo sem conexão à internet."
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
    date: "Em andamento (2º Modulo)",
    title: "Programa Carreira Alura - Java FullStack",
    institution: "Alura",
    description: "Foco em desenvolvimento fullstack com React e Node.js.",
    type: "course"
  },
  {
    date: "2023",
    title: "Java | POO + Projetos",
    institution: "Alura",
    description: "Curso completo de Java abrangendo POO, arrays, exceções e desenvolvimento desktop/web.",
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