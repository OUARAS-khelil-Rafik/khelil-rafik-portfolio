import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GITHUB_USERNAME } from '../constants';

const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className="bg-dark border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-bold font-display text-white">
            OUARAS<span className="text-primary">.dev</span>
          </span>
        </div>
        
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
           <a href={`https://github.com/${GITHUB_USERNAME}`} className="text-slate-400 hover:text-white transition-colors" title="GitHub">
              <Github size={20} />
           </a>
           <a href="https://www.linkedin.com" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
              <Linkedin size={20} />
           </a>
           <a href="mailto:kikoouaras@gmail.com" className="text-slate-400 hover:text-white transition-colors" title="Email">
              <Mail size={20} />
           </a>
        </div>

        <div className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} OUARAS Khelil Rafik. {content.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;