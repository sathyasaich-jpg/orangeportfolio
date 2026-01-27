
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import DesignAssistant from './components/DesignAssistant';
import { Theme, Project } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === Theme.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Scroll to top when project is selected or deselected
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProjectId]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleProjectSelect = (id: string) => {
    setSelectedProjectId(id);
  };

  const handleBackToHome = () => {
    setSelectedProjectId(null);
  };

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId);

  return (
    <div className="min-h-screen transition-colors duration-500 text-zinc-900 dark:text-zinc-100 selection:bg-brand-blue selection:text-white pb-12">
      <Header theme={theme} toggleTheme={toggleTheme} onHomeClick={handleBackToHome} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedProject ? (
          <ProjectDetail 
            project={selectedProject} 
            onBack={handleBackToHome} 
            onProjectSelect={handleProjectSelect}
          />
        ) : (
          <div className="space-y-8 md:space-y-12">
            <section id="hero" className="scroll-mt-20">
              <Hero />
            </section>
            
            <section id="about" className="scroll-mt-20">
              <About />
            </section>
            
            <section id="skills" className="scroll-mt-20">
              <Skills />
            </section>
            
            <section id="projects" className="scroll-mt-20">
              <Projects onProjectSelect={handleProjectSelect} />
            </section>
            
            <section id="hobbies" className="scroll-mt-20">
              <Hobbies />
            </section>
            
            <section id="contact" className="scroll-mt-20">
              <Contact />
            </section>
          </div>
        )}
      </main>

      <footer className="mt-16 py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-[9px] uppercase tracking-widest opacity-50">
        <p>&copy; {new Date().getFullYear()} Sathya Sai. Communication Design Portfolio.</p>
      </footer>

      <DesignAssistant />
    </div>
  );
};

export default App;
