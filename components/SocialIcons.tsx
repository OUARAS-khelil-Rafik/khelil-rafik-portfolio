import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { GITHUB_USERNAME } from '../constants';
import { useTheme } from '../context/ThemeContext';

interface SocialLink {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  href: string;
  label: string;
  color: string;
  hoverColor: string;
}

const SocialIcons = () => {
  const { isDark } = useTheme();
  
  const socialLinks: SocialLink[] = [
    {
      icon: FaGithub,
      href: `https://github.com/${GITHUB_USERNAME}`,
      label: "GitHub",
      color: "#ffffff",
      hoverColor: "#ffffff"
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com",
      label: "LinkedIn",
      color: "#0A66C2",
      hoverColor: "#0A66C2"
    },
    {
      icon: FaEnvelope,
      href: "mailto:kikoouaras@gmail.com",
      label: "Email",
      color: "#EA4335",
      hoverColor: "#EA4335"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center space-x-8"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? "_blank" : "_self"}
          rel="noreferrer"
          aria-label={link.label}
          variants={iconVariants}
          whileHover={{
            scale: 1.3,
            y: -8,
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          className="group relative"
        >
          <div className={`p-3 rounded-full border transition-colors flex items-center justify-center ${isDark ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' : 'bg-white/50 border-slate-300 hover:border-blue-500/50'}`}>
            <link.icon
              size={24}
              color={isDark ? link.color : (link.label === 'GitHub' ? '#0f172a' : link.color)}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: -40 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-sm whitespace-nowrap pointer-events-none ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-900 text-white'}`}
          >
            {link.label}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialIcons;
