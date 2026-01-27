
import React from 'react';

const Hobbies: React.FC = () => {
  const hobbies = [
    { title: "Reading", desc: "Theoretical texts on semiotics and Bauhaus history.", id: "01", img: "https://picsum.photos/seed/reading2/600/600?grayscale" },
    { title: "Painting", desc: "Exploring color vibration through abstract expression.", id: "02", img: "https://picsum.photos/seed/paint2/600/600?grayscale" },
    { title: "Curation", desc: "Finding hidden patterns in everyday urban environments.", id: "03", img: "https://picsum.photos/seed/city2/600/600?grayscale" }
  ];

  return (
    <div className="py-24 border-t border-zinc-100 dark:border-zinc-900">
      <div className="flex flex-col lg:flex-row gap-16 lg:items-center mb-24">
        <div className="max-w-xl space-y-6">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange">Interests</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Curiosity as a <span className="italic text-brand-blue">lifestyle.</span></h3>
          <p className="text-lg font-light opacity-60">
            A design practice is only as rich as the experiences that feed it. These are the fragments that inform my work.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="group relative">
            <div className="aspect-square bg-zinc-50 dark:bg-zinc-900 overflow-hidden relative mb-6">
              <img 
                src={hobby.img} 
                alt={hobby.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-[9px] font-bold tracking-tighter">
                VOL_{hobby.id}
              </div>
            </div>
            <div className="space-y-2 px-1">
              <h4 className="text-xl font-serif italic">{hobby.title}</h4>
              <p className="text-xs font-light opacity-50 uppercase tracking-wide leading-relaxed">
                {hobby.desc}
              </p>
            </div>
            {/* Editorial Decoration */}
            <div className={`absolute -z-10 w-full h-full border border-zinc-100 dark:border-zinc-900 top-2 ${idx % 2 === 0 ? 'left-2' : '-left-2'}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
