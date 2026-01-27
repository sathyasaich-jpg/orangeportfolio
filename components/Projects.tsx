
import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsProps {
  onProjectSelect?: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  return (
    <div className="py-8 space-y-10">
      <div className="flex justify-between items-end border-b-8 border-zinc-900 dark:border-white pb-4 mb-8">
        <h2 className="text-5xl md:text-8xl font-blocky tracking-tighter uppercase leading-none">WORKS<span className="text-brand-red">.</span></h2>
        <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em]">Index_2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            onClick={() => onProjectSelect?.(project.id)}
            className={`group paper-sheet bg-white dark:bg-zinc-900 p-3 shadow-xl ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} transition-transform hover:rotate-0 cursor-pointer`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-950 mb-6">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute top-0 right-0 p-2">
                 <div className="bg-brand-red text-white text-[8px] font-black px-2 py-1 uppercase tracking-widest shadow-md">
                   {project.category}
                 </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white font-blocky text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white px-4 py-2">VIEW CASE STUDY</span>
              </div>
            </div>

            <div className="px-2 pb-2">
              <h4 className="text-2xl font-blocky tracking-tight uppercase group-hover:text-brand-red transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-xs font-light opacity-60 leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-black opacity-30 group-hover:opacity-100 transition-opacity">#{tag.toUpperCase()}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
