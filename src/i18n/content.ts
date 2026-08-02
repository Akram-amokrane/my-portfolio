export const LOCALES = ['fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'fr';

/** Facts shared by both locales — never translated. */
export const profile = {
  name: 'Akram Amokrane',
  initials: 'AA',
  email: 'akramamokrane@outlook.fr',
  phone: '+33 7 51 49 59 75',
  phoneHref: '+33751495975',
  city: 'Lyon',
  region: 'Rhône-Alpes, France',
  legacyPortfolio: 'https://akram-amokrane.vercel.app/',
  paper: 'https://hal.science/hal-04219806v1',
  /** Drop a background-free PNG here (see scripts/remove-bg.py). */
  portrait: '/portrait.png',
};

/** Marquee / 3D tag-sphere labels — technology names stay untranslated. */
export const techTags = [
  'React', 'Rust', 'Angular', 'Tauri', 'TypeScript', 'Node.js',
  'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker',
  'Docker Compose', 'Git', 'REST API', 'WebSockets', 'Machine Learning',
  'Deep Learning', 'Neural Networks', 'Transfer Learning', 'Computer Vision',
];

type Stat = { value: string; label: string };
/** `icon` is either a key in src/icons/brands.ts or one of the outline
 *  glyphs defined in Skills.astro (api, socket, compose, brain, …). */
type Tech = { name: string; icon: string };
/** `note` is deliberately evidence, not a self-assessed level: where the
 *  category was actually used. A percentage nobody can verify says nothing. */
type SkillGroup = {
  title: string;
  accent: 'ember' | 'cyan' | 'violet';
  icon: string;
  note: string;
  skills: Tech[];
};
type Job = {
  role: string; org: string; period: string; place: string;
  current?: boolean; summary: string; points: string[]; tags: string[];
};
type Degree = { title: string; org: string; period: string; note?: string };
type Research = { kind: string; title: string; date: string; summary: string; href?: string; cta?: string };
type Lang = { name: string; level: string; value: number };

export type Content = {
  meta: { title: string; description: string; ogAlt: string };
  nav: { about: string; skills: string; work: string; research: string; contact: string; cta: string; menu: string; close: string };
  a11y: { skip: string; toggleTheme: string; switchLang: string; scrollTop: string };
  hero: {
    status: string; greeting: string; roles: string[]; tagline: string;
    ctaPrimary: string; ctaSecondary: string; scroll: string; locationLabel: string;
  };
  about: { eyebrow: string; title: string; lead: string; body: string[]; stats: Stat[] };
  skills: { eyebrow: string; title: string; lead: string; groups: SkillGroup[]; hint: string };
  work: { eyebrow: string; title: string; lead: string; jobs: Job[]; present: string };
  education: { eyebrow: string; title: string; degrees: Degree[] };
  research: { eyebrow: string; title: string; lead: string; items: Research[] };
  languages: { eyebrow: string; title: string; items: Lang[] };
  contact: {
    eyebrow: string; title: string; lead: string;
    emailLabel: string; phoneLabel: string; locationLabel: string; portfolioLabel: string;
    cta: string; copy: string; copied: string;
  };
  footer: { built: string; rights: string; backToTop: string };
};

const fr: Content = {
  meta: {
    title: 'Akram Amokrane — Développeur Full-Stack & Ingénieur IA',
    description:
      "Développeur full-stack freelance à Lyon, spécialisé en React, Rust, Machine Learning et Deep Learning. Plus de 20 projets livrés pour des clients internationaux.",
    ogAlt: 'Portfolio d’Akram Amokrane, développeur full-stack et ingénieur IA',
  },
  nav: {
    about: 'Profil', skills: 'Compétences', work: 'Parcours',
    research: 'Recherche', contact: 'Contact', cta: 'Me contacter',
    menu: 'Ouvrir le menu', close: 'Fermer le menu',
  },
  a11y: {
    skip: 'Aller au contenu principal',
    toggleTheme: 'Basculer le thème clair / sombre',
    switchLang: 'Passer en anglais',
    scrollTop: 'Revenir en haut',
  },
  hero: {
    status: 'Disponible en freelance',
    greeting: 'Bonjour, je suis',
    roles: ['Développeur Full-Stack', 'Ingénieur Machine Learning', 'Architecte Logiciel', 'Enseignant & Chercheur'],
    tagline:
      "Je conçois des applications web, mobiles et de bureau qui allient une ingénierie rigoureuse à l’intelligence artificielle appliquée.",
    ctaPrimary: 'Discutons de votre projet',
    ctaSecondary: 'Voir mon parcours',
    scroll: 'Défiler',
    locationLabel: 'Basé à Lyon, France',
  },
  about: {
    eyebrow: 'Profil',
    title: 'Du code bas niveau aux réseaux de neurones',
    lead:
      "Développeur full-stack freelance avec une expertise en React, Rust, Machine Learning et Deep Learning.",
    body: [
      "Passionné par la conception d’applications web, mobiles et de bureau, je maîtrise également la gestion de bases de données, l’architecture logicielle et l’intelligence artificielle appliquée.",
      "Depuis mars 2024, je collabore avec des clients internationaux au Canada, aux États-Unis et en Allemagne. En parallèle, j’ai encadré pendant deux ans des étudiants de L2 à M2 en génie logiciel, algorithmique et réseaux de neurones — une exigence pédagogique qui a affûté ma façon de structurer et de transmettre le code.",
      "Auteur d’un article scientifique sur la détection de la rétinopathie diabétique par apprentissage par transfert, je poursuis aujourd’hui un Master MIAGE — Ingénierie du Logiciel Web à l’Université d’Évry Paris-Saclay.",
    ],
    stats: [
      { value: '20+', label: 'Projets livrés' },
      { value: '100%', label: 'Satisfaction client' },
      { value: '4,9/5', label: 'Note moyenne' },
      { value: '3', label: 'Pays clients' },
    ],
  },
  skills: {
    eyebrow: 'Compétences',
    title: 'La stack, de l’interface au modèle',
    lead: "Une pile technique complète, du pixel au pipeline d’entraînement.",
    hint: 'Faites glisser la sphère pour explorer',
    groups: [
      {
        title: 'Front-End', accent: 'ember', icon: 'layout',
        note: 'Interfaces web, mobiles et de bureau livrées en production.',
        skills: [
          { name: 'React', icon: 'react' }, { name: 'Angular', icon: 'angular' },
          { name: 'Tauri', icon: 'tauri' }, { name: 'TypeScript', icon: 'typescript' },
        ],
      },
      {
        title: 'Back-End', accent: 'cyan', icon: 'server',
        note: 'APIs REST et temps réel, services système en Rust.',
        skills: [
          { name: 'Rust', icon: 'rust' }, { name: 'Express.js', icon: 'express' },
          { name: 'Node.js', icon: 'node' }, { name: 'REST API', icon: 'api' },
          { name: 'WebSockets', icon: 'socket' },
        ],
      },
      {
        title: 'Bases de données', accent: 'violet', icon: 'database',
        note: 'Modélisation, migrations et optimisation de requêtes.',
        skills: [
          { name: 'PostgreSQL', icon: 'postgresql' }, { name: 'MySQL', icon: 'mysql' },
          { name: 'MongoDB', icon: 'mongodb' },
        ],
      },
      {
        title: 'DevOps & Outils', accent: 'ember', icon: 'terminal',
        note: 'Environnements conteneurisés, du développement au déploiement.',
        skills: [
          { name: 'Docker', icon: 'docker' }, { name: 'Docker Compose', icon: 'compose' },
          { name: 'Git', icon: 'git' },
        ],
      },
      {
        title: 'IA & Data', accent: 'cyan', icon: 'brain',
        note: 'Article scientifique publié · enseigné de la L2 au M2.',
        skills: [
          { name: 'Machine Learning', icon: 'brain' }, { name: 'Deep Learning', icon: 'layers' },
          { name: 'Réseaux de neurones', icon: 'network' },
          { name: 'Transfer Learning', icon: 'transfer' },
        ],
      },
    ],
  },
  work: {
    eyebrow: 'Parcours',
    title: 'Expériences professionnelles',
    lead: "Du laboratoire universitaire aux livraisons client, en passant par la salle de TP.",
    present: "Aujourd’hui",
    jobs: [
      {
        role: 'Stagiaire Développeur Full-Stack', org: 'OuiActive',
        period: 'Mai 2026 — Août 2026', place: 'France', current: true,
        summary:
          "Développement et intégration de nouvelles fonctionnalités pour l’application DinoBot.",
        points: [
          "Participation à l’amélioration de l’interface utilisateur.",
          "Évolution et fiabilisation de l’API backend.",
          "Correction de bugs dans un environnement Agile.",
        ],
        tags: ['React', 'API REST', 'Agile', 'UI/UX'],
      },
      {
        role: 'Développeur Full-Stack Freelance', org: 'Indépendant',
        period: 'Mars 2024 — Aujourd’hui', place: 'Canada · États-Unis · Allemagne', current: true,
        summary:
          "Collaboration avec des clients internationaux sur des applications web, mobiles et de bureau.",
        points: [
          "Plus de 20 projets réalisés de bout en bout.",
          "Taux de satisfaction de 100 % et note moyenne de 4,9/5.",
          "Architecture, développement et déploiement conteneurisé.",
        ],
        tags: ['React', 'Rust', 'Tauri', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'Enseignant Vacataire', org: 'Université Abderrahmane Mira',
        period: 'Sep 2023 — Juillet 2025', place: 'Béjaïa, Algérie',
        summary:
          "Enseignement et encadrement des travaux pratiques pour les étudiants de L2 à M2.",
        points: [
          "Génie Logiciel, Algorithmique et Applications Mobiles.",
          "Machine Learning et Réseaux de Neurones.",
          "Systèmes d’Aide à la Décision.",
        ],
        tags: ['Machine Learning', 'Génie Logiciel', 'Algorithmique', 'Pédagogie'],
      },
    ],
  },
  education: {
    eyebrow: 'Formation',
    title: 'Cursus académique',
    degrees: [
      { title: 'Master MIAGE — Ingénierie du Logiciel Web', org: 'Université d’Évry Paris-Saclay', period: '2025 — 2026', note: 'En cours' },
      { title: 'Master en Systèmes d’Information Avancés', org: 'Université Abderrahmane Mira', period: '2022 — 2023' },
      { title: 'Licence en Systèmes d’Information', org: 'Université Abderrahmane Mira', period: '2019 — 2021' },
      { title: 'Baccalauréat', org: 'Lycée Kadi Athmane', period: '2018' },
    ],
  },
  research: {
    eyebrow: 'Recherche',
    title: 'Publication & conférence',
    lead: "L’IA appliquée à la santé, du papier à la scène.",
    items: [
      {
        kind: 'Article scientifique',
        title: 'Enhancing Diabetic Retinopathy Detection using Transfer Learning',
        date: 'Septembre 2023',
        summary:
          "Utilisation de l’apprentissage par transfert pour améliorer la détection automatisée de la rétinopathie diabétique.",
        href: profile.paper,
        cta: 'Lire sur HAL',
      },
      {
        kind: 'Conférence',
        title: 'Colloque sur les Objets et Systèmes Connectés 2023',
        date: '2023',
        summary:
          "Présentation d’un article scientifique, avec partage des résultats de recherche et échanges avec la communauté scientifique.",
      },
    ],
  },
  languages: {
    eyebrow: 'Langues',
    // The spaces before ':' '?' '%' in this dictionary are U+00A0 — French
    // typography requires a non-breaking space so the mark never wraps alone.
    title: 'Quatre langues, un seul objectif : se comprendre',
    items: [
      { name: 'Arabe', level: 'Langue maternelle', value: 100 },
      { name: 'Kabyle', level: 'Langue maternelle', value: 100 },
      { name: 'Français', level: 'TCF B2', value: 85 },
      { name: 'Anglais', level: 'Intermédiaire', value: 65 },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Construisons quelque chose ensemble',
    lead:
      "Une idée de projet, un poste à pourvoir ou simplement envie d’échanger sur Rust et le deep learning ? Ma boîte mail est ouverte.",
    emailLabel: 'E-mail', phoneLabel: 'Téléphone',
    locationLabel: 'Localisation', portfolioLabel: 'Ancien portfolio',
    cta: 'Envoyer un e-mail',
    copy: 'Copier l’adresse', copied: 'Copié !',
  },
  footer: {
    built: 'Conçu et développé avec Astro, Three.js & beaucoup de café',
    rights: 'Tous droits réservés.',
    backToTop: 'Haut de page',
  },
};

const en: Content = {
  meta: {
    title: 'Akram Amokrane — Full-Stack Developer & AI Engineer',
    description:
      'Freelance full-stack developer based in Lyon, specialising in React, Rust, Machine Learning and Deep Learning. 20+ projects delivered for international clients.',
    ogAlt: 'Portfolio of Akram Amokrane, full-stack developer and AI engineer',
  },
  nav: {
    about: 'About', skills: 'Skills', work: 'Experience',
    research: 'Research', contact: 'Contact', cta: 'Get in touch',
    menu: 'Open menu', close: 'Close menu',
  },
  a11y: {
    skip: 'Skip to main content',
    toggleTheme: 'Toggle light / dark theme',
    switchLang: 'Switch to French',
    scrollTop: 'Back to top',
  },
  hero: {
    status: 'Available for freelance',
    greeting: 'Hi, I’m',
    roles: ['Full-Stack Developer', 'Machine Learning Engineer', 'Software Architect', 'Lecturer & Researcher'],
    tagline:
      'I build web, mobile and desktop applications that pair rigorous engineering with applied artificial intelligence.',
    ctaPrimary: 'Let’s talk about your project',
    ctaSecondary: 'See my journey',
    scroll: 'Scroll',
    locationLabel: 'Based in Lyon, France',
  },
  about: {
    eyebrow: 'About',
    title: 'From low-level code to neural networks',
    lead:
      'Freelance full-stack developer with expertise in React, Rust, Machine Learning and Deep Learning.',
    body: [
      'Passionate about designing web, mobile and desktop applications, I also work across database management, software architecture and applied artificial intelligence.',
      'Since March 2024 I have worked with international clients in Canada, the United States and Germany. In parallel, I spent two years teaching undergraduate and graduate students in software engineering, algorithms and neural networks — a discipline that sharpened how I structure and explain code.',
      'I authored a scientific paper on detecting diabetic retinopathy through transfer learning, and I am currently completing an MIAGE Master’s in Web Software Engineering at Université d’Évry Paris-Saclay.',
    ],
    stats: [
      { value: '20+', label: 'Projects delivered' },
      { value: '100%', label: 'Client satisfaction' },
      { value: '4.9/5', label: 'Average rating' },
      { value: '3', label: 'Client countries' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'The stack, from interface to model',
    lead: 'A full technical stack — from the pixel to the training pipeline.',
    hint: 'Drag the sphere to explore',
    groups: [
      {
        title: 'Front-End', accent: 'ember', icon: 'layout',
        note: 'Web, mobile and desktop interfaces shipped to production.',
        skills: [
          { name: 'React', icon: 'react' }, { name: 'Angular', icon: 'angular' },
          { name: 'Tauri', icon: 'tauri' }, { name: 'TypeScript', icon: 'typescript' },
        ],
      },
      {
        title: 'Back-End', accent: 'cyan', icon: 'server',
        note: 'REST and real-time APIs, systems services in Rust.',
        skills: [
          { name: 'Rust', icon: 'rust' }, { name: 'Express.js', icon: 'express' },
          { name: 'Node.js', icon: 'node' }, { name: 'REST API', icon: 'api' },
          { name: 'WebSockets', icon: 'socket' },
        ],
      },
      {
        title: 'Databases', accent: 'violet', icon: 'database',
        note: 'Schema design, migrations and query optimisation.',
        skills: [
          { name: 'PostgreSQL', icon: 'postgresql' }, { name: 'MySQL', icon: 'mysql' },
          { name: 'MongoDB', icon: 'mongodb' },
        ],
      },
      {
        title: 'DevOps & Tooling', accent: 'ember', icon: 'terminal',
        note: 'Containerised environments, from development to deployment.',
        skills: [
          { name: 'Docker', icon: 'docker' }, { name: 'Docker Compose', icon: 'compose' },
          { name: 'Git', icon: 'git' },
        ],
      },
      {
        title: 'AI & Data', accent: 'cyan', icon: 'brain',
        note: 'Published research paper · taught at undergraduate and graduate level.',
        skills: [
          { name: 'Machine Learning', icon: 'brain' }, { name: 'Deep Learning', icon: 'layers' },
          { name: 'Neural Networks', icon: 'network' },
          { name: 'Transfer Learning', icon: 'transfer' },
        ],
      },
    ],
  },
  work: {
    eyebrow: 'Experience',
    title: 'Professional journey',
    lead: 'From the university lab to client delivery, by way of the lecture hall.',
    present: 'Present',
    jobs: [
      {
        role: 'Full-Stack Developer Intern', org: 'OuiActive',
        period: 'May 2026 — Aug 2026', place: 'France', current: true,
        summary: 'Building and integrating new features for the DinoBot application.',
        points: [
          'Contributing to user interface improvements.',
          'Extending and hardening the backend API.',
          'Fixing bugs within an Agile environment.',
        ],
        tags: ['React', 'REST API', 'Agile', 'UI/UX'],
      },
      {
        role: 'Freelance Full-Stack Developer', org: 'Self-employed',
        period: 'March 2024 — Present', place: 'Canada · USA · Germany', current: true,
        summary: 'Working with international clients on web, mobile and desktop applications.',
        points: [
          'Over 20 projects delivered end to end.',
          '100% satisfaction rate and a 4.9/5 average rating.',
          'Architecture, development and containerised deployment.',
        ],
        tags: ['React', 'Rust', 'Tauri', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'Adjunct Lecturer', org: 'Université Abderrahmane Mira',
        period: 'Sep 2023 — July 2025', place: 'Béjaïa, Algeria',
        summary: 'Teaching and supervising lab sessions for undergraduate and graduate students.',
        points: [
          'Software Engineering, Algorithms and Mobile Applications.',
          'Machine Learning and Neural Networks.',
          'Decision Support Systems.',
        ],
        tags: ['Machine Learning', 'Software Engineering', 'Algorithms', 'Teaching'],
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic background',
    degrees: [
      { title: 'MIAGE Master’s — Web Software Engineering', org: 'Université d’Évry Paris-Saclay', period: '2025 — 2026', note: 'In progress' },
      { title: 'Master’s in Advanced Information Systems', org: 'Université Abderrahmane Mira', period: '2022 — 2023' },
      { title: 'Bachelor’s in Information Systems', org: 'Université Abderrahmane Mira', period: '2019 — 2021' },
      { title: 'High School Diploma', org: 'Lycée Kadi Athmane', period: '2018' },
    ],
  },
  research: {
    eyebrow: 'Research',
    title: 'Publication & conference',
    lead: 'AI applied to healthcare — from the paper to the stage.',
    items: [
      {
        kind: 'Scientific paper',
        title: 'Enhancing Diabetic Retinopathy Detection using Transfer Learning',
        date: 'September 2023',
        summary:
          'Using transfer learning to improve automated detection of diabetic retinopathy.',
        href: profile.paper,
        cta: 'Read on HAL',
      },
      {
        kind: 'Conference',
        title: 'Colloquium on Connected Objects and Systems 2023',
        date: '2023',
        summary:
          'Presented a scientific paper, sharing research results and exchanging with the scientific community.',
      },
    ],
  },
  languages: {
    eyebrow: 'Languages',
    title: 'Four languages, one goal: understanding each other',
    items: [
      { name: 'Arabic', level: 'Native', value: 100 },
      { name: 'Kabyle', level: 'Native', value: 100 },
      { name: 'French', level: 'TCF B2', value: 85 },
      { name: 'English', level: 'Intermediate', value: 65 },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something together',
    lead:
      'A project in mind, a role to fill, or just want to talk about Rust and deep learning? My inbox is open.',
    emailLabel: 'Email', phoneLabel: 'Phone',
    locationLabel: 'Location', portfolioLabel: 'Previous portfolio',
    cta: 'Send an email',
    copy: 'Copy address', copied: 'Copied!',
  },
  footer: {
    built: 'Designed and built with Astro, Three.js & a lot of coffee',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};

export const dictionaries: Record<Locale, Content> = { fr, en };

export function useTranslations(locale: Locale): Content {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

/** Build a locale-aware href. `fr` is the un-prefixed default. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean === '/' ? '' : clean}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'fr' ? 'en' : 'fr';
}
