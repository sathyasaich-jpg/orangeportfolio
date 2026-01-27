
import React from 'react';
import { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onHomeClick }) => {
  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'WORKS', href: '#projects' },
    { label: 'CONNECT', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onHomeClick) {
      onHomeClick();
      // Wait for re-render before scrolling if we were on a project page
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }, 50);
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onHomeClick}
            className="font-blocky text-2xl tracking-tighter text-brand-red transition-transform hover:scale-105"
          >
            SS<span className="text-zinc-900 dark:text-white"></span>
          </button>
        </div>

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

        <div className="flex items-center gap-4">
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
            className="bg-brand-red text-white px-4 py-2 text-[10px] font-black tracking-[0.2em] shadow-lg hover:bg-brand-orange transition-colors"
          >
            HIRE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
