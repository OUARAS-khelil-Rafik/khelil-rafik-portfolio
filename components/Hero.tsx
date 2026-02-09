import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GITHUB_USERNAME } from '../constants';
import SocialIcons from './SocialIcons';

const Typewriter = ({ text, delay = 0, speed = 50, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let isDeleting = false;
    // Start delay flag
    let hasStarted = false;

    const tick = () => {
      // Typing phase
      if (!isDeleting) {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          setIsTyping(true);
          timeout = setTimeout(tick, speed);
        } else {
          // Finished typing, wait 3 seconds then start deleting
          setIsTyping(false);
          isDeleting = true;
          timeout = setTimeout(tick, 3000); // 3 seconds wait
        }
      } 
      // Deleting phase
      else {
        if (currentIndex >= 0) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex--;
          setIsTyping(true);
          timeout = setTimeout(tick, 30); // Faster delete speed
        } else {
          // Finished deleting, restart typing
          isDeleting = false;
          currentIndex = 0;
          setIsTyping(false);
          timeout = setTimeout(tick, 500); // Small pause before retyping
        }
      }
    };

    const startTimeout = setTimeout(() => {
      hasStarted = true;
      tick();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeout);
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`inline-block w-[2px] h-[1em] bg-slate-200 ml-1 align-middle ${!isTyping ? 'animate-pulse' : ''}`}
      />
    </span>
  );
};

const Hero = () => {
  const { content, language } = useLanguage();

  const letterContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const letterAnimation: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <motion.span key={index} variants={letterAnimation} className="inline-block">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dark">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            translate: ['0% 0%', '10% 10%', '-5% 5%', '0% 0%'],
            scale: [1, 1.2, 0.9, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] mix-blend-screen opacity-50" 
        />
        <motion.div 
          animate={{ 
            translate: ['0% 0%', '-10% -5%', '5% 10%', '0% 0%'],
            scale: [1, 1.1, 0.8, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen opacity-50" 
        />
        <motion.div 
          animate={{ 
            translate: ['0% 0%', '-15% 5%', '10% -10%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen opacity-30" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent"></span>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              {content.hero.greeting}
            </span>
          </motion.div>

          {/* Staggered Title Reveal */}
          <motion.div 
            className="overflow-hidden mb-6"
            variants={letterContainer}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] tracking-tight">
               <span className="block">{splitText("OUARAS")}</span>
               <span className="block text-slate-300">{splitText("Khelil Rafik")}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-4xl font-medium text-slate-400 font-display">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient-x">
                 {content.hero.role}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 mt-2 min-h-[1.2em]">
               <Typewriter text={content.hero.subrole} delay={1500} />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed border-l-2 border-slate-800 pl-6"
          >
            {content.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <span>{content.hero.cta}</span>
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href={language === 'en' ? "/CV/CV EN (OUARAS Khelil Rafik).pdf" : "/CV/CV FR (OUARAS Khelil Rafik).pdf"}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2 border border-slate-700 hover:bg-slate-700 hover:border-slate-600"
            >
              <span>{content.hero.downloadCv}</span>
              <Download size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16"
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest opacity-50">Scroll</span>
        <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ height: ['20%', '50%', '20%'], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 bg-primary rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;