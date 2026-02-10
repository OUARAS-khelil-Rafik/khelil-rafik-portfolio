import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { fetchProjects } from '../services/githubService';
import { Project } from '../types';
import { Github, Star, GitFork, ExternalLink, Code, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index, isDark }: { project: Project; index: number; isDark: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block h-full backdrop-blur-sm border rounded-2xl p-6 transition-colors duration-300 hover:border-primary/50 group relative overflow-hidden ${isDark ? 'bg-card/80 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-xl group-hover:text-primary transition-colors ring-1 ${isDark ? 'bg-slate-800/80 ring-slate-700 group-hover:ring-primary/50' : 'bg-slate-100 ring-slate-200 group-hover:ring-primary/50'}`}>
            <Code size={24} />
          </div>
          <div className="flex gap-2">
            <span className={`p-2 hover:text-white transition-colors rounded-full ${isDark ? 'text-slate-500 bg-slate-800/50' : 'text-slate-400 bg-slate-100'}`}>
                <Github size={18} />
            </span>
            <span className={`p-2 hover:text-primary transition-colors rounded-full ${isDark ? 'text-slate-500 bg-slate-800/50' : 'text-slate-400 bg-slate-100'}`}>
                <ExternalLink size={18} />
            </span>
          </div>
        </div>
        
        <h3 className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {project.name}
        </h3>
        
        <p className={`text-sm mb-6 line-clamp-3 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description || "No description provided."}
        </p>

        <div className={`flex items-center justify-between text-xs mt-auto pt-4 border-t ${isDark ? 'text-slate-500 border-slate-800/50' : 'text-slate-500 border-slate-200'}`}>
          <span className={`flex items-center px-2 py-1 rounded-md ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
              {project.language || "Code"}
          </span>
          <span className="flex items-center space-x-3">
            <span className="flex items-center group-hover:text-yellow-400 transition-colors">
              <Star size={14} className="mr-1" />
              {project.stargazers_count}
            </span>
          </span>
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      if (data.length > 0) {
        setProjects(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className={`py-32 relative z-10 transition-colors duration-300 ${isDark ? 'bg-dark' : 'bg-light-bg'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary font-medium tracking-wide uppercase text-sm">04.</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{content.projects.title}</h2>
          <p className={`text-lg max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{content.projects.subtitle}</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
             <div className="flex space-x-2 items-center text-primary">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
             </div>
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400 bg-red-900/10 rounded-xl border border-red-900/20">
            {content.projects.error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} isDark={isDark} />
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
            <a href="https://github.com/OUARAS-khelil-Rafik" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center space-x-2 text-primary transition-colors border-b border-primary pb-1 ${isDark ? 'hover:text-white hover:border-white' : 'hover:text-slate-900 hover:border-slate-900'}`}>
                <span>{content.projects.viewAll}</span>
                <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;