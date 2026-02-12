import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Mail, MapPin, Phone, Send, Loader, MessageCircle } from 'lucide-react';
import { EMAIL_ADDRESS, EMAIL_ADDRESS_2 } from '../constants';
import { sendContactEmail, initializeEmailJS } from '../services/emailService';

const PHONE_NUMBER = '+213 660 49 61 44';
const WHATSAPP_NUMBER = '+213660496144';

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: 'name' | 'email' | 'title';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDark: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, name, value, onChange, isDark }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className={`w-full border-b-2 px-4 py-4 focus:outline-none transition-colors ${
        isDark
          ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
          : 'bg-slate-100/50 border-slate-300 text-slate-900 placeholder-slate-400'
      }`}
      autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : 'off'}
    />
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full group-hover:w-full pointer-events-none"></span>
  </div>
);

interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

const Contact = () => {
  const { content } = useLanguage();
  const { isDark } = useTheme();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', title: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    initializeEmailJS();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setFormState('submitting');
    
    try {
      // Validate form data
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      if (!formData.email.trim()) {
        throw new Error('Email is required');
      }
      if (!formData.title.trim()) {
        throw new Error('Title is required');
      }
      if (!formData.message.trim()) {
        throw new Error('Message is required');
      }

      await sendContactEmail(formData.name, formData.email, formData.title, formData.message);
      setFormState('success');
      setFormData({ name: '', email: '', title: '', message: '' });
    } catch (error) {
      let errorMsg = 'Failed to send email. Please try again.';
      
      if (error instanceof Error) {
        errorMsg = error.message;
      } else if (error && typeof error === 'object') {
        const err = error as any;
        if (err.message) {
          errorMsg = err.message;
        } else if (err.text) {
          errorMsg = err.text;
        } else {
          errorMsg = JSON.stringify(err);
        }
      }
      
      setErrorMessage(errorMsg);
      setFormState('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">05.</span>
            <h2 className={`text-4xl md:text-5xl font-bold font-display mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{content.contact.title}</h2>
            <p className={`mt-4 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{content.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
               {[
                 { 
                   icon: Mail, 
                   title: "Email", 
                   lines: [EMAIL_ADDRESS_2], 
                   href: `mailto:${EMAIL_ADDRESS_2}`,
                   external: false 
                 },
                 { 
                   icon: Phone, 
                   title: "Phone", 
                   lines: [
                     { text: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}` }
                   ], 
                   external: false 
                 },
                 { 
                   icon: MessageCircle, 
                   title: "WhatsApp", 
                   lines: [
                     { text: PHONE_NUMBER, href: `https://wa.me/${WHATSAPP_NUMBER}` }
                   ], 
                   external: true 
                 },
                 { icon: MapPin, title: "Location", lines: [{text: content.contact.location, href: "#"}], external: false }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 group"
                 >
                   <div className={`p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg ${isDark ? 'bg-slate-800 shadow-blue-900/10' : 'bg-white shadow-blue-500/10'}`}>
                     <item.icon size={28} />
                   </div>
                   <div>
                     <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                     {item.lines.map((line, lIdx) => (
                       <a 
                         key={lIdx} 
                         href={typeof line === 'string' ? item.href : line.href} 
                         target={item.external ? "_blank" : undefined}
                         rel={item.external ? "noopener noreferrer" : undefined}
                         className={`block transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                       >
                         {typeof line === 'string' ? line : line.text}
                       </a>
                     ))}
                   </div>
                 </motion.div>
               ))}
            </div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-8 md:p-10 rounded-3xl border shadow-2xl ${isDark ? 'bg-card border-slate-800' : 'bg-white border-slate-200'}`}
            >
              {formState === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <motion.div 
                        initial={{ scale: 0, y: -50 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                        className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30"
                    >
                        <motion.svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </motion.svg>
                    </motion.div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        {content.contact.successTitle}
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={isDark ? 'text-slate-400' : 'text-slate-600'}
                    >
                        {content.contact.successMessage}
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setFormState('idle')} 
                        className="mt-8 text-primary hover:text-blue-400 transition-colors font-medium"
                    >
                        {content.contact.sendAnother}
                    </motion.button>
                </div>
              ) : formState === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <motion.div 
                        initial={{ scale: 0, y: -50 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15
                        }}
                        className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/30"
                    >
                        <motion.svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line>
                            <line x1="9" y1="9" x2="15" y2="15"></line>
                        </motion.svg>
                    </motion.div>
                    <motion.h3 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}
                    >
                        Error Sending Email
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={isDark ? 'text-slate-400' : 'text-slate-600'}
                    >
                        {errorMessage || 'Something went wrong. Please try again.'}
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => {
                          setFormState('idle');
                          setErrorMessage('');
                        }} 
                        className="mt-8 text-primary hover:text-blue-400 transition-colors font-medium"
                    >
                        Try Again
                    </motion.button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <InputField type="text" name="name" placeholder={content.contact.namePlaceholder} value={formData.name} onChange={handleInputChange} isDark={isDark} />
                        <InputField type="email" name="email" placeholder={content.contact.emailPlaceholder} value={formData.email} onChange={handleInputChange} isDark={isDark} />
                    </div>
                    <InputField type="text" name="title" placeholder="Subject/Title" value={formData.title} onChange={handleInputChange} isDark={isDark} />
                    
                    <div className="relative group">
                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder={content.contact.messagePlaceholder}
                            className={`w-full border-b-2 px-4 py-4 focus:outline-none transition-colors resize-none ${
                              isDark
                                ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-500'
                                : 'bg-slate-100/50 border-slate-300 text-slate-900 placeholder-slate-400'
                            }`}
                        />
                        <span className="absolute bottom-1.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full group-hover:w-full"></span>
                    </div>

                    <div className="flex justify-center">
                        <motion.button
                            type="submit"
                            disabled={formState === 'submitting'}
                            animate={{
                                width: formState === 'submitting' ? 56 : '100%',
                                borderRadius: formState === 'submitting' ? 9999 : 12
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut"
                            }}
                            className={`relative font-bold py-4 transition-all flex items-center justify-center shadow-lg disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden bg-primary hover:bg-blue-600 hover:shadow-blue-600/20 text-white`}
                            style={{
                                maxWidth: formState === 'submitting' ? '56px' : '100%'
                            }}
                        >
                            {formState === 'idle' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center justify-center space-x-2 w-full"
                                >
                                    <span>{content.contact.sendButton}</span>
                                    <Send size={18} />
                                </motion.div>
                            )}
                            
                            {formState === 'submitting' && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Loader size={24} />
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.button>
                    </div>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;