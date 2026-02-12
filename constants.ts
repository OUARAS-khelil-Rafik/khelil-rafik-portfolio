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
          title: "Programming Languages",
          icon: "code",
          skills: [
            { name: "C", icon: "/assets/logos-skills/c.svg", color: "#A8B9CC" },
            { name: "C++", icon: "/assets/logos-skills/cplusplus.svg", color: "#00599C" },
            { name: "Java", icon: "/assets/logos-skills/java.svg", color: "#007396" },
            { name: "Python", icon: "/assets/logos-skills/python.svg", color: "#3776AB" },
            { name: "R", icon: "/assets/logos-skills/r.svg", color: "#276DC3" },
            { name: "JavaScript", icon: "/assets/logos-skills/javascript.svg", color: "#F7DF1E" },
            { name: "TypeScript", icon: "/assets/logos-skills/typescript.svg", color: "#3178C6" },
            { name: "PHP", icon: "/assets/logos-skills/php.svg", color: "#777BB4" },
            { name: "Dart", icon: "/assets/logos-skills/dart.svg", color: "#0175C2" },
            { name: "Matlab", icon: "/assets/logos-skills/matlab.svg", color: "#0076A8" },
            { name: "LaTeX", icon: "/assets/logos-skills/latex.svg", color: "#008080" }
          ]
        },
        {
          title: "Web Technologies",
          icon: "globe",
          skills: [
            { name: "HTML5", icon: "/assets/logos-skills/html5.svg", color: "#E34F26" },
            { name: "CSS3", icon: "/assets/logos-skills/css3.svg", color: "#1572B6" },
            { name: "React", icon: "/assets/logos-skills/react.svg", color: "#61DAFB" },
            { name: "Next.js", icon: "/assets/logos-skills/nextjs.svg", color: "#000000" },
            { name: "Vue.js", icon: "/assets/logos-skills/vuejs.svg", color: "#4FC08D" },
            { name: "Three.js", icon: "/assets/logos-skills/threejs.svg", color: "#000000" },
            { name: "Node.js", icon: "/assets/logos-skills/nodejs.svg", color: "#339933" },
            { name: "Express", icon: "/assets/logos-skills/express.svg", color: "#000000" },
            { name: "Django", icon: "/assets/logos-skills/django.svg", color: "#092E20" },
            { name: "Flask", icon: "/assets/logos-skills/flask.svg", color: "#000000" },
            { name: "FastAPI", icon: "/assets/logos-skills/fastapi.svg", color: "#009688" },
            { name: "REST API", icon: "/assets/logos-skills/postman.svg", color: "#FF6C37" }
          ]
        },
        {
          title: "Development Tools",
          icon: "wrench",
          skills: [
            { name: "VS Code", icon: "/assets/logos-skills/vscode.svg", color: "#007ACC" },
            { name: "Eclipse", icon: "/assets/logos-skills/eclipse.svg", color: "#2C2255" },
            { name: "PyCharm", icon: "/assets/logos-skills/pycharm.svg", color: "#21D789" },
            { name: "RStudio", icon: "/assets/logos-skills/rstudio.svg", color: "#75AADB" },
            { name: "Spyder", icon: "/assets/logos-skills/spyder.svg", color: "#FF0000" },
            { name: "GitHub", icon: "/assets/logos-skills/github.svg", color: "#181717" },
            { name: "Git", icon: "/assets/logos-skills/git.svg", color: "#F05032" },
            { name: "Kaggle", icon: "/assets/logos-skills/kaggle.svg", color: "#20BEFF" },
            { name: "Google Colab", icon: "/assets/logos-skills/googlecolaboratory.svg", color: "#F9AB00" }
          ]
        },
        {
          title: "Data Science & AI",
          icon: "brain",
          skills: [
            { name: "TensorFlow", icon: "/assets/logos-skills/tensorflow.svg", color: "#FF6F00" },
            { name: "Keras", icon: "/assets/logos-skills/keras.svg", color: "#D00000" },
            { name: "PyTorch", icon: "/assets/logos-skills/pytorch.svg", color: "#EE4C2C" },
            { name: "Pandas", icon: "/assets/logos-skills/pandas.svg", color: "#150458" },
            { name: "NumPy", icon: "/assets/logos-skills/numpy.svg", color: "#013243" },
            { name: "Matplotlib", icon: "/assets/logos-skills/Matplotlib.svg", color: "#11557C" },
            { name: "OpenCV", icon: "/assets/logos-skills/opencv.svg", color: "#5C3EE8" },
            { name: "Librosa", icon: "/assets/logos-skills/librosa.svg", color: "#FF6F00" },
            { name: "Streamlit", icon: "/assets/logos-skills/streamlit.svg", color: "#FF4B4B" },
            { name: "Scikit-Learn", icon: "/assets/logos-skills/scikitlearn.svg", color: "#F7931E" },
            { name: "Jupyter", icon: "/assets/logos-skills/jupyter.svg", color: "#F37626" },
            { name: "Anaconda", icon: "/assets/logos-skills/anaconda.svg", color: "#44A833" }
          ]
        },
        {
          title: "Databases & Big Data",
          icon: "database",
          skills: [
            { name: "MySQL", icon: "/assets/logos-skills/mysql.svg", color: "#4479A1" },
            { name: "SQLite", icon: "/assets/logos-skills/sqlite.svg", color: "#003B57" },
            { name: "Oracle", icon: "/assets/logos-skills/oracle.svg", color: "#F80000" },
            { name: "MongoDB", icon: "/assets/logos-skills/mongodb.svg", color: "#47A248" },
            { name: "Hadoop", icon: "/assets/logos-skills/hadoop.svg", color: "#66CCFF" },
            { name: "Spark", icon: "/assets/logos-skills/spark.svg", color: "#E25A1C" }
          ]
        },
        {
          title: "Microsoft Office",
          icon: "file-text",
          skills: [
            { name: "Word", icon: "/assets/logos-skills/word.svg", color: "#2B579A" },
            { name: "Excel", icon: "/assets/logos-skills/excel.svg", color: "#21A366" },
            { name: "PowerPoint", icon: "/assets/logos-skills/powerpoint.svg", color: "#D24726" },
            { name: "Access", icon: "/assets/logos-skills/access.svg", color: "#A4373A" },
            { name: "Publisher", icon: "/assets/logos-skills/publisher.svg", color: "#077568" },
            { name: "Sway", icon: "/assets/logos-skills/sway.svg", color: "#038387" }
          ]
        },
        {
          title: "Design & Productivity",
          icon: "palette",
          skills: [
            { name: "Canva", icon: "/assets/logos-skills/canva.svg", color: "#00C4CC" },
            { name: "Photoshop", icon: "/assets/logos-skills/photoshop.svg", color: "#31A8FF" },
            { name: "Illustrator", icon: "/assets/logos-skills/illustrator.svg", color: "#FF9A00" },
            { name: "Adobe Acrobat", icon: "/assets/logos-skills/acrobat.svg", color: "#EC1C24" },
            { name: "Power BI", icon: "/assets/logos-skills/powerbi.svg", color: "#F2C811" },
            { name: "SPSS", icon: "/assets/logos-skills/spss.svg", color: "#052FAD" },
            { name: "Prezi", icon: "/assets/logos-skills/prezi.svg", color: "#3181FF" }
          ]
        },
        {
          title: "System & Modeling",
          icon: "cpu",
          skills: [
            { name: "Linux", icon: "/assets/logos-skills/linux.svg", color: "#FCC624" },
            { name: "VirtualBox", icon: "/assets/logos-skills/virtualbox.svg", color: "#183A61" },
            { name: "UML", icon: "/assets/logos-skills/uml.svg", color: "#FABD14" },
            { name: "StarUML", icon: "/assets/logos-skills/staruml.svg", color: "#E74430" },
            { name: "Cisco", icon: "/assets/logos-skills/cisco.svg", color: "#1BA0D7" },
            { name: "Overleaf", icon: "/assets/logos-skills/overleaf.svg", color: "#47A141" },
          ]
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
      phone2: "+213 662 72 56 58",
      successTitle: "Message Sent!",
      successMessage: "Thank you for reaching out. I'll get back to you shortly.",
      sendAnother: "↓ Send another message",
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
          title: "Langages de Programmation",
          icon: "code",
          skills: [
            { name: "C", icon: "/assets/logos-skills/c.svg", color: "#A8B9CC" },
            { name: "C++", icon: "/assets/logos-skills/cplusplus.svg", color: "#00599C" },
            { name: "Java", icon: "/assets/logos-skills/java.svg", color: "#007396" },
            { name: "Python", icon: "/assets/logos-skills/python.svg", color: "#3776AB" },
            { name: "R", icon: "/assets/logos-skills/r.svg", color: "#276DC3" },
            { name: "JavaScript", icon: "/assets/logos-skills/javascript.svg", color: "#F7DF1E" },
            { name: "TypeScript", icon: "/assets/logos-skills/typescript.svg", color: "#3178C6" },
            { name: "PHP", icon: "/assets/logos-skills/php.svg", color: "#777BB4" },
            { name: "Dart", icon: "/assets/logos-skills/dart.svg", color: "#0175C2" },
            { name: "Matlab", icon: "/assets/logos-skills/matlab.svg", color: "#0076A8" },
            { name: "LaTeX", icon: "/assets/logos-skills/latex.svg", color: "#008080" }
          ]
        },
        {
          title: "Technologies Web",
          icon: "globe",
          skills: [
            { name: "HTML5", icon: "/assets/logos-skills/html5.svg", color: "#E34F26" },
            { name: "CSS3", icon: "/assets/logos-skills/css3.svg", color: "#1572B6" },
            { name: "React", icon: "/assets/logos-skills/react.svg", color: "#61DAFB" },
            { name: "Next.js", icon: "/assets/logos-skills/nextjs.svg", color: "#000000" },
            { name: "Vue.js", icon: "/assets/logos-skills/vuejs.svg", color: "#4FC08D" },
            { name: "Three.js", icon: "/assets/logos-skills/threejs.svg", color: "#000000" },
            { name: "Node.js", icon: "/assets/logos-skills/nodejs.svg", color: "#339933" },
            { name: "Express", icon: "/assets/logos-skills/express.svg", color: "#000000" },
            { name: "Django", icon: "/assets/logos-skills/django.svg", color: "#092E20" },
            { name: "Flask", icon: "/assets/logos-skills/flask.svg", color: "#000000" },
            { name: "FastAPI", icon: "/assets/logos-skills/fastapi.svg", color: "#009688" },
            { name: "REST API", icon: "/assets/logos-skills/postman.svg", color: "#FF6C37" }
          ]
        },
        {
          title: "Outils de Développement",
          icon: "wrench",
          skills: [
            { name: "VS Code", icon: "/assets/logos-skills/vscode.svg", color: "#007ACC" },
            { name: "Eclipse", icon: "/assets/logos-skills/eclipse.svg", color: "#2C2255" },
            { name: "PyCharm", icon: "/assets/logos-skills/pycharm.svg", color: "#21D789" },
            { name: "RStudio", icon: "/assets/logos-skills/rstudio.svg", color: "#75AADB" },
            { name: "Spyder", icon: "/assets/logos-skills/spyder.svg", color: "#FF0000" },
            { name: "GitHub", icon: "/assets/logos-skills/github.svg", color: "#181717" },
            { name: "Git", icon: "/assets/logos-skills/git.svg", color: "#F05032" },
            { name: "Kaggle", icon: "/assets/logos-skills/kaggle.svg", color: "#20BEFF" },
            { name: "Google Colab", icon: "/assets/logos-skills/googlecolaboratory.svg", color: "#F9AB00" }
          ]
        },
        {
          title: "Science des Données & IA",
          icon: "brain",
          skills: [
            { name: "TensorFlow", icon: "/assets/logos-skills/tensorflow.svg", color: "#FF6F00" },
            { name: "Keras", icon: "/assets/logos-skills/keras.svg", color: "#D00000" },
            { name: "PyTorch", icon: "/assets/logos-skills/pytorch.svg", color: "#EE4C2C" },
            { name: "Pandas", icon: "/assets/logos-skills/pandas.svg", color: "#150458" },
            { name: "NumPy", icon: "/assets/logos-skills/numpy.svg", color: "#013243" },
            { name: "Matplotlib", icon: "/assets/logos-skills/Matplotlib.svg", color: "#11557C" },
            { name: "OpenCV", icon: "/assets/logos-skills/opencv.svg", color: "#5C3EE8" },
            { name: "Librosa", icon: "/assets/logos-skills/librosa.svg", color: "#FF6F00" },
            { name: "Streamlit", icon: "/assets/logos-skills/streamlit.svg", color: "#FF4B4B" },
            { name: "Scikit-Learn", icon: "/assets/logos-skills/scikitlearn.svg", color: "#F7931E" },
            { name: "Jupyter", icon: "/assets/logos-skills/jupyter.svg", color: "#F37626" },
            { name: "Anaconda", icon: "/assets/logos-skills/anaconda.svg", color: "#44A833" }
          ]
        },
        {
          title: "Bases de Données & Big Data",
          icon: "database",
          skills: [
            { name: "MySQL", icon: "/assets/logos-skills/mysql.svg", color: "#4479A1" },
            { name: "SQLite", icon: "/assets/logos-skills/sqlite.svg", color: "#003B57" },
            { name: "Oracle", icon: "/assets/logos-skills/oracle.svg", color: "#F80000" },
            { name: "MongoDB", icon: "/assets/logos-skills/mongodb.svg", color: "#47A248" },
            { name: "Hadoop", icon: "/assets/logos-skills/hadoop.svg", color: "#66CCFF" },
            { name: "Spark", icon: "/assets/logos-skills/spark.svg", color: "#E25A1C" }
          ]
        },
        {
          title: "Microsoft Office",
          icon: "file-text",
          skills: [
            { name: "Word", icon: "/assets/logos-skills/word.svg", color: "#2B579A" },
            { name: "Excel", icon: "/assets/logos-skills/excel.svg", color: "#21A366" },
            { name: "PowerPoint", icon: "/assets/logos-skills/powerpoint.svg", color: "#D24726" },
            { name: "Access", icon: "/assets/logos-skills/access.svg", color: "#A4373A" },
            { name: "Publisher", icon: "/assets/logos-skills/publisher.svg", color: "#077568" },
            { name: "Sway", icon: "/assets/logos-skills/sway.svg", color: "#038387" }
          ]
        },
        {
          title: "Design & Productivité",
          icon: "palette",
          skills: [
            { name: "Canva", icon: "/assets/logos-skills/canva.svg", color: "#00C4CC" },
            { name: "Photoshop", icon: "/assets/logos-skills/photoshop.svg", color: "#31A8FF" },
            { name: "Illustrator", icon: "/assets/logos-skills/illustrator.svg", color: "#FF9A00" },
            { name: "Adobe Acrobat", icon: "/assets/logos-skills/acrobat.svg", color: "#EC1C24" },
            { name: "Power BI", icon: "/assets/logos-skills/powerbi.svg", color: "#F2C811" },
            { name: "SPSS", icon: "/assets/logos-skills/spss.svg", color: "#052FAD" },
            { name: "Prezi", icon: "/assets/logos-skills/prezi.svg", color: "#3181FF" }
          ]
        },
        {
          title: "Systèmes & Modélisation",
          icon: "cpu",
          skills: [
            { name: "Linux", icon: "/assets/logos-skills/linux.svg", color: "#FCC624" },
            { name: "VirtualBox", icon: "/assets/logos-skills/virtualbox.svg", color: "#183A61" },
            { name: "UML", icon: "/assets/logos-skills/uml.svg", color: "#FABD14" },
            { name: "StarUML", icon: "/assets/logos-skills/staruml.svg", color: "#E74430" },
            { name: "Cisco", icon: "/assets/logos-skills/cisco.svg", color: "#1BA0D7" },
            { name: "Overleaf", icon: "/assets/logos-skills/overleaf.svg", color: "#47A141" },
          ]
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
      phone2: "+213 662 72 56 58",
      successTitle: "Message Envoyé !",
      successMessage: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
      sendAnother: "↓ Envoyer un autre message",
    },
    footer: {
      rights: "Tous droits réservés.",
    }
  }
};