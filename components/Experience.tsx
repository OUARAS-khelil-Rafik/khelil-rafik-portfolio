import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();
  const { items } = content.experience;
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <section id="experience" className="py-32 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="text-primary font-medium tracking-wide uppercase text-sm">02.</span>
          <h2 className={`text-4xl md:text-5xl font-bold font-display mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{content.experience.title}</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Animated Vertical Line */}
          <div className={`absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 ${isDark ? 'bg-slate-800' : 'bg-slate-300'}`}>
            <motion.div 
                className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
                style={{ height: "100%", scaleY: scrollYProgress, transformOrigin: "top" }}
            />
          </div>

          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
              className={`relative flex flex-col md:flex-row mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[20px] md:left-1/2 w-4 h-4 border-2 border-primary rounded-full transform -translate-x-1/2 mt-8 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] ${isDark ? 'bg-dark' : 'bg-light-bg'}`}>
                 <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }}
                    className="w-full h-full bg-primary rounded-full" 
                 />
              </div>

              {/* Content */}
              <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div 
                    whileHover={{ y: -5 }}
                    className={`p-8 rounded-2xl border transition-all shadow-lg hover:shadow-xl relative group ${isDark ? 'bg-card border-slate-800 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-400'}`}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl"></div>
                  
                  <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center ${
                      item.type === 'work' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'
                    }`}>
                      {item.type === 'work' ? <Briefcase size={12} className="mr-2"/> : <GraduationCap size={12} className="mr-2"/>}
                      {item.type === 'work' ? 'Experience' : 'Education'}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs font-mono">
                      <Calendar size={12} className="mr-2" />
                      {item.date}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-1 font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.role}</h3>
                  <h4 className="text-primary font-medium text-base mb-6">{item.company}</h4>
                  
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className={`text-sm flex items-start leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <span className="mr-3 text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Spacer */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;