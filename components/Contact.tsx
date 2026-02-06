
import React from 'react';
import { SOCIAL_LINKS } from '../constants.tsx';

const Contact: React.FC = () => {
  return (
    <div className="py-12 relative">
      <div className="bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white p-8 md:p-16 paper-sheet rotate-1 clip-paper overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-6">
            <span className="text-[10px] font-black text-brand-orange tracking-widest uppercase">Let's Connect</span>
            <h2 className="text-6xl md:text-[9rem] font-blocky leading-none tracking-tighter uppercase">
              START<br /><span className="text-brand-red">NOW.</span>
            </h2>
            <div className="pt-4 space-y-6">
              <div className="space-y-2">
                <p className="text-xl font-light opacity-60 max-w-sm">
                  Available for internships and design collaborations in 2026.
                </p>
                <p className="text-sm font-black text-brand-orange tracking-widest uppercase opacity-80">
                  {SOCIAL_LINKS.email}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`} 
                  className="bg-brand-red text-white px-8 py-4 text-xs font-black tracking-widest hover:bg-brand-orange transition-all shadow-xl text-center w-full sm:w-auto"
                >
                  SAY HELLO
                </a>
                <div className="flex items-center gap-6">
                  <a 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-black opacity-30 hover:opacity-100 transition-opacity uppercase"
                  >
                    LI
                  </a>
                  <a 
                    href={SOCIAL_LINKS.behance} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-black opacity-30 hover:opacity-100 transition-opacity uppercase"
                  >
                    BE
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-dashed border-white/20 dark:border-black/20 rounded-full flex items-center justify-center animate-spin-slow">
               <span className="font-blocky text-4xl opacity-10">SATHYA</span>
            </div>
          </div>
        </div>
        
        {/* Background cutout */}
        <div className="absolute bottom-[-60px] right-[-40px] font-blocky text-[20rem] opacity-[0.03] select-none pointer-events-none">
          HI
        </div>
      </div>
    </div>
  );
};

export default Contact;
