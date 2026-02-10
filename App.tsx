import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollZoomWrapper from './components/ScrollZoomWrapper';

function AppContent() {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-dark text-white' 
        : 'bg-light-bg text-light-text'
    } selection:bg-primary/30 font-sans`}>
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