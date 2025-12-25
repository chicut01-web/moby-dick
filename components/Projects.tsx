
import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="reveal flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-ocean font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-6 bg-white/50 inline-block px-4 py-1 rounded-full border border-ocean/10">Portfolio</h2>
          <h3 className="text-5xl md:text-7xl font-display font-black text-charcoal leading-[0.85] uppercase tracking-tighter">
            PROGETTI IN <br /> <span className="text-sky italic">CORSO.</span>
          </h3>
        </div>
        <p className="text-charcoal/50 text-lg max-w-sm font-medium leading-relaxed border-l-2 border-azure pl-6 mb-2">
          Stimoliamo i giovani con programmazioni concrete in ambito nazionale ed internazionale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            className="reveal relative rounded-[3rem] overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-700 h-[380px] border border-azure bg-white"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            </div>
            
            {/* Category Tag */}
            <div className="absolute top-8 left-8">
              <span className="px-5 py-2 bg-white/15 backdrop-blur-xl text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-white/20">
                {project.category}
              </span>
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl md:text-4xl font-display font-black text-white mb-4 leading-none tracking-tighter uppercase">
                  {project.title}
                </h4>
                <p className="text-white/60 text-sm font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Floating Action Button */}
              <div className="absolute bottom-10 right-10">
                <button className="bg-white text-ocean w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-sky group-hover:text-white group-hover:rotate-[360deg] shadow-xl transform scale-90 group-hover:scale-100">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center reveal">
        <button className="px-12 py-5 border-2 border-azure rounded-2xl text-ocean font-black text-[10px] uppercase tracking-[0.4em] hover:bg-ocean hover:text-white transition-all duration-500">
          Vedi Archivio Completo
        </button>
      </div>
    </div>
  );
};

export default Projects;
