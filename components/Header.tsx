
import React, { useState, useEffect } from 'react';
import { Theme } from '../types.ts';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onHomeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'WORKS', href: '#projects' },
    { label: 'CONNECT', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    
    if (onHomeClick) {
      onHomeClick();
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          window.history.pushState(null, '', href);
        } else if (targetId === 'hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className={`sticky top-0 z-[110] w-full transition-colors duration-300 ${isMenuOpen ? 'bg-white dark:bg-zinc-950' : 'backdrop-blur-md bg-white/70 dark:bg-black/70'} border-b border-zinc-200 dark:border-zinc-800`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => {
              if (onHomeClick) onHomeClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="font-blocky text-2xl tracking-tighter text-brand-red transition-transform hover:scale-105"
          >
            SS<span className="text-zinc-900 dark:text-white"></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[10px] font-black tracking-widest text-zinc-500 hover:text-brand-red transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900 transition-colors rounded"
            aria-label="Toggle theme"
          >
            {theme === Theme.LIGHT ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
            )}
          </button>
          
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, '#contact')}
            className="hidden sm:block bg-brand-red text-white px-4 py-2 text-[10px] font-black tracking-[0.2em] shadow-lg hover:bg-brand-orange transition-colors"
          >
            HIRE
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-900 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 top-16 z-[100] bg-white dark:bg-zinc-950 md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white dark:bg-zinc-950" /> {/* Solid layer to block background content */}
        
        <nav className="relative z-10 flex flex-col p-8 space-y-8 h-full overflow-y-auto">
          {navLinks.map((link, index) => (
            <a 
              key={link.label}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-5xl font-blocky tracking-tighter uppercase text-zinc-900 dark:text-white hover:text-brand-red transition-colors flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="text-[12px] font-black opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
            </a>
          ))}
          <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900">
            <a 
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-block bg-brand-red text-white px-8 py-4 text-xs font-black tracking-widest uppercase shadow-xl active:scale-95 transition-transform"
            >
              Hire Sathya
            </a>
          </div>
          
          {/* Background Decorative Element */}
          <div className="mt-auto pb-10 pointer-events-none opacity-[0.03]">
            <span className="font-blocky text-[12rem] leading-none uppercase">SAI</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
