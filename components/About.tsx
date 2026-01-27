
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="relative py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative paper-sheet p-3 bg-white dark:bg-zinc-900 shadow-2xl rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Portrait of Sathya Sai" 
              className="w-full aspect-square object-cover grayscale brightness-105 contrast-125"
            />
            <div className="tape tape-top opacity-40"></div>
            <div className="absolute top-4 left-4 bg-brand-red text-white text-[8px] font-black px-2 py-1 tracking-[0.2em] uppercase">
              AUTHOR_PORTRAIT
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 lg:pl-10 order-1 lg:order-2">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-brand-red tracking-widest uppercase">SECTION_02</span>
            <h2 className="text-6xl md:text-8xl font-blocky leading-none tracking-tight uppercase">
              I'm <br />
              <span className="text-brand-orange">Sathya.</span>
            </h2>
          </div>

          <div className="bg-white/50 dark:bg-zinc-900/50 p-6 md:p-8 paper-sheet border-t-8 border-brand-orange -rotate-1">
            <p className="text-lg md:text-xl font-light leading-snug opacity-90 text-zinc-800 dark:text-zinc-200">
              Sathya Sai is a multi-disciplinary designer currently based in Bangalore. His practice is rooted in the belief that design should be <span className="italic font-serif font-black text-brand-red uppercase">felt</span> as much as it is seen.
            </p>
            <p className="mt-4 text-lg font-light leading-snug opacity-80 text-zinc-800 dark:text-zinc-200">
              Bridging complexity and clarity through narrative-driven design thinking. Specializing in visual metaphors, editorial systems, and tactile digital experiences that challenge conventional interfaces.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Expertise</p>
              <p className="text-xs font-black uppercase">Editorial / UI / Identity</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-xs font-black uppercase">Bangalore / Remote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
