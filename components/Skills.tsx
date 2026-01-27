
import React from 'react';
import { SKILLS } from '../constants.tsx';

const Skills: React.FC = () => {
  return (
    <div className="py-8 relative">
      <div className="bg-brand-red text-white p-4 md:p-8 paper-sheet rotate-[-1deg] mb-8 clip-paper">
        <h2 className="text-5xl md:text-8xl font-blocky tracking-tighter uppercase leading-none">
          EDUCATION<span className="opacity-20">&</span><br />SKILLS.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {SKILLS.map((skill, index) => (
          <div 
            key={index} 
            className="group p-6 bg-white dark:bg-zinc-900 paper-sheet border-b-4 border-zinc-200 dark:border-zinc-800 hover:border-brand-red transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] font-black text-zinc-300 group-hover:text-brand-red">F_0{index + 1}</span>
              <div className="font-blocky text-xl text-brand-orange">{skill.icon}</div>
            </div>
            <h4 className="text-xl font-blocky tracking-tight uppercase mb-4">
              {skill.name}
            </h4>
            <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800">
              <div 
                className="h-full bg-brand-red transition-all duration-1000 group-hover:bg-brand-orange" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
