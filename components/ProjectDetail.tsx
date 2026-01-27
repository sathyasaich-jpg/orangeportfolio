
import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import Lightbox from './Lightbox';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onProjectSelect: (id: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onProjectSelect }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const otherProjects = PROJECTS.filter(p => p.id !== project.id);

  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Lightbox */}
      {activeImage && (
        <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />
      )}

      {/* Navigation */}
      <div className="mb-12 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-all hover:-translate-x-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          Back to Portfolio
        </button>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-red opacity-30">
          Case Study / 0{project.id}
        </span>
      </div>

      {/* Hero Section */}
      <div className="space-y-8 mb-20">
        <div className="space-y-4">
          <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">{project.category}</span>
          <h1 className="text-6xl md:text-[8rem] font-blocky leading-none tracking-tighter uppercase m-0 p-0 overflow-visible">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? 'text-brand-red' : ''}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl opacity-80">
            {project.description}
          </p>
        </div>

        <div className="relative group cursor-zoom-in" onClick={() => setActiveImage(project.imageUrl)}>
          <div className="aspect-video overflow-hidden paper-sheet -rotate-1 shadow-2xl">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale-50 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-brand-red text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
          </div>
        </div>
      </div>

      {/* Brief and Concept */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-widest opacity-30 border-b border-zinc-200 dark:border-zinc-800 pb-2">Project Brief</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Role</p>
                <p className="font-blocky text-sm uppercase">{project.role || 'Communication Designer'}</p>
              </div>
              <div>
                <p className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-blocky text-sm uppercase">{project.timeline || '8 Weeks'}</p>
              </div>
              <div>
                <p className="text-[9px] font-black opacity-30 uppercase tracking-widest mb-1">Tools</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(project.tools || ['Figma', 'InDesign']).map(tool => (
                    <span key={tool} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[8px] font-black uppercase tracking-widest">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-16">
          <div className="space-y-4">
            <h3 className="text-3xl font-blocky uppercase tracking-tight">The Concept</h3>
            <p className="text-lg font-light leading-relaxed opacity-70">
              {project.concept || 'Minimalism is not just about removing elements; it\'s about the precision of what remains. We used foundational design principles to create a system that resonates with contemporary users.'}
            </p>
          </div>

          {project.gridDesc && (
            <div className="space-y-4">
              <h3 className="text-3xl font-blocky uppercase tracking-tight">The Grid</h3>
              <p className="text-lg font-light leading-relaxed opacity-70">
                {project.gridDesc}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Process Gallery */}
      <div className="space-y-12 mb-40">
        <div className="flex items-end justify-between border-b-4 border-zinc-900 dark:border-white pb-4">
          <h2 className="text-4xl md:text-6xl font-blocky tracking-tighter uppercase">Process Gallery</h2>
          <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">Visual Fragments</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(project.processGallery || []).map((img, i) => (
            <div key={i} className="space-y-4">
              <div 
                className="group relative cursor-zoom-in paper-sheet bg-white dark:bg-zinc-800 p-2 shadow-xl hover:rotate-1 transition-transform"
                onClick={() => setActiveImage(img.url)}
              >
                <div className="aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-950">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-xs font-light italic opacity-60 leading-relaxed max-w-sm">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Other Works */}
      <div className="pt-24 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] mb-4 block">Want to see more?</span>
        <h2 className="text-5xl md:text-7xl font-blocky tracking-tighter uppercase mb-16">Explore Other Works</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {otherProjects.slice(0, 3).map(p => (
            <button 
              key={p.id}
              onClick={() => onProjectSelect(p.id)}
              className="group space-y-4 text-left"
            >
              <div className="aspect-[4/3] overflow-hidden paper-sheet rotate-1">
                <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
              <h4 className="font-blocky text-lg uppercase group-hover:text-brand-red transition-colors">{p.title}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
