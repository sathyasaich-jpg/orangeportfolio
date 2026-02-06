
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="relative pt-6 pb-2 md:pt-12 md:pb-6">
      {/* Decorative Scrapbook Elements */}
      <div className="absolute top-0 right-10 md:right-20 w-32 md:w-44 p-4 bg-brand-orange text-white -rotate-6 paper-sheet hidden md:block z-20">
        <div className="text-[9px] font-black border-b border-white/20 pb-1 mb-2">ARCHIVE.2026</div>
        <p className="font-blocky text-lg leading-none uppercase">Creative Portfolio</p>
        <div className="absolute top-[-8px] right-4 opacity-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start relative z-10">
        <div className="lg:col-span-8">
          <div className="relative inline-block mb-4 pt-2">
            
            <div className="tape tape-top opacity-30"></div>
          </div>
          
          <div className="relative mb-6 py-2 overflow-visible">
            <h1 className="font-blocky text-[15vw] lg:text-[9rem] tracking-tighter leading-[0.9] m-0 p-0 text-zinc-900 dark:text-white uppercase overflow-visible">
              SATHYA <br />
              <span className="text-brand-red">SAI.</span>
            </h1>
          </div>

          <div className="max-w-xl bg-white dark:bg-zinc-900 p-8 paper-sheet border-l-8 border-brand-red rotate-1 clip-paper">
            <p className="text-lg md:text-xl font-light leading-snug text-zinc-700 dark:text-zinc-300">
              Communication Designer specializing in the architecture of <span className="font-serif italic font-black text-brand-orange uppercase">visual narratives</span> and intentional user experiences.
            </p>
            <div className="mt-8 flex items-center gap-8">
              <a 
                href="#projects" 
                onClick={(e) => handleScroll(e, '#projects')}
                className="text-xs font-black tracking-widest border-b-4 border-brand-red pb-1 hover:text-brand-red transition-all cursor-pointer"
              >
                SELECTED WORKS
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-xs font-black tracking-widest opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
              >
                INQUIRY
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 relative pt-12 lg:pt-0">
          <div className="paper-sheet p-3 bg-white dark:bg-zinc-800 -rotate-3 shadow-2xl">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img 
                src="https://i.ibb.co/LXtq45ks/my-notion-face-transparent.png" 
                alt="Editorial Texture" 
                className="w-full h-full object-cover grayscale brightness-110 contrast-125"
              />
              <div className="absolute inset-0 border-[12px] border-brand-red opacity-10"></div>
            </div>
            <div className="absolute bottom-6 right-[-10px] bg-brand-red text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest rotate-90 origin-bottom-right">
              VOL. 2026
            </div>
          </div>
          
          <div className="absolute -bottom-8 -left-8 w-40 p-3 bg-yellow-100 text-zinc-800 shadow-xl rotate-6 border border-yellow-200 hidden md:block">
            <p className="font-serif italic text-sm leading-tight">"Design is the silent ambassador of your brand."</p>
            <div className="mt-2 text-[8px] font-black opacity-30 text-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
