import { ContentData } from './types';

export const GITHUB_USERNAME = 'OUARAS-khelil-Rafik';
export const EMAIL_ADDRESS = 'kikoouaras@gmail.com';
export const EMAIL_ADDRESS_2 = 'kh.ouaras@univ-alger.dz';

export const CONTENT: Record<string, ContentData> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Data Scientist & Analyst",
      subrole: "Full Stack Developer & Designer",
      description: "Combining analytical precision with creative design. I transform complex data into actionable insights and build immersive digital experiences.",
      cta: "Explore Work",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      content: "I am OUARAS Khelil Rafik, a 22-year-old Master's graduate in Data Science and Analysis. Consistently ranked among the top students, I bridge the gap between rigorous software engineering and creative design. My passion lies in solving real-world problems through data analytics, machine learning, and intuitive web development. I thrive in dynamic environments where I can innovate and deliver impactful solutions.",
    },
    experience: {
      title: "Journey",
      workTitle: "Work Experience",
      eduTitle: "Education",
      items: [
        {
          id: 'w1',
          role: 'Instructor',
          company: 'GOMYCODE, Bab Ezzouar',
          date: 'Oct 2025 - Present',
          type: 'work',
          description: [
            'Delivering instruction in Full Stack Web Dev, Data Science, and AI.',
            'Mentoring learners through intensive bootcamps and projects.',
            'Designing and facilitating hands-on training sessions.'
          ]
        },
        {
          id: 'w2',
          role: 'Instructor',
          company: 'University of Algiers 01',
          date: 'Sep 2025 - June 2026',
          type: 'work',
          description: [
            'Teaching Algorithms, Data Structures, and Mathematical Logic.',
            'Instructing Data Visualization for Master’s level students.',
            'Preparing lectures, tutorials, and evaluating performance.'
          ]
        },
        {
          id: 'w3',
          role: 'Trainee, Data Mining',
          company: 'Wataniya Telecom (Ooredoo)',
          date: 'Oct 2024 - July 2025',
          type: 'work',
          description: [
            'Assessed market position using Customer Sentiment Analysis via AI.',
            'Developed NLP pipelines for Algerian dialect.',
            'Designed interactive dashboards and an intelligent telecom chatbot.'
          ]
        },
        {
          id: 'w4',
          role: 'Trainee, Electronics Dept',
          company: 'CDTA (Advanced Technologies Dev Center)',
          date: 'Jan 2023 - May 2023',
          type: 'work',
          description: [
            'Design and Implementation of Web & Mobile Text to Braille Translator.',
            'Created "DotWise.online" platform.',
            'Gained project management and application development experience.'
          ]
        },
        {
          id: 'e1',
          role: 'Master in Computer Science (Analytics & Data Science)',
          company: 'Ben Youssef Ben Khedda University 01',
          date: 'Graduation: July 2025',
          type: 'education',
          description: [
            'Ranked 1st in specialty with excellent academic performance.',
            'Thesis: Assessment of Ooredoo’s Competitive Position using AI.',
            'Relevant Coursework: Machine Learning, Deep Learning, Big Data, Data Mining.'
          ]
        },
        {
          id: 'e2',
          role: 'Bachelor of Mathematics & Computer Science',
          company: "M'hamed Bougara University",
          date: 'Graduation: July 2023',
          type: 'education',
          description: [
            'Specialty: Computer Systems.',
            'Valedictorian (Major de promo) with 13.03/20.',
            'Thesis: DotWise.online (Grade: 18/20).'
          ]
        }
      ]
    },
    skills: {
      title: "Technical Arsenal",
      categories: [
        {
          title: "Data Science & AI",
          skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Pandas", "Matlab", "R", "Scikit-Learn"]
        },
        {
          title: "Web & Mobile Dev",
          skills: ["React JS", "Next.js", "TypeScript", "Flutter (Dart)", "Node.js", "Express", "PHP", "HTML/CSS"]
        },
        {
          title: "Databases & Big Data",
          skills: ["SQL (MySQL, Oracle, SQLite)", "NoSQL (MongoDB)", "Hadoop", "Spark", "Firebase"]
        },
        {
          title: "Design & Tools",
          skills: ["Figma/Canva", "Power BI", "Git/GitHub", "Docker", "Linux", "VS Code"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my open source contributions and personal work.",
      loading: "Fetching repositories from GitHub...",
      error: "Could not load projects. Please visit my GitHub.",
      viewAll: "View All on GitHub",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open to opportunities in Data Science and Full Stack Development.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      location: "Algiers, Algeria",
      email: "kikoouaras@gmail.com",
      phone: "+213 660 49 61 44",
    },
    footer: {
      rights: "All rights reserved.",
    }
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: "Bonjour, je suis",
      role: "Data Scientist & Analyste",
      subrole: "Développeur Full Stack & Designer",
      description: "Alliant précision analytique et design créatif. Je transforme des données complexes en insights exploitables et crée des expériences numériques immersives.",
      cta: "Voir mon travail",
      downloadCv: "Télécharger CV",
    },
    about: {
      title: "À propos de moi",
      content: "Je m'appelle OUARAS Khelil Rafik, j'ai 22 ans et je suis titulaire d'un Master en Analyse et Science des Données. Classé major de promotion, je possède une base solide en génie logiciel et une sensibilité particulière pour le design. Ma passion réside dans la résolution de problèmes concrets grâce à l'analyse de données, l'apprentissage automatique et le développement web intuitif.",
    },
    experience: {
      title: "Parcours",
      workTitle: "Expérience Professionnelle",
      eduTitle: "Éducation",
      items: [
        {
          id: 'w1',
          role: 'Formateur',
          company: 'GOMYCODE, Bab Ezzouar',
          date: 'Oct 2025 - Présent',
          type: 'work',
          description: [
            'Formation en développement Web Full Stack, Data Science et IA.',
            'Mentorat des apprenants à travers des bootcamps intensifs.',
            'Conception de sessions de formation pratiques.'
          ]
        },
        {
          id: 'w2',
          role: 'Enseignant',
          company: 'Université d\'Alger 01',
          date: 'Sep 2025 - Juin 2026',
          type: 'work',
          description: [
            'Enseignement des Algorithmes, Structures de Données et Logique Mathématique.',
            'Instruction en Visualisation de Données pour les étudiants de Master.',
            'Préparation de cours et évaluation des performances.'
          ]
        },
        {
          id: 'w3',
          role: 'Stagiaire Data Mining',
          company: 'Wataniya Telecom (Ooredoo)',
          date: 'Oct 2024 - Juil 2025',
          type: 'work',
          description: [
            'Évaluation de la position concurrentielle via l\'analyse des sentiments (IA).',
            'Développement de pipelines NLP pour le dialecte algérien.',
            'Conception de tableaux de bord interactifs et chatbot intelligent.'
          ]
        },
        {
          id: 'w4',
          role: 'Stagiaire Département Électronique',
          company: 'CDTA',
          date: 'Jan 2023 - Mai 2023',
          type: 'work',
          description: [
            'Conception d\'un traducteur Texte vers Braille Web & Mobile.',
            'Création de la plateforme "DotWise.online".',
            'Expérience en gestion de projet et travail d\'équipe.'
          ]
        },
        {
          id: 'e1',
          role: 'Master en Informatique (Analyse et Science des Données)',
          company: 'Université Ben Youssef Ben Khedda 01',
          date: 'Diplôme : Juillet 2025',
          type: 'education',
          description: [
            'Classé 1er de la spécialité avec d\'excellentes performances.',
            'Mémoire : Analyse des sentiments clients via l\'IA (Note: 17.75/20).',
            'Cours : Machine Learning, Deep Learning, Big Data.'
          ]
        },
        {
          id: 'e2',
          role: 'Licence Mathématiques et Informatique',
          company: "Université M'hamed Bougara",
          date: 'Diplôme : Juillet 2023',
          type: 'education',
          description: [
            'Spécialité : Systèmes Informatiques.',
            'Major de promotion (13.03/20).',
            'Mémoire : DotWise.online (Note: 18/20).'
          ]
        }
      ]
    },
    skills: {
      title: "Arsenal Technique",
      categories: [
        {
          title: "Data Science & IA",
          skills: ["Python", "TensorFlow", "Keras", "PyTorch", "Pandas", "Matlab", "R", "Scikit-Learn"]
        },
        {
          title: "Dév Web & Mobile",
          skills: ["React JS", "Next.js", "TypeScript", "Flutter (Dart)", "Node.js", "Express", "PHP", "HTML/CSS"]
        },
        {
          title: "Bases de Données",
          skills: ["SQL (MySQL, Oracle, SQLite)", "NoSQL (MongoDB)", "Hadoop", "Spark", "Firebase"]
        },
        {
          title: "Outils & Design",
          skills: ["Figma/Canva", "Power BI", "Git/GitHub", "Docker", "Linux", "VS Code"]
        }
      ]
    },
    projects: {
      title: "Projets Récents",
      subtitle: "Une sélection de mes contributions open source et travaux personnels.",
      loading: "Chargement des dépôts GitHub...",
      error: "Impossible de charger les projets. Visitez mon GitHub.",
      viewAll: "Voir tout sur GitHub",
    },
    contact: {
      title: "Me Contacter",
      subtitle: "Ouvert aux opportunités en Data Science et Développement Full Stack.",
      namePlaceholder: "Votre Nom",
      emailPlaceholder: "Votre Email",
      messagePlaceholder: "Votre Message",
      sendButton: "Envoyer Message",
      location: "Alger, Algérie",
      email: "kikoouaras@gmail.com",
      phone: "+213 660 49 61 44",
    },
    footer: {
      rights: "Tous droits réservés.",
    }
  }
};