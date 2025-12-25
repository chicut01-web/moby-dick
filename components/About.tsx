
import React from 'react';
import { TEAM } from '../constants';
import { Target, Eye, ArrowUpRight, History } from 'lucide-react';

interface AboutProps {
  setView: (view: 'home' | 'team') => void;
}

const About: React.FC<AboutProps> = ({ setView }) => {
  const previewTeam = TEAM.slice(0, 4);

  return (
    <div className="container mx-auto px-6 py-20 relative">
      <div className="reveal grid lg:grid-cols-12 gap-16 mb-40 items-center">
        {/* Bento Cell 1: Visionaria */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <History size={20} className="text-ocean" />
            <h2 className="text-ocean font-display font-bold uppercase tracking-[0.4em] text-[11px]">Dal 2005 la nostra rotta</h2>
          </div>
          <h3 className="text-6xl md:text-8xl font-display font-black text-charcoal mb-12 leading-[0.85] uppercase tracking-tighter">
            VENT'ANNI DI <br /> <span className="text-sky italic">OPPORTUNITÀ.</span>
          </h3>
          <p className="text-2xl text-charcoal/40 leading-relaxed max-w-xl font-medium mb-12 italic">
            "Siamo un hub dinamico che rende i giovani cittadini attivi e consapevoli attraverso l'empowerment e l'innovazione."
          </p>
          
          <div className="grid grid-cols-2 gap-10">
             <div>
                <h4 className="text-charcoal font-black text-sm uppercase mb-4 tracking-widest">Età</h4>
                <p className="text-5xl font-display font-black text-ocean">15-35</p>
                <p className="text-charcoal/40 text-xs font-bold uppercase mt-2">Target Principale</p>
             </div>
             <div>
                <h4 className="text-charcoal font-black text-sm uppercase mb-4 tracking-widest">Metodo</h4>
                <p className="text-5xl font-display font-black text-sky">SMART</p>
                <p className="text-charcoal/40 text-xs font-bold uppercase mt-2">Approccio Dinamico</p>
             </div>
          </div>
        </div>

        {/* Immagine con parallasse e maschera */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group border border-azure">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" className="w-full h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000" alt="Moby Dick Team Work" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
          </div>
          {/* Floating Card Over Image */}
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl max-w-xs border border-azure hidden md:block animate-float">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-ocean rounded-xl flex items-center justify-center text-white">
                   <Target size={20} />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-charcoal">Nostra Mission</span>
             </div>
             <p className="text-sm text-charcoal/60 font-medium">
                Sviluppare pensiero critico e conoscenza, favorendo lo scambio di idee tra generazioni.
             </p>
          </div>
        </div>
      </div>

      {/* Team Section Editorial */}
      <div className="mt-60">
        <div className="reveal flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-3xl">
            <h2 className="text-ocean font-display font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Capitale Umano</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black text-charcoal tracking-tighter uppercase leading-none">ECCELLENZE AL <br /> <span className="text-sky italic">SERVIZIO.</span></h3>
          </div>
          <button 
            onClick={() => setView('team')}
            className="mt-10 md:mt-0 flex items-center gap-6 text-charcoal font-black uppercase tracking-[0.3em] text-[10px] group border-b-2 border-azure pb-4 hover:border-sky transition-all"
          >
            Vedi Tutti <ArrowUpRight className="group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform text-sky" size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewTeam.map((member, idx) => (
            <div 
              key={member.id} 
              className="reveal relative h-[550px] rounded-[3.5rem] overflow-hidden group shadow-xl border border-azure"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <img src={member.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={member.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-azure/60 text-[10px] font-black uppercase tracking-[0.4em] mb-3">{member.role}</p>
                <h4 className="text-3xl font-display font-black text-white leading-none mb-4">{member.name}</h4>
                <div className="w-0 h-[2px] bg-sky group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
