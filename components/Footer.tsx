import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GITHUB_USERNAME } from '../constants';

const Footer = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t py-8 transition-colors duration-300 ${isDark ? 'bg-dark border-slate-800' : 'bg-light-bg border-slate-200'}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
            OUARAS<span className="text-primary">.dev</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
           <a href={`https://github.com/${GITHUB_USERNAME}`} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="GitHub">
              <Github size={20} />
           </a>
           <a href="https://www.linkedin.com" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="LinkedIn">
              <Linkedin size={20} />
           </a>
           <a href="mailto:kikoouaras@gmail.com" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="Email">
              <Mail size={20} />
           </a>
        </div>

        <div className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
          &copy; {new Date().getFullYear()} OUARAS Khelil Rafik. {content.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;