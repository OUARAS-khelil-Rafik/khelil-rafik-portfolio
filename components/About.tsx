import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Code, Database, Palette } from 'lucide-react';

const About = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  const cards = [
    { icon: <Database className="text-blue-400" />, title: "Data Science", desc: "Python, R, TensorFlow, Pandas" },
    { icon: <Code className="text-green-400" />, title: "Full Stack", desc: "React, Next.js, Node.js, Flutter" },
    { icon: <Palette className="text-purple-400" />, title: "Design", desc: "UI/UX, Figma, Adobe Suite" },
  ];

  return (
    <section id="about" className={`py-24 relative transition-colors duration-300 ${isDark ? 'bg-dark' : 'bg-light-bg'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">01.</span>
            <h2 className={`text-3xl font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>{content.about.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-8">
            <div className="md:col-span-3">
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {content.about.content}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {cards.map((card, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-colors ${isDark ? 'bg-card border-slate-800 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-400 shadow-sm'}`}>
                    <div className="mb-3">{card.icon}</div>
                    <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{card.title}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 relative flex justify-center md:justify-end items-start px-4 md:px-0">
              <div className="relative w-full max-w-[300px] group">
                <div className={`relative z-10 w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                  <img 
                    src="/profile.jpeg" 
                    alt="Profile" 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute top-5 -right-5 w-full h-full border-2 border-primary rounded-2xl -z-0 hidden md:block transition-all duration-300 group-hover:top-3 group-hover:-right-3" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;