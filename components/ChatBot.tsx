import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessage, Message } from '@/services/chatbotService';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

// Simple markdown renderer
const renderMarkdown = (text: string, isDark: boolean): React.ReactElement => {
  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  
  const processInline = (line: string): React.ReactElement[] => {
    const parts: React.ReactElement[] = [];
    let remaining = line;
    let key = 0;
    
    while (remaining.length > 0) {
      // Links [text](url)
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch && linkMatch.index !== undefined) {
        if (linkMatch.index > 0) {
          parts.push(<span key={key++}>{processInlineStyles(remaining.slice(0, linkMatch.index))}</span>);
        }
        parts.push(
          <a 
            key={key++} 
            href={linkMatch[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            {linkMatch[1]}
          </a>
        );
        remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
        continue;
      }
      
      // No more special inline elements
      parts.push(<span key={key++}>{processInlineStyles(remaining)}</span>);
      break;
    }
    
    return parts;
  };
  
  const processInlineStyles = (text: string): React.ReactElement => {
    // Process bold, italic, code inline
    const result = text;
    const elements: (string | React.ReactElement)[] = [];
    let key = 0;
    
    // Split by code blocks first
    const codeParts = result.split(/`([^`]+)`/);
    codeParts.forEach((part, i) => {
      if (i % 2 === 1) {
        // Code
        elements.push(
          <code key={key++} className={`px-1.5 py-0.5 rounded text-xs ${isDark ? 'bg-white/10 text-cyan-400' : 'bg-gray-200 text-cyan-700'}`}>
            {part}
          </code>
        );
      } else {
        // Process bold and italic
        const boldParts = part.split(/\*\*([^*]+)\*\*/);
        boldParts.forEach((bp, j) => {
          if (j % 2 === 1) {
            elements.push(<strong key={key++} className="font-semibold">{bp}</strong>);
          } else {
            const italicParts = bp.split(/\*([^*]+)\*/);
            italicParts.forEach((ip, k) => {
              if (k % 2 === 1) {
                elements.push(<em key={key++}>{ip}</em>);
              } else if (ip) {
                elements.push(ip);
              }
            });
          }
        });
      }
    });
    
    return <>{elements}</>;
  };
  
  lines.forEach((line, idx) => {
    // Code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={idx} className={`p-2 rounded text-xs overflow-x-auto ${isDark ? 'bg-black/30' : 'bg-gray-900 text-gray-100'}`}>
            {codeContent.join('\n')}
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }
    
    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }
    
    // Tables
    if (line.includes('|') && !line.startsWith('>')) {
      const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
      if (cells.length > 0 && !line.match(/^[\|\s\-:]+$/)) {
        tableRows.push(cells);
        inTable = true;
        return;
      } else if (line.match(/^[\|\s\-:]+$/)) {
        return; // Skip separator row
      }
    } else if (inTable && tableRows.length > 0) {
      // Render table
      elements.push(
        <div key={idx} className="overflow-x-auto my-2">
          <table className={`text-xs w-full ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className={ri === 0 ? 'font-semibold' : ''}>
                  {row.map((cell, ci) => (
                    <td key={ci} className={`py-1 px-2 ${isDark ? 'border-white/10' : 'border-gray-200'} border-b`}>
                      {processInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
    
    // Headers
    if (line.startsWith('## ')) {
      elements.push(<h2 key={idx} className="text-sm font-bold mt-2 mb-1">{processInline(line.slice(3))}</h2>);
      return;
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={idx} className="text-xs font-semibold mt-2 mb-1">{processInline(line.slice(4))}</h3>);
      return;
    }
    
    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={idx} className={`border-l-2 pl-2 my-1 italic ${isDark ? 'border-primary/50 text-gray-400' : 'border-primary text-gray-600'}`}>
          {processInline(line.slice(2))}
        </blockquote>
      );
      return;
    }
    
    // List items
    if (line.match(/^[\-\+\*]\s/)) {
      elements.push(
        <div key={idx} className="flex gap-2 my-0.5">
          <span className="text-primary">•</span>
          <span>{processInline(line.slice(2))}</span>
        </div>
      );
      return;
    }
    
    // Horizontal rule
    if (line.match(/^-{3,}$/)) {
      elements.push(<hr key={idx} className={`my-2 ${isDark ? 'border-white/10' : 'border-gray-200'}`} />);
      return;
    }
    
    // Empty line
    if (line.trim() === '') {
      elements.push(<div key={idx} className="h-1" />);
      return;
    }
    
    // Regular paragraph
    elements.push(<p key={idx} className="my-0.5">{processInline(line)}</p>);
  });
  
  // Flush remaining table
  if (tableRows.length > 0) {
    elements.push(
      <div key="table-final" className="overflow-x-auto my-2">
        <table className={`text-xs w-full ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <tbody>
            {tableRows.map((row, ri) => (
              <tr key={ri} className={ri === 0 ? 'font-semibold' : ''}>
                {row.map((cell, ci) => (
                  <td key={ci} className={`py-1 px-2 ${isDark ? 'border-white/10' : 'border-gray-200'} border-b`}>
                    {processInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  return <div className="text-xs leading-relaxed">{elements}</div>;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isDark } = useTheme();
  const { language } = useLanguage();

  const placeholders = {
    en: "Ask about my profile...",
    fr: "Posez une question sur mon profil..."
  };

  const titles = {
    en: "Chat with me",
    fr: "Discutez avec moi"
  };

  const welcomeMessages = {
    en: "Hello! 👋 I'm Khelil Rafik's virtual assistant. Feel free to ask me about his skills, projects, education, experience, or contact information!",
    fr: "Bonjour! 👋 Je suis l'assistant virtuel de Khelil Rafik. N'hésitez pas à me poser des questions sur ses compétences, projets, formation, expérience ou coordonnées!"
  };

  // Initialize with welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const lang = language === 'fr' ? 'fr' : 'en';
      setMessages([{
        role: 'assistant',
        content: welcomeMessages[lang]
      }]);
    }
  }, [isOpen, language]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await sendMessage(userMessage, messages);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch {
      const errorMsg = language === 'fr' 
        ? "Désolé, une erreur s'est produite. Veuillez réessayer."
        : "Sorry, an error occurred. Please try again.";
      setMessages([...newMessages, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const lang = language === 'fr' ? 'fr' : 'en';

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isDark 
            ? 'bg-gradient-to-r from-primary to-cyan-500 text-white' 
            : 'bg-gradient-to-r from-primary to-cyan-600 text-white'
        } ${isOpen ? 'rotate-90' : ''}`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-dark-card/95 backdrop-blur-xl border border-white/10' 
              : 'bg-white/95 backdrop-blur-xl border border-gray-200'
          }`}
        >
          {/* Header */}
          <div className={`p-4 border-b ${isDark ? 'border-white/10 bg-gradient-to-r from-primary/20 to-cyan-500/20' : 'border-gray-200 bg-gradient-to-r from-primary/10 to-cyan-500/10'}`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${isDark ? 'bg-primary/30' : 'bg-primary/20'}`}>
                <Bot size={20} className="text-primary" />
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {titles[lang]}
                </h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  OUARAS Khelil Rafik
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDark ? 'scrollbar-dark' : 'scrollbar-light'}`}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                    message.role === 'user' 
                      ? isDark ? 'bg-cyan-500/30' : 'bg-cyan-500/20'
                      : isDark ? 'bg-primary/30' : 'bg-primary/20'
                  }`}>
                    {message.role === 'user' 
                      ? <User size={14} className="text-cyan-500" />
                      : <Bot size={14} className="text-primary" />
                    }
                  </div>
                  <div
                    className={`p-3 rounded-2xl ${
                      message.role === 'user'
                        ? isDark 
                          ? 'bg-cyan-500/20 text-white rounded-br-md' 
                          : 'bg-cyan-500/20 text-gray-800 rounded-br-md'
                        : isDark 
                          ? 'bg-white/5 text-gray-200 rounded-bl-md' 
                          : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    {message.role === 'user' 
                      ? <p className="text-xs whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      : renderMarkdown(message.content, isDark)
                    }
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%]">
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${isDark ? 'bg-primary/30' : 'bg-primary/20'}`}>
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className={`p-3 rounded-2xl rounded-bl-md ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <Loader2 size={16} className="animate-spin text-primary" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <div className={`flex items-center gap-2 p-2 rounded-xl ${
              isDark ? 'bg-white/5' : 'bg-gray-100'
            }`}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={placeholders[lang]}
                disabled={isLoading}
                className={`flex-1 bg-transparent outline-none text-sm px-2 ${
                  isDark ? 'text-white placeholder-gray-500' : 'text-gray-800 placeholder-gray-400'
                }`}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className={`p-2 rounded-lg transition-all ${
                  input.trim() && !isLoading
                    ? 'bg-primary text-white hover:bg-primary/80'
                    : isDark ? 'bg-white/5 text-gray-600' : 'bg-gray-200 text-gray-400'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-dark::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .scrollbar-dark::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .scrollbar-dark::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .scrollbar-light::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-light::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }
        .scrollbar-light::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        .scrollbar-light::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default ChatBot;
