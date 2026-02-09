import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Phone, Send, Loader } from 'lucide-react';
import { EMAIL_ADDRESS, EMAIL_ADDRESS_2 } from '../constants';

const Contact = () => {
  const { content } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate send
    setTimeout(() => {
        setFormState('success');
    }, 1500);
  };

  const InputField = ({ type, placeholder }: { type: string, placeholder: string }) => (
    <div className="relative group">
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-slate-900/50 border-b-2 border-slate-700 px-4 py-4 text-white placeholder-slate-500 focus:outline-none transition-colors"
      />
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-focus-within:w-full group-hover:w-full"></span>
    </div>
  );

  return (
    <section id="contact" className="py-32 bg-[#0b1120] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900 to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">05.</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">{content.contact.title}</h2>
            <p className="text-slate-400 mt-4 text-lg">{content.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
               {[
                 { icon: Mail, title: "Email", lines: [EMAIL_ADDRESS, EMAIL_ADDRESS_2], href: `mailto:${EMAIL_ADDRESS}` },
                 { icon: Phone, title: "Phone", lines: [content.contact.phone], href: "#" },
                 { icon: MapPin, title: "Location", lines: [content.contact.location], href: "#" }
               ].map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 group"
                 >
                   <div className="p-4 bg-slate-800 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/10">
                     <item.icon size={28} />
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                     {item.lines.map((line, lIdx) => (
                       <a key={lIdx} href={item.href} className="block text-slate-400 hover:text-white transition-colors">
                         {line}
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
                className="bg-card p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl"
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
                        className="text-2xl font-bold text-white mb-2"
                    >
                        Message Sent!
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-400"
                    >
                        Thank you for reaching out. I'll get back to you shortly.
                    </motion.p>
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onClick={() => setFormState('idle')} 
                        className="mt-8 text-primary hover:text-blue-400 transition-colors font-medium"
                    >
                        ↓ Send another message
                    </motion.button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <InputField type="text" placeholder={content.contact.namePlaceholder} />
                        <InputField type="email" placeholder={content.contact.emailPlaceholder} />
                    </div>
                    
                    <div className="relative group">
                        <textarea
                            rows={4}
                            required
                            placeholder={content.contact.messagePlaceholder}
                            className="w-full bg-slate-900/50 border-b-2 border-slate-700 px-4 py-4 text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                        ></textarea>
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
                            className="relative bg-primary hover:bg-blue-600 text-white font-bold py-4 transition-all flex items-center justify-center shadow-lg hover:shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
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