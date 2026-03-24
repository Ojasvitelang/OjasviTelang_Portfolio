import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Mindset from './components/Mindset';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Renders the complete portfolio website with all sections
 */
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Mindset />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
