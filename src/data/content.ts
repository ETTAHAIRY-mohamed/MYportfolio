/**
 * Tout le contenu du portfolio est centralisé ici.
 * Pour modifier un texte, une expérience ou un projet : éditez ce fichier.
 */
import {
  Code,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Profil                                                              */
/* ------------------------------------------------------------------ */

export const profile = {
  firstName: "Mohamed",
  lastName: "Ettahairy",
  fullName: "Ettahairy Mohamed",
  initials: "EM",
  role: "Développeur Full-Stack & Mobile",
  statusLabel: "Recherche un stage PFE",
  statusFocus: "Full-Stack & Mobile",
  intro:
    "Étudiant en Master 2 Systèmes Intelligents, Mobiles et Embarqués à l'Université de Rouen, je conçois des applications mobiles (Flutter) et des plateformes web (Spring Boot, Angular) sécurisées, performantes et soignées, de la conception au déploiement.",
  email: "ettahairy.mohamed.1@gmail.com",
  phone: "+33 7 53 89 04 03",
  phoneHref: "tel:+33753890403",
  location: "Rouen, France",
  github: "https://github.com/ETTAHAIRY-mohamed",
  githubHandle: "ETTAHAIRY-mohamed",
  linkedin: "https://www.linkedin.com/in/mohamed-ettahairy-173050336/",
  // Fichiers du dossier /public
  cv: "/cv.pdf",
  portrait: "/portrait.jpg",
  cvPreview: "/cv-preview.jpg",
} as const;

export const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "Expertise", href: "#skills" },
  { name: "Parcours", href: "#experience" },
  { name: "Projets", href: "#projects" },
  { name: "Formation", href: "#education" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: 20, suffix: "", label: "Mois d'expérience" },
  { value: 6, suffix: "", label: "Projets réalisés" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "", label: "Langues parlées" },
] as const;

export const marqueeItems = [
  "Flutter",
  "Dart",
  "Spring Boot",
  "Angular",
  "TypeScript",
  "Java",
  "Docker",
  "Firebase",
  "PostgreSQL",
  "Selenium",
  "REST API",
  "Riverpod",
  "MongoDB",
  "Jenkins",
  "Clean Architecture",
  "JWT",
] as const;

/* ------------------------------------------------------------------ */
/* Compétences                                                         */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Langages",
    icon: Code,
    items: ["Java", "Dart", "JavaScript/TypeScript", "Python", "SQL"],
  },
  {
    name: "Frameworks",
    icon: Layers,
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Batch",
      "JPA/Hibernate",
      "Angular",
      "Flutter",
    ],
  },
  {
    name: "Bases de données",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    name: "DevOps & Tests",
    icon: GitBranch,
    items: [
      "Docker",
      "Jenkins",
      "Maven",
      "Git/GitHub",
      "JUnit",
      "Mockito",
      "Selenium",
      "Postman",
    ],
  },
  {
    name: "Outils & Méthodes",
    icon: Wrench,
    items: [
      "IntelliJ",
      "Eclipse",
      "VS Code",
      "Android Studio",
      "Xcode",
      "Jira",
      "Trello",
      "Agile/Scrum",
      "UML/Merise",
    ],
  },
];

export interface Domain {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const domains: Domain[] = [
  {
    name: "Développement Mobile",
    description: "Flutter, Dart, Riverpod, Firebase",
    icon: Smartphone,
  },
  {
    name: "Développement Backend",
    description: "Spring Boot, Spring Security, API REST",
    icon: Server,
  },
  {
    name: "Développement Web",
    description: "Angular, TypeScript, Bootstrap",
    icon: Globe,
  },
  {
    name: "Tests & DevOps",
    description: "Docker, Selenium, JUnit, Jenkins",
    icon: GitBranch,
  },
];

export const languages = [
  { name: "Arabe", level: "Langue maternelle", percentage: 100 },
  { name: "Français", level: "Courant", percentage: 90 },
  { name: "Anglais", level: "Intermédiaire", percentage: 55 },
] as const;

export const interests = [
  { name: "Volleyball", icon: "🏐" },
  { name: "Running", icon: "🏃‍♂️" },
] as const;

/* ------------------------------------------------------------------ */
/* Expériences                                                         */
/* ------------------------------------------------------------------ */

export type ExperienceType = "cdi" | "internship" | "freelance";

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  year: string;
  period: string;
  type: ExperienceType;
  summary?: string;
  highlights: string[];
  technologies: string[];
}

export const experienceTypeLabel: Record<ExperienceType, string> = {
  cdi: "CDI",
  internship: "Stage PFE",
  freelance: "Freelance",
};

export const experiences: ExperienceItem[] = [
  {
    title: "Développeur Mobile",
    company: "N Digital Trust",
    location: "Maroc",
    year: "2026",
    period: "Janvier – Octobre 2026",
    type: "cdi",
    highlights: [
      "Développement d'applications mobiles cross-platform avec Flutter",
      "Intégration et consommation d'API REST",
      "Conception et implémentation d'architectures client-serveur",
      "Gestion de l'authentification et sécurisation des échanges (JWT, API sécurisées)",
      "Synchronisation des données en temps réel via API backend",
      "Collaboration avec l'équipe backend pour la conception des services REST",
      "Optimisation des performances et amélioration de l'expérience utilisateur",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Clean Architecture",
      "REST API",
      "WebSocket",
      "Firebase",
      "JWT",
      "Stripe SDK",
      "Google Sign-In",
      "Deep Links",
      "Amazon S3",
      "Git",
      "GitHub",
      "Android",
      "iOS",
      "Figma",
    ],
  },
  {
    title: "Stage PFE – Développeur Full Stack (Java / Angular)",
    company: "INDATACORE",
    location: "Maroc",
    year: "2025",
    period: "Février – Août 2025",
    type: "internship",
    summary:
      "Conception et développement d'une plateforme intelligente d'automatisation des tests web pour optimiser la qualité logicielle et réduire les coûts opérationnels.",
    highlights: [
      "Conception de jobs Spring Batch pour l'exécution planifiée et fiable de scénarios de test complexes",
      "Intégration de Selenium WebDriver pour la simulation automatisée des interactions utilisateurs",
      "Mise en place d'un système de gestion d'erreurs robuste avec alertes mail automatiques en cas d'échec",
      "Utilisation de Docker pour l'exécution isolée et reproductible des tests en conteneur",
      "Développement d'interfaces sous Angular pour la configuration dynamique des workflows et éléments de test",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Selenium",
      "Docker",
      "REST API",
      "JPA",
      "Angular",
      "TypeScript",
    ],
  },
  {
    title: "Développeur mobile freelance",
    company: "R&D EVENT",
    location: "Maroc",
    year: "2024",
    period: "Novembre 2024 – Janvier 2025",
    type: "freelance",
    summary:
      "Conception et développement d'une application mobile permettant de gérer la participation à des événements, avec une expérience utilisateur complète, fluide et interactive.",
    highlights: [
      "Invitation des participants et gestion de la liste des invités",
      "Accès aux informations essentielles de l'événement : activités, localisation, planning",
      "Intégration avec Firebase pour l'authentification, la base de données en temps réel, le stockage des médias et les notifications push",
      "Déploiement et publication sur Google Play Store et Apple App Store",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase (Auth, Firestore, Storage, Messaging)",
      "WebSocket",
      "Figma",
      "Android",
      "Swift",
      "Git",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projets                                                             */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "fullstack" | "mobile";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  status: string;
  features: string[];
  // Liens optionnels : le bouton n'apparaît que si l'URL est renseignée.
  github?: string;
  demo?: string;
}

export const projectFilters: { name: string; value: "all" | ProjectCategory }[] =
  [
    { name: "Tous", value: "all" },
    { name: "Full-Stack", value: "fullstack" },
    { name: "Mobile", value: "mobile" },
  ];

export const projectCategoryLabel: Record<ProjectCategory, string> = {
  fullstack: "Full-Stack",
  mobile: "Mobile",
};

export const projects: Project[] = [
  {
    title: "Application web de gestion de scolarité",
    description:
      "Création d'une plateforme pour la gestion des étudiants, des cours et des emplois du temps.",
    technologies: ["Spring Boot", "MySQL", "Bootstrap", "Angular"],
    category: "fullstack",
    status: "Terminé",
    features: ["Gestion des étudiants", "Gestion des cours", "Emplois du temps"],
  },
  {
    title: "Application web de gestion de stock",
    description:
      "Développement d'une solution pour la gestion des stocks et des commandes.",
    technologies: ["Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "Angular"],
    category: "fullstack",
    status: "Terminé",
    features: [
      "Gestion des stocks",
      "Gestion des commandes",
      "Interface utilisateur Thymeleaf",
    ],
  },
  {
    title: "Application web de gestion d'hôpital",
    description:
      "Intégration de la gestion des patients, des rendez-vous et des dossiers médicaux.",
    technologies: ["Spring Boot", "MongoDB", "Angular", "Bootstrap"],
    category: "fullstack",
    status: "Terminé",
    features: [
      "Gestion des patients",
      "Gestion des rendez-vous",
      "Dossiers médicaux",
    ],
  },
  {
    title: "Ebancing – Système bancaire",
    description:
      "Application bancaire offrant l'authentification sécurisée, la gestion des comptes utilisateurs et le traitement des transactions.",
    technologies: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "Hibernate",
      "RESTful APIs",
      "PostgreSQL/MySQL",
      "Angular",
    ],
    category: "fullstack",
    status: "Terminé",
    features: [
      "Authentification sécurisée",
      "Gestion des comptes utilisateurs",
      "Traitement des transactions",
    ],
  },
  {
    title: "Visualisation 3D Lunaire en AR",
    description:
      "Application de réalité augmentée permettant de visualiser des modèles 3D de la Lune avec informations détaillées.",
    technologies: [
      "Flutter",
      "Blender",
      "ARCore/ARKit",
      "model_viewer_plus",
      "webview_flutter",
    ],
    category: "mobile",
    status: "Terminé",
    features: [
      "Modèles 3D interactifs",
      "Réalité augmentée",
      "Informations détaillées",
    ],
  },
  {
    title: "Application de Voyage et Tourisme",
    description:
      "Plateforme pour l'organisation de voyages et la découverte des meilleures destinations touristiques.",
    technologies: [
      "Spring Boot",
      "Angular",
      "PostgreSQL",
      "RESTful APIs",
      "Spring Security",
    ],
    category: "fullstack",
    status: "Terminé",
    features: [
      "Découverte de destinations",
      "Organisation de voyages",
      "Authentification sécurisée",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Formation                                                           */
/* ------------------------------------------------------------------ */

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  year: string;
  status: "En cours" | "Diplômé";
  description: string;
}

export const education: EducationItem[] = [
  {
    degree: "Master 2 Systèmes Intelligents, Mobiles et Embarqués",
    institution: "Université de Rouen",
    location: "Saint-Étienne-du-Rouvray, France",
    period: "Depuis septembre 2026",
    year: "2026",
    status: "En cours",
    description: "Formation en systèmes intelligents, mobiles et embarqués.",
  },
  {
    degree: "Master Systèmes Intelligents et Mobiles",
    institution: "Université Sidi Mohammed Ben Abdellah",
    location: "Taza, Maroc",
    period: "2023 – 2025",
    year: "2023",
    status: "Diplômé",
    description:
      "Formation avancée en intelligence artificielle et développement mobile.",
  },
  {
    degree: "Filière Sciences Mathématiques et Informatique",
    institution: "Université Sultan Moulay Slimane",
    location: "Khouribga, Maroc",
    period: "2021 – 2023",
    year: "2021",
    status: "Diplômé",
    description: "Formation en mathématiques et informatique.",
  },
  {
    degree: "BAC Sciences Mathématiques A BIOF",
    institution: "Lycée Ibn Yassine",
    location: "Khouribga, Maroc",
    period: "2020",
    year: "2020",
    status: "Diplômé",
    description: "Formation en mathématiques et sciences.",
  },
];

export const certifications = [
  {
    title: "Introduction to C",
    provider: "Sololearn",
    date: "2020",
    skills: ["C Programming", "Algorithms", "Data Structures"],
  },
  {
    title: "Effective Business Websites",
    provider: "HP LIFE | HP",
    date: "2021",
    skills: ["Web Design", "Business Strategy", "UX/UI"],
  },
  {
    title: "Foundation Composer",
    provider: "SymfonyCasts",
    date: "2023",
    skills: ["PHP", "Composer", "Package Management", "Symfony"],
  },
] as const;

/* ------------------------------------------------------------------ */
/* CV                                                                  */
/* ------------------------------------------------------------------ */

export const cvFacts = [
  { label: "Profil", value: "Développeur Full-Stack & Mobile" },
  { label: "Recherche", value: "Stage de fin d'études (PFE)" },
  { label: "Formation", value: "Master 2 – Université de Rouen" },
  { label: "Dernière mission", value: "Développeur Mobile Flutter (CDI)" },
  { label: "Langues", value: "Arabe · Français · Anglais" },
  { label: "Localisation", value: "Rouen, France" },
] as const;

export const contactSubjects = [
  "Stage de fin d'études (PFE)",
  "Collaboration projet",
  "Consultation technique",
] as const;
