import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
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
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-6"
                    >
                        <CheckCircle size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                    <button 
                        onClick={() => setFormState('idle')} 
                        className="mt-8 text-primary hover:text-white transition-colors"
                    >
                        Send another message
                    </button>
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

                    <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {formState === 'submitting' ? (
                             <span className="animate-pulse">Sending...</span>
                        ) : (
                            <>
                                <span>{content.contact.sendButton}</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
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