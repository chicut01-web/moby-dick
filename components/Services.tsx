
import React from 'react';
import { SERVICES } from '../constants';
import { Globe, Users, Lightbulb, Rocket, ChevronRight, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe: Globe,
  Users: Users,
  Lightbulb: Lightbulb,
  Rocket: Rocket
};

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="reveal flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
        <div className="max-w-3xl">
          <h2 className="text-ocean font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-8 bg-azure/50 inline-block px-4 py-1 rounded-full border border-ocean/10">Attività</h2>
          <h3 className="text-6xl md:text-8xl font-display font-black text-charcoal leading-[0.85] uppercase tracking-tighter">
            HUB DI <br /> <span className="text-ocean italic">ECCELLENZA.</span>
          </h3>
        </div>
        <p className="text-charcoal/50 text-xl max-w-md font-medium leading-relaxed border-l-4 border-ocean/10 pl-8 pb-2">
          Incentiviamo percorsi di crescita e confronto tra i giovani attraverso servizi mirati e professionali.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => {
          const IconComponent = iconMap[service.icon];
          const isLongTitle = service.title.length > 18;
          
          return (
            <div 
              key={service.id} 
              className="reveal bento-card p-8 md:p-10 rounded-[3rem] group transition-colors duration-700 hover:bg-charcoal flex flex-col items-start min-h-[480px] shadow-sm relative overflow-hidden"
              style={{ transitionDelay: `${idx * 150}ms` }} // Ritardo calibrato per fluidità "liquida"
            >
              {/* Sfondo decorativo dinamico */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-ocean/5 rounded-bl-[4rem] group-hover:bg-white/5 transition-colors duration-700"></div>

              {/* Icona */}
              <div className="w-16 h-16 bg-azure rounded-2xl flex items-center justify-center mb-10 group-hover:bg-ocean group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-ocean/5 shrink-0">
                {IconComponent && <IconComponent className="text-ocean group-hover:text-white transition-colors" size={28} />}
              </div>
              
              {/* Titolo ricalibrato per evitare overflow */}
              <h4 className={`font-display font-black text-charcoal mb-5 group-hover:text-white transition-colors uppercase tracking-tight leading-[1.1] break-all md:break-words ${isLongTitle ? 'text-xl md:text-[1.35rem]' : 'text-2xl'}`}>
                {service.title}
              </h4>
              
              {/* Descrizione */}
              <p className="text-charcoal/50 text-[15px] leading-relaxed group-hover:text-white/60 transition-colors mb-8 font-medium">
                {service.description}
              </p>

              {/* Footer della card */}
              <div className="mt-auto pt-6 flex items-center gap-3 cursor-pointer group/link w-full">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ocean group-hover:text-coral transition-colors">
                  Scopri di più
                </span>
                <div className="w-8 h-8 rounded-full border border-ocean/20 flex items-center justify-center group-hover:bg-coral group-hover:border-coral transition-all duration-500 transform group-hover:translate-x-1">
                  <ChevronRight size={14} className="text-ocean group-hover:text-white" />
                </div>
              </div>

              {/* Hover Icon Decorativa */}
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <ArrowUpRight size={80} className="text-white" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
