import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { content, language, setLanguage } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.about, href: '#about', id: 'about' },
    { label: content.nav.experience, href: '#experience', id: 'experience' },
    { label: content.nav.skills, href: '#skills', id: 'skills' },
    { label: content.nav.projects, href: '#projects', id: 'projects' },
    { label: content.nav.contact, href: '#contact', id: 'contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-4 shadow-lg shadow-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`relative z-50 text-2xl font-bold font-display tracking-tighter group ${isDark ? 'text-white' : 'text-slate-900'}`}>
          OUARAS<span className={`text-primary group-hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors`}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className={`flex backdrop-blur-md rounded-full p-1 border mr-6 ${
            isDark 
              ? 'bg-slate-900/50 border-slate-800/50' 
              : 'bg-white/50 border-slate-200/50'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id 
                    ? (isDark ? 'text-white' : 'text-slate-900')
                    : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900')
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full shadow-inner ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all mr-2 ${
              isDark 
                ? 'border-slate-700 hover:border-primary bg-slate-900 hover:bg-primary/10 text-white' 
                : 'border-slate-300 hover:border-primary bg-white hover:bg-primary/10 text-slate-900'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={toggleLanguage}
            className={`flex items-center space-x-1.5 text-xs font-bold border rounded-full px-4 py-2.5 transition-all uppercase tracking-wide ${
              isDark 
                ? 'text-white border-slate-700 hover:border-primary bg-slate-900 hover:bg-primary/10' 
                : 'text-slate-900 border-slate-300 hover:border-primary bg-white hover:bg-primary/10'
            }`}
          >
            <Globe size={14} />
            <span>{language}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 relative z-50 ${isDark ? 'text-white' : 'text-slate-900'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-40 pt-24 px-6 md:hidden backdrop-blur-md ${isDark ? 'bg-dark/90' : 'bg-light-bg/90'}`}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-3xl font-display font-bold hover:text-primary transition-colors ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className={`h-px my-4 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`flex items-center space-x-2 text-xl font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 text-xl font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
              >
                <Globe size={24} />
                <span>Switch to {language === 'en' ? 'French' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;