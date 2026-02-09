import React from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
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

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark text-white selection:bg-primary/30 font-sans">
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
    </LanguageProvider>
  );
}

export default App;