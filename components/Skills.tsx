import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { content } = useLanguage();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
        opacity: 1, 
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-32 bg-[#0b1120] relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">03.</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">{content.skills.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.skills.categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:bg-card hover:border-slate-700 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-slate-800 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={item}
                    whileHover={{ scale: 1.1, backgroundColor: "#3b82f6", color: "#ffffff" }}
                    className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg cursor-default border border-transparent hover:border-blue-400 transition-colors shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;