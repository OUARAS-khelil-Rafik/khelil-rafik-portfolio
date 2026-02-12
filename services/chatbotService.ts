export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Detect if message is French
function isFrench(msg: string): boolean {
  const lower = msg.toLowerCase();
  return /[àâäéèêëïîôùûüÿç]/.test(msg) || 
    lower.includes('bonjour') || lower.includes('comment') || 
    lower.includes('quoi') || lower.includes('qui') ||
    lower.includes('quel') || lower.includes('salut') ||
    lower.includes('merci') || lower.includes('où') ||
    lower.includes('parle') || lower.includes('formation');
}

// Suggestions for follow-up
const SUGGESTIONS = {
  en: {
    skills: "💡 *Try asking:* `What are your skills?` or `What technologies do you use?`",
    education: "💡 *Try asking:* `What's your education?` or `Where did you study?`",
    experience: "💡 *Try asking:* `Where do you work?` or `What's your experience?`",
    projects: "💡 *Try asking:* `What projects have you built?`",
    contact: "💡 *Try asking:* `How can I contact you?`",
    about: "💡 *Try asking:* `Who are you?` or `Tell me about yourself`"
  },
  fr: {
    skills: "💡 *Essayez:* `Quelles sont tes compétences?` ou `Quelles technologies utilises-tu?`",
    education: "💡 *Essayez:* `Quelle est ta formation?` ou `Où as-tu étudié?`",
    experience: "💡 *Essayez:* `Où travailles-tu?` ou `Quelle est ton expérience?`",
    projects: "💡 *Essayez:* `Quels projets as-tu réalisés?`",
    contact: "💡 *Essayez:* `Comment te contacter?`",
    about: "💡 *Essayez:* `Qui es-tu?` ou `Parle-moi de toi`"
  }
};

function getRandomSuggestions(exclude: string[], fr: boolean): string {
  const lang = fr ? SUGGESTIONS.fr : SUGGESTIONS.en;
  const keys = Object.keys(lang).filter(k => !exclude.includes(k));
  const selected = keys.sort(() => Math.random() - 0.5).slice(0, 2);
  return selected.map(k => lang[k as keyof typeof lang]).join('\n');
}

function getResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  const fr = isFrench(message);

  // === GREETING ===
  if (lower.match(/^(hi|hello|hey|salut|bonjour|bonsoir|coucou|yo)/)) {
    if (fr) {
      return `## Bonjour! 👋

Je suis l'assistant virtuel de **Khelil Rafik**. Je peux vous renseigner sur:

+ 🎓 Sa **formation** et diplômes
+ 💼 Son **expérience** professionnelle  
+ 💻 Ses **compétences** techniques
+ 🚀 Ses **projets** réalisés
+ 📬 Ses **coordonnées**

---
${getRandomSuggestions([], fr)}`;
    }
    return `## Hello! 👋

I'm **Khelil Rafik's** virtual assistant. I can tell you about:

+ 🎓 His **education** and degrees
+ 💼 His **work experience**
+ 💻 His **technical skills**
+ 🚀 His **projects**
+ 📬 His **contact info**

---
${getRandomSuggestions([], fr)}`;
  }

  // === NAME ===
  if (lower.includes('name') || lower.includes('call') || lower.includes('who are you') ||
      lower.includes('nom') || lower.includes('appel') || lower.includes('t\'appelle')) {
    if (fr) {
      return `## 👤 Nom

Son nom complet est **OUARAS Khelil Rafik**.

- 🎂 **Âge:** 23 ans
- 📍 **Localisation:** Alger, Algérie
- 💼 **Rôle:** Data Scientist & Full Stack Developer

---
${getRandomSuggestions(['about'], fr)}`;
    }
    return `## 👤 Name

His full name is **OUARAS Khelil Rafik**.

- 🎂 **Age:** 23 years old
- 📍 **Location:** Algiers, Algeria
- 💼 **Role:** Data Scientist & Full Stack Developer

---
${getRandomSuggestions(['about'], fr)}`;
  }

  // === AGE ===
  if (lower.includes('age') || lower.includes('old') || lower.includes('ans') || lower.includes('né')) {
    if (fr) {
      return `## 🎂 Âge

**Khelil Rafik** a **23 ans**.

---
${getRandomSuggestions(['about'], fr)}`;
    }
    return `## 🎂 Age

**Khelil Rafik** is **23 years old**.

---
${getRandomSuggestions(['about'], fr)}`;
  }

  // === LOCATION ===
  if (lower.includes('where') || lower.includes('live') || lower.includes('location') || 
      lower.includes('city') || lower.includes('country') || lower.includes('from') ||
      lower.includes('où') || lower.includes('habite') || lower.includes('ville') || 
      lower.includes('pays') || lower.includes('viens')) {
    if (fr) {
      return `## 📍 Localisation

**Khelil Rafik** vit à **Alger, Algérie**.

---
${getRandomSuggestions(['about', 'contact'], fr)}`;
    }
    return `## 📍 Location

**Khelil Rafik** lives in **Algiers, Algeria**.

---
${getRandomSuggestions(['about', 'contact'], fr)}`;
  }

  // === CONTACT ===
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || 
      lower.includes('reach') || lower.includes('mail') || lower.includes('number') ||
      lower.includes('téléphone') || lower.includes('joindre') || lower.includes('contacter') ||
      lower.includes('numéro') || lower.includes('appeler')) {
    if (fr) {
      return `## 📬 Coordonnées

Vous pouvez contacter **Khelil Rafik** via:

| Canal | Information |
|-------|-------------|
| 📧 **Email** | [kikoouaras@gmail.com](mailto:kikoouaras@gmail.com) |
| 📧 **Email Univ.** | [kh.ouaras@univ-alger.dz](mailto:kh.ouaras@univ-alger.dz) |
| 📱 **Téléphone** | [+213 660 49 61 44](tel:+213660496144) |
| 📱 **Téléphone 2** | [+213 662 72 56 58](tel:+213662725658) |
| 🔗 **GitHub** | [OUARAS-khelil-Rafik](https://github.com/OUARAS-khelil-Rafik) |
| 📍 **Localisation** | Alger, Algérie |

---
${getRandomSuggestions(['contact'], fr)}`;
    }
    return `## 📬 Contact Information

You can reach **Khelil Rafik** through:

| Channel | Info |
|---------|------|
| 📧 **Email** | [kikoouaras@gmail.com](mailto:kikoouaras@gmail.com) |
| 📧 **University Email** | [kh.ouaras@univ-alger.dz](mailto:kh.ouaras@univ-alger.dz) |
| 📱 **Phone** | [+213 660 49 61 44](tel:+213660496144) |
| 📱 **Phone 2** | [+213 662 72 56 58](tel:+213662725658) |
| 🔗 **GitHub** | [OUARAS-khelil-Rafik](https://github.com/OUARAS-khelil-Rafik) |
| 📍 **Location** | Algiers, Algeria |

---
${getRandomSuggestions(['contact'], fr)}`;
  }

  // === SKILLS ===
  if (lower.includes('skill') || lower.includes('compétence') || lower.includes('technolog') ||
      lower.includes('programming') || lower.includes('language') || lower.includes('know') ||
      lower.includes('can do') || lower.includes('capable') || lower.includes('sait') ||
      lower.includes('maîtrise') || lower.includes('langage') || lower.includes('outils')) {
    if (fr) {
      return `## 💻 Compétences Techniques

### Programmation
\`Python\` \`JavaScript\` \`TypeScript\` \`Java\` \`C++\` \`R\` \`PHP\` \`Dart\`

### Développement Web
\`React\` \`Next.js\` \`Vue.js\` \`Node.js\` \`Express\` \`Django\` \`Flask\` \`FastAPI\`

### IA & Data Science
\`TensorFlow\` \`PyTorch\` \`Keras\` \`Pandas\` \`NumPy\` \`Scikit-Learn\` \`OpenCV\`

### Bases de Données
\`MySQL\` \`MongoDB\` \`PostgreSQL\` \`Hadoop\` \`Spark\`

### Design & Outils
\`Photoshop\` \`Illustrator\` \`Power BI\` \`Figma\` \`Git\` \`Docker\`

---
${getRandomSuggestions(['skills'], fr)}`;
    }
    return `## 💻 Technical Skills

### Programming Languages
\`Python\` \`JavaScript\` \`TypeScript\` \`Java\` \`C++\` \`R\` \`PHP\` \`Dart\`

### Web Development
\`React\` \`Next.js\` \`Vue.js\` \`Node.js\` \`Express\` \`Django\` \`Flask\` \`FastAPI\`

### AI & Data Science
\`TensorFlow\` \`PyTorch\` \`Keras\` \`Pandas\` \`NumPy\` \`Scikit-Learn\` \`OpenCV\`

### Databases
\`MySQL\` \`MongoDB\` \`PostgreSQL\` \`Hadoop\` \`Spark\`

### Design & Tools
\`Photoshop\` \`Illustrator\` \`Power BI\` \`Figma\` \`Git\` \`Docker\`

---
${getRandomSuggestions(['skills'], fr)}`;
  }

  // === ABOUT / WHO ===
  if (lower.includes('who') || lower.includes('about') || lower.includes('tell me') ||
      lower.includes('introduce') || lower.includes('yourself') || lower.includes('présent') ||
      lower.includes('parle') || lower.includes('qui es') || lower.includes('propos')) {
    if (fr) {
      return `## 👨‍💻 À Propos de Khelil Rafik

**OUARAS Khelil Rafik**, 23 ans, originaire d'**Algérie**.

### Profil
> Data Scientist & Analyst | Full Stack Developer | Designer

### Points Forts
- 🥇 **1er de promotion** en Master Data Science
- 🎓 Diplômé de l'**Université d'Alger 01**
- 👨‍🏫 **Instructeur** chez GOMYCODE & Université d'Alger
- 🔬 Expérience en **NLP** et **analyse de sentiments**
- 🌐 Créateur de [DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/)

### Passion
Transformer les données complexes en solutions innovantes et créer des expériences numériques impactantes.

---
${getRandomSuggestions(['about'], fr)}`;
    }
    return `## 👨‍💻 About Khelil Rafik

**OUARAS Khelil Rafik**, 23 years old, from **Algeria**.

### Profile
> Data Scientist & Analyst | Full Stack Developer | Designer

### Highlights
- 🥇 **Ranked 1st** in Master's Data Science program
- 🎓 Graduate of **University of Algiers 01**
- 👨‍🏫 **Instructor** at GOMYCODE & University of Algiers
- 🔬 Experience in **NLP** and **sentiment analysis**
- 🌐 Creator of [DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/)

### Passion
Transforming complex data into innovative solutions and building impactful digital experiences.

---
${getRandomSuggestions(['about'], fr)}`;
  }

  // === EXPERIENCE ===
  if (lower.includes('experience') || lower.includes('work') || lower.includes('job') ||
      lower.includes('career') || lower.includes('employ') || lower.includes('company') ||
      lower.includes('travail') || lower.includes('expérience') || lower.includes('carrière') ||
      lower.includes('entreprise') || lower.includes('boulot')) {
    if (fr) {
      return `## 💼 Expérience Professionnelle

### 🎓 Instructeur — GOMYCODE
*Oct 2025 - Présent* | Bab Ezzouar, Alger
- Enseignement: Full Stack Web Dev, Data Science, IA
- Mentorat d'apprenants en bootcamps intensifs

### 🎓 Enseignant — Université d'Alger 01
*Sep 2025 - Juin 2026*
- Cours: Algorithmes, Structures de données, Logique Mathématique
- Visualisation de données pour Master

### 📊 Stagiaire Data Mining — Ooredoo
*Oct 2024 - Juil 2025* | Wataniya Telecom
- Analyse de sentiments clients via IA
- Pipelines NLP pour le dialecte algérien
- Dashboards interactifs & chatbot télécom

### 🔬 Stagiaire — CDTA
*Jan 2023 - Mai 2023* | Centre de Développement des Technologies Avancées
- Création de [DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/) — Traducteur Braille
- Application Web & Mobile

---
${getRandomSuggestions(['experience'], fr)}`;
    }
    return `## 💼 Work Experience

### 🎓 Instructor — GOMYCODE
*Oct 2025 - Present* | Bab Ezzouar, Algiers
- Teaching: Full Stack Web Dev, Data Science, AI
- Mentoring learners through intensive bootcamps

### 🎓 Instructor — University of Algiers 01
*Sep 2025 - June 2026*
- Courses: Algorithms, Data Structures, Mathematical Logic
- Data Visualization for Master's students

### 📊 Data Mining Trainee — Ooredoo
*Oct 2024 - July 2025* | Wataniya Telecom
- Customer Sentiment Analysis via AI
- NLP pipelines for Algerian dialect
- Interactive dashboards & telecom chatbot

### 🔬 Trainee — CDTA
*Jan 2023 - May 2023* | Advanced Technologies Development Center
- Created [DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/) — Braille Translator
- Web & Mobile Application

---
${getRandomSuggestions(['experience'], fr)}`;
  }

  // === EDUCATION ===
  if (lower.includes('education') || lower.includes('study') || lower.includes('degree') ||
      lower.includes('university') || lower.includes('school') || lower.includes('diploma') ||
      lower.includes('bachelor') || lower.includes('master') || lower.includes('graduate') ||
      lower.includes('études') || lower.includes('diplôme') || lower.includes('université') ||
      lower.includes('licence') || lower.includes('formation') || lower.includes('étudié')) {
    if (fr) {
      return `## 🎓 Formation Académique

### 🥇 Master en Science des Données
**Université d'Alger 01** — *Juillet 2025*
- **Rang:** 1er de promotion
- **Mémoire:** Évaluation de la Position Concurrentielle d'Ooredoo via l'IA
- **Cours:** Machine Learning, Deep Learning, Big Data, Data Mining

### 📚 Licence Maths & Informatique
**Université M'hamed Bougara, Boumerdès** — *Juillet 2023*
- **Spécialité:** Systèmes Informatiques
- **Distinction:** Publication scientifique & présentations en conférences

### 📖 Baccalauréat Mathématiques
**Lycée Mohamed Lamine Dabaghine, Alger** — *Septembre 2020*
- **Mention:** Honorable
- Top en compétitions mathématiques

---
${getRandomSuggestions(['education'], fr)}`;
    }
    return `## 🎓 Education

### 🥇 Master in Data Science & Analytics
**University of Algiers 01** — *July 2025*
- **Rank:** 1st in specialty
- **Thesis:** Assessment of Ooredoo's Competitive Position using AI
- **Coursework:** Machine Learning, Deep Learning, Big Data, Data Mining

### 📚 Bachelor in Mathematics & Computer Science
**M'hamed Bougara University, Boumerdes** — *July 2023*
- **Specialty:** Computer Systems
- **Achievement:** Published scientific paper & conference presentations

### 📖 Baccalaureate in Mathematics
**Mohamed Lamine Dabaghine High School, Algiers** — *September 2020*
- **Distinction:** Honors
- Top performer in math competitions

---
${getRandomSuggestions(['education'], fr)}`;
  }

  // === PROJECTS ===
  if (lower.includes('project') || lower.includes('built') || lower.includes('create') ||
      lower.includes('portfolio') || lower.includes('made') || lower.includes('develop') ||
      lower.includes('projet') || lower.includes('créé') || lower.includes('réalis') ||
      lower.includes('construit') || lower.includes('application')) {
    if (fr) {
      return `## 🚀 Projets

### 🔤 DotWise.online
> Traducteur de Texte vers Braille
- 🌐 **Web & Mobile**
- 🔗 [Visiter DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/)
- Technologies: React, Node.js, API REST

### 📊 Analyse de Sentiments Clients
> Projet pour Ooredoo
- 🤖 Analyse basée sur l'IA
- 📈 Dashboards interactifs
- Technologies: Python, TensorFlow, NLP

### 🗣️ Pipelines NLP
> Traitement du Dialecte Algérien
- 🇩🇿 Dédié au dialecte local
- 🔬 Recherche académique
- Technologies: Python, spaCy, Transformers

### 🤖 Chatbot Télécom Intelligent
> Assistant IA pour opérateur
- 💬 Support client automatisé
- 🧠 Compréhension du langage naturel

### 📈 Dashboards Interactifs
> Visualisation de données
- 📊 Power BI & Streamlit
- 🎯 Insights business

---
${getRandomSuggestions(['projects'], fr)}`;
    }
    return `## 🚀 Projects

### 🔤 DotWise.online
> Text to Braille Translator
- 🌐 **Web & Mobile Application**
- 🔗 [Visit DotWise.online](https://dotwise-jk4yz203f-jamelsyh.vercel.app/)
- Technologies: React, Node.js, REST API

### 📊 Customer Sentiment Analysis
> Project for Ooredoo
- 🤖 AI-powered analysis
- 📈 Interactive dashboards
- Technologies: Python, TensorFlow, NLP

### 🗣️ NLP Pipelines
> Processing Algerian Dialect
- 🇩🇿 Dedicated to local dialect
- 🔬 Academic research
- Technologies: Python, spaCy, Transformers

### 🤖 Intelligent Telecom Chatbot
> AI Assistant for telecom operator
- 💬 Automated customer support
- 🧠 Natural language understanding

### 📈 Interactive Dashboards
> Data Visualization
- 📊 Power BI & Streamlit
- 🎯 Business insights

---
${getRandomSuggestions(['projects'], fr)}`;
  }

  // === GITHUB ===
  if (lower.includes('github') || lower.includes('repository') || lower.includes('repo') ||
      lower.includes('code') || lower.includes('source') || lower.includes('git')) {
    if (fr) {
      return `## 🔗 GitHub

Retrouvez le code et les projets de Khelil sur GitHub:

**→ [github.com/OUARAS-khelil-Rafik](https://github.com/OUARAS-khelil-Rafik)**

Vous y trouverez:
- 📂 Projets open source
- 💻 Exemples de code
- 🔬 Travaux de recherche

---
${getRandomSuggestions(['projects', 'skills'], fr)}`;
    }
    return `## 🔗 GitHub

Find Khelil's code and projects on GitHub:

**→ [github.com/OUARAS-khelil-Rafik](https://github.com/OUARAS-khelil-Rafik)**

You'll find:
- 📂 Open source projects
- 💻 Code samples
- 🔬 Research work

---
${getRandomSuggestions(['projects', 'skills'], fr)}`;
  }

  // === CV / RESUME ===
  if (lower.includes('cv') || lower.includes('resume') || lower.includes('curriculum') || lower.includes('download')) {
    if (fr) {
      return `## 📄 CV / Curriculum Vitae

Vous pouvez télécharger le CV de **Khelil Rafik** en cliquant sur le bouton **"Télécharger CV"** sur la page d'accueil du portfolio.

Le CV contient:
- ✅ Formation complète
- ✅ Expériences professionnelles
- ✅ Compétences techniques
- ✅ Projets réalisés
- ✅ Coordonnées

---
${getRandomSuggestions(['contact', 'experience'], fr)}`;
    }
    return `## 📄 CV / Resume

You can download **Khelil Rafik's** CV by clicking the **"Download CV"** button on the portfolio homepage.

The CV includes:
- ✅ Complete education
- ✅ Work experience
- ✅ Technical skills
- ✅ Projects
- ✅ Contact information

---
${getRandomSuggestions(['contact', 'experience'], fr)}`;
  }

  // === ROLE / JOB TITLE ===
  if (lower.includes('role') || lower.includes('title') || lower.includes('do you do') ||
      lower.includes('profession') || lower.includes('métier') || lower.includes('poste') ||
      lower.includes('fait dans la vie') || lower.includes('occupation')) {
    if (fr) {
      return `## 💼 Rôle Actuel

**Khelil Rafik** est:

> **Data Scientist & Analyst** | **Full Stack Developer** | **Designer**

### Postes Actuels
- 🎓 **Instructeur** chez GOMYCODE
- 👨‍🏫 **Enseignant** à l'Université d'Alger 01

### Domaines d'Expertise
- 📊 Science des données & Analytics
- 🤖 Intelligence Artificielle & Machine Learning
- 🌐 Développement Web Full Stack
- 🎨 Design UI/UX

---
${getRandomSuggestions(['experience', 'skills'], fr)}`;
    }
    return `## 💼 Current Role

**Khelil Rafik** is a:

> **Data Scientist & Analyst** | **Full Stack Developer** | **Designer**

### Current Positions
- 🎓 **Instructor** at GOMYCODE
- 👨‍🏫 **Instructor** at University of Algiers 01

### Areas of Expertise
- 📊 Data Science & Analytics
- 🤖 Artificial Intelligence & Machine Learning
- 🌐 Full Stack Web Development
- 🎨 UI/UX Design

---
${getRandomSuggestions(['experience', 'skills'], fr)}`;
  }

  // === THANK YOU ===
  if (lower.match(/(thank|merci|thx|thanks)/)) {
    if (fr) {
      return `## 😊 De rien!

Ravi d'avoir pu vous aider! N'hésitez pas si vous avez d'autres questions sur **Khelil Rafik**.

---
${getRandomSuggestions([], fr)}`;
    }
    return `## 😊 You're welcome!

Happy to help! Feel free to ask if you have more questions about **Khelil Rafik**.

---
${getRandomSuggestions([], fr)}`;
  }

  // === HELP ===
  if (lower.includes('help') || lower.includes('aide') || lower === '?' || lower.includes('what can')) {
    if (fr) {
      return `## ❓ Aide

Je peux répondre aux questions sur **Khelil Rafik**:

| Sujet | Exemples de questions |
|-------|----------------------|
| 👤 **Identité** | "C'est qui?" "Quel âge?" |
| 💻 **Compétences** | "Quelles technologies?" |
| 🎓 **Formation** | "Où a-t-il étudié?" |
| 💼 **Expérience** | "Où travaille-t-il?" |
| 🚀 **Projets** | "Quels projets?" |
| 📬 **Contact** | "Comment le contacter?" |
| 🔗 **GitHub** | "Lien GitHub?" |

---
${getRandomSuggestions([], fr)}`;
    }
    return `## ❓ Help

I can answer questions about **Khelil Rafik**:

| Topic | Example Questions |
|-------|-------------------|
| 👤 **Identity** | "Who is he?" "How old?" |
| 💻 **Skills** | "What technologies?" |
| 🎓 **Education** | "Where did he study?" |
| 💼 **Experience** | "Where does he work?" |
| 🚀 **Projects** | "What projects?" |
| 📬 **Contact** | "How to contact?" |
| 🔗 **GitHub** | "GitHub link?" |

---
${getRandomSuggestions([], fr)}`;
  }

  // === DEFAULT / UNRECOGNIZED ===
  if (fr) {
    return `## 🤔 Je n'ai pas compris

Je suis spécialisé dans les informations sur **Khelil Rafik**.

### Ce que je peux vous dire:
- 👤 Son **nom** et son **âge**
- 💻 Ses **compétences** techniques
- 🎓 Sa **formation** académique
- 💼 Son **expérience** professionnelle
- 🚀 Ses **projets** réalisés
- 📬 Ses **coordonnées**

---
${getRandomSuggestions([], fr)}`;
  }
  return `## 🤔 I didn't understand

I specialize in information about **Khelil Rafik**.

### What I can tell you:
- 👤 His **name** and **age**
- 💻 His technical **skills**
- 🎓 His **education**
- 💼 His work **experience**
- 🚀 His **projects**
- 📬 His **contact info**

---
${getRandomSuggestions([], fr)}`;
}

export async function sendMessage(userMessage: string, _conversationHistory: Message[]): Promise<string> {
  return getResponse(userMessage);
}
