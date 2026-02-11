import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useState, ReactNode } from 'react';

// Category icons mapping
const categoryIcons: Record<string, ReactNode> = {
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  smartphone: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  brain: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  wrench: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  cpu: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  'file-text': (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

// Logos that need to be inverted in dark mode (black/very dark logos)
const darkLogos = ['Three.js', 'Express', 'Flask', 'GitHub', 'Spyder', 'Pandas', 'Next.js'];

const Skills = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className={`py-32 relative transition-colors duration-300 overflow-hidden ${isDark ? 'bg-[#0b1120]' : 'bg-slate-100'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'}`}
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">03.</span>
          <h2 className={`text-4xl md:text-5xl font-bold font-display mt-2 mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {content.skills.title}
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive toolkit built through years of learning and real-world projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {content.skills.categories.map((category, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onMouseEnter={() => setActiveCategory(idx)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`group relative backdrop-blur-xl p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                ${isDark 
                  ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10' 
                  : 'bg-gradient-to-br from-white/80 to-slate-50/50 border-slate-200 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10'
                }
                ${activeCategory === idx ? (isDark ? 'border-blue-500/50' : 'border-blue-400/50') : ''}
              `}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className={`p-3 rounded-xl transition-colors duration-300
                    ${isDark 
                      ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30' 
                      : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 group-hover:from-blue-500/20 group-hover:to-purple-500/20'
                    }`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {categoryIcons[category.icon] || categoryIcons.code}
                </motion.div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Grid with Icons */}
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={item}
                    onMouseEnter={() => setHoveredSkill(`${idx}-${sIdx}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group/skill"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -5, 5, 0],
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 cursor-pointer
                        ${isDark 
                          ? 'bg-slate-800/50 hover:bg-slate-700/80' 
                          : 'bg-slate-100/80 hover:bg-white'
                        }
                        ${hoveredSkill === `${idx}-${sIdx}` ? 'shadow-lg' : ''}
                      `}
                      style={{
                        boxShadow: hoveredSkill === `${idx}-${sIdx}` 
                          ? `0 8px 30px ${skill.color}30` 
                          : 'none'
                      }}
                    >
                      <motion.img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                        style={{
                          filter: isDark && darkLogos.includes(skill.name) 
                            ? 'invert(1) brightness(2) grayscale(30%)' 
                            : 'grayscale(30%)'
                        }}
                        whileHover={{ 
                          filter: isDark && darkLogos.includes(skill.name) 
                            ? 'invert(1) brightness(2) grayscale(0%)' 
                            : 'grayscale(0%)',
                          transition: { duration: 0.2 }
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className={`text-[10px] mt-2 font-medium text-center leading-tight line-clamp-1
                        ${isDark ? 'text-slate-400 group-hover/skill:text-white' : 'text-slate-600 group-hover/skill:text-slate-900'}
                      `}>
                        {skill.name}
                      </span>
                    </motion.div>
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ 
                        opacity: hoveredSkill === `${idx}-${sIdx}` ? 1 : 0,
                        y: hoveredSkill === `${idx}-${sIdx}` ? 0 : 10,
                        scale: hoveredSkill === `${idx}-${sIdx}` ? 1 : 0.9
                      }}
                      className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap z-50 pointer-events-none
                        ${isDark ? 'bg-slate-700 text-white' : 'bg-slate-800 text-white'}
                      `}
                      style={{ borderColor: skill.color }}
                    >
                      {skill.name}
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45
                          ${isDark ? 'bg-slate-700' : 'bg-slate-800'}
                        `}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Card glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.05)'}, transparent 40%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '50+', label: 'Technologies' },
            { value: '8+', label: 'Categories' },
            { value: '5+', label: 'Years Learning' },
            { value: '∞', label: 'Curiosity' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center p-6 rounded-2xl border backdrop-blur-sm transition-colors
                ${isDark 
                  ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/30' 
                  : 'bg-white/50 border-slate-200 hover:border-blue-400/30'
                }
              `}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className={`mt-2 text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;