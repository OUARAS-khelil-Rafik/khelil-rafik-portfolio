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
      content: "My name is OUARAS Khelil Rafik, I am 23 years old and hold a Master’s degree in Data Science and Analysis in Computer Science. Consistently ranked among the top students in my program, I have been recognized for academic excellence and have built a strong foundation in software engineering, supported by substantial hands-on experience through real-world projects.\nMy skill set spans multiple programming languages and technologies, with a sharp eye for design and a strong interest in data analytics. I am highly motivated to contribute to innovative, forward-thinking projects and thrive in dynamic, collaborative tech environments where I can grow professionally while delivering impactful solutions.",
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
          company: 'Ben Youssef Ben Khedda University of Algiers 01',
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
          company: 'Ben Youssef Ben Khedda University of Algiers 01',
          date: 'Graduation: July 2025',
          type: 'education',
          description: [
            'Ranked 1st in specialty with excellent academic performance.',
            "Thesis: Assessment of Ooredoo's Competitive Position using AI.",
            'Relevant Coursework: Machine Learning, Deep Learning, Big Data, Data Mining.',
            'Developed a script for OCR image processing tailored to Arabic characters and submitted a conference paper titled "Bridging the Gap: Fusing CNNs and Transformers to Decode the Elegance of Handwritten Arabic Script".',
            'Developed a medical imaging script titled "HEMORRHAGE AI: Transforming Intracranial Hemorrhage Diagnosis with Machine Learning and Deep Learning".',
            'Developed a web application for sentiment analysis of Arabic tweets named "IHSAS (إحساس)," accompanied by a scientific article.'
          ]
        },
        {
          id: 'e2',
          role: 'Bachelor of Mathematics & Computer Science',
          company: "M'hamed Bougara University of Boumerdes",
          date: 'Graduation: July 2023',
          type: 'education',
          description: [
            'Specialty: Computer Systems.',
            'Published a scientific paper related to the thesis and presented it at conferences.'
          ]
        },
        {
          id: 'e3',
          role: 'Baccalaureate of Mathematics',
          company: 'Mohamed Lamine Dabaghine High School, The Eucalyptus, Algiers',
          date: 'Graduation: September 2020',
          type: 'education',
          description: [
            'Earned the Honors distinction for consistently strong performance in the Mathematics Baccalaureate.',
            'Maintained a steady position among the top students throughout the academic journey.',
            'Recognized for excellence in various math competitions, demonstrating strong problem-solving and analytical skills.'
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
      content: "Je m'appelle OUARAS Khelil Rafik, j'ai 23 ans et je suis titulaire d'un Master en Informatique, spécialité Science et Analyse de Données. Constamment classé parmi les meilleurs de ma promotion, j'ai bâti une solide expertise en génie logiciel, renforcée par une expérience significative sur des projets concrets.\nMes compétences allient maîtrise technique, analyse de données et sensibilité au design. Passionné par l'innovation, je m'épanouis dans des environnements dynamiques et collaboratifs où je peux évoluer professionnellement tout en apportant des solutions à fort impact.",
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
          company: 'Université Ben Youssef Ben Khedda d\'Alger 01',
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
          company: 'Université Ben Youssef Ben Khedda d\'Alger 01',
          date: 'Diplôme : Juillet 2025',
          type: 'education',
          description: [
            'Classé 1er de la spécialité avec d\'excellentes performances.',
            "Mémoire : Évaluation de la position concurrentielle d'Ooredoo via l'IA.",
            'Cours : Machine Learning, Deep Learning, Big Data, Data Mining.',
            'Développement d\'un script de traitement OCR d\'images adapté aux caractères arabes et soumission d\'un article de conférence intitulé "Bridging the Gap: Fusing CNNs and Transformers to Decode the Elegance of Handwritten Arabic Script".',
            'Développement d\'un script d\'imagerie médicale intitulé "HEMORRHAGE AI: Transforming Intracranial Hemorrhage Diagnosis with Machine Learning and Deep Learning".',
            'Développement d\'une application web d\'analyse de sentiments des tweets arabes nommée "IHSAS (إحساس)", accompagnée d\'un article scientifique.'
          ]
        },
        {
          id: 'e2',
          role: 'Licence Mathématiques et Informatique',
          company: "Université M'hamed Bougara de Boumerdès",
          date: 'Diplôme : Juillet 2023',
          type: 'education',
          description: [
            'Spécialité : Systèmes Informatiques.',
            'Publication d\'un article scientifique lié au mémoire et présentation lors de conférences.'
          ]
        },
        {
          id: 'e3',
          role: 'Baccalauréat Mathématiques',
          company: 'Lycée Mohamed Lamine Dabaghine, Les Eucalyptus, Alger',
          date: 'Diplôme : Septembre 2020',
          type: 'education',
          description: [
            'Obtention de la mention Honorable pour des performances constantes au Baccalauréat Mathématiques.',
            'Maintien d\'une position stable parmi les meilleurs étudiants tout au long du parcours académique.',
            'Reconnu pour l\'excellence dans diverses compétitions mathématiques, démontrant de solides compétences en résolution de problèmes et en analyse.'
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