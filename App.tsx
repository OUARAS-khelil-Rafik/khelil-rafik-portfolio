import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import VantaBackground from './components/VantaBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollZoomWrapper from './components/ScrollZoomWrapper';
import ChatBot from './components/ChatBot';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'text-white' 
        : 'text-light-text'
    } selection:bg-primary/30 font-sans`}>
      <VantaBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ScrollZoomWrapper>
          <About />
        </ScrollZoomWrapper>
        <ScrollZoomWrapper>
          <Experience />
        </ScrollZoomWrapper>
        <ScrollZoomWrapper>
          <Skills />
        </ScrollZoomWrapper>
        <ScrollZoomWrapper>
          <Projects />
        </ScrollZoomWrapper>
        <ScrollZoomWrapper>
          <Contact />
        </ScrollZoomWrapper>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;