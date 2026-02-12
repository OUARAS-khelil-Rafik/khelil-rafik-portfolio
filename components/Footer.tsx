import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';
import { FaXTwitter, FaKaggle } from 'react-icons/fa6';
import { SiGooglescholar } from 'react-icons/si';
import { GITHUB_USERNAME } from '../constants';

const Footer = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t py-8 transition-colors duration-300 backdrop-blur-md ${isDark ? 'border-slate-800 bg-dark/80' : 'border-slate-200 bg-light-bg/80'}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-slate-900'}`}>
            OUARAS<span className="text-primary">.dev</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
           <a href={`https://github.com/${GITHUB_USERNAME}`} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="GitHub">
              <Github size={20} />
           </a>
           <a href="https://www.linkedin.com/in/khelil-rafik-ouaras/" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="LinkedIn">
              <Linkedin size={20} />
           </a>
           <a href="https://www.facebook.com/OUARASKhelilRafik" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="Facebook">
              <Facebook size={20} />
           </a>
           <a href="https://www.instagram.com/khelil_rafik_ouaras/" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="Instagram">
              <Instagram size={20} />
           </a>
           <a href="https://x.com/Khelil_OUARAS" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="X">
              <FaXTwitter size={20} />
           </a>
           <a href="https://www.kaggle.com/ouaraskhelilrafik" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="Kaggle">
              <FaKaggle size={20} />
           </a>
           <a href="https://scholar.google.com/citations?hl=fr&user=v_YF4RsAAAAJ" className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`} title="Google Scholar">
              <SiGooglescholar size={20} />
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