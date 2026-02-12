import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFacebookF, FaInstagram, FaKaggle, FaXTwitter } from 'react-icons/fa6';
import { SiGooglescholar } from 'react-icons/si';
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
      href: "https://www.linkedin.com/in/khelil-rafik-ouaras/",
      label: "LinkedIn",
      color: "#0A66C2",
      hoverColor: "#0A66C2"
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/OUARASKhelilRafik",
      label: "Facebook",
      color: "#1877F2",
      hoverColor: "#1877F2"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/khelil_rafik_ouaras/",
      label: "Instagram",
      color: "#E4405F",
      hoverColor: "#E4405F"
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/Khelil_OUARAS",
      label: "X",
      color: "#ffffff",
      hoverColor: "#ffffff"
    },
    {
      icon: FaKaggle,
      href: "https://www.kaggle.com/ouaraskhelilrafik",
      label: "Kaggle",
      color: "#20BEFF",
      hoverColor: "#20BEFF"
    },
    {
      icon: SiGooglescholar,
      href: "https://scholar.google.com/citations?hl=fr&user=v_YF4RsAAAAJ",
      label: "Google Scholar",
      color: "#4285F4",
      hoverColor: "#4285F4"
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

  const topRow = socialLinks.slice(0, 4);
  const bottomRow = socialLinks.slice(4);

  const renderIcon = (link: SocialLink, index: number) => (
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
      <div className={`p-2 sm:p-3 rounded-full border transition-colors flex items-center justify-center ${isDark ? 'bg-slate-800/50 border-slate-700 hover:border-blue-500/50' : 'bg-white/50 border-slate-300 hover:border-blue-500/50'}`}>
        <link.icon
          size={20}
          color={isDark ? link.color : (link.label === 'GitHub' || link.label === 'X' ? '#0f172a' : link.color)}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: -40 }}
        transition={{ duration: 0.2 }}
        className={`absolute left-1/2 -translate-x-1/2 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm whitespace-nowrap pointer-events-none ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-900 text-white'}`}
      >
        {link.label}
      </motion.div>
    </motion.a>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start gap-3 sm:gap-4"
    >
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
        {topRow.map((link, index) => renderIcon(link, index))}
      </div>
      <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
        {bottomRow.map((link, index) => renderIcon(link, index + 4))}
      </div>
    </motion.div>
  );
};

export default SocialIcons;
