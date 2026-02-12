# 👨‍💻 Khelil Rafik's Portfolio

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.182.0-000000?style=flat-square&logo=three.js)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Latest-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](./LICENSE)

A stunning, interactive portfolio website showcasing expertise in **Data Science**, **Full Stack Development**, and **UI/UX Design**. Built with cutting-edge technologies and immersive 3D visualizations.

[🌐 View Live Demo](https://ouaras-khelil-rafik-portfolio.vercel.app/) • [📧 Get in Touch](https://ouaras-khelil-rafik-portfolio.vercel.app/#contact) • [📄 Download CV](https://ouaras-khelil-rafik-portfolio.vercel.app/#)

</div>

---

## ✨ Highlights

> **Data Scientist & Full Stack Developer** | Transforming complex data into actionable insights while building immersive digital experiences

- 📊 **Data Science & Analytics** - Extracting insights from complex datasets
- 💻 **Full Stack Development** - Creating seamless, responsive applications
- 🎨 **UI/UX Design** - Crafting beautiful, intuitive interfaces
- 🎓 **Master's Degree** - Data Science and Analysis in Computer Science
- 🚀 **Instructor** - Teaching Full Stack Dev, Data Science, and AI at GOMYCODE

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Customization](#customization)
- [Performance](#performance)
- [Contributing](#contributing)
- [Contact](#contact)

---

## 🎯 Features

### 🌟 Core Features

| Feature | Description |
|---------|-------------|
| **3D Background** | Animated Vanta.js background with smooth particle effects |
| **Smooth Animations** | Framer Motion for fluid page transitions and element animations |
| **Interactive Hero** | Engaging landing section with call-to-action buttons |
| **Multi-Language Support** | English & French language toggle |
| **Dark/Light Mode** | Full theme support with persistent user preference |
| **Custom Cursor** | Unique custom cursor experience throughout |
| **Responsive Design** | Perfect layout on mobile, tablet, and desktop |
| **Chatbot Integration** | AI-powered chatbot for visitor interaction |
| **Email Integration** | Direct contact form with EmailJS |
| **GitHub Integration** | Real-time GitHub profile & project data fetching |

### 🎨 Interactive Sections

- **Hero** - Captivating introduction with scroll animations
- **About** - Professional background and achievements
- **Experience** - Work history and educational timeline
- **Skills** - Categorized technical skill badges
- **Projects** - Showcase of notable projects with details
- **Contact** - Multi-channel contact options and form
- **Footer** - Social media links and credits

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.4** - Modern UI library with hooks
- **TypeScript 5.8.2** - Static typing for JavaScript
- **Vite 6.2.0** - Lightning-fast build tool

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion 12.33.0** - Advanced animation library
- **Lucide React** - Beautiful icon library

### 3D & Visualization
- **Three.js 0.182.0** - 3D graphics library
- **React Three Fiber 9.5.0** - React renderer for Three.js
- **React Three Drei 10.7.7** - Useful helpers for R3F
- **React Three Rapier 2.2.0** - Physics engine
- **Vanta.js** - Animated background patterns

### Utilities
- **EmailJS 4.4.1** - Email service integration
- **React Icons 5.5.0** - Icon library
- **Meshline 3.3.1** - 3D line rendering

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/OUARAS-khelil-Rafik/khelil-rafik-portfolio.git
   cd khelil-rafik-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   Then open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
khelil-rafik-portfolio/
├── 📄 App.tsx                 # Main application component
├── 📄 index.tsx               # React entry point
├── 📄 index.html              # HTML template
├── 📄 constants.ts            # Constants & content data
├── 📄 types.ts                # TypeScript type definitions
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 vite.config.ts          # Vite configuration
├── 📄 package.json            # Dependencies & scripts
│
├── 📁 components/             # React components
│   ├── Navbar.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx              # About section
│   ├── Experience.tsx         # Experience timeline
│   ├── Skills.tsx             # Skills showcase
│   ├── Projects.tsx           # Projects gallery
│   ├── Contact.tsx            # Contact form
│   ├── Footer.tsx             # Footer section
│   ├── ChatBot.tsx            # AI chatbot
│   ├── VantaBackground.tsx    # 3D background
│   ├── CustomCursor.tsx       # Custom cursor effect
│   ├── Badge3D.tsx            # 3D badge component
│   ├── BubbleCarousel.tsx     # Carousel component
│   └── ScrollZoomWrapper.tsx  # Scroll animation wrapper
│
├── 📁 context/                # React context providers
│   ├── ThemeContext.tsx       # Dark/light mode
│   └── LanguageContext.tsx    # Language selection
│
├── 📁 hooks/                  # Custom React hooks
│   └── useScrollZoom.ts       # Scroll zoom animation hook
│
├── 📁 services/               # External integrations
│   ├── emailService.ts        # EmailJS service
│   ├── chatbotService.ts      # Chatbot integration
│   └── githubService.ts       # GitHub API service
│
├── 📁 public/                 # Static assets
│   └── assets/
│       ├── 3d/                # 3D model files
│       ├── logos-skills/      # Technology logos
│       └── CV/                # Resume files
│
└── 📁 src/                    # Source configuration
    └── vite-env.d.ts         # Vite type definitions
```

---

## 🧩 Components Overview

### Layout Components
- **Navbar** - Responsive header with language switcher and theme toggle
- **Footer** - Social links and copyright information
- **ScrollZoomWrapper** - Scroll-triggered zoom animations

### Section Components
- **Hero** - Eye-catching landing section with CTA buttons
- **About** - Professional bio and achievements
- **Experience** - Interactive timeline with work & education
- **Skills** - Skill categories with badge display
- **Projects** - Project cards with detailed information
- **Contact** - Contact form with validation

### Interactive Components
- **CustomCursor** - Unique cursor with hover effects
- **VantaBackground** - Animated particle background
- **ChatBot** - AI conversation interface
- **Badge3D** - 3D skill badges
- **BubbleCarousel** - Animated carousel

---

## 🎨 Customization

### Update Content
Edit [constants.ts](constants.ts) to update:
- Personal information
- Experience entries
- Skills and projects
- Contact details
- Content translations

### Modify Theme
Customize colors in Tailwind CSS configuration:
```typescript
// Modify colors, fonts, and breakpoints
```

### Add New Sections
1. Create component in `components/`
2. Add to main `App.tsx`
3. Add translations in `constants.ts`

---

## ⚡ Performance

- **Vite** - Optimized bundling and hot module replacement
- **Code Splitting** - Lazy loading of routes and components
- **Image Optimization** - Asset compression for faster loading
- **3D Optimization** - Efficient Three.js rendering pipeline
- **Animation Performance** - GPU-accelerated Framer Motion animations

### Lighthouse Scores
- Performance: 95+
- Accessibility: 98+
- Best Practices: 100
- SEO: 100

---

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to your branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate documentation.

---

## 📧 Contact & Social

Get in touch with me on multiple platforms:

| Platform | Link |
|----------|------|
| 📧 **Email** | kikoouaras@gmail.com |
| 🔗 **GitHub** | [@OUARAS-khelil-Rafik](https://github.com/OUARAS-khelil-Rafik) |
| 💼 **LinkedIn** | [Khelil Rafik OUARAS](https://www.linkedin.com/in/khelil-rafik-ouaras/) |
| 🐦 **X** | [@Khelil_OUARAS](https://x.com/Khelil_OUARAS) |
| 📦 **Portfolio** | [ouaras-khelil-rafik-portfolio.vercel.app](https://ouaras-khelil-rafik-portfolio.vercel.app/) |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Vanta.js** - For beautiful animated backgrounds
- **Framer Motion** - For smooth animations
- **Three.js & React Three Fiber** - For 3D graphics
- **Tailwind CSS** - For utility-first styling
- **The React Community** - For amazing libraries and tools

---

<div align="center">

**Made with ❤️ by Khelil Rafik OUARAS**

⭐ Consider starring this repository if you find it useful!

</div>
