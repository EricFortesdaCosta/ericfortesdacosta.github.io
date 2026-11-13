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
    title: "Debug.Me - Assistente de Suporte Nível 1",
    description:
      "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Arquitetura offline-first para automação de suporte Nível 1 sem depender de conexão externa.",
    image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug.Me+AI",
    tags: ["React", "Llama AI", "Ollama", "Offline-first"],
    link: "https://github.com/EricFortesdaCosta/debugme-platChar",
  },
  {
    title: "Modelo de API Multifuncional",
    description:
      "API REST para centralização de dados de múltiplos sistemas legados e unificação para gestão de polos (EUA e Brasil).",
    image: "https://placehold.co/600x400/1e1e1e/ce9178?text=API+Multifuncional",
    tags: ["Java", "Spring Boot", "API REST", "Integração"],
    link: "https://github.com/EricFortesdaCosta/Api-Multifuncional-Modelo",
  },
  {
    title: "Projeto PIX Backend Java",
    description:
      "Mecanismo de integração e processamento de pagamentos PIX com Java, aplicando regras de negócio, validações e comunicação com APIs financeiras.",
    image: "https://placehold.co/600x400/1e1e1e/4ec9b0?text=Projeto+PIX+Java",
    tags: ["Java", "Spring Boot", "PIX", "Fintech", "API REST"],
    link: "https://github.com/EricFortesdaCosta/Projeto-PIX-JAVA",
  },
  {
    title: "Orkestral - Plataforma de Automação de Fluxos",
    description:
      "Plataforma de criação e orquestração de fluxos de serviços automatizados com integração a múltiplos sistemas terceiros.",
    image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Orkestral",
    tags: ["React", "Node.js", "TypeScript", "Automação", "API REST"],
    link: "https://ericfortesdacosta.github.io/Orkestral/",
  },
  {
    title: "Pro:M - Mercato Automação",
    description:
      "Aplicativo Mobile multi-plataforma para gestão de vendas, estoque e planejamento dos polos de Nashville (EUA) e Canoas, integrado a API centralizada.",
    image:
      "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Pro:M+-+Mercato+Automa%C3%A7%C3%A3o",
    tags: ["React Native", "TypeScript", "Mobile", "API REST"],
    android:
      "https://play.google.com/store/apps/details?id=br.com.mercatocloud.testemercato",
    ios: "https://apps.apple.com/us/app/pro-m-mercato-automa%C3%A7%C3%A3o/id6757434183",
  },
  {
    title: "NFC-Manager (Automação Fiscal XML)",
    description:
      "Aplicação para automação de conferência e gerenciamento de arquivos fiscais XML e códigos de barras, acelerando rotinas operacionais.",
    image: "https://placehold.co/600x400/1e1e1e/ce9178?text=NFC+Manager+Python",
    tags: ["Python", "Pandas", "Automação", "XML"],
    link: "https://github.com/EricFortesdaCosta/NFC-manager",
  },
  {
    title: "+PraTI | Trilha FullStack",
    description:
      "Imersão nos elementos essenciais do desenvolvimento web moderno, cobrindo arquitetura front-end e back-end.",
    image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
    tags: ["FullStack", "Web", "Training"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    date: "04/2026 - 10/2026",
    role: "Analista de Sistemas N1",
    company: "Tholz - Wellness Evolution",
    location: "Campo Bom - RS",
    description:
      "Atuação como analista de sistemas realizando customizações e atualizações no sistema Protheus (ERP TOTVS), desenvolvimento em linguagem ADVPL, manutenção de banco de dados SQL e correção de bugs.",
  },
  {
    date: "03/2025 - 04/2026",
    role: "Auxiliar de T.I Junior / Desenvolvedor",
    company: "Mercato Automação",
    location: "Porto Alegre - RS",
    description:
      "Criação e publicação de aplicação mobile/web unificada (React Native) para a gestão dos polos de Nashville (EUA) e Canoas (BR). Desenvolvimento de API REST para centralizar fluxos e dados.",
  },
  {
    date: "12/2025 - 09/2026",
    role: "Desenvolvedor (UniFlow)",
    company: "Projeto Pessoal",
    location: "Remoto",
    description:
      "Desenvolvimento de plataforma de automação de fluxos de trabalho com integração a múltiplos serviços (Notion, Asana). Foco em alta performance e escalabilidade.",
  },
  {
    date: "01/2025",
    role: "Desenvolvedor (Debug.Me)",
    company: "Projeto Pessoal",
    location: "Remoto",
    description:
      "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Implementação de arquitetura offline-first para automação de suporte Nível 1.",
  },
  {
    date: "01/2023 - 03/2024",
    role: "Desenvolvedor Python (Freelancer)",
    company: "Tintas Killing",
    location: "Novo Hamburgo - RS",
    description:
      "Desenvolvimento de aplicação desktop para automação de controle de estoque utilizando Python (Tkinter e Pandas). Implementação de leitura automática por código de barras, otimizando o fluxo e reduzindo em 4h o inventário.",
  },
];

export const EDUCATIONS: Education[] = [
  {
    date: "Em andamento (6º Semestre)",
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade do Vale do Rio dos Sinos - Unisinos",
    description:
      "Foco em arquitetura de software, desenvolvimento Java, banco de dados relacionais e governança de TI.",
    type: "graduation",
  },
  {
    date: "Concluído",
    title: "Imersão Engenharia de Software com IA",
    institution: "Alura",
    description:
      "Aprofundamento no ciclo de desenvolvimento ágil potencializado por Inteligência Artificial: engenharia de prompts, agentes de IA, revisão automatizada, geração de código e refatoração com IA generativa.",
    type: "course",
  },
  {
    date: "Em andamento",
    title: "Programa Carreira Alura - Java FullStack",
    institution: "Alura",
    description:
      "Desenvolvimento com Java, Spring Boot, JPA/Hibernate, criação de APIs RESTful e integração com front-end.",
    type: "course",
  },
  {
    date: "2023",
    title: "Java | POO + Projetos",
    institution: "Alura",
    description:
      "Curso intensivo de Java cobrindo Programação Orientada a Objetos, coleções, tratamento de exceções e projetos práticos.",
    type: "course",
  },
];

export const SOFT_SKILLS = [
  "Trabalho em Equipe / Colaboração",
  "Resolução de Problemas",
  "Pensamento Crítico",
  "Gestão de Tempo",
  "Aprendizado Contínuo",
  "Adaptabilidade",
  "Criatividade",
  "Ética Profissional",
  "Atenção aos Detalhes",
];

export const HARD_SKILLS = [
  "Java",
  "Spring Boot",
  "JPA / Hibernate",
  "JAX-RS",
  "API REST",
  "ADVPL",
  "Protheus TOTVS",
  "Microsoft SQL Server",
  "MySQL",
  "MariaDB",
  "Supabase",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Python",
  "Pandas",
  "Tkinter",
  "Docker",
  "Kubernetes",
  "Git & GitHub",
];

export const AI_TOOLS = [
  "Gemini",
  "Claude",
  "ChatGPT",
  "GitHub Copilot",
  "Cursor / Antigravity",
  "Ollama (Llama local)",
  "DeepSeek",
];