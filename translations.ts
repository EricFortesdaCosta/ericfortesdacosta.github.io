import { Education, Experience, Project } from './types';

export interface TranslationData {
  nav: {
    home: string;
    resume: string;
    projects: string;
    contact: string;
    workspace: string;
  };
  home: {
    statusAvailable: string;
    statusTag: string;
    tabTitle: string;
    classDoc: string[];
    roleTitle: string;
    introMsg1: string;
    introMsg2: string;
    btnProjects: string;
    btnResume: string;
    quickLinks: string;
  };
  resume: {
    downloadCv: string;
    cvUrl: string;
    experienceKey: string;
    educationKey: string;
    hardSkillsKey: string;
    aiToolsKey: string;
    softSkillsKey: string;
    techComment: string;
    experiences: Experience[];
    educations: Education[];
    softSkills: string[];
  };
  projects: {
    titleTab: string;
    comment: string;
    btnCode: string;
    btnAndroid: string;
    btnIos: string;
    footerMore: string;
    items: Project[];
  };
  contact: {
    header: string;
    comment: string;
    initMsg1: string;
    initMsg2: string;
  };
  footer: {
    branch: string;
    encoding: string;
    localeLabel: string;
  };
}

export const TRANSLATIONS: Record<'pt' | 'en' | 'es', TranslationData> = {
  pt: {
    nav: {
      home: "home",
      resume: "resume",
      projects: "projects",
      contact: "contact",
      workspace: "ERIC_FORTES.workspace",
    },
    home: {
      statusAvailable: "DISPONÍVEL PARA TRABALHO",
      statusTag: "#OpenForOpportunities",
      tabTitle: "intro.java",
      classDoc: [
        "Analista de Sistemas & Desenvolvedor Backend.",
        "ERP Protheus, APIs REST, Microsserviços e Engenharia com IA."
      ],
      roleTitle: "Analista de Sistemas & Desenvolvedor Java",
      introMsg1: "Olá! Sou Analista de Sistemas & Desenvolvedor Java.",
      introMsg2: "Construo integrações, automações e software escalável.",
      btnProjects: "viewProjects();",
      btnResume: "viewResume();",
      quickLinks: "LINKS RÁPIDOS",
    },
    resume: {
      downloadCv: "Download CV",
      cvUrl: "https://drive.google.com/uc?export=download&id=1DgfAgu7rKJgCxrjqf-lBtznQH61YmR7K",
      experienceKey: "experience",
      educationKey: "education",
      hardSkillsKey: "hardSkills",
      aiToolsKey: "aiTools",
      softSkillsKey: "softSkills",
      techComment: "// Stack & Ferramentas",
      experiences: [
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
      ],
      educations: [
        {
          date: "Em andamento (6º Semestre)",
          title: "Análise e Desenvolvimento de Sistemas",
          institution: "Universidade do Vale do Rio dos Sinos - Unisinos",
          description: "Foco em arquitetura de software, desenvolvimento Java, banco de dados relacionais e governança de TI.",
          type: "graduation"
        },
        {
          date: "Concluído",
          title: "Imersão Engenharia de Software com IA",
          institution: "Alura",
          description: "Aprofundamento no ciclo de desenvolvimento ágil potencializado por Inteligência Artificial: engenharia de prompts, agentes de IA, revisão automatizada, geração de código e refatoração com IA generativa.",
          type: "course"
        },
        {
          date: "Em andamento",
          title: "Programa Carreira Alura - Java FullStack",
          institution: "Alura",
          description: "Desenvolvimento com Java, Spring Boot, JPA/Hibernate, criação de APIs RESTful e integração com front-end.",
          type: "course"
        },
        {
          date: "2023",
          title: "Java | POO + Projetos",
          institution: "Alura",
          description: "Curso intensivo de Java cobrindo Programação Orientada a Objetos, coleções, tratamento de exceções e projetos práticos.",
          type: "course"
        }
      ],
      softSkills: [
        "Trabalho em Equipe / Colaboração",
        "Resolução de Problemas",
        "Pensamento Crítico",
        "Gestão de Tempo",
        "Aprendizado Contínuo",
        "Adaptabilidade",
        "Criatividade",
        "Ética Profissional",
        "Atenção aos Detalhes"
      ]
    },
    projects: {
      titleTab: "projects.ts",
      comment: "// Lista de projetos implementados",
      btnCode: "Ver Código/Demo",
      btnAndroid: "Android",
      btnIos: "iOS",
      footerMore: "Mais projetos disponíveis em",
      items: [
        {
          title: "Debug.Me - Assistente de Suporte Nível 1",
          description: "Aplicação de suporte inteligente integrando modelo de IA Llama localmente. Arquitetura offline-first para automação de suporte Nível 1 sem depender de conexão externa.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug.Me+AI",
          tags: ["React", "Llama AI", "Ollama", "Offline-first"],
          link: "https://github.com/EricFortesdaCosta/debugme-platChar"
        },
        {
          title: "Modelo de API Multifuncional",
          description: "API REST para centralização de dados de múltiplos sistemas legados e unificação para gestão de polos (EUA e Brasil).",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=API+Multifuncional",
          tags: ["Java", "Spring Boot", "API REST", "Integração"],
          link: "https://github.com/EricFortesdaCosta/Api-Multifuncional-Modelo"
        },
        {
          title: "Projeto PIX Backend Java",
          description: "Mecanismo de integração e processamento de pagamentos PIX com Java, aplicando regras de negócio, validações e comunicação com APIs financeiras.",
          image: "https://placehold.co/600x400/1e1e1e/4ec9b0?text=Projeto+PIX+Java",
          tags: ["Java", "Spring Boot", "PIX", "Fintech", "API REST"],
          link: "https://github.com/EricFortesdaCosta/Projeto-PIX-JAVA"
        },
        {
          title: "Orkestral - Plataforma de Automação de Fluxos",
          description: "Plataforma de criação e orquestração de fluxos de serviços automatizados com integração a múltiplos sistemas terceiros.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Orkestral",
          tags: ["React", "Node.js", "TypeScript", "Automação", "API REST"],
          link: "https://ericfortesdacosta.github.io/Orkestral/"
        },
        {
          title: "Pro:M - Mercato Automação",
          description: "Aplicativo Mobile multi-plataforma para gestão de vendas, estoque e planejamento dos polos de Nashville (EUA) e Canoas, integrado a API centralizada.",
          image: "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Pro:M+-+Mercato+Automa%C3%A7%C3%A3o",
          tags: ["React Native", "TypeScript", "Mobile", "API REST"],
          android: "https://play.google.com/store/apps/details?id=br.com.mercatocloud.testemercato",
          ios: "https://apps.apple.com/us/app/pro-m-mercato-automa%C3%A7%C3%A3o/id6757434183"
        },
        {
          title: "NFC-Manager (Automação Fiscal XML)",
          description: "Aplicação para automação de conferência e gerenciamento de arquivos fiscais XML e códigos de barras, acelerando rotinas operacionais.",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=NFC+Manager+Python",
          tags: ["Python", "Pandas", "Automação", "XML"],
          link: "https://github.com/EricFortesdaCosta/NFC-manager"
        },
        {
          title: "+PraTI | Trilha FullStack",
          description: "Imersão nos elementos essenciais do desenvolvimento web moderno, cobrindo arquitetura front-end e back-end.",
          image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
          tags: ["FullStack", "Web", "Training"]
        }
      ]
    },
    contact: {
      header: "bash - user@eric-portfolio",
      comment: "# Iniciar processo de contato",
      initMsg1: "Initializing communication channels...",
      initMsg2: "Done.",
    },
    footer: {
      branch: "main*",
      encoding: "UTF-8",
      localeLabel: "pt-BR",
    }
  },

  en: {
    nav: {
      home: "home",
      resume: "resume",
      projects: "projects",
      contact: "contact",
      workspace: "ERIC_FORTES.workspace",
    },
    home: {
      statusAvailable: "AVAILABLE TO WORK",
      statusTag: "#OpenForOpportunities",
      tabTitle: "intro.java",
      classDoc: [
        "Systems Analyst & Backend Developer.",
        "Protheus ERP, REST APIs, Microservices, and AI-assisted Engineering."
      ],
      roleTitle: "Systems Analyst & Java Developer",
      introMsg1: "Hello! I am a Systems Analyst & Java Developer.",
      introMsg2: "I build enterprise integrations, automations, and scalable software.",
      btnProjects: "viewProjects();",
      btnResume: "viewResume();",
      quickLinks: "QUICK LINKS",
    },
    resume: {
      downloadCv: "Download CV",
      cvUrl: "https://drive.google.com/uc?export=download&id=1SSRwfidjkCNmHiXNhjwIB16iP3o5Qq0n",
      experienceKey: "experience",
      educationKey: "education",
      hardSkillsKey: "hardSkills",
      aiToolsKey: "aiTools",
      softSkillsKey: "softSkills",
      techComment: "// Stack & Tooling",
      experiences: [
        {
          date: "04/2026 - 10/2026",
          role: "Systems Analyst L1",
          company: "Tholz - Wellness Evolution",
          location: "Campo Bom - Brazil",
          description:
            "Systems analyst performing customizations and updates on the Protheus ERP system (TOTVS), ADVPL development, SQL database maintenance, and production bug resolutions.",
        },
        {
          date: "03/2025 - 04/2026",
          role: "Junior IT Assistant / Developer",
          company: "Mercato Automação",
          location: "Porto Alegre - Brazil",
          description:
            "Built and published unified mobile/web application (React Native) for operational management of hubs in Nashville (USA) and Canoas (Brazil). Developed REST APIs to centralize data flows.",
        },
        {
          date: "12/2025 - 09/2026",
          role: "Developer (UniFlow)",
          company: "Personal Project",
          location: "Remote",
          description:
            "Engineered workflow automation platform integrated with multiple productivity services (Notion, Asana). Built with high performance and scalability in mind.",
        },
        {
          date: "01/2025",
          role: "Developer (Debug.Me)",
          company: "Personal Project",
          location: "Remote",
          description:
            "Intelligent customer support app integrating local Llama AI model. Designed offline-first architecture for automated Level 1 support without cloud reliance.",
        },
        {
          date: "01/2023 - 03/2024",
          role: "Python Developer (Freelance)",
          company: "Tintas Killing",
          location: "Novo Hamburgo - Brazil",
          description:
            "Desktop application for automated inventory control using Python (Tkinter & Pandas). Implemented barcode scanning system, replacing manual spreadsheets and saving 4 hours per audit.",
        },
      ],
      educations: [
        {
          date: "In progress (6th Semester)",
          title: "B.S. in Systems Analysis and Development",
          institution: "Unisinos University",
          description: "Focus on software architecture, Java development, relational databases, and IT governance.",
          type: "graduation"
        },
        {
          date: "Completed",
          title: "AI Software Engineering Immersion",
          institution: "Alura",
          description: "Deep dive into AI-assisted modern software engineering: prompt engineering, autonomous AI agents, automated testing, code review, and generative refactoring.",
          type: "course"
        },
        {
          date: "In progress",
          title: "Alura Career Track - Java FullStack",
          institution: "Alura",
          description: "Enterprise Java development with Spring Boot, JPA/Hibernate, building production RESTful APIs, and frontend integration.",
          type: "course"
        },
        {
          date: "2023",
          title: "Java | OOP + Practical Projects",
          institution: "Alura",
          description: "Comprehensive Java course covering Object-Oriented Programming, collections, exception handling, and enterprise project fundamentals.",
          type: "course"
        }
      ],
      softSkills: [
        "Teamwork / Collaboration",
        "Problem Solving",
        "Critical Thinking",
        "Time Management",
        "Continuous Learning",
        "Adaptability",
        "Creativity",
        "Professional Ethics",
        "Attention to Detail"
      ]
    },
    projects: {
      titleTab: "projects.ts",
      comment: "// List of implemented projects",
      btnCode: "View Code/Demo",
      btnAndroid: "Android",
      btnIos: "iOS",
      footerMore: "More projects available at",
      items: [
        {
          title: "Debug.Me - Level 1 AI Support Assistant",
          description: "Intelligent support application integrating local Llama AI model. Offline-first architecture for Level 1 support automation without external internet dependency.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug.Me+AI",
          tags: ["React", "Llama AI", "Ollama", "Offline-first"],
          link: "https://github.com/EricFortesdaCosta/debugme-platChar"
        },
        {
          title: "Multifunctional API Architecture",
          description: "Centralized REST API for connecting multiple legacy corporate systems and unifying hub management across the USA and Brazil.",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=Multifunctional+API",
          tags: ["Java", "Spring Boot", "REST API", "Integration"],
          link: "https://github.com/EricFortesdaCosta/Api-Multifuncional-Modelo"
        },
        {
          title: "PIX Java Backend Engine",
          description: "PIX payment processing and integration engine built with Java, implementing financial business rules, validations, and banking API communication.",
          image: "https://placehold.co/600x400/1e1e1e/4ec9b0?text=PIX+Java+Backend",
          tags: ["Java", "Spring Boot", "PIX", "Fintech", "REST API"],
          link: "https://github.com/EricFortesdaCosta/Projeto-PIX-JAVA"
        },
        {
          title: "Orkestral - Workflow Automation Platform",
          description: "Service workflow creation and automation orchestration platform with third-party system integrations.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Orkestral",
          tags: ["React", "Node.js", "TypeScript", "Automation", "REST API"],
          link: "https://ericfortesdacosta.github.io/Orkestral/"
        },
        {
          title: "Pro:M - Mercato Automação",
          description: "Cross-platform mobile app for sales, inventory, and planning across Nashville (USA) and Canoas hubs, integrated with a centralized API.",
          image: "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Pro:M+-+Mercato+Automa%C3%A7%C3%A3o",
          tags: ["React Native", "TypeScript", "Mobile", "REST API"],
          android: "https://play.google.com/store/apps/details?id=br.com.mercatocloud.testemercato",
          ios: "https://apps.apple.com/us/app/pro-m-mercato-automa%C3%A7%C3%A3o/id6757434183"
        },
        {
          title: "NFC-Manager (Fiscal XML Automation)",
          description: "Application for automating XML fiscal invoice verification and barcode management, accelerating operational routines.",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=NFC+Manager+Python",
          tags: ["Python", "Pandas", "Automation", "XML"],
          link: "https://github.com/EricFortesdaCosta/NFC-manager"
        },
        {
          title: "+PraTI | FullStack Track",
          description: "Immersion program covering modern web development fundamentals across front-end and back-end architectures.",
          image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
          tags: ["FullStack", "Web", "Training"]
        }
      ]
    },
    contact: {
      header: "bash - user@eric-portfolio",
      comment: "# Initialize contact process",
      initMsg1: "Initializing communication channels...",
      initMsg2: "Done.",
    },
    footer: {
      branch: "main*",
      encoding: "UTF-8",
      localeLabel: "en-US",
    }
  },

  es: {
    nav: {
      home: "home",
      resume: "resume",
      projects: "projects",
      contact: "contact",
      workspace: "ERIC_FORTES.workspace",
    },
    home: {
      statusAvailable: "DISPONIBLE PARA TRABAJAR",
      statusTag: "#OpenForOpportunities",
      tabTitle: "intro.java",
      classDoc: [
        "Analista de Sistemas & Desarrollador Backend.",
        "ERP Protheus, APIs REST, Microservicios e Ingeniería con IA."
      ],
      roleTitle: "Analista de Sistemas & Desarrollador Java",
      introMsg1: "¡Hola! Soy Analista de Sistemas & Desarrollador Java.",
      introMsg2: "Construyo integraciones empresariales, automatizaciones y software escalable.",
      btnProjects: "viewProjects();",
      btnResume: "viewResume();",
      quickLinks: "ENLACES RÁPIDOS",
    },
    resume: {
      downloadCv: "Descargar CV",
      cvUrl: "https://drive.google.com/uc?export=download&id=1SSRwfidjkCNmHiXNhjwIB16iP3o5Qq0n",
      experienceKey: "experience",
      educationKey: "education",
      hardSkillsKey: "hardSkills",
      aiToolsKey: "aiTools",
      softSkillsKey: "softSkills",
      techComment: "// Stack & Herramientas",
      experiences: [
        {
          date: "04/2026 - 10/2026",
          role: "Analista de Sistemas N1",
          company: "Tholz - Wellness Evolution",
          location: "Campo Bom - Brasil",
          description:
            "Actuación como analista de sistemas realizando personalizaciones y actualizaciones en el sistema Protheus (ERP TOTVS), desarrollo en lenguaje ADVPL, mantenimiento de bases de datos SQL y corrección de incidencias en producción.",
        },
        {
          date: "03/2025 - 04/2026",
          role: "Auxiliar de TI Junior / Desarrollador",
          company: "Mercato Automação",
          location: "Porto Alegre - Brasil",
          description:
            "Creación y publicación de aplicación móvil/web unificada (React Native) para la gestión de los centros de Nashville (EE. UU.) y Canoas (Brasil). Desarrollo de API REST para centralizar flujos y datos.",
        },
        {
          date: "12/2025 - 09/2026",
          role: "Desarrollador (UniFlow)",
          company: "Proyecto Personal",
          location: "Remoto",
          description:
            "Desarrollo de plataforma de automatización de flujos de trabajo con integración a múltiples servicios (Notion, Asana). Enfoque en alto rendimiento y escalabilidad.",
        },
        {
          date: "01/2025",
          role: "Desarrollador (Debug.Me)",
          company: "Proyecto Personal",
          location: "Remoto",
          description:
            "Aplicación de soporte inteligente con modelo de IA Llama integrado localmente. Arquitectura offline-first para automatización de soporte Nivel 1 sin depender de conexión a internet.",
        },
        {
          date: "01/2023 - 03/2024",
          role: "Desarrollador Python (Freelance)",
          company: "Tintas Killing",
          location: "Novo Hamburgo - Brasil",
          description:
            "Desarrollo de aplicación de escritorio para automatización de control de inventario utilizando Python (Tkinter y Pandas). Implementación de lectura automática de códigos de barra, optimizando el flujo y ahorrando 4h por inventario.",
        },
      ],
      educations: [
        {
          date: "En curso (6º Semestre)",
          title: "Análisis y Desarrollo de Sistemas",
          institution: "Universidad do Vale do Rio dos Sinos - Unisinos",
          description: "Enfoque en arquitectura de software, desarrollo Java, bases de datos relacionales y gobierno de TI.",
          type: "graduation"
        },
        {
          date: "Completado",
          title: "Inmersión en Ingeniería de Software con IA",
          institution: "Alura",
          description: "Profundización en el ciclo de desarrollo ágil potenciado por Inteligencia Artificial: ingeniería de prompts, agentes de IA, revisión automatizada, generación de código y refactorización con IA generativa.",
          type: "course"
        },
        {
          date: "En curso",
          title: "Programa de Carrera Alura - Java FullStack",
          institution: "Alura",
          description: "Desarrollo con Java, Spring Boot, JPA/Hibernate, creación de APIs RESTful e integración con front-end moderno.",
          type: "course"
        },
        {
          date: "2023",
          title: "Java | POO + Proyectos Prácticos",
          institution: "Alura",
          description: "Curso intensivo de Java cubriendo Programación Orientada a Objetos, colecciones, manejo de excepciones y proyectos prácticos.",
          type: "course"
        }
      ],
      softSkills: [
        "Trabajo en Equipo / Colaboración",
        "Resolución de Problemas",
        "Pensamiento Crítico",
        "Gestión del Tiempo",
        "Aprendizaje Continuo",
        "Adaptabilidad",
        "Creatividad",
        "Ética Profesional",
        "Atención a los Detalles"
      ]
    },
    projects: {
      titleTab: "projects.ts",
      comment: "// Lista de proyectos implementados",
      btnCode: "Ver Código/Demo",
      btnAndroid: "Android",
      btnIos: "iOS",
      footerMore: "Más proyectos disponibles en",
      items: [
        {
          title: "Debug.Me - Asistente de Soporte Nivel 1",
          description: "Aplicación de soporte inteligente que integra el modelo de IA Llama localmente. Arquitectura offline-first para automatización de soporte Nivel 1 sin depender de conexión externa.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Debug.Me+AI",
          tags: ["React", "Llama AI", "Ollama", "Offline-first"],
          link: "https://github.com/EricFortesdaCosta/debugme-platChar"
        },
        {
          title: "Modelo de API Multifuncional",
          description: "API REST para centralizar datos de múltiples sistemas heredados y unificar la gestión de centros (EE. UU. y Brasil).",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=API+Multifuncional",
          tags: ["Java", "Spring Boot", "API REST", "Integración"],
          link: "https://github.com/EricFortesdaCosta/Api-Multifuncional-Modelo"
        },
        {
          title: "Proyecto PIX Backend Java",
          description: "Motor de integración y procesamiento de pagos PIX con Java, aplicando reglas de negocio, validaciones y comunicación con APIs financieras.",
          image: "https://placehold.co/600x400/1e1e1e/4ec9b0?text=Proyecto+PIX+Java",
          tags: ["Java", "Spring Boot", "PIX", "Fintech", "API REST"],
          link: "https://github.com/EricFortesdaCosta/Projeto-PIX-JAVA"
        },
        {
          title: "Orkestral - Plataforma de Automatización de Flujos",
          description: "Plataforma de creación y orquestación de flujos de servicio automatizados con integración a múltiples sistemas de terceros.",
          image: "https://placehold.co/600x400/1e1e1e/569cd6?text=Orkestral",
          tags: ["React", "Node.js", "TypeScript", "Automatización", "API REST"],
          link: "https://ericfortesdacosta.github.io/Orkestral/"
        },
        {
          title: "Pro:M - Mercato Automação",
          description: "Aplicación móvil multiplataforma para gestión de ventas, inventario y planificación de los centros de Nashville (EE. UU.) y Canoas, integrada a API centralizada.",
          image: "https://placehold.co/600x400/1e1e1e/dcdcaa?text=Pro:M+-+Mercato+Automa%C3%A7%C3%A3o",
          tags: ["React Native", "TypeScript", "Mobile", "API REST"],
          android: "https://play.google.com/store/apps/details?id=br.com.mercatocloud.testemercato",
          ios: "https://apps.apple.com/us/app/pro-m-mercato-automa%C3%A7%C3%A3o/id6757434183"
        },
        {
          title: "NFC-Manager (Automatización Fiscal XML)",
          description: "Aplicación para automatización de verificación y gestión de archivos fiscales XML y códigos de barras, acelerando rutinas operativas.",
          image: "https://placehold.co/600x400/1e1e1e/ce9178?text=NFC+Manager+Python",
          tags: ["Python", "Pandas", "Automatización", "XML"],
          link: "https://github.com/EricFortesdaCosta/NFC-manager"
        },
        {
          title: "+PraTI | Ruta FullStack",
          description: "Inmersión en los fundamentos del desarrollo web moderno, cubriendo arquitectura front-end y back-end.",
          image: "https://placehold.co/600x400/1e1e1e/c586c0?text=%2BpraTi",
          tags: ["FullStack", "Web", "Training"]
        }
      ]
    },
    contact: {
      header: "bash - user@eric-portfolio",
      comment: "# Iniciar proceso de contacto",
      initMsg1: "Initializing communication channels...",
      initMsg2: "Done.",
    },
    footer: {
      branch: "main*",
      encoding: "UTF-8",
      localeLabel: "es-ES",
    }
  }
};
