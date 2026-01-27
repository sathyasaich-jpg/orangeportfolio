
import React, { useState, useEffect } from 'react';
import { Project } from '../types.ts';
import { PROJECTS } from '../constants.tsx';
import Lightbox from './Lightbox.tsx';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onProjectSelect: (id: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onProjectSelect }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const otherProjects = PROJECTS.filter(p => p.id !== project.id);

  return (
    <div className="py-12 md:py-16 animate-in fade-in slide-in-from-bottom-6 duration-700 max-w-5xl mx-auto">
      {activeImage && (
        <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />
      )}

      <div className="mb-16 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-brand-red transition-all group"
        >
          <svg className="transition-transform group-hover:-translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          Back to Portfolio
        </button>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-red opacity-50">
            {project.category.split(' / ')[0]}
          </span>
        </div>
      </div>

      <div className="space-y-12 mb-20">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-blocky leading-[0.85] tracking-tighter uppercase m-0 p-0 text-zinc-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl opacity-70 border-l-4 border-brand-red pl-6 italic font-serif">
            {project.description}
          </p>
        </div>

        <div 
          className="relative group cursor-zoom-in overflow-hidden rounded-2xl shadow-2xl" 
          onClick={() => setActiveImage(project.imageUrl)}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            loading="eager"
            className="w-full h-full object-cover aspect-video grayscale-20 group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-4 space-y-10 bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-xl border border-zinc-100 dark:border-zinc-800">
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Project Brief</h4>
            <div className="space-y-6">
              <div>
                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest mb-1 opacity-60">ROLE</p>
                <p className="font-blocky text-base uppercase leading-tight">{project.role || 'Designer'}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest mb-1 opacity-60">TIMELINE</p>
                <p className="font-blocky text-base uppercase leading-tight">{project.timeline || '4 Weeks'}</p>
              </div>
              <div>
                <p className="text-[8px] font-black text-brand-red uppercase tracking-widest mb-1 opacity-60">TOOLS</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {(project.tools || []).map(tool => (
                    <span key={tool} className="px-2 py-1 bg-white dark:bg-zinc-800 text-[9px] font-black uppercase tracking-widest border border-zinc-200 dark:border-zinc-700">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-16">
          <div className="space-y-4">
            <h3 className="text-3xl font-blocky uppercase tracking-tight text-zinc-900 dark:text-white">The Concept</h3>
            <p className="text-lg font-light leading-relaxed opacity-70">
              {project.concept}
            </p>
          </div>

          {project.gridDesc && (
            <div className="space-y-4">
              <h3 className="text-3xl font-blocky uppercase tracking-tight text-zinc-900 dark:text-white">The Grid</h3>
              <p className="text-lg font-light leading-relaxed opacity-70">
                {project.gridDesc}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-16 mb-40">
        <div className="flex items-end justify-between border-b-2 border-zinc-200 dark:border-zinc-800 pb-4">
          <h2 className="text-4xl md:text-5xl font-blocky tracking-tighter uppercase">Process Gallery</h2>
          <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em]">Visual Artifacts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {(project.processGallery || []).map((img, i) => (
            <div key={i} className="space-y-6 group">
              <div 
                className="relative overflow-hidden rounded-xl shadow-lg cursor-zoom-in bg-zinc-100 dark:bg-zinc-800"
                onClick={() => setActiveImage(img.url)}
              >
                <img 
                  src={img.url} 
                  alt={`Process Step ${i + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3] grayscale brightness-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-xs font-serif italic opacity-60 leading-relaxed max-w-md border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-24 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-blocky tracking-tighter uppercase">Next Works</h2>
          <span className="text-[10px] font-black text-brand-red uppercase tracking-[0.5em] animate-pulse">Scroll down</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {otherProjects.slice(0, 3).map(p => (
            <button 
              key={p.id}
              onClick={() => {
                 onProjectSelect(p.id);
                 window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group text-left space-y-4"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all">
                <img src={p.imageUrl} alt={p.title} loading="lazy" className="w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
              <h4 className="font-blocky text-lg uppercase group-hover:text-brand-red transition-colors">{p.title}</h4>
              <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">{p.category}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
